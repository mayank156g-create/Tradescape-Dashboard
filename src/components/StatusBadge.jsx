import { getRiskStatusVariant } from "../utils/calculations";

function StatusBadge({ status, pulse = false }) {
  const variant = getRiskStatusVariant(status);

  return (
    <span
      className={`status-badge status-badge--${variant}${
        pulse ? " status-badge--pulse" : ""
      }`}
    >
      <span className="status-badge__dot" aria-hidden="true" />
      {status}
    </span>
  );
}

export default StatusBadge;
