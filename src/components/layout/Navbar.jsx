import Profile from "../profile/ProfileSection";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">

      <h2 className="text-2xl font-semibold">
        Welcome Back 👑
      </h2>

      <button className="px-5 py-2 bg-linear-to-r from-orange-500 to-pink-500 rounded-xl hover:scale-105 transition shadow-lg">
        + Add Expense
      </button>
      
      <Profile />
    </div>
  );
};

export default Navbar;
