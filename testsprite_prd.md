# Product Requirement Document (PRD) - CCTV Repair Budget Dashboard

This Product Requirement Document (PRD) is structured to define the product requirements, interactive state machines, dynamic calculation specifications, and visual design standards for the **CCTV Repair Budget Dashboard** of **Nakhon Sawan City Municipality** (เทศบาลนครนครสวรรค์). This document serves as the exact testing specification for **TestSprite** and automated testing agents to perform end-to-end (E2E), integration, and visual regression tests.

---

## 1. Problem Statement

The strategy and budget planning officers (นักวิชาการคอมพิวเตอร์ และเจ้าหน้าที่กองยุทธศาสตร์และงบประมาณ) at Nakhon Sawan City Municipality face difficulties in visualizing, analyzing, and simulating the CCTV repair budget across the 3-year cycle (2567-2569). Specifically:
- **Lack of Scenario Simulation**: Planning budget reductions (e.g., 20%, 35%, 50%) is currently manual and slow, making it difficult to understand the direct impact on cameras, poles, and cost efficiency.
- **Complex Cost Drivers**: Network cabling and power supply works make up over 60% of the budget. There is no isolated, granular analysis tool for this main "Cost Driver".
- **Cluttered Visuals & Overlapping Data**: Historical charts overlapped budget bars in mixed charts, and long technical descriptions cluttered layout tables.
- **Branding and Mock Data Compliance**: The system lacked official municipality seal branding and contained placeholders/hypothetical technician names instead of official position titles.

---

## 2. Solution

A premium, client-side interactive dashboard built on a lightweight, high-performance web stack (HTML5, Vanilla CSS3, Vanilla JavaScript, Lucide Icons, and ApexCharts). The application provides:
1. **Interactive Scenario Engine**: Allows real-time budget reduction simulations (10%, 20%, 30%, 35%, 50%) that dynamically calculate and update all KPIs, tables, and ApexCharts instantly.
2. **Dual-Tab Dashboard Navigation**: 
   - **Overall View (ภาพรวมงบซ่อมทั้งหมด)**: Visualizes global repair KPIs, side-by-side grouped yearly budgets vs. simulated budgets, category distribution lists, and the master project repair table.
   - **Cabling & Power Analysis View (วิเคราะห์สายสัญญาณ & ระบบไฟฟ้า)**: Visualizes cabling-specific KPIs, real-time cabling simulation buttons, multi-chart analysis (yearly bar comparison, category donut share, cumulative savings line chart, scatter cost plot, risk heatmaps, pareto contribution analysis), and a localized dynamic cabling repair logs list.
3. **Grouped Year-on-Year Charting**: Solves ApexCharts column overlapping by setting the primary chart type to `bar` with `stacked: false` to render baseline and simulated budgets side-by-side, and overlaying the camera count line chart.
4. **Rich Hover Tooltips**: Embeds a premium, high-performance CSS-only tooltip system using HTML `data-tooltip` attributes that truncates longTechnical descriptions with ellipses while displaying full strings on hover.
5. **Clean Official Identity**: Integrates the official Nakhon Sawan City Municipality seal logo (`nakhonsawan-logo.png`), position-only technician credits (e.g., `"ตำแหน่ง: นายช่างไฟฟ้า"`), and a global footer crediting the Strategist team.

---

## 3. User Stories

### Strategy & Budget Planner (เจ้าหน้าที่กองยุทธศาสตร์และงบประมาณ)
1. **As a** budget planner, **I want to** select different years (2567, 2568, 2569, or all 3 years) from a dropdown, **so that** I can analyze repair scopes for specific financial cycles.
2. **As a** budget planner, **I want to** filter the dashboard by job category (e.g., `"ซ่อมระบบกล้อง"`, `"งานสายสัญญาณ/โครงข่าย"`, etc.), **so that** I can identify which specific categories require the most funding.
3. **As a** budget planner, **I want to** change the budget reduction scenarios (e.g. 20%, 35%, 50%) using a global dropdown or interactive table row click, **so that** I can instantly view the simulated budget, total savings, and average year-on-year costs.
4. **As a** budget planner, **I want to** see a dynamic insight text card below the trend chart, **so that** I can get an automated, written summary of budget savings and camera repairs for my official report.
5. **As a** budget planner, **I want to** click on a category column or list item, **so that** I can filter all elements by that specific category without scrolling back to the filter bar.
6. **As a** budget planner, **I want to** reset all filters to their baseline defaults in a single click, **so that** I can start my analysis fresh.

