import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

const LineChartCard = () => {
  return (
    <div className="bg-[#131a2b] rounded-2xl p-6 border border-white/5 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-cyan-500 opacity-10 blur-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-6">
          Monthly Spending 📈
        </h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "10px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default LineChartCard;
