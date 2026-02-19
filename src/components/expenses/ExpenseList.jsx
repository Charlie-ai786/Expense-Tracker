import { useExpenses } from "../../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense, totalAmount } = useExpenses();

  return (
    <div className="mt-6 bg-white/5 p-6 rounded-2xl border border-white/10">
      <h2 className="text-xl mb-4">Expenses</h2>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b border-white/10 py-2"
        >
          <span>{item.title}</span>
          <div className="flex items-center gap-4">
            <span>₹ {item.amount}</span>
            <button
              onClick={() => deleteExpense(item.id)}
              className="text-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 font-bold">
        Total: ₹ {totalAmount}
      </div>
    </div>
  );
};

export default ExpenseList;
