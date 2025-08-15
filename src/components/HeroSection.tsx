import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBride from '@/assets/hero-bride.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-elegant">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBride}
          alt="Traditional Rajputi Bride"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Decorative Elements */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-royal-gold">
              <div className="w-2 h-2 bg-royal-gold rounded-full animate-float"></div>
              <div className="w-1 h-1 bg-royal-gold rounded-full animate-float" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-royal-gold rounded-full animate-float" style={{animationDelay: '0.4s'}}></div>
              <div className="w-2 h-2 bg-royal-gold rounded-full animate-float" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-6 leading-tight">
            ADD A <span className="text-royal-gold">FRESH TOUCH</span> TO<br />
            YOUR WARDROBE WITH
          </h1>

          {/* Brand Logo Section */}
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-serif text-primary mb-2 drop-shadow-lg" 
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--royal-red)), hsl(var(--royal-gold)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                RAVARTI<br/>
                CULTURE
            </h2>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Button 
              className="bg-gradient-royal hover:shadow-royal text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group"
            >
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Decorative Bottom Elements */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 text-royal-gold">
              <div className="w-2 h-2 bg-royal-gold rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="w-1 h-1 bg-royal-gold rounded-full animate-float" style={{animationDelay: '1.2s'}}></div>
              <div className="w-1 h-1 bg-royal-gold rounded-full animate-float" style={{animationDelay: '1.4s'}}></div>
              <div className="w-2 h-2 bg-royal-gold rounded-full animate-float" style={{animationDelay: '1.6s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;