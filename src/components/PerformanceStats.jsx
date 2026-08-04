import TooltipLabel from "./TooltipLabel";

function StatCard({ title, value, variant = "default", tooltip }) {
  const valueClass =
    variant === "profit"
      ? "perf-stat__value perf-stat__value--profit mono"
      : variant === "loss"
        ? "perf-stat__value perf-stat__value--loss mono"
        : "perf-stat__value mono";

  return (
    <div className="perf-stat">
      {tooltip ? (
        <TooltipLabel label={title} tip={tooltip} className="perf-stat__label" />
      ) : (
        <p className="perf-stat__label">{title}</p>
      )}
      <h3 className={valueClass}>{value}</h3>
    </div>
  );
}

function PerformanceStats({
  largestWin,
  largestLoss,
  averageWin,
  averageLoss,
}) {
  return (
    <div className="card">
      <h2 className="card__section-title">Performance Statistics</h2>
      <p className="card__section-desc">
        Key trade metrics across your session history.
      </p>

      <div className="perf-grid">
        <StatCard
          title="Largest Winning Trade"
          value={`+$${largestWin.toLocaleString()}`}
          variant="profit"
          tooltip="The single most profitable trade in your session."
        />

        <StatCard
          title="Largest Losing Trade"
          value={`-$${Math.abs(largestLoss).toLocaleString()}`}
          variant="loss"
          tooltip="The single largest loss taken during this session."
        />

        <StatCard
          title="Average Winning Trade"
          value={`+$${averageWin.toLocaleString()}`}
          variant="profit"
          tooltip="Mean profit across all winning trades."
        />

        <StatCard
          title="Average Losing Trade"
          value={`-$${Math.abs(averageLoss).toLocaleString()}`}
          variant="loss"
          tooltip="Mean loss across all losing trades — used by the Risk Simulator buffer."
        />
      </div>
    </div>
  );
}

export default PerformanceStats;
