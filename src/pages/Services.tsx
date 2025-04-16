import {
  MapPin,
  DollarSign,
  Globe,
  Building,
  Camera,
  Baby,
  Wine,
  Tent,
  Mountain,
  Gem,
  Droplet,
  Plane,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Header */}
      <div
        className="relative h-[200px] w-full overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Title */}
        <div className="container-custom relative z-10 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">
            Service
          </h1>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="container mx-auto py-10 px-4">
        {/* Top Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="mb-4 bg-green-100 p-3 rounded-full">
              <DollarSign size={30} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Get Best Price</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim
              sit, faucibus nulls facilisis.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm mt-auto">
              Read More
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="mb-4 bg-blue-100 p-3 rounded-full">
              <Globe size={30} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">All Destination</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim
              sit, faucibus nulls facilisis.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm mt-auto">
              Read More
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="mb-4 bg-purple-100 p-3 rounded-full">
              <Building size={30} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">City Tours</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim
              sit, faucibus nulls facilisis.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm mt-auto">
              Read More
            </button>
          </div>

          {/* Service Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="mb-4 bg-orange-100 p-3 rounded-full">
              <Camera size={30} className="text-orange-600" />
            </div>
            <h3 className="text-lg font-bold mb-2">Photography</h3>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim
              sit, faucibus nulls facilisis.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded text-sm mt-auto">
              Read More
            </button>
          </div>
        </div>

        {/* Water City Dreams Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="relative rounded-lg overflow-hidden h-60 group">
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
              alt="Water City Dreams"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Water City Dreams</h3>
              <p className="text-sm mb-4">September 30, 2022</p>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm self-start">
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg overflow-hidden h-60 group">
            <img
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80"
              alt="Water City Dreams"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Water City Dreams</h3>
              <p className="text-sm mb-4">September 30, 2022</p>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm self-start">
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-lg overflow-hidden h-60 group">
            <img
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
              alt="Water City Dreams"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Water City Dreams</h3>
              <p className="text-sm mb-4">September 30, 2022</p>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm self-start">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          {/* Facilities Header */}
          <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
              alt="Facilities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Facilities</h2>
              <p className="text-white text-sm mb-6 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                enim sit, faucibus nulls facilisis. Etiam ac tincidunt magna.
                Vivamus et eros, consectetur feugiat dignissim at, tempor non
                quam.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm self-start">
                Read More
              </button>
            </div>
          </div>

          {/* Facilities Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <Baby size={40} className="mb-2" />
              <p className="font-bold">Baby</p>
              <p className="text-xs text-gray-500">FACILITIES</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <Wine size={40} className="mb-2" />
              <p className="font-bold">Drinks</p>
              <p className="text-xs text-gray-500">INCLUDED</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <Tent size={40} className="mb-2" />
              <p className="font-bold">Camp</p>
              <p className="text-xs text-gray-500">INCLUDED</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <Globe size={40} className="mb-2" />
              <p className="font-bold">World</p>
              <p className="text-xs text-gray-500">INCLUDED</p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div>
          <h2 className="text-center text-3xl font-bold mb-10">OUR SERVICE</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mountain size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Hiking</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Gem size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Staking</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mountain size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Climbing</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Globe size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Tours</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Droplet size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Diving</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Service 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Plane size={40} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Flying</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Pharetra amet libero, blandit est feugiat sed sagittis ut
                  magni at. Quidque exerunt non ut at quam placerat.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
