import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
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
    <div
      className={`fixed top-0 left-0 h-screen w-64
      bg-[#111827]/60 backdrop-blur-xl
      border-r border-white/10 p-6
      transform transition-transform duration-300 z-40
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      
      <nav className="space-y-4">
        {navItem("/", "Dashboard")}
        {navItem("/analytics", "Analytics")}
        {navItem("/achievements", "Achievements")}
        {navItem("/task", "Task")}
      </nav>
    </div>
  );
};

export default Sidebar;
