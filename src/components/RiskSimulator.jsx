import { useState } from "react";

import StatusBadge from "./StatusBadge";
import TooltipLabel from "./TooltipLabel";
import { getRiskStatus, getRiskStatusVariant } from "../utils/calculations";

const DEFAULT_LOSS = 500;

function RiskSimulator({ remainingDailyLoss, remainingDrawdown, avgLoss }) {
  const [inputAmount, setInputAmount] = useState(DEFAULT_LOSS);

  const loss = Math.max(0, Number(inputAmount) || 0);
  const simulatedRemaining = remainingDailyLoss - loss;
  const riskStatus = getRiskStatus(simulatedRemaining, remainingDailyLoss);
  const variant = getRiskStatusVariant(riskStatus);

  const bufferTrades =
    avgLoss > 0 ? Math.floor(remainingDailyLoss / avgLoss) : 0;

  const sliderMax = Math.max(remainingDailyLoss, DEFAULT_LOSS, 1000);

  const handleInputChange = (value) => {
    const parsed = Math.max(0, Number(value) || 0);
    setInputAmount(parsed);
  };

  return (
    <div className="card">
      <h2 className="card__section-title">Risk Simulator</h2>
      <p className="card__section-desc">
        Forecast your buffer and model prospective trade losses.
      </p>

      <div className="simulator-form">
        <div className="simulator-buffer">
          <TooltipLabel
            label="Buffer Forecaster"
            tip="Estimates how many average-sized losses you can take before hitting today's daily limit."
            className="simulator-buffer__label"
          />
          <p className="simulator-buffer__text">
            Buffer: You can sustain{" "}
            <strong className="mono">~{bufferTrades}</strong> consecutive average
            losing trades before breaching today&apos;s limit.
          </p>
          <p className="simulator-buffer__meta mono">
            Based on ${avgLoss.toLocaleString()} avg loss · $
            {remainingDailyLoss.toLocaleString()} daily buffer · $
            {remainingDrawdown.toLocaleString()} drawdown remaining
          </p>
        </div>

        <div className="simulator-whatif">
          <p className="simulator-whatif__title">What-If Simulator</p>
          <p className="simulator-whatif__desc">
            Enter a prospective trade loss to preview impact on your daily limit.
          </p>

          <div className="simulator-field">
            <TooltipLabel
              label="Prospective Trade Loss ($)"
              tip="Hypothetical loss amount to stress-test your remaining daily buffer."
              className="simulator-field__label"
            />
            <input
              id="prospective-loss"
              className="simulator-field__input mono"
              type="number"
              min="0"
              max={sliderMax}
              step="50"
              value={inputAmount}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>

          <div className="simulator-slider-row">
            <input
              className="simulator-slider"
              type="range"
              min="0"
              max={sliderMax}
              step="50"
              value={Math.min(loss, sliderMax)}
              onChange={(e) => handleInputChange(e.target.value)}
              aria-label="Prospective trade loss slider"
            />
            <div className="simulator-slider-labels mono">
              <span>$0</span>
              <span>${sliderMax.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className={`simulator-callout simulator-callout--${variant}`}>
          <div className="simulator-callout__header">
            <span className="simulator-callout__title">Simulated Outcome</span>
            <StatusBadge status={riskStatus} />
          </div>

          <div className="simulator-callout__metrics">
            <div>
              <p className="simulator-result__label">Simulated Remaining Daily Loss</p>
              <p
                className={`simulator-result__value mono simulator-result__value--${
                  simulatedRemaining <= 0 ? "danger" : variant
                }`}
              >
                ${simulatedRemaining.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="simulator-result__label">Prospective Loss</p>
              <p className="simulator-result__value mono">
                -${loss.toLocaleString()}
              </p>
            </div>
          </div>

          {simulatedRemaining <= 0 && (
            <p className="simulator-callout__breach mono">
              This loss would exceed your remaining daily buffer by $
              {Math.abs(simulatedRemaining).toLocaleString()}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RiskSimulator;
