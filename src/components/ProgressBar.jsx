function ProgressBar({ label, used, limit, color = "bg-blue-500" }) {
  const percentage = Math.min((used / limit) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-medium text-slate-800">
          ${used.toLocaleString()} / ${limit.toLocaleString()}
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;