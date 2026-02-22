import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#8B5CF6", // purple
  "#06B6D4", // cyan
  "#F59E0B", // amber
  "#10B981", // green
  "#EF4444", // red
  "#3B82F6", // blue
];

const PieChartCard = ({ data }) => {
  // Convert object to array
  const chartData = Object.entries(data).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="bg-[#131a2b] p-6 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0 bg-purple-500 opacity-5 blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-6">
          Category Breakdown 📊
        </h2>

        {chartData.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No expense data available
          </p>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={70}
                  outerRadius={110}
                  paddingAngle={5}
                  animationDuration={1000}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    borderRadius: "10px",
                    color: "#000",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default PieChartCard;