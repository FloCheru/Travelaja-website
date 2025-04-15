
import { Button } from '@/components/ui/button';

interface DestinationProps {
  name: string;
  country: string;
  image: string;
  price: string;
  rating: number;
}

const DestinationCard = ({ name, country, image, price, rating }: DestinationProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white group">
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 bg-primary text-white px-4 py-2 rounded-tr-xl">
          ${price}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex items-center">
          <span className="inline-block w-4 h-4 mr-2">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z" stroke="#3A86FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#3A86FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          {country}
        </p>
        <Button variant="outline" className="w-full">View Details</Button>
      </div>
    </div>
  );
};

const PopularDestinations = () => {
  const destinations = [
    {
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80",
      price: "899",
      rating: 4.8,
    },
    {
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80",
      price: "1299",
      rating: 4.7,
    },
    {
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80",
      price: "1199",
      rating: 4.9,
    },
    {
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?auto=format&fit=crop&q=80",
      price: "1399",
      rating: 4.6,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our top-rated destinations all around the world. Discover breathtaking landscapes, vibrant cities, and unique cultures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              country={destination.country}
              image={destination.image}
              price={destination.price}
              rating={destination.rating}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">View All Destinations</Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
