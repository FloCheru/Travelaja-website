
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import Navbar from '../components/Navbar';

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Banner Header */}
      <div 
        className="relative h-[200px] w-full overflow-hidden"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Title */}
        <div className="container-custom relative z-10 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-display">Discover</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Featured Destination */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <div className="flex items-start gap-4">
                <div className="font-bold text-4xl bg-primary text-white h-14 w-14 flex items-center justify-center rounded">
                  D
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis aliquet sed vitae. 
                    Vivamus ac vulputate feugiat magna tristique orci, posuere fringilla nibh vitae arcu. Elementum 
                    posuere non enim tempus vel vitae. Nibh elementum feugiat id augue ut vulputate 
                    lorem lobortis consequat fermentum.
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh diam et euismod et vulputate 
                    consectetur sed laoreet lorem. Lorem egestas et augue lacus, viverra vitae congue aut consequat 
                    elit. Amet, mi dolor pretium magna diam vulputate commodo sed laoreet augue. Magna mi.
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-6 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126484.88891127615!2d115.1165626950076!3d-8.675264935849957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0b1c7b47%3A0x5030bfbca830fc0!2sDenpasar%2C%20Denpasar%20City%2C%20Bali!5e0!3m2!1sen!2sid!4v1713281159060!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Main Feature Destination */}
            <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
                alt="Bali Beach" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">Memorable Festivals On Bali Beach</h2>
                <div className="flex items-center mb-4 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>Bali, Indonesia</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet sed vitae 
                  viverra fermentum. Placerat ursa integer nibh justo. Dictum vulputate odio mauris amet, dictumst 
                  imperdiet. Faucibus consectetur mauris tristique dolor id diam, adipiscing et. Semper mi proin 
                  pretium cursus vel pretium. Consectetur posuere socius amet sunt. Euismod turpis pellentesque 
                  sit risus eu, augue nulla. Faucibus urna mi placerat sed.
                </p>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet sed vitae 
                  viverra fermentum. Placerat ursa integer nibh justo. Dictum vulputate odio mauris amet, dictumst 
                  imperdiet.
                </p>

                {/* Gallery */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80" 
                    alt="Bali Beach Festival 1" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
                    alt="Bali Beach Festival 2" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <p className="text-gray-700 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet sed vitae 
                  viverra fermentum. Placerat ursa integer nibh justo. Dictum vulputate odio mauris amet, dictumst 
                  imperdiet. Faucibus consectetur mauris tristique dolor id diam, adipiscing et. Semper mi proin 
                  pretium cursus vel pretium. Consectetur posuere socius amet sunt. Euismod turpis pellentesque 
                  sit risus eu, augue nulla. Faucibus urna mi placerat sed.
                </p>

                {/* Pagination */}
                <div className="mt-8">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Other Destinations */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Other Destinations</h3>
                <a href="#" className="text-primary text-sm font-medium">See all</a>
              </div>

              <ScrollArea className="h-[500px] pr-4">
                {[1, 2, 3].map((index) => (
                  <Card key={index} className="mb-4 overflow-hidden">
                    <div className="relative">
                      <img 
                        src={`https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80`} 
                        alt={`Wakatobi Beach ${index}`} 
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h4 className="font-bold text-lg">Wakatobi Beach Is A Paradise For Coral Reefs in Indonesia</h4>
                        <div className="flex items-center mt-1 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>Wakatobi, Indonesia</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4 flex justify-end">
                      <a href="#" className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition-colors">
                        View More
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
