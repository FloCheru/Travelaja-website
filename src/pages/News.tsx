
import Navbar from "../components/Navbar";
import { CalendarIcon } from "lucide-react";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[300px] w-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-start px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our News</h1>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Travelaja Articles</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md">
            Featured Posts
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md">
            Popular Articles
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md">
            Recent Stories
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md">
            All Travel News
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
              alt="Beach scene with family"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Dream Vacations: 10 Amazing countries that an open right now</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 15, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
              alt="Mountains view"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Wild idea: New 3D destination's created around the world</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 10, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
              alt="Skiing photo"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">15 Picturesque Destinations you should visit in Europe this year</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 8, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80"
              alt="Mountain landscape"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">5 Destinations that you must visit while in Indonesia</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 5, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
              alt="Waterfall scene"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">The most interesting historical monuments in Indonesia</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 3, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
              alt="Skiing person"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Those looking before missing the discount</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 1, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 7 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
              alt="Hot air balloon"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">10 European Destinations you should visit in the past</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 12, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 8 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
              alt="City view"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Travel booking before missing the discount</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 10, 2023</span>
              </div>
            </div>
          </div>

          {/* Article 9 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
              alt="Lake view"
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2">Winter weather: 10 amazing countries that are open right now</h3>
              <div className="flex items-center text-gray-500 text-sm">
                <CalendarIcon size={14} className="mr-1" />
                <span>September 5, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
