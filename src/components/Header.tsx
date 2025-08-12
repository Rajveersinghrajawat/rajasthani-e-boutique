import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  const navItems = [
    { name: 'PRODUCTS', href: '/products' },
    { name: 'PURE POSHAK', href: '/products' }, 
    { name: 'SEMI PURE POSHAK', href: '/products' },
    { name: 'STITCHED POSHAKS', href: '/products' },
    { name: 'REGULAR SUIT', href: '/products' },
    { name: 'FABRIC', href: '/products' },
    { name: 'ACCESSORIES', href: '/products' },
  ];

  return (
    <header className="bg-background border-b border-border">
      {/* Top Banner */}
      <div className="bg-gradient-royal text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-medium">
          FREE SHIPPING ON DOMESTIC ORDERS ABOVE RS 2,000.
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-3xl font-serif text-primary font-bold tracking-wide hover:text-primary/80 transition-colors">
                AARTI
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-small text-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
         
            {/* <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-64 border-border focus:border-primary transition-colors"
                />
              </div>
            </div> */}
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Search className="h-5 w-5 md:hidden" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <Heart className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="hover:bg-muted relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;