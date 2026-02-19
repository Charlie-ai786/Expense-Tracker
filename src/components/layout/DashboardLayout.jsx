import Navbar from "./navbar";
import Sidebar from "./Sidebar";


const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0b0f1a] relative overflow-hidden">
    <div className="relative z-10 flex">
    
      {/* Background Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

        <Sidebar />

        <div className="flex-1 p-8">
          <Navbar />
          <div className="mt-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;
