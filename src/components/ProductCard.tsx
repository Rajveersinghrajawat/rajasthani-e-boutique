import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  isFreeShipping?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  description, 
  price, 
  originalPrice, 
  image, 
  rating = 5,
  isNew = false,
  isFreeShipping = true 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-warm transition-all duration-500 hover:scale-105 bg-card">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <Link to={`/product/${id}`}>
            <img 
              src={image}
              alt={name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-primary text-primary-foreground">NEW</Badge>
            )}
            {isFreeShipping && (
              <Badge className="bg-secondary text-secondary-foreground">FREE SHIPPING</Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground"
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
            </Button>
          </div>

          {/* Quick Add to Cart */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-royal-gold fill-current' : 'text-muted-foreground'}`}
              />
            ))}
          </div>

          <Link to={`/product/${id}`}>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer">
              {name}
            </h3>
          </Link>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">
                ₹{price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            {isFreeShipping && (
              <span className="text-xs text-secondary font-medium">
                FREE Shipping
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;