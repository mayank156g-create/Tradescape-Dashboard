import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import PerformanceStats from "../components/PerformanceStats";
import RiskIndicator from "../components/RiskIndicator";
import TradeTable from "../components/TradeTable";
import EquityCurve from "../components/EquityCurve";

import account from "../data/account";
import trades from "../data/trades";

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
} from "../utils/calculations";

function Dashboard() {
  const totalPnL = calculateTotalPnL(trades);
  const winRate = calculateWinRate(trades);

  const winningTrades = getWinningTrades(trades).length;
  const losingTrades = getLosingTrades(trades).length;

  const largestWin = getLargestWinningTrade(trades);
  const largestLoss = getLargestLosingTrade(trades);

  const averageWin = calculateAverageWin(trades);
  const averageLoss = calculateAverageLoss(trades);

  const drawdown = calculateDrawdown(account);
  const remainingDrawdown = calculateRemainingDrawdown(account);

  const currentDayLoss = calculateCurrentDayLoss(trades);
  const remainingDailyLoss = calculateRemainingDailyLoss(account, trades);

  const status = getRiskStatus(
    remainingDrawdown,
    account.maxDrawdown
  );

  const formattedPnL = `${totalPnL >= 0 ? "+" : "-"}$${Math.abs(
    totalPnL
  ).toLocaleString()}`;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-6">
        <Header />

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
          <SummaryCard
            title="Current Balance"
            value={`$${account.currentBalance.toLocaleString()}`}
            valueColor="text-slate-800"
          />

          <SummaryCard
            title="Total P&L"
            value={formattedPnL}
            valueColor={totalPnL >= 0 ? "text-green-600" : "text-red-600"}
          />

          <SummaryCard
            title="Winning Trades"
            value={winningTrades}
          />

          <SummaryCard
            title="Losing Trades"
            value={losingTrades}
          />

          <SummaryCard
            title="Win Rate"
            value={`${winRate}%`}
          />
        </div>

        <div className="mt-8">
          <PerformanceStats
            largestWin={largestWin}
            largestLoss={largestLoss}
            averageWin={averageWin}
            averageLoss={averageLoss}
          />
        </div>

        <div className="mt-8">
          <RiskIndicator
            drawdown={drawdown}
            remainingDrawdown={remainingDrawdown}
            currentDayLoss={currentDayLoss}
            remainingDailyLoss={remainingDailyLoss}
            maxDrawdown={account.maxDrawdown}
            dailyLossLimit={account.dailyLossLimit}
            status={status}
          />
        </div>

        <div className="mt-8">
          <EquityCurve trades={trades} />
        </div>

        <div className="mt-8">
          <TradeTable trades={trades} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;