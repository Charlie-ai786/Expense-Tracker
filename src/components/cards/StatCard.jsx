const StatCard = ({ title, value, glowColor }) => {
  return (
    <div
      className="bg-[#131a2b] rounded-2xl p-6 border border-white/5 
                 hover:scale-105 transition duration-300 relative overflow-hidden"
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-20 blur-2xl"
        style={{ background: glowColor }}
      ></div>

      <div className="relative z-10">
        <p className="text-gray-400 text-sm">{title}</p>

        <h2 className="text-3xl font-bold text-white mt-2">
          {value}
        </h2>

        <div
          className="mt-6 h-1 rounded-full"
          style={{
            background: glowColor,
            boxShadow: `0 0 20px ${glowColor}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default StatCard;
