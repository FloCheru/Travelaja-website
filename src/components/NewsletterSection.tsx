
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Get Travel Deals & Updates
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter and be the first to know about exclusive deals, new destinations, and travel tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/20 border-white/30 placeholder:text-white/70 text-white focus-visible:ring-white"
            />
            <Button 
              variant="secondary"
              className="shrink-0"
            >
              <Send className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
