# A64 revision H geometry review

Run `node scripts/export-geometry-check.mjs`, then `python scripts/render-geometry-check.py` (requires moderngl, glcontext, numpy, Pillow). The offscreen EGL/llvmpipe render does not use the browser or alter browser security settings.

The pictures inspect imported component positions and original silkscreen on both faces. They are diagnostic renders, not screenshots of the application's WebGL renderer. They omit procedural fallback parts, actual board perforations, trace overlays and final lighting. The actual app keeps those features. Do not present these pictures as proof of photorealism or a complete exact replica.

Checked: dimensioned BGA alignment and counts, upper/lower source model assembly, source silkscreen on both sides, PCB thickness. Remaining: component marking fidelity, generic source model substitutions, detailed solder menisci, physical sample comparison for the exact assembled Rev H variant.
