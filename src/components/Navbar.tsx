
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-12">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white font-display">travelaja</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-white hover:text-white/80 transition-colors">Home</Link>
          <Link to="/discover" className="font-medium text-white hover:text-white/80 transition-colors">Discover</Link>
          <Link to="#" className="font-medium text-white hover:text-white/80 transition-colors">Services</Link>
          <Link to="#" className="font-medium text-white hover:text-white/80 transition-colors">News</Link>
          <Link to="#" className="font-medium text-white hover:text-white/80 transition-colors">About Us</Link>
          <Link to="#" className="font-medium text-white hover:text-white/80 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-white">
            <img 
              src="/lovable-uploads/174e3866-66a2-473d-a61f-4ca64c3f9366.png" 
              alt="Indonesia flag" 
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="mr-1">ID</span>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/discover" className="font-medium hover:text-primary transition-colors">Discover</Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">News</Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">About Us</Link>
            <Link to="#" className="font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
