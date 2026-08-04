# Tradescape — Trader Risk Dashboard

A responsive **Trader Risk Dashboard** built with **React**, **Vite**, **Tailwind CSS**, and **Recharts**. Designed for prop trading evaluations, this dashboard gives traders real-time feedback on their account rules, remaining drawdowns, and trading metrics to prevent account breaches.

---

## 🚀 Live Demo & Repository

* **Live URL:** *[Insert your live deployment URL here]*
* **GitHub Repository:** [https://github.com/mayank156g-create/Tradescape-Dashboard.git](https://github.com/mayank156g-create/Tradescape-Dashboard.git)

---

## 📊 Key Features

### 1. Account & Risk Rule Monitoring
* **Account Core Metrics:** Starting Balance ($100,000), Current Balance ($103,250), Max Drawdown Limit ($10,000), and Daily Loss Limit ($5,000).
* **Live Risk Gauges:** Visual progress bars displaying current usage vs. remaining limits for both Drawdown and Daily Loss.
* **Dynamic Status Badges:** Automatically updates account status indicators:
  * 🟢 **Safe** (Remaining limits > 50%)
  * 🟡 **Approaching Limit** (Remaining limits between 20% – 50%)
  * 🔴 **At Risk** (Remaining limits < 20%)

### 2. Derived Trading Performance Metrics
All metrics are derived dynamically from raw trade data:
* Total Profit & Loss (P&L)
* Win Rate (%) & Total Trade Counts (Winning vs. Losing Trades)
* Largest Winning & Largest Losing Trade
* Average Winning & Average Losing Trade

### 3. Visual Analytics
* **Equity Curve Chart:** Built with `Recharts` to visually map account balance progression across consecutive trades (T1 through T5).

---

## 💡 Standout Product Decision: Risk Cushion Forecaster & Trade Simulator

### What was added?
I added a **Risk Cushion Forecaster & Interactive Trade Simulator** (`RiskSimulator.jsx`).

### Why this feature?
Traders in prop firm evaluations rarely fail because of a single planned trade; they fail due to emotional trading ("tilting") and micro-losses accumulating faster than realized. Standard dashboards show *past performance*, but traders need *forward-looking guidance*.

1. **Buffer Forecaster:** Calculates the trader's average loss ($-375$) against their remaining daily loss limit ($4,250 remaining) and proactively warns them: 
   > *"You can sustain ~11 more consecutive average losing trades today before breaching account rules."*
2. **Interactive "What-If" Simulator:** Allows traders to input a prospective trade loss amount (e.g., $1,000) *before* execution to instantly preview how it affects their remaining limit and risk status badge.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS / Modern Dark Theme CSS
* **Data Visualization:** Recharts
* **Language:** JavaScript (ES6+)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── SummaryCard.jsx
│   ├── PerformanceStats.jsx
│   ├── ProgressBar.jsx
│   ├── RiskIndicator.jsx
│   ├── RiskSimulator.jsx      <-- Standout Product Feature
│   ├── TradeTable.jsx
│   └── EquityCurve.jsx
│
├── data/
│   ├── account.js             <-- Account limits configuration
│   └── trades.js              <-- Raw trade execution data
│
├── pages/
│   └── Dashboard.jsx
│
├── utils/
│   └── calculations.js        <-- Pure functions for dynamic metrics
│
├── App.jsx
├── main.jsx
└── index.css
