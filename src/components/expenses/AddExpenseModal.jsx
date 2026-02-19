import { useState } from "react";
import { useExpenses } from "../../context/ExpenseContext";

const AddExpense = () => {
  const { addExpense } = useExpenses();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("General");
  const [status, setStatus] = useState("Paid");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addExpense({
      title,
      amount: Number(amount),
      category,
      status,
    });

    setTitle("");
    setAmount("");
    setCategory("General");
    setStatus("Paid");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4"
    >
      {/* Title */}
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 rounded-lg bg-white/10 outline-none"
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 rounded-lg bg-white/10 outline-none"
      />

      {/* Category */}
    <div className="relative">
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 pr-10 rounded-xl bg-[#1e2235] text-white border border-white/10 
                    focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 
                    transition-all duration-300 appearance-none cursor-pointer"
        >
            <option value="General">General</option>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Travel">Travel</option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-purple-400 transition-transform duration-300">
            ▼
        </div>
    </div>

      {/* Status */}
    <div className="relative">
        <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 pr-10 rounded-xl bg-[#1e2235] text-white border border-white/10 
                    focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 
                    transition-all duration-300 appearance-none cursor-pointer"
        >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
        </select>

        {/* Custom Arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-cyan-400 transition-transform duration-300">
            ▼
        </div>
    </div>


      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
