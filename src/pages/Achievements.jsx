import { useEffect, useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { getAchievements } from "../utils/achievements";
import AchievementPopup from "../components/AchievementPopup";

const Achievements = () => {
  const { expenses, totalAmount } = useExpenses();
  const [unlockedPopup, setUnlockedPopup] = useState(null);

  const totalXP = Math.floor(totalAmount / 10);
  const level = Math.floor(totalXP / 100) + 1;

  const achievements = getAchievements(expenses, totalAmount, level);

  useEffect(() => {
  const savedUnlocked = JSON.parse(localStorage.getItem("unlockedAchievements")) || [];

  const newlyUnlocked = achievements.find(
    (a) => a.unlocked && !savedUnlocked.includes(a.id)
  );

  if (newlyUnlocked) {
    setUnlockedPopup(newlyUnlocked);

    const updatedUnlocked = [...savedUnlocked, newlyUnlocked.id];
    localStorage.setItem(
      "unlockedAchievements",
      JSON.stringify(updatedUnlocked)
    );

    const timer = setTimeout(() => {
      setUnlockedPopup(null);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [achievements]);


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Achievements 🏆</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-2xl border transition ${
              item.unlocked
                ? "bg-green-500/10 border-green-500"
                : "bg-white/5 border-white/10"
            }`}
          >
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

            <p className="text-sm mt-2">
              {item.unlocked ? "Unlocked ✅" : "Locked 🔒"}
            </p>
          </div>
        ))}
      </div>

      <AchievementPopup achievement={unlockedPopup} />
    </div>
  );
};

export default Achievements;
