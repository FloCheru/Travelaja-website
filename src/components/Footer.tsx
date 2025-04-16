
import { Instagram, Facebook, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2F5343] text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">travelaja</h3>
            <p className="text-white/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut 
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla 
              urna, porttitor rhoncus dolor purus non enim praesent elementum 
              facilisis leo, vel
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  {/* Using Github icon as a placeholder for the Dribbble-like icon in the image */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dribbble"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Links</h4>
            <ul className="space-y-3">
              <li><Link to="/discover" className="text-white/80 hover:text-white transition-colors">Discover</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Special Deals</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Blog & Articles</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Term and Condition</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/80">Address: Jl.Codelaras No.205A</li>
              <li className="text-white/80">Kediri, Pare AG17</li>
              <li className="text-white/80">Phone: 123 456 7890</li>
              <li className="text-white/80">Email: myagungperdana@gmail.com</li>
              <li className="text-white/80">Maps: Kediri, East java</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