### Technical Inspector / Network Administrator (นักวิชาการคอมพิวเตอร์)
7. **As a** technical inspector, **I want to** switch to the "Cabling & Power Analysis" tab, **so that** I can review the most expensive and risky parts of the CCTV infrastructure.
8. **As a** technical inspector, **I want to** run independent simulations for network cabling works (0%, 10%, 20%, 30%), **so that** I can analyze how reducing cabling budgets affects the infrastructure risk score.
9. **As a** technical inspector, **I want to** see a real-time risk gauge score, **so that** I can determine if a proposed budget cut is safe or places the CCTV network in high risk (e.g., score > 80 indicating critical risk).
10. **As a** technical inspector, **I want to** see a Cumulative Savings trend line chart in the Cabling view, **so that** I can track how savings accumulate across 2567, 2568, and 2569.
11. **As a** technical inspector, **I want to** see a Pareto analysis chart, **so that** I can identify the 20% of projects that consume 80% of the cabling budget.
12. **As a** technical inspector, **I want to** see a Heatmap of repeated network problems, **so that** I can locate junctions (like Dechatiwong Intersection or Sawan Park) that experience frequent lightning strikes or fiber cuts.
13. **As a** technical inspector, **I want to** hover over truncated technical cells in the cabling log table, **so that** I can read the complete root causes, risks, and proposed solutions without layout breakages.

### Chief Administrative Officer (ผู้บริหารเทศบาลนครนครสวรรค์)
14. **As a** chief executive, **I want to** see a prominent, high-fidelity header featuring the official gold-on-purple Nakhon Sawan Municipality Seal, **so that** the dashboard matches official municipal branding.
15. **As a** chief executive, **I want to** see only official technician position titles instead of arbitrary mock names, **so that** all logs look professional and strictly document roles.
16. **As a** chief executive, **I want to** see an official footer crediting the Strategist team at Nakhon Sawan Municipality, **so that** organizational accountability is clear.
17. **As a** chief executive, **I want to** access this dashboard on my mobile tablet or phone, **so that** I can easily inspect data during field meetings using a responsive layout.

---

## 4. Implementation Decisions

### 4.1. Core Tech Stack
- **Architecture**: Single Page Application (SPA), server-less client-side state engine.
- **Frameworks/Libraries**:
  - `Vanilla HTML5` for structure and accessibility.
  - `Vanilla CSS3` for responsive design system, animations, grid systems, and tooltips.
  - `Vanilla JavaScript` (ES6) for state management and calculations.
  - `ApexCharts CDN (v3.35.0+)` for interactive SVGs/Canvas visualization rendering.
  - `Lucide Icons CDN` for modern vector indicators.

### 4.2. State Management & Dynamic Formulas
The application maintains a global `state` object inside `app.js` holding active filter states and chart instances:
```javascript
const state = {
    filters: {
        year: "2567-2569",
        jobtype: "ทั้งหมด",
        status: "ทั้งหมด",
        scenario: "ฐานข้อมูล", // "ฐานข้อมูล" (100%), "ลด 20%" (80%), "ลด 35%" (65%), "ลด 50%" (50%)
        cablingScenario: 0      // 0 (0%), 10 (10%), 20 (20%), 30 (30%)
    },
    charts: {
        trend: null,
        cabling: null // holds 6 cabling sub-charts
    }
};
```

