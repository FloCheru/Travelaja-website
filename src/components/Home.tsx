import { Search, MapPin, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
        }}
      ></div>

      <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Explorez le monde en toute confiance
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Plongez dans un monde d’aventures sur mesure, découvrez des lieux
            d’exception et profitez d’un accompagnement de qualité à chaque
            étape. Transformez vos envies d’évasion en souvenirs inoubliables.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-xl p-1 max-w-5xl mx-auto w-full md:w-auto flex flex-col md:flex-row">
          <div className="flex items-center px-4 py-3 md:border-r border-gray-200">
            <MapPin className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Ville ou destination"
              className="w-full focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex items-center px-4 py-3 md:border-r border-gray-200">
            <Calendar className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Date"
              className="w-full focus:outline-none text-gray-800"
            />
          </div>
          <div className="flex items-center px-4 py-3">
            <User className="text-gray-400 mr-2" size={20} />
            <input
              type="text"
              placeholder="Voyageurs"
              className="w-full focus:outline-none text-gray-800"
            />
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center">
            {/* <span className="mr-2">Find Trip Now</span> */}
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
