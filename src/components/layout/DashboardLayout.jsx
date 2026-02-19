import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0f1a] relative">

      <Sidebar isOpen={isOpen} />

      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="p-8">
          <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

          <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            {children}
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;
