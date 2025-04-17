import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pour ajouter l'écouteur d'événement de scroll sur la home page
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav
      className={`flex justify-between fixed top-0 left-0 w-full z-50 py-6 px-4 md:px-4 lg:px-12 transition-colors duration-300 ${
        isHomePage && !scrolled
          ? "bg-transparent text-white"
          : "bg-white shadow-md text-black"
      }`}
    >
      <Link to="/" className="flex items-center">
        <span className="text-2xl font-bold font-display">travelaja</span>
      </Link>
      {/* </div> */}
      {/* Desktop Navigation */}
      {/* Links */}
      <div className="hidden md:flex items-center justify-between w-full max-w-3xl mx-8">
        <Link
          to="/"
          className="font-medium hover:text-white/80 transition-colors"
        >
          Accueil
        </Link>
        <Link
          to="/discover"
          className="font-medium hover:text-white/80 transition-colors"
        >
          Découvrir
        </Link>
        <Link
          to="/services"
          className="font-medium  hover:text-white/80 transition-colors"
        >
          Services
        </Link>
        <Link
          to="/news"
          className="font-medium  hover:text-white/80 transition-colors"
        >
          News
        </Link>
        <Link
          to="/about"
          className="font-medium  hover:text-white/80 transition-colors"
        >
          A propos
        </Link>
        <Link
          to="/contact"
          className="font-medium hover:text-white/80 transition-colors"
        >
          Contact
        </Link>
      </div>
      {/* Account */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center text-white">
          <img
            src="/lovable-uploads/174e3866-66a2-473d-a61f-4ca64c3f9366.png"
            alt="Indonesia flag"
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="mr-1">Profil</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium hover:text-primary transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/discover"
              className="font-medium hover:text-primary transition-colors"
            >
              Découvre
            </Link>
            <Link
              to="/services"
              className="font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/news"
              className="font-medium hover:text-primary transition-colors"
            >
              News
            </Link>
            <Link
              to="/about"
              className="font-medium hover:text-primary transition-colors"
            >
              A propos
            </Link>
            <Link
              to="/contact"
              className="font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
