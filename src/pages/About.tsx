
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Calendar, Headphones, MapPin, Building2, Palmtree, Map } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative w-full h-48 bg-gray-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/60"></div>
        <img 
          src="/lovable-uploads/bec4c880-7502-4f6f-ab3b-78f431078938.png" 
          alt="About Us Banner" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <h1 className="text-4xl font-bold text-white z-10">About Us</h1>
      </div>

      {/* Why Choose Us */}
      <section className="container mx-auto py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-center mb-2">Why Choose Us?</h2>
        <p className="text-center text-gray-600 mb-10">Travel with like-minded travelers from all over the globe</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Best price guarantee</h3>
            <p className="text-gray-600">Find a lower price and we'll match it plus give you an additional discount.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Search, select and book your bus tickets with instant confirmation.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <Headphones className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Customer Service 24h</h3>
            <p className="text-gray-600">Our customer support team is ready to assist you at any time.</p>
          </div>
        </div>
      </section>

      {/* About Travelaja */}
      <section className="container mx-auto py-8 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">About Travelaja.com</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat nisl, tincidunt. Id laoreet 
              suspendisse consequat gravida lacus, in amet. Amet quis est in diam. Nisi, amet aliquet pellentesque vitae. 
              Adipiscing enim tristique morbi fermentum sed. Commodo arcu sed sed interdum volutpat. Ut auctor scelerisque 
              pellentesque ac sed ultrices cursus et. Ullamcorper pellentesque et sit id in ornare semper ipsum a diam.
            </p>
            <p className="text-gray-600 mb-4">
              Vel dis a non amet a pellentesque. Lacinia nunc tortor, amet tempor feugiat. Sapien amet libero sit nulla 
              pellentesque ut sit urna. Faucibus eget sed rhoncus ac. Lectus tincidunt pretium scelerisque molestie lectus 
              varius at. Amet tincidunt elit quis neque, non eu nulla. Diam placerat lorem sagittis, non vel tempor. Vulputate 
              porttitor suspendisse ultrices sodales sed at velit. Lorem sem ipsum erat tellus fusce eleifend nisi, nunc. 
              Eleifend cursus adipiscing in dolor diam eu. Dignissim leo vel orci sit pulvinar.
            </p>
          </div>
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="About Travelaja" 
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className="container mx-auto py-10 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6">Our Teams</h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Agung Prabowo" 
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Agung Prabowo</h3>
            <p className="text-gray-600 text-sm">Chief Executive Officer</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Viola Resti" 
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Viola Resti</h3>
            <p className="text-gray-600 text-sm">Marketing Director</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Rahmat Hidayat" 
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Rahmat Hidayat</h3>
            <p className="text-gray-600 text-sm">Head of IT Department</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Johan" 
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Johan</h3>
            <p className="text-gray-600 text-sm">Head of Product</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
              alt="Tantiana Rahardi" 
              className="w-48 h-48 object-cover rounded-lg mb-2"
            />
            <h3 className="font-semibold">Tantiana Rahardi</h3>
            <p className="text-gray-600 text-sm">Account Executive</p>
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="container mx-auto py-10 px-4 md:px-8 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-gray-600 w-8 h-8" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Building2 className="text-gray-600 w-8 h-8" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Palmtree className="text-gray-600 w-8 h-8" />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Map className="text-gray-600 w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
