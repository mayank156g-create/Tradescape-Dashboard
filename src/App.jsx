import "./App.css";

import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import PerformanceStats from "./components/PerformanceStats";
import RiskIndicator from "./components/RiskIndicator";
import TradeTable from "./components/TradeTable";
import EquityCurve from "./components/EquityCurve";
import RiskSimulator from "./components/RiskSimulator";

import account from "./data/account";
import trades from "./data/trades";

import {
  calculateTotalPnL,
  calculateWinRate,
  getWinningTrades,
  getLosingTrades,
  getLargestWinningTrade,
  getLargestLosingTrade,
  calculateDrawdown,
  calculateRemainingDrawdown,
  calculateCurrentDayLoss,
  calculateRemainingDailyLoss,
  getRiskStatus,
  calculateAverageWin,
  calculateAverageLoss,
} from "./utils/calculations";

function App() {
  const totalPnL = calculateTotalPnL(trades);
  const winRate = calculateWinRate(trades);
  const winningTrades = getWinningTrades(trades).length;
  const losingTrades = getLosingTrades(trades).length;

  const largestWin = getLargestWinningTrade(trades);
  const largestLoss = getLargestLosingTrade(trades);
  const averageWin = calculateAverageWin(trades);
  const averageLoss = calculateAverageLoss(trades);

  const currentBalance = account.startingBalance + totalPnL;
  const liveAccount = { ...account, currentBalance };

  const drawdown = calculateDrawdown(liveAccount);
  const remainingDrawdown = calculateRemainingDrawdown(liveAccount);
  const currentDayLoss = calculateCurrentDayLoss(trades);
  const remainingDailyLoss = calculateRemainingDailyLoss(account, trades);

  const status = getRiskStatus(remainingDrawdown, account.maxDrawdown);

  const formattedPnL = `${totalPnL >= 0 ? "+" : "-"}$${Math.abs(
    totalPnL
  ).toLocaleString()}`;

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <Header />

        {/* Row 1 – Key Stats */}
        <div className="stats-grid">
          <SummaryCard
            title="Balance"
            value={`$${currentBalance.toLocaleString()}`}
          />

          <SummaryCard
            title="Total P&L"
            value={formattedPnL}
            variant={totalPnL >= 0 ? "profit" : "loss"}
          />

          <SummaryCard
            title="Win Rate"
            value={`${winRate}%`}
            variant="amber"
          />

          <SummaryCard
            title="Win / Loss"
            value={`${winningTrades} / ${losingTrades}`}
          />
        </div>

        {/* Row 2 – Risk Gauges + Performance Stats */}
        <div className="split-row">
          <RiskIndicator
            drawdown={drawdown}
            remainingDrawdown={remainingDrawdown}
            currentDayLoss={currentDayLoss}
            remainingDailyLoss={remainingDailyLoss}
            maxDrawdown={account.maxDrawdown}
            dailyLossLimit={account.dailyLossLimit}
            status={status}
          />

          <PerformanceStats
            largestWin={largestWin}
            largestLoss={largestLoss}
            averageWin={averageWin}
            averageLoss={averageLoss}
          />
        </div>

        {/* Row 3 – Equity Curve + Risk Simulator */}
        <div className="split-row">
          <EquityCurve trades={trades} />
          <RiskSimulator
            remainingDailyLoss={remainingDailyLoss}
            remainingDrawdown={remainingDrawdown}
            avgLoss={averageLoss}
          />
        </div>

        {/* Bottom – Trade History */}
        <TradeTable trades={trades} />
      </div>
    </div>
  );
}

export default App;
