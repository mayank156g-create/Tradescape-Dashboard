import TooltipLabel from "./TooltipLabel";

function ProgressBar({ label, tip, used, limit }) {
  const percentage = Math.min((used / limit) * 100, 100);

  const status =
    percentage >= 90 ? "danger" : percentage >= 70 ? "warning" : "safe";

  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        {tip ? (
          <TooltipLabel label={label} tip={tip} className="progress-bar__label" />
        ) : (
          <span className="progress-bar__label">{label}</span>
        )}
        <span className="progress-bar__values mono">
          ${used.toLocaleString()} / ${limit.toLocaleString()}
        </span>
      </div>

      <div className="progress-bar__track">
        <div
          className={`progress-bar__fill progress-bar__fill--${status}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
