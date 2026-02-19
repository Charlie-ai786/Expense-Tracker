import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
// import profileImage from "../../assets/profile.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center relative z-50">

      <h2 className="text-2xl font-semibold">
        Welcome Back 👑
      </h2>

      <div className="flex items-center gap-4">

        <button className="px-5 py-2 bg-linear-to-r from-orange-500 to-pink-500 rounded-xl hover:scale-105 transition shadow-lg">
          + Add Expense
        </button>

        <div className="relative">
          <FaUserCircle
            className="text-3xl cursor-pointer hover:text-cyan-400 transition"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl z-50">

              <div className="text-center">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-3 border-2 border-white"
                />

                <h3 className="font-semibold text-lg">Subhash</h3>
                <p className="text-sm text-gray-300">
                  Computer Science Student
                </p>
              </div>

              <div className="mt-4 border-t border-white/20 pt-3 space-y-2 text-sm">
                <button className="block w-full text-left hover:text-indigo-400">
                  My Profile
                </button>
                <button className="block w-full text-left hover:text-indigo-400">
                  Settings
                </button>
                <button className="block w-full text-left text-red-400 hover:text-red-500">
                  Logout
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
