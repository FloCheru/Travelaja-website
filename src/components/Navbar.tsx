
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 fixed w-full top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary font-display">Travelaja</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#" className="font-medium hover:text-primary transition-colors">Discover</a>
          <a href="#" className="font-medium hover:text-primary transition-colors">Special Deals</a>
          <a href="#" className="font-medium hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Register</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#" className="font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Discover</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Special Deals</a>
            <a href="#" className="font-medium hover:text-primary transition-colors">Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
