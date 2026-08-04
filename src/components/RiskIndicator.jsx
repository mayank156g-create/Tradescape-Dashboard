import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";
import TooltipLabel from "./TooltipLabel";
import { getRiskStatusVariant } from "../utils/calculations";

function RiskIndicator({
  drawdown,
  remainingDrawdown,
  currentDayLoss,
  remainingDailyLoss,
  maxDrawdown,
  dailyLossLimit,
  status,
}) {
  const glowVariant = getRiskStatusVariant(status);

  return (
    <section className={`card card--risk-glow card--risk-glow--${glowVariant}`}>
      <div className="section-header">
        <div>
          <h2 className="card__section-title">Risk Progress</h2>
          <p className="card__section-desc">
            Monitor your account against trading rules.
          </p>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="risk-banner">
        <p className="risk-banner__label">Current Risk Assessment</p>

        <p className="risk-banner__message">
          {status === "Safe" &&
            "Your account is operating safely within the allowed risk limits."}

          {status === "Approaching Limit" &&
            "You are approaching your account limits. Consider reducing risk."}

          {status === "At Risk" &&
            "Warning! Your account is close to violating the trading rules."}
        </p>
      </div>

      <div className="risk-metrics">
        <div className="risk-metric">
          <TooltipLabel
            label="Current Drawdown"
            tip="The peak-to-trough decline in your account balance from the starting equity."
            className="risk-metric__label"
          />
          <p className="risk-metric__value mono">${drawdown.toLocaleString()}</p>
          <TooltipLabel
            label="Remaining Drawdown"
            tip="How much additional loss you can absorb before hitting the max drawdown rule."
            className="risk-metric__sub-label"
          />
          <p className="risk-metric__sub-value mono">
            ${remainingDrawdown.toLocaleString()}
          </p>
        </div>

        <div className="risk-metric">
          <TooltipLabel
            label="Current Day Loss"
            tip="Total realized losses accumulated during today's trading session."
            className="risk-metric__label"
          />
          <p className="risk-metric__value mono">${currentDayLoss.toLocaleString()}</p>
          <TooltipLabel
            label="Remaining Daily Loss Limit"
            tip="The amount you can still lose today before breaching the daily loss cap."
            className="risk-metric__sub-label"
          />
          <p className="risk-metric__sub-value mono">
            ${remainingDailyLoss.toLocaleString()}
          </p>
        </div>
      </div>

      <ProgressBar
        label="Drawdown Usage"
        tip="Percentage of your maximum allowed drawdown currently consumed."
        used={drawdown}
        limit={maxDrawdown}
      />

      <ProgressBar
        label="Daily Loss Usage"
        tip="Percentage of today's daily loss limit that has been used so far."
        used={currentDayLoss}
        limit={dailyLossLimit}
      />
    </section>
  );
}

export default RiskIndicator;
