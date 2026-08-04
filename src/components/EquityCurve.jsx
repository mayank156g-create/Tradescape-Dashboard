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
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Equity Curve
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="trade" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EquityCurve;