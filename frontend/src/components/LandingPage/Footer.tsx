import footerLogo from "../../assets/Navbar Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t bg-black border-gray-800 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 mb-6">
          <div className="flex items-center">
            <img className="h-8 w-auto" src={footerLogo} alt="Spark Logo" />
          </div>

          <nav className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              Terms
            </a>
            <a
              href="/support"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              Support
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
            >
              About
            </a>
          </nav>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Spark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
