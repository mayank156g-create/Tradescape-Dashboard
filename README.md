# Tradescape – Trader Risk Dashboard

A responsive **Trader Risk Dashboard** built with **React**, **Vite**, **Tailwind CSS**, and **Recharts**.

The dashboard helps traders monitor their trading performance while keeping track of important account rules such as **maximum drawdown** and **daily loss limits**, allowing them to quickly understand whether they are operating safely within their evaluation rules.

---

# 🚀 Live Demo & Repository

**Live Demo:** https://tradescape-dashboard-three.vercel.app/

**GitHub Repository:** https://github.com/mayank156g-create/Tradescape-Dashboard

---

# 📊 Features

## Account Overview

* Starting Balance
* Current Balance
* Maximum Drawdown Limit
* Daily Loss Limit

## Trading Performance

All trading statistics are calculated dynamically from the provided trade data.

* Current Balance
* Total Profit & Loss (P&L)
* Winning Trades
* Losing Trades
* Win Rate
* Largest Winning Trade
* Largest Losing Trade
* Average Winning Trade
* Average Losing Trade

## Risk Indicator

The dashboard clearly communicates the trader's current risk position by displaying:

* Current Drawdown
* Remaining Drawdown
* Current Day Loss
* Remaining Daily Loss Limit
* Risk Status:

  * 🟢 Safe
  * 🟡 Approaching Limit
  * 🔴 At Risk

Progress bars are included to provide a quick visual representation of drawdown usage and daily loss usage.

---

# 💡 Additional Product Feature

## Risk Cushion Forecaster & Trade Simulator

Instead of only showing historical trading performance, I wanted to provide a feature that helps traders make better decisions before placing their next trade.

### Risk Cushion Forecaster

The dashboard calculates:

* Average losing trade
* Remaining daily loss limit

Using these values, it estimates approximately **how many average losing trades** the trader can still take before reaching the daily loss limit.

Example:

> Remaining Daily Loss: **$4,250**
> Average Losing Trade: **$375**
> Estimated Remaining Average Losing Trades: **11**

This gives traders a more practical understanding of their remaining risk than viewing the remaining dollar amount alone.

### Trade Simulator

The simulator allows users to enter an expected profit or loss for their next trade and instantly preview how it affects:

* Remaining Drawdown
* Remaining Daily Loss
* Overall Risk Status

This provides a simple "what-if" analysis without modifying the underlying trade data.

---

# 📈 Visual Analytics

## Equity Curve

An Equity Curve visualizes how the account balance changes after each trade.

Rather than only displaying the final balance, the chart helps traders understand the progression of their account throughout the trading session.

---

# 🛠 Tech Stack

* React
* Vite
* Tailwind CSS
* Recharts
* JavaScript (ES6+)

---

# 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── SummaryCard.jsx
│   ├── PerformanceStats.jsx
│   ├── ProgressBar.jsx
│   ├── RiskIndicator.jsx
│   ├── RiskSimulator.jsx
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

# 🧮 Calculations

All values displayed on the dashboard are calculated dynamically from the supplied mock data.

The application derives:

* Total P&L
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
* Remaining Daily Loss
* Risk Status
* Estimated Remaining Average Losing Trades

No calculated metric is hardcoded.

---

# 🧠 Product Questions

## 1. What is drawdown in trading?

Drawdown is the reduction in a trading account's value from its highest point to its lowest point before reaching a new high. It is commonly used to measure trading risk and indicates how much capital has been lost during a period.

---

## 2. Why would a trader care about remaining drawdown rather than just current P&L?

Current P&L only shows whether the trader is currently making or losing money.

Remaining drawdown tells the trader how much room they have before reaching the maximum permitted loss. This helps them manage risk, adjust position sizes, and avoid violating their account rules.

---

## 3. If you had another day to work on this dashboard, what would you improve?

Given additional time, I would consider adding:

* Asset-wise performance analysis
* Trade filtering and search
* Support for multiple trading accounts
* Real-time data integration using a backend API
* Unit tests for calculation utilities
* Historical performance tracking across multiple trading days

---

# 💻 Running the Project

Clone the repository:

```bash
git clone https://github.com/mayank156g-create/Tradescape-Dashboard.git
```

Navigate into the project:

```bash
cd Tradescape-Dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 🎯 Design Decisions

* Used reusable React components to improve maintainability.
* Kept calculation logic separate inside utility functions.
* Derived all statistics from trade data instead of hardcoding values.
* Designed the dashboard to clearly communicate account risk.
* Added a Risk Cushion Forecaster and Trade Simulator to provide forward-looking insights rather than only historical information.

---

# 👨‍💻 Author

**Mayank Garg**
