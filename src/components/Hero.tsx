
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800/70 to-blue-900/70 z-0"></div>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')" 
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Explore The Beautiful World
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Discover new places and experiences. Your dream vacation is just a few clicks away.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-xl p-5 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-3 md:pb-0 md:pr-3">
              <MapPin className="text-primary" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-500 block">Location</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full focus:outline-none text-gray-800"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-3 md:pb-0 md:pr-3">
              <Calendar className="text-primary" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-500 block">Check-in</label>
                <input
                  type="text"
                  placeholder="Add date"
                  className="w-full focus:outline-none text-gray-800"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 border-b md:border-b-0 md:border-r pb-3 md:pb-0 md:pr-3">
              <Calendar className="text-primary" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-500 block">Check-out</label>
                <input
                  type="text"
                  placeholder="Add date"
                  className="w-full focus:outline-none text-gray-800"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-primary" size={20} />
              <div className="flex-1">
                <label className="text-sm text-gray-500 block">Travelers</label>
                <select className="w-full focus:outline-none text-gray-800 bg-transparent">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-5 flex justify-center">
            <Button className="px-12 py-6 rounded-full flex items-center gap-2">
              <Search size={18} />
              <span>Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
