import navbarLogo from "../../assets/Navbar Logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-6 border-b-1 border-b-yellow-400 backdrop-blur-sm">
      <img src={navbarLogo} alt="navbar logo" className="h-8 sm:h-10" />
      <div className="flex gap-3 sm:gap-4">
        <button className="px-4 py-2 text-sm sm:text-base text-white hover:text-gray-300 transition-colors">
          Sign In
        </button>
        <button className="px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm sm:text-base font-semibold hover:bg-yellow-300 transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
