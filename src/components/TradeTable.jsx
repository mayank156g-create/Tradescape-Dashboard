import TooltipLabel from "./TooltipLabel";

function TradeTable({ trades }) {
  return (
    <section className="card">
      <h2 className="card__section-title">Trade History</h2>
      <p className="card__section-desc">Complete log of session trades.</p>

      <div className="trade-table-wrapper">
        <table className="trade-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Direction</th>
              <th>
                <TooltipLabel
                  label="P&L"
                  tip="Profit or loss realized when the trade was closed."
                />
              </th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id}>
                <td>{trade.asset}</td>

                <td
                  className={
                    trade.direction.toLowerCase() === "long"
                      ? "trade-table__direction--long"
                      : "trade-table__direction--short"
                  }
                >
                  {trade.direction}
                </td>

                <td
                  className={`mono ${
                    trade.pnl >= 0
                      ? "trade-table__pnl--profit"
                      : "trade-table__pnl--loss"
                  }`}
                >
                  {trade.pnl >= 0 ? "+" : "-"}$
                  {Math.abs(trade.pnl).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TradeTable;
