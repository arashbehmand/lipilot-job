#!/usr/bin/env python3
"""
graph_svg.py — Dano Systems context map generator
Converts a graph JSON (nodes + edges) into a styled SVG using the Dano design language.

Usage:
    python graph_svg.py input.json output.svg
    python graph_svg.py input.json           # writes input.svg

Input JSON schema:
    {
      "title": "Die Verwandlung — Opening",          # optional
      "nodes": [
        {
          "id":    "character::gregor_samsa",         # unique id
          "label": "Gregor Samsa",                    # display label
          "kind":  "CHARACTER"                        # CHARACTER | PLACE | THEME | OBJECT | EVENT
        }
      ],
      "edges": [
        {
          "source": "character::gregor_samsa",        # node id
          "target": "theme::isolation",               # node id
          "label":  "confined by"                     # short relation label (≤ 3 words)
        }
      ]
    }

Node kinds → visual mapping:
    CHARACTER  →  copper  (#B56839)   circle
    PLACE      →  moss    (#5a8a6a)   rounded rect
    THEME      →  slate   (#6a6a9a)   circle (smaller)
    OBJECT     →  sand    (#8a7a5a)   circle
    EVENT      →  ember   (#8a4a3a)   circle

Design contract:
    - Background: #FAF8F4 (slightly off-white, lighter than page paper)
    - No scores, confidence values, pagerank, or internal metrics exposed
    - Node labels: Cormorant Garamond 500 (falls back to Georgia serif)
    - Edge labels: system-ui 9px, muted
    - Arrowheads: soft, 30% opacity
    - Viewbox is square-ish, nodes distributed on an ellipse with the
      highest-degree node placed at center
"""

import json
import math
import sys
import re
from pathlib import Path
from collections import Counter
from typing import Any


# ── Design tokens ──────────────────────────────────────────────────────────────

KIND_STYLE: dict[str, dict[str, Any]] = {
    "CHARACTER": {"fill": "rgba(181,104,57,0.13)", "stroke": "#B56839",      "r": 36, "shape": "circle"},
    "PLACE":     {"fill": "rgba(90,138,106,0.10)", "stroke": "#5a8a6a",      "r": 0,  "shape": "rect",   "rx": 4},
    "THEME":     {"fill": "rgba(106,106,154,0.10)","stroke": "#6a6a9a",      "r": 22, "shape": "circle"},
    "OBJECT":    {"fill": "rgba(138,122,90,0.10)", "stroke": "#8a7a5a",      "r": 20, "shape": "circle"},
    "EVENT":     {"fill": "rgba(138,74,58,0.10)",  "stroke": "#8a4a3a",      "r": 20, "shape": "circle"},
}
DEFAULT_KIND_STYLE = {"fill": "rgba(24,24,26,0.06)", "stroke": "rgba(24,24,26,0.3)", "r": 22, "shape": "circle"}

BG            = "#FAF8F4"
EDGE_STROKE   = "rgba(24,24,26,0.14)"
EDGE_LABEL_C  = "rgba(24,24,26,0.30)"
FONT_DISPLAY  = "'Cormorant Garamond', Georgia, serif"
FONT_SANS     = "system-ui, -apple-system, sans-serif"
CAPTION_COLOR = "rgba(24,24,26,0.35)"

CANVAS_W = 560
CANVAS_H = 400
PAD      = 60


# ── Layout ─────────────────────────────────────────────────────────────────────

def _ellipse_positions(n: int, cx: float, cy: float, rx: float, ry: float) -> list[tuple[float, float]]:
    """Distribute n points evenly on an ellipse, starting from the top."""
    positions = []
    for i in range(n):
        angle = math.pi * 1.5 + (2 * math.pi * i / n)   # start from top
        x = cx + rx * math.cos(angle)
        y = cy + ry * math.sin(angle)
        positions.append((x, y))
    return positions


def compute_layout(
    nodes: list[dict],
    edges: list[dict],
    canvas_w: int = CANVAS_W,
    canvas_h: int = CANVAS_H,
    pad: int = PAD,
) -> dict[str, tuple[float, float]]:
    """
    Assign (x, y) to each node.
    The highest-degree node (or first CHARACTER) goes to center.
    Remaining nodes distribute on an ellipse.
    """
    cx = canvas_w / 2
    cy = canvas_h / 2

    # Build degree map
    degree: Counter = Counter()
    id_set = {n["id"] for n in nodes}
    for e in edges:
        if e["source"] in id_set:
            degree[e["source"]] += 1
        if e["target"] in id_set:
            degree[e["target"]] += 1

    # Choose center node: highest degree CHARACTER, then highest degree overall
    def center_priority(node: dict) -> tuple[int, int]:
        is_char = 1 if node.get("kind", "").upper() == "CHARACTER" else 0
        return (is_char, degree[node["id"]])

    sorted_nodes = sorted(nodes, key=center_priority, reverse=True)
    center_node  = sorted_nodes[0]
    outer_nodes  = sorted_nodes[1:]

    positions: dict[str, tuple[float, float]] = {center_node["id"]: (cx, cy)}

    if not outer_nodes:
        return positions

    rx = (canvas_w / 2) - pad
    ry = (canvas_h / 2) - pad
    pts = _ellipse_positions(len(outer_nodes), cx, cy, rx, ry)
    for node, (x, y) in zip(outer_nodes, pts):
        positions[node["id"]] = (x, y)

    return positions


# ── SVG helpers ────────────────────────────────────────────────────────────────

def _esc(s: str) -> str:
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def _arrow_marker(marker_id: str) -> str:
    return (
        f'<marker id="{marker_id}" viewBox="0 0 8 8" refX="7" refY="4" '
        f'markerWidth="5" markerHeight="5" orient="auto">'
        f'<path d="M0,1 L0,7 L7,4 z" fill="{EDGE_STROKE}" opacity="0.7"/>'
        f'</marker>'
    )


def _node_radius(node: dict) -> float:
    style = KIND_STYLE.get(node.get("kind", "").upper(), DEFAULT_KIND_STYLE)
    return float(style["r"] or 22)


def _draw_edge(
    sx: float, sy: float, tx: float, ty: float,
    label: str,
    src_r: float, tgt_r: float,
    marker_id: str,
) -> str:
    dx, dy = tx - sx, ty - sy
    dist   = math.hypot(dx, dy) or 1
    ux, uy = dx / dist, dy / dist

    # Start/end offset by node radius
    x1 = sx + ux * (src_r + 3)
    y1 = sy + uy * (src_r + 3)
    x2 = tx - ux * (tgt_r + 6)
    y2 = ty - uy * (tgt_r + 6)

    # Gentle arc
    dr = dist * 1.5
    path = f"M{x1:.1f},{y1:.1f} A{dr:.1f},{dr:.1f} 0 0,1 {x2:.1f},{y2:.1f}"

    # Edge label at midpoint, slightly above the arc
    mx = (x1 + x2) / 2
    my = (y1 + y2) / 2 - 7
    angle = math.degrees(math.atan2(dy, dx))
    if angle > 90 or angle < -90:
        angle += 180

    lines = [
        f'<path d="{path}" fill="none" stroke="{EDGE_STROKE}" stroke-width="1.2" '
        f'stroke-linecap="round" marker-end="url(#{marker_id})" />'
    ]
    if label:
        lines.append(
            f'<text x="{mx:.1f}" y="{my:.1f}" text-anchor="middle" '
            f'font-size="8.5" font-family="{FONT_SANS}" fill="{EDGE_LABEL_C}" '
            f'transform="rotate({angle:.1f},{mx:.1f},{my:.1f})">{_esc(label)}</text>'
        )
    return "\n".join(lines)


def _draw_node(node: dict, x: float, y: float, is_center: bool = False) -> str:
    kind  = node.get("kind", "").upper()
    style = KIND_STYLE.get(kind, DEFAULT_KIND_STYLE)
    label = node.get("label", node["id"])
    shape = style.get("shape", "circle")
    r     = float(style["r"] or 22)

    stroke_w = 1.8 if is_center else 1.0
    font_sz  = 12 if is_center else 10

    parts = []

    if shape == "rect":
        # Estimate text width → rect width
        w = max(70, len(label) * 6 + 20)
        h = 32
        parts.append(
            f'<rect x="{x - w/2:.1f}" y="{y - h/2:.1f}" width="{w}" height="{h}" '
            f'rx="{style.get("rx", 4)}" '
            f'fill="{style["fill"]}" stroke="{style["stroke"]}" stroke-width="{stroke_w}" />'
        )
        parts.append(
            f'<text x="{x:.1f}" y="{y + 4:.1f}" text-anchor="middle" '
            f'font-size="{font_sz}" font-family="{FONT_DISPLAY}" font-weight="500" '
            f'fill="{style["stroke"]}">{_esc(label)}</text>'
        )
    else:
        parts.append(
            f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" '
            f'fill="{style["fill"]}" stroke="{style["stroke"]}" stroke-width="{stroke_w}" />'
        )
        # Split label across two lines if needed
        words = label.split()
        if len(words) > 2 and r >= 28:
            mid   = math.ceil(len(words) / 2)
            line1 = " ".join(words[:mid])
            line2 = " ".join(words[mid:])
            parts.append(
                f'<text x="{x:.1f}" y="{y - 4:.1f}" text-anchor="middle" '
                f'font-size="{font_sz}" font-family="{FONT_DISPLAY}" font-weight="500" '
                f'fill="{style["stroke"]}">{_esc(line1)}</text>'
            )
            parts.append(
                f'<text x="{x:.1f}" y="{y + 10:.1f}" text-anchor="middle" '
                f'font-size="{font_sz}" font-family="{FONT_DISPLAY}" font-weight="500" '
                f'fill="{style["stroke"]}">{_esc(line2)}</text>'
            )
        else:
            parts.append(
                f'<text x="{x:.1f}" y="{y + 4:.1f}" text-anchor="middle" '
                f'font-size="{font_sz}" font-family="{FONT_DISPLAY}" font-weight="500" '
                f'fill="{style["stroke"]}">{_esc(label)}</text>'
            )
        # Kind label below node
        if r >= 22:
            parts.append(
                f'<text x="{x:.1f}" y="{y + r + 12:.1f}" text-anchor="middle" '
                f'font-size="7.5" font-family="{FONT_SANS}" letter-spacing="0.08em" '
                f'fill="{CAPTION_COLOR}" text-transform="uppercase">'
                f'{_esc(kind.lower())}</text>'
            )

    return "\n".join(parts)


