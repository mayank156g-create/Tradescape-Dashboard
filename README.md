# Tradescape – Trader Risk Dashboard

A responsive **Trader Risk Dashboard** built with **React**, **Vite**, **Tailwind CSS**, and **Recharts**. The application helps traders monitor their trading performance while keeping track of important risk limits such as maximum drawdown and daily loss limits.

## Live Demo

**Live URL:** 

## GitHub Repository

**Repository:**  https://github.com/mayank156g-create/Tradescape-Dashboard.git

---

# Features

### Account Overview

* Displays Starting Balance
* Displays Current Balance
* Displays Maximum Drawdown
* Displays Daily Loss Limit

### Trading Performance

* Current Balance
* Total Profit & Loss
* Winning Trades
* Losing Trades
* Win Rate
* Largest Winning Trade
* Largest Losing Trade
* Average Winning Trade
* Average Losing Trade

### Risk Indicator

* Current Drawdown
* Remaining Drawdown
* Current Day Loss
* Remaining Daily Loss Limit
* Risk Status (Safe / Approaching Limit / At Risk)
* Progress bars for drawdown usage and daily loss usage

### Additional Feature

**Equity Curve**

I added an **Equity Curve** to visualize how the account balance changes after each trade. Instead of only viewing summary statistics, traders can quickly understand the progression of their performance over time.

---

# Tech Stack

* React
* Vite
* Tailwind CSS
* Recharts
* JavaScript (ES6)

---

# Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── SummaryCard.jsx
│   ├── PerformanceStats.jsx
│   ├── ProgressBar.jsx
│   ├── RiskIndicator.jsx
│   ├── TradeTable.jsx
│   └── EquityCurve.jsx
│
├── data/
│   ├── account.js
│   └── trades.js
│
├── pages/
│   └── Dashboard.jsx
│
├── utils/
│   └── calculations.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# How Calculations Work

All dashboard metrics are **derived dynamically** from the provided trade data rather than being hardcoded.

The application calculates:

* Total Profit & Loss
* Winning Trades
* Losing Trades
* Win Rate
* Largest Winning Trade
* Largest Losing Trade
* Average Winning Trade
* Average Losing Trade
* Current Drawdown
* Remaining Drawdown
* Current Day Loss
* Remaining Daily Loss Limit
* Overall Risk Status

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the reduction in a trading account's value from its peak balance to its lowest point before recovering. It helps measure how much capital has been lost during a period and is an important indicator of trading risk.

---

## 2. Why would a trader care about remaining drawdown instead of only current P&L?

Current P&L only shows whether a trader is making or losing money at the moment. Remaining drawdown shows how much room is left before violating the account's risk rules. This helps traders manage risk proactively and avoid breaching trading limits.

---

## 3. If you had another day to work on this dashboard, what would you improve?

Given more time, I would add:

* Trade filtering by asset and direction
* Date-wise trading history
* Multiple account support
* Dark mode
* Interactive charts with different time ranges
* Backend integration with live trading data
* Unit tests for calculation utilities

---

# Running the Project

Clone the repository:

```bash
git clone < https://github.com/mayank156g-create/Tradescape-Dashboard.git>
```

Navigate to the project:

```bash
cd tradescape-risk-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# Design Decisions

* Built reusable React components for maintainability.
* Kept business logic inside utility functions.
* Derived all metrics from mock trade data instead of hardcoding values.
* Focused on readability and a responsive layout.
* Chose an Equity Curve as the additional feature because it provides a quick visual summary of trading performance.

---

# Assumptions

* The application uses mock data as specified in the assignment.
* All calculations are performed on the provided trades.
* Authentication, backend services, databases, and live APIs are intentionally omitted because they were outside the assignment scope.

---

# Author

**Mayank Garg**
