
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import TravelPackages from '../components/TravelPackages';
import Testimonials from '../components/Testimonials';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TravelPackages />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
