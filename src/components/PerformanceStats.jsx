function StatCard({ title, value, color = "text-slate-800" }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-lg">
      <p className="text-sm text-slate-500">{title}</p>
      <h3 className={`mt-2 text-2xl font-bold ${color}`}>
        {value}
      </h3>
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
    <section>
      <h2 className="mb-4 text-2xl font-bold text-slate-800">
        Performance Statistics
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Largest Winning Trade"
          value={`+$${largestWin.toLocaleString()}`}
          color="text-green-600"
        />

        <StatCard
          title="Largest Losing Trade"
          value={`-$${Math.abs(largestLoss).toLocaleString()}`}
          color="text-red-600"
        />

        <StatCard
          title="Average Winning Trade"
          value={`+$${averageWin.toLocaleString()}`}
          color="text-green-600"
        />

        <StatCard
          title="Average Losing Trade"
          value={`-$${Math.abs(averageLoss).toLocaleString()}`}
          color="text-red-600"
        />
      </div>
    </section>
  );
}

export default PerformanceStats;