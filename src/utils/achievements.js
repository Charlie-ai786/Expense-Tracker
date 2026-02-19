export const getAchievements = (expenses, totalAmount, level) => {
  return [
    {
      id: 1,
      title: "First Expense 💸",
      unlocked: expenses.length >= 1,
    },
    {
      id: 2,
      title: "5 Expenses 🔥",
      unlocked: expenses.length >= 5,
    },
    {
      id: 3,
      title: "Spent ₹10,000 💎",
      unlocked: totalAmount >= 10000,
    },
    {
      id: 4,
      title: "Reached Level 5 👑",
      unlocked: level >= 5,
    },
  ];
};