# ── Legend ─────────────────────────────────────────────────────────────────────

def _legend(used_kinds: list[str], x: float, y: float) -> str:
    items = []
    cx_dot = x + 5
    for i, kind in enumerate(used_kinds):
        style = KIND_STYLE.get(kind, DEFAULT_KIND_STYLE)
        cy    = y + i * 16
        items.append(
            f'<circle cx="{cx_dot}" cy="{cy}" r="4" '
            f'fill="{style["fill"]}" stroke="{style["stroke"]}" stroke-width="1" />'
        )
        items.append(
            f'<text x="{cx_dot + 10}" y="{cy + 4}" font-size="8.5" '
            f'font-family="{FONT_SANS}" fill="{CAPTION_COLOR}">'
            f'{_esc(kind.title())}</text>'
        )
    return "\n".join(items)


# ── Main builder ───────────────────────────────────────────────────────────────

def build_svg(data: dict, canvas_w: int = CANVAS_W, canvas_h: int = CANVAS_H) -> str:
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])
    title = data.get("title", "")

    if not nodes:
        raise ValueError("Graph has no nodes.")

    # Normalise kinds to uppercase
    for n in nodes:
        n["kind"] = n.get("kind", "THEME").upper()

    positions = compute_layout(nodes, edges, canvas_w, canvas_h)
    node_map  = {n["id"]: n for n in nodes}
    marker_id = "dano-arr"

    # Determine center node for styling
    cx_node = max(nodes, key=lambda n: sum(
        1 for e in edges if e["source"] == n["id"] or e["target"] == n["id"]
    ))

    used_kinds = list(dict.fromkeys(n["kind"] for n in nodes))

    svg_parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="0 0 {canvas_w} {canvas_h}" '
        f'width="{canvas_w}" height="{canvas_h}">',
        "<defs>",
        _arrow_marker(marker_id),
        "</defs>",

        # Background
        f'<rect width="{canvas_w}" height="{canvas_h}" fill="{BG}" />',
    ]

    # Title
    if title:
        svg_parts.append(
            f'<text x="16" y="20" font-size="9" font-family="{FONT_SANS}" '
            f'fill="{CAPTION_COLOR}" letter-spacing="0.12em">'
            f'{_esc(title.upper())}</text>'
        )

    # Edges (draw first, under nodes)
    valid_ids = set(positions.keys())
    for edge in edges:
        src_id = edge.get("source")
        tgt_id = edge.get("target")
        if src_id not in valid_ids or tgt_id not in valid_ids:
            continue
        sx, sy = positions[src_id]
        tx, ty = positions[tgt_id]
        src_r  = _node_radius(node_map[src_id]) if src_id in node_map else 22
        tgt_r  = _node_radius(node_map[tgt_id]) if tgt_id in node_map else 22
        svg_parts.append(_draw_edge(sx, sy, tx, ty, edge.get("label", ""), src_r, tgt_r, marker_id))

    # Nodes
    for node in nodes:
        if node["id"] not in positions:
            continue
        x, y = positions[node["id"]]
        is_center = node["id"] == cx_node["id"]
        svg_parts.append(_draw_node(node, x, y, is_center=is_center))

    # Legend (bottom-left)
    leg_y = canvas_h - (len(used_kinds) * 16) - 14
    svg_parts.append(_legend(used_kinds, 14, leg_y))

    # Redacted note
    svg_parts.append(
        f'<text x="{canvas_w - 10}" y="{canvas_h - 8}" text-anchor="end" '
        f'font-size="7.5" font-family="{FONT_SANS}" fill="{CAPTION_COLOR}" '
        f'letter-spacing="0.10em">ILLUSTRATIVE · INTERNAL SCORES NOT SHOWN</text>'
    )

    svg_parts.append("</svg>")
    return "\n".join(svg_parts)


# ── CLI ────────────────────────────────────────────────────────────────────────

def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    in_path  = Path(sys.argv[1])
    out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else in_path.with_suffix(".svg")

    with in_path.open(encoding="utf-8") as f:
        data = json.load(f)

    svg = build_svg(data)

    with out_path.open("w", encoding="utf-8") as f:
        f.write(svg)

    print(f"✓  Written to {out_path}  ({out_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
