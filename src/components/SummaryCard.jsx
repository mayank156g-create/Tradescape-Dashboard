function SummaryCard({
  title,
  value,
  valueColor = "text-slate-800",
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${valueColor}`}>
        {value}
      </h2>
    </div>
  );
}

export default SummaryCard;