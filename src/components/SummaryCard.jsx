import TooltipLabel from "./TooltipLabel";

function SummaryCard({
  title,
  value,
  variant = "default",
  tooltip,
}) {
  const valueClass =
    variant === "profit"
      ? "card__value card__value--profit mono"
      : variant === "loss"
        ? "card__value card__value--loss mono"
        : variant === "amber"
          ? "card__value card__value--amber mono"
          : "card__value mono";

  return (
    <div className="card">
      {tooltip ? (
        <TooltipLabel label={title} tip={tooltip} className="card__title" />
      ) : (
        <p className="card__title">{title}</p>
      )}
      <h2 className={valueClass}>{value}</h2>
    </div>
  );
}

export default SummaryCard;
