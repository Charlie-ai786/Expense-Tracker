import { useExpenses } from "../../context/ExpenseContext";

const ExpenseTable = () => {
  const { expenses } = useExpenses();

  return (
    <div className="bg-[#1b1f3a] rounded-2xl p-6 border border-white/5 mt-8">
      <h2 className="text-xl font-semibold mb-6">
        Recent Expenses 🧾
      </h2>

      <div className="grid grid-cols-4 text-gray-400 mb-4 font-medium">
        <span>Title</span>
        <span>Category</span>
        <span>Amount</span>
        <span>Status</span>
      </div>

      <div className="space-y-4">
        {expenses.length === 0 && (
          <p className="text-gray-500">No expenses added yet.</p>
        )}

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="grid grid-cols-4 items-center border-t border-white/5 pt-4"
          >
            <span>{expense.title}</span>
            <span>{expense.category || "General"}</span>
            <span>₹{expense.amount}</span>

            <span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  expense.status === "Paid"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {expense.status || "Paid"}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseTable;
