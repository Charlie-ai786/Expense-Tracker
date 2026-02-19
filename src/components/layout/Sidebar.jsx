import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`block px-4 py-3 rounded-xl transition ${
        location.pathname === path
          ? "bg-linear-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
          : "text-gray-400 hover:text-white hover:bg-white/10"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="w-64 min-h-screen bg-[#111827]/60 backdrop-blur-xl border-r border-white/10 p-6">

      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        EXP<span className="text-cyan-400">X</span>
      </h1>

      <nav className="space-y-4">
        {navItem("/", "Dashboard")}
        {navItem("/analytics", "Analytics")}
        {navItem("/achievements", "Achievements")}
        {navItem("/Task", "Task")}
      </nav>

    </div>
  );
};

export default Sidebar;
