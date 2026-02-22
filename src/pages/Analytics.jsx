import { useExpenses } from "../context/ExpenseContext";
import LineChartCard from "../components/charts/LineChartCard";
import PieChartCard from "../components/charts/PieChartCard";

const Analytics = () => {
  const { expenses } = useExpenses();

  // Create category breakdown
  const categoryData = expenses.reduce((acc, expense) => {
    const category = expense.category || "General";
    acc[category] = (acc[category] || 0) + Number(expense.amount);
    return acc;
  }, {});

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics 📊</h1>

      <div className="space-y-6">
        <LineChartCard />

        {/* PASS DATA HERE */}
        <PieChartCard data={categoryData} />
      </div>
    </div>
  );
};

export default Analytics;