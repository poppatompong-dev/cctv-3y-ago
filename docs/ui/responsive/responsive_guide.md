# CCTV Repair Dashboard Responsive UI/UX Guidelines

This document details the responsive design architecture and implementation guidelines for the **CCTV Repair Budget Dashboard** (เทศบาลนครนครสวรรค์), as defined under the `/ux-ui-responsive` skill.

---

## 1. Breakpoints and Layout Grid
We use three main responsive tiers to handle diverse device form-factors:

| Viewport Width | Target Devices | Layout Mode |
| :--- | :--- | :--- |
| **`> 1200px`** | Desktop / Large Monitors | 3-Column Grid (`240px 1fr 340px`) & 2-Column Bottom Grid (`1fr 340px`) |
| **`768px` to `1200px`** | Tablets (Portrait/Landscape) | Multi-row CSS Grid (Flows to 2-column or stacked view) |
| **`< 768px`** | Mobile Phones (iOS, Android) | 1-Column Stacked Flexbox Layout (Optimized for single-hand scrolling) |

---

## 2. Global Filters & Collapsible Panel
On screens below **`768px`**, displaying four search selectors and a reset button vertically takes up too much initial screen estate, pushing charts and data off the screen.

### Desktop View
- Filters are displayed inline inside a horizontal flex bar: `Year Range` | `Job Type` | `Status` | `Scenario` | `Reset Button`.

### Mobile View (Optimized)
- A **Collapsible Filter Toggle Button** is displayed at the top right of the section.
- Tapping the button expands/collapses a sleek, glassmorphic dropdown drawer containing all the selectors.
- KPI cards stack into a clean grid of 2x2 cards, and average cards flow into a 1-column layout to preserve hierarchy.

---

## 3. Yearly Trend Chart Responsiveness
Dual-axis charts (combining bars and lines) become illegible and crowded when compressed below **`500px`**.

### Mobile Implementation
- The ApexChart wrapper is placed inside a **horizontally scrollable viewport** (`overflow-x: auto`) with a locked minimum width of **`500px`**.
- An indicator fade effect (gradient overlay) is applied to guide the user to scroll horizontally if viewed on tight portrait screens.
- This preserves the exact spacing of bars, markers, tooltips, and year tick marks, ensuring readability is 100% matched to the original desktop layout.

---

## 4. Bottom Projects Table: Row-to-Card Transformation
Tables with 8 columns cannot be read comfortably on a portrait phone viewport without excessive scrolling.

### Desktop View
- A standard tabular grid displaying 8 parameters: Year, ID, Project Name, Job Type, Cameras, Poles, Budget, Procurement.

### Mobile View (Card Transformation)
- The tabular header and body are hidden (`display: none`).
- A responsive card list is rendered in its place.
- Each project is displayed as an elegant list item with:
  - Project name as primary header (bold, deep navy).
  - Year, Job Type, and Budget as a primary sub-bar.
  - An expand arrow/tap gesture that immediately triggers the beautiful, high-fidelity overlay modal.
- This creates an organic, native app feel.

---

## 5. 3-Stage Guidelines Tabbed Accordion
The original three vertical cards (Short, Mid, Long term) stack into a very long vertical list on mobile, requiring long scrolling.

### Mobile View (Tabbed UI)
- The guidelines are converted into an **Interactive Tabbed Navigation**:
  - `ระยะสั้น` | `ระยะกลาง` | `ระยะยาว`
- Only one stage's guidelines are displayed at a time, switching instantly upon tapping the tab.
- Micro-animations (slide-in, fade-in) are used to make the transition between stages feel smooth and premium.
