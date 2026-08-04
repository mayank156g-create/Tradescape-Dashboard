export const calculateTotalPnL = (trades) =>
  trades.reduce((sum, trade) => sum + trade.pnl, 0);

export const getWinningTrades = (trades) =>
  trades.filter((trade) => trade.pnl > 0);

export const getLosingTrades = (trades) =>
  trades.filter((trade) => trade.pnl < 0);

export const calculateWinRate = (trades) => {
  if (!trades.length) return 0;
  return ((getWinningTrades(trades).length / trades.length) * 100).toFixed(1);
};

export const getLargestWinningTrade = (trades) =>
  Math.max(...trades.map((trade) => trade.pnl), 0);

export const getLargestLosingTrade = (trades) =>
  Math.min(...trades.map((trade) => trade.pnl), 0);

export const calculateDrawdown = (account) =>
  Math.max(0, account.startingBalance - account.currentBalance);

export const calculateRemainingDrawdown = (account) =>
  account.maxDrawdown - calculateDrawdown(account);

export const calculateCurrentDayLoss = (trades) =>
  Math.abs(
    trades
      .filter((trade) => trade.pnl < 0)
      .reduce((sum, trade) => sum + trade.pnl, 0)
  );

export const calculateRemainingDailyLoss = (account, trades) =>
  account.dailyLossLimit - calculateCurrentDayLoss(trades);

export const getRiskStatus = (remaining, limit) => {
  if (limit <= 0 || remaining <= 0) return "At Risk";

  const percentage = (remaining / limit) * 100;

  if (percentage > 50) return "Safe";
  if (percentage > 20) return "Approaching Limit";
  return "At Risk";
};

export const getRiskStatusVariant = (status) => {
  const variants = {
    Safe: "safe",
    "Approaching Limit": "warning",
    "At Risk": "danger",
  };

  return variants[status] ?? "safe";
};

export const calculateAverageWin = (trades) => {
  const wins = trades.filter((trade) => trade.pnl > 0);
  if (!wins.length) return 0;

  return Math.round(
    wins.reduce((sum, trade) => sum + trade.pnl, 0) / wins.length
  );
};

export const calculateAverageLoss = (trades) => {
  const losses = trades.filter((trade) => trade.pnl < 0);
  if (!losses.length) return 0;

  return Math.round(
    Math.abs(
      losses.reduce((sum, trade) => sum + trade.pnl, 0) / losses.length
    )
  );
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);