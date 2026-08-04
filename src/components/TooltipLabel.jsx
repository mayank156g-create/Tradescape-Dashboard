function TooltipLabel({ label, tip, className = "" }) {
  return (
    <span
      className={`tooltip-trigger ${className}`.trim()}
      data-tooltip={tip}
      tabIndex={0}
      role="note"
      aria-label={`${label}: ${tip}`}
    >
      {label}
    </span>
  );
}

export default TooltipLabel;
