# Design

## Visual Theme
The dashboard employs a premium municipal theme characterized by authoritative deep navy and vibrant semantic colors (Accent Blue, Accent Green, Amber Orange, and Warning Red). The background is a clean slate gray (`#f1f5f9`) that makes panels and interactive components stand out.

## Color Palette
The colors are managed via CSS variables in `styles.css`:
- **Primary Deep Navy**: `var(--primary)` (`#072854`) — Used for branding, headers, primary buttons, and main headers.
- **Accent Blue (Cabling/Network)**: `var(--accent-blue)` (`#0ea5e9`) — Highlights transmission lines, network, and electrical grid items.
- **Accent Orange (CCTV System)**: `var(--accent-orange)` (`#f97316`) — Represents cameras and camera systems.
- **Accent Green (Savings/PM)**: `var(--accent-green)` (`#10b981`) — Highlights budget-saving scenarios and completed statuses.
- **Warning Red (High Risk/Urgency)**: `var(--accent-red)` (`#ef4444`) — Marks high-risk scores and critical urgency levels.
- **Background Slate**: `var(--background)` (`#f1f5f9`) — Page body background.
- **Card Background**: `var(--card-bg)` (`#ffffff`) — Surface for dashboard cards.

## Typography
- **Primary Typeface**: `Sarabun` (sans-serif) — Utilized for all Thai copy, labels, and structured text to ensure professional municipal legibility.
- **Numerical Typeface**: `Outfit` (sans-serif) — Utilized for statistics, percentages, budgets, and numerical identifiers for clean scanning.
- **Line Heights**: `1.5` for general copy, `1.35` for heading structures, and `1.1` for statistical numbers.

## Component Layout & Spacing
- **Main Layout Grid**: A 3-column system on desktop (`240px 1fr 340px`) and 1-column on mobile.
- **Border Radii**: Small (`6px`), Medium (`10px`), and Large (`16px`).
- **Shadows**: Simple elevation shadows to highlight interactive states:
  - `--shadow-sm`: `0 1px 3px rgba(0, 0, 0, 0.05)`
  - `--shadow-md`: `0 4px 6px rgba(0, 0, 0, 0.05)`
  - `--shadow-premium`: `0 10px 30px rgba(7, 40, 84, 0.08)`
- **Transitions**: Smooth transitions (`0.25s cubic-bezier(0.4, 0, 0.2, 1)`) for UI reactivity, hover zooms, and modal overlays.

## Responsive UI Patterns
1. **Interactive Modal**: Overlay detail drawer using `opacity` and `transform` transitions with scrolling disabled on the body.
2. **Tabbed Switchers**: Converts long vertical lists into horizontal buttons displaying single-view components on mobile phones (`< 768px`).
3. **Card Grids**: Changes wide 8-column tables into concise item lists that stack cleanly on compact screens.
