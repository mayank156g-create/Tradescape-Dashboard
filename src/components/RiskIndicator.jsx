import ProgressBar from "./ProgressBar";

function StatusBadge({ status }) {
  const styles = {
    Safe: "bg-green-100 text-green-700",
    "Approaching Limit": "bg-yellow-100 text-yellow-700",
    "At Risk": "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function RiskIndicator({
  drawdown,
  remainingDrawdown,
  currentDayLoss,
  remainingDailyLoss,
  maxDrawdown,
  dailyLossLimit,
  status,
}) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-6 shadow">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Risk Indicator
          </h2>
          <p className="text-sm text-slate-500">
            Monitor your account against trading rules.
          </p>
        </div>

        <StatusBadge status={status} />
      </div>

      {/* Risk Summary */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-500">Current Risk Assessment</p>

        <p className="mt-2 text-lg font-semibold text-slate-800">
          {status === "Safe" &&
            "Your account is operating safely within the allowed risk limits."}

          {status === "Approaching Limit" &&
            "You are approaching your account limits. Consider reducing risk."}

          {status === "At Risk" &&
            "Warning! Your account is close to violating the trading rules."}
        </p>
      </div>

      {/* Metrics */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">Current Drawdown</p>

          <p className="mt-2 text-2xl font-bold text-slate-800">
            ${drawdown.toLocaleString()}
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Remaining Drawdown
          </p>

          <p className="font-semibold text-green-600">
            ${remainingDrawdown.toLocaleString()}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <p className="text-sm text-slate-500">Current Day Loss</p>

          <p className="mt-2 text-2xl font-bold text-slate-800">
            ${currentDayLoss.toLocaleString()}
          </p>

          <p className="mt-3 text-sm text-slate-600">
            Remaining Daily Loss Limit
          </p>

          <p className="font-semibold text-green-600">
            ${remainingDailyLoss.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-8 space-y-5">
        <ProgressBar
          label="Drawdown Usage"
          used={drawdown}
          limit={maxDrawdown}
          color="bg-orange-500"
        />

        <ProgressBar
          label="Daily Loss Usage"
          used={currentDayLoss}
          limit={dailyLossLimit}
          color="bg-red-500"
        />
      </div>
    </section>
  );
}

export default RiskIndicator;