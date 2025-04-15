
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial = ({ quote, name, role, image }: TestimonialProps) => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden bg-white shadow-lg p-6 md:p-0">
      <div className="w-full md:w-1/3 h-64 md:h-auto relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
        <Quote className="text-primary opacity-20 w-16 h-16 mb-4" />
        <p className="text-lg text-gray-700 mb-6 italic">{quote}</p>
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Travelaja made planning our honeymoon incredibly easy. Everything was perfectly organized, and we could fully enjoy our special trip without any worries.",
      name: "Sarah & John",
      role: "Newlyweds, USA",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80",
    },
    {
      quote: "I've traveled to over 30 countries, and my experience with Travelaja was by far the smoothest. Their local guides really made the difference in experiencing authentic culture.",
      name: "Michael Chen",
      role: "Adventure Traveler",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?auto=format&fit=crop&q=80",
    },
    {
      quote: "As a solo female traveler, safety is my priority. Travelaja understood this and ensured I had a wonderful yet secure experience exploring South America.",
      name: "Emma Rodriguez",
      role: "Digital Nomad",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from those who've experienced unforgettable journeys with us.
          </p>
        </div>
        
        <div className="relative">
          <Testimonial
            quote={testimonials[currentIndex].quote}
            name={testimonials[currentIndex].name}
            role={testimonials[currentIndex].role}
            image={testimonials[currentIndex].image}
          />
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
