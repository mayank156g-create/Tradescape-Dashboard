import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import account from "../data/account";

function EquityCurve({ trades }) {
  let balance = account.startingBalance;

  const data = [
    {
      trade: "Start",
      balance,
    },
  ];

  trades.forEach((trade, index) => {
    balance += trade.pnl;

    data.push({
      trade: `T${index + 1}`,
      balance,
    });
  });

  return (
    <div className="card">
      <h2 className="card__section-title">Equity Curve</h2>
      <p className="card__section-desc">Account balance progression over trades.</p>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />

            <XAxis
              dataKey="trade"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
            />

            <YAxis
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />

            <Tooltip
              contentStyle={{
                background: "#1f2937",
                border: "1px solid #374151",
                borderRadius: "0.5rem",
                color: "#f9fafb",
              }}
              labelStyle={{ color: "#9ca3af" }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Balance"]}
            />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ fill: "#10b981", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, fill: "#10b981", stroke: "#059669" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EquityCurve;