#### Dynamic Calculations Specification:
1. **Global Budget Multiplier**:
   $$\text{Multiplier} = \begin{cases} 
   1.0 & \text{if scenario} = \text{"ฐานข้อมูล"} \\
   0.8 & \text{if scenario} = \text{"ลด 20%"} \\
   0.65 & \text{if scenario} = \text{"ลด 35%"} \\
   0.5 & \text{if scenario} = \text{"ลด 50%"} 
   \end{cases}$$
2. **KPI Budget Value**:
   $$\text{Simulated Budget} = \sum (\text{item.budget}) \times \text{Multiplier}$$
3. **Cabling Multiplier**:
   $$\text{Cabling Multiplier} = \frac{100 - \text{state.filters.cablingScenario}}{100}$$
4. **Cabling Risk Gauge Score**:
   - Calculated dynamically based on cabling budget reduction.
   - Base risk score: 45.
   - Dynamic added risk:
     $$\text{Added Risk} = \text{cablingScenario} \times 1.25$$
   - Dynamic multiplier risk based on cameras:
     $$\text{Total Risk Score} = \text{Base Risk} + \text{Added Risk}$$
   - Displays color-coding: green ($\leq 50$), orange ($51 \text{ to } 75$), red ($> 75$).

### 4.3. Visual Design System (Tokens)
- **Primary Color**: Deep corporate navy `#0c4a7e` (representing Nakhon Sawan Municipality header).
- **Accent Green**: Vibrant success emerald `#10b981` (for simulated saving indicators).
- **Warning Orange**: Alert orange `#f97316` (for cameras and cost driver cards).
- **Neutral Grey**: Slate boundary border `#cbd5e1` (used as baseline/original chart background).
- **Typography**: Primary Google Font `Sarabun`, fallback to `Outfit`, `sans-serif`.

### 4.4. Hover Tooltip Specifications
Implemented entirely in Vanilla CSS utilizing pseudo-elements `::before` and `::after` on elements possessing `[data-tooltip]` attributes:
- **Visuals**: Background `#072854` (high contrast navy), color `#ffffff`, border-radius `6px`, padding `8px 12px`, box-shadow `0 4px 12px rgba(0, 0, 0, 0.15)`.
- **Transitions**: Scale and opacity transition (`transform: scale(0.95)`, `opacity: 0` to `scale(1.0)`, `opacity: 1`) on hover.
- **Positioning**: Center-bottom or center-top anchored with a tiny triangle arrow pointing to the source text.

---

## 5. Testing Decisions (for TestSprite)

To ensure high-fidelity verification and eliminate manual regressions, **TestSprite** must cover the following testing quadrants using standard DOM assertions, user-event interactions, and responsive emulation.

### 5.1. E2E Interaction Test Scenarios

#### Scenario 1: Tab Navigation Transition
- **Action**: Click `#tab-btn-cabling` button.
- **Assertions**:
  - `#overall-dashboard-view` must have CSS `display: none`.
  - `#cabling-dashboard-view` must be visible (CSS `display: block` or similar).
  - `#tab-btn-cabling` must possess the class `active`.
  - Cabling-specific ApexCharts containers (e.g. `#cab-chart-yearly-bar`, `#cab-chart-donut-share`) must be initialized and rendered inside the DOM.

#### Scenario 2: Year and Job Type Dropdown Filtering
- **Action**: Change `#filter-year` value to `"2568"`.
- **Assertions**:
  - The text content of `#kpi-section-title` must update to `"ภาพรวม ปี 2568"`.
  - The text content of `#avg-section-title` must update to `"ค่าเฉลี่ยตัวเลข ปี 2568"`.
  - The dynamic text content of `#avg-budget` must reflect exactly the year 2568 budget divisor.
  - `#kpi-projects` should change from `9` to `3` (matching the underlying dataset for 2568).

#### Scenario 3: Global Budget Reduction Simulator (Dropdown & Click Sync)
- **Action**: Select `"ลด 20%"` from the `#filter-scenario` dropdown.
- **Assertions**:
  - The global multiplier should apply: `#kpi-budget` value must update from `5.672` to `4.538` (20% reduction of 5.672 million baht).
  - `#kpi-budget-card` must apply an active green border (`1.5px solid var(--accent-green)`).
  - `#budget-kpi-label` must contain the string `(-20%)`.
  - The corresponding row in the Scenario Table `#row-scenario-20` must acquire the class `selected-scenario` (highlighted row).
