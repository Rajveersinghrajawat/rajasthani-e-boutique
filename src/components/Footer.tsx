import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-royal-maroon text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif font-bold text-royal-gold mb-2">
                RANISA
              </h3>
              <p className="text-sm opacity-80">By A & S Daughter</p>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed">
              Preserving the rich heritage of Rajputi fashion with authentic traditional poshaks, 
              crafted with love and attention to detail for the modern woman.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-royal-gold/20 hover:text-royal-gold">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-royal-gold/20 hover:text-royal-gold">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-royal-gold/20 hover:text-royal-gold">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-royal-gold">Quick Links</h4>
            <div className="space-y-3">
              {['About Us', 'Size Guide', 'Shipping Info', 'Return Policy', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-royal-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-royal-gold">Categories</h4>
            <div className="space-y-3">
              {['Pure Poshak', 'Semi Pure Poshak', 'Stitched Poshaks', 'Regular Suits', 'Fabrics', 'Accessories'].map((category) => (
                <a 
                  key={category}
                  href="#" 
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-royal-gold transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-royal-gold">Get In Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-royal-gold" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-royal-gold" />
                <span className="text-sm">info@ranisaonline.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-royal-gold mt-1" />
                <span className="text-sm">123 Heritage Street, Rajasthan, India</span>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-royal-gold">Newsletter</h5>
              <p className="text-xs opacity-90">Subscribe for latest collections & offers</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-royal-gold"
                />
                <Button className="bg-royal-gold hover:bg-royal-gold/90 text-royal-maroon">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>© {currentYear} Ranisa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Made with ❤️ in Rajasthan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;