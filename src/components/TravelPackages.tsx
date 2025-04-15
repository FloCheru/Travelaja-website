
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Users } from 'lucide-react';

interface PackageProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  date: string;
  people: string;
  price: string;
  oldPrice?: string;
}

const PackageCard = ({ title, description, image, duration, date, people, price, oldPrice }: PackageProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full md:w-2/5 h-60 md:h-auto relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {oldPrice && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
            Special Offer
          </div>
        )}
      </div>
      <div className="w-full md:w-3/5 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-1 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-1 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-1 text-primary" />
            <span>{people}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">${price}</span>
            {oldPrice && (
              <span className="text-gray-500 line-through ml-2">${oldPrice}</span>
            )}
            <span className="block text-sm text-gray-500">per person</span>
          </div>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

const TravelPackages = () => {
  const packages = [
    {
      title: "Bali: Island of the Gods",
      description: "Experience the perfect blend of relaxation and adventure in Bali with pristine beaches, lush rice terraces, and vibrant culture.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
      duration: "7 Days",
      date: "Available All Year",
      people: "2-10 People",
      price: "1299",
      oldPrice: "1499",
    },
    {
      title: "Explore Japan: Tokyo & Kyoto",
      description: "Discover the perfect balance of modern city life and ancient traditions in Japan's most iconic cities.",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80",
      duration: "10 Days",
      date: "April - November",
      people: "2-8 People",
      price: "2599",
    },
    {
      title: "Santorini Getaway",
      description: "Enjoy breathtaking sunsets, pristine white villages, and crystal-clear waters on Greece's most romantic island.",
      image: "https://images.unsplash.com/photo-1589293385827-f37b9e8039b5?auto=format&fit=crop&q=80",
      duration: "5 Days",
      date: "May - October",
      people: "2-4 People",
      price: "1899",
      oldPrice: "2099",
    },
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Popular Travel Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted travel packages with everything you need for an unforgettable experience.
          </p>
        </div>
        
        <div className="flex flex-col space-y-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              image={pkg.image}
              duration={pkg.duration}
              date={pkg.date}
              people={pkg.people}
              price={pkg.price}
              oldPrice={pkg.oldPrice}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">View All Packages</Button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;