- **Action 2**: Click on Scenario Table row `#row-scenario-35`.
- **Assertions 2**:
  - The `#filter-scenario` dropdown value must sync and select `"ลด 35%"`.
  - `#kpi-budget` must update to `3.687` (35% reduction).

#### Scenario 4: Dynamic Cabling Simulation & Warning Badge Highlight
- **Action**: Navigate to Cabling view, then click `#cab-sim-20` (reduce cabling budget by 20%).
- **Assertions**:
  - The cabling multiplier must update. `#cab-kpi-budget` must change to `2.782` million baht.
  - The savings value in `#cab-sim-savings` must change to `+ 695,400 บาท`.
  - The dynamic risk gauge score `#cab-risk-score` must increase from `45` to `70` (orange risk alert range).
  - The cabling KPI budget card `#cab-kpi-budget-card` must gain the CSS class `.cabling-card-savings` indicating active savings.
  - The badge `#cab-warning-badge` must update its text content to `"ลดงบประหยัดสำเร็จ"` and display a green success gradient.
- **Action 2**: Click `#cab-sim-0` (reset reduction to 0%).
- **Assertions 2**:
  - The risk gauge score `#cab-risk-score` must revert back to its baseline default of `45`.
  - `#cab-warning-badge` must revert back to `"Cost Driver หลัก"` with a pulsing red warning theme.

#### Scenario 5: Grouped Chart Rendering & No Overlap Assertions
- **Action**: Check `#trend-chart` configuration.
- **Assertions**:
  - The ApexChart options must have `chart.type` set to `"bar"`.
  - The `options.stacked` property must be `false` (to guarantee side-by-side grouped bars).
  - The `series` array must contain exactly 3 objects:
    1. Series 0: `name: "งบประมาณดั้งเดิม (ล้านบาท)"`, `type: "column"`
    2. Series 1: `name: "งบประมาณจำลอง (ล้านบาท)"`, `type: "column"`
    3. Series 2: `name: "จำนวนกล้อง (ตัว)"`, `type: "line"`
  - The color scheme array must be `['#cbd5e1', '#0ea5e9', '#f97316']`.

#### Scenario 6: CSS Hover Tooltip Presence
- **Action**: Hover over a table element containing `[data-tooltip]` (e.g., project name cell inside the main repairs table).
- **Assertions**:
  - The browser must render the pseudo-elements `::before` or `::after`.
  - The tooltip container content must match the exact string injected into the element's `data-tooltip` attribute.
  - The CSS properties of `[data-tooltip]:hover::before` must evaluate to `opacity: 1` and `transform: scale(1)` (or similar hover visibility styles).

---

## 6. Out of Scope

The following items are explicitly out of scope for this version and should not be tested:
- **Server Persistence**: The application does not contain databases or back-end storage. All state is reset on page refresh.
- **Live APIs**: Integration with real-time IoT CCTV status APIs or municipality ticket systems.
- **Authentication**: Login screens, role-based access control (RBAC), and user profile forms.

---

## 7. Further Notes

### Performance Targets
- **Initial Load Time**: Under 1.2 seconds on standard broadband connections (due to CDN dependencies).
- **Filter Transition Latency**: Under 50ms. DOM manipulations must occur synchronously inside the callback cycle without lagging the user thread.
- **Responsiveness**: Support viewport widths down to `360px` (standard mobile portrait) up to `1920px` (desktop HD).

### SEO & Standards Compliance
- Strictly exactly one `<h1>` tag in header (`"แดชบอร์ดงบซ่อม CCTV"`).
- All image elements possess comprehensive `alt` tags (e.g. `alt="เทศบาลนครนครสวรรค์"`).
- Structural markup strictly relies on HTML5 semantic tags (`<header>`, `<section>`, `<main>`, `<aside>`, `<footer>`).
