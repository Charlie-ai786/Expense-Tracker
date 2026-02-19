import { useEffect, useState } from "react";
import { useTasks } from "../../context/TaskContext";

const LevelCard = () => {
  const { xp } = useTasks(); // ✅ XP now comes from tasks

  // 🎮 XP Logic
  const totalXP = xp;
  const level = Math.floor(totalXP / 100) + 1;
  const progress = totalXP % 100;

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 300);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="bg-[#131a2b] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-purple-500 opacity-10 blur-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-2">
          Level {level} 👑
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {progress}/100 XP to next level
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-1000"
            style={{ width: `${animatedProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
