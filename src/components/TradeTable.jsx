function TradeTable({ trades }) {
  return (
    <section className="mt-8">
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold text-slate-800">
          Trade History
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-slate-200 text-sm text-slate-500">
              <tr>
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Direction</th>
                <th className="pb-3 text-right font-medium">P&amp;L</th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="py-4 font-medium text-slate-800">
                    {trade.asset}
                  </td>

                  <td className="py-4 text-slate-600">
                    {trade.direction}
                  </td>

                  <td
                    className={`py-4 text-right font-semibold ${
                      trade.pnl >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {trade.pnl >= 0 ? "+" : ""}
                    ${trade.pnl.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default TradeTable;