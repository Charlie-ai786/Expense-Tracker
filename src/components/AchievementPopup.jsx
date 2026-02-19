const AchievementPopup = ({ achievement }) => {
  if (!achievement) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-green-500/20 border border-green-500 backdrop-blur-xl p-4 rounded-2xl shadow-2xl animate-bounce z-50">
      <h3 className="font-bold text-green-400">
        🎉 Achievement Unlocked!
      </h3>
      <p className="text-sm mt-1">{achievement.title}</p>
    </div>
  );
};

export default AchievementPopup;
