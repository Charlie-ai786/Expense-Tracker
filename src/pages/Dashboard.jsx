import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";

import StatCard from "../components/cards/StatCard";
import LevelCard from "../components/cards/LevelCard";
import LineChartCard from "../components/charts/LineChartCard";
import ExpenseTable from "../components/expenses/ExpenseTable";
import AddExpenseModal from "../components/expenses/AddExpenseModal";
import Profile from "../components/profile/ProfileSection";

const Dashboard = () => {
  const { totalAmount, expenses } = useExpenses();
  const [isOpen, setIsOpen] = useState(false);

  // Example dynamic calculations
  const thisMonthTotal = totalAmount; // later we filter by date
  const totalSaved = 100000 - totalAmount; // example logic

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Gaming Dashboard 🎮
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition"
        >
          + Add Expense
        </button>
      </div>

      {/* Level Card */}
      <LevelCard />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Expenses"
          value={`₹${totalAmount}`}
          glowColor="#f97316"
        />
        <StatCard
          title="This Month"
          value={`₹${thisMonthTotal}`}
          glowColor="#22c55e"
        />
        <StatCard
          title="Total Saved"
          value={`₹${totalSaved}`}
          glowColor="#06b6d4"
        />
      </div>

      {/* Chart */}
      <LineChartCard expenses={expenses} />
      
      {/* Expense Table */}
      <ExpenseTable expenses={expenses} />

      <Profile />

      {/* Modal */}
      {isOpen && (
        <AddExpenseModal closeModal={() => setIsOpen(false)} />
      )}

    </div>
  );
};

export default Dashboard;
