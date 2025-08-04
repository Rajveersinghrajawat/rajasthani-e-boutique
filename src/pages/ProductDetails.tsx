import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Minus, Plus, Truck, Shield, RefreshCw, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app this would come from API
  const product = {
    id: parseInt(id || '1'),
    name: 'GULABBAAH POSHAK',
    description: 'Natural crep poshak with intricate thread embroidery and traditional patterns',
    longDescription: 'This exquisite Gulabbaah Poshak is crafted from natural crepe fabric and features intricate thread embroidery with traditional Rajasthani patterns. Perfect for festivals, weddings, and special occasions.',
    price: 5999,
    originalPrice: 7999,
    images: [product1, product2, product3],
    rating: 5,
    reviewCount: 24,
    isNew: true,
    isFreeShipping: true,
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    fabric: 'Natural Crepe',
    work: 'Thread Embroidery',
    occasion: 'Festival, Wedding',
    care: 'Dry Clean Only',
    sku: 'RAN-GP-001'
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'FULBAHAR POSHAK',
      description: 'Thread embroidery with zari and sequence work',
      price: 3800,
      originalPrice: 4500,
      image: product2,
      rating: 5,
      isNew: true,
      isFreeShipping: true
    },
    {
      id: 3,
      name: 'ROYAL MAROON POSHAK',
      description: 'Traditional royal maroon poshak with golden thread work',
      price: 4200,
      originalPrice: 5200,
      image: product3,
      rating: 5,
      isNew: false,
      isFreeShipping: true
    }
  ];

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} (Size: ${selectedSize}, Qty: ${quantity}) has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/products">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-md border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.isNew && (
                <Badge className="mb-2 bg-primary text-primary-foreground">NEW ARRIVAL</Badge>
              )}
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${i < product.rating ? 'text-royal-gold fill-current' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="secondary">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              {product.isFreeShipping && (
                <p className="text-sm text-secondary font-medium">
                  FREE Shipping on this product
                </p>
              )}
            </div>

            <p className="text-muted-foreground">
              {product.longDescription}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className="w-12 h-12"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!product.inStock}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                onClick={handleWishlist}
                className="w-12"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-4 w-4 text-primary" />
                <span>Free shipping on orders above ₹2,000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% authentic products</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RefreshCw className="h-4 w-4 text-primary" />
                <span>Easy 7-day returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="care">Care Instructions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-card rounded-lg border border-border">
              <div>
                <h4 className="font-semibold mb-3">Specifications</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SKU:</span>
                    <span>{product.sku}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fabric:</span>
                    <span>{product.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Work:</span>
                    <span>{product.work}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Occasion:</span>
                    <span>{product.occasion}</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Description</h4>
                <p className="text-sm text-muted-foreground">
                  This beautiful poshak represents the rich cultural heritage of Rajasthan. 
                  Each piece is carefully crafted by skilled artisans using traditional techniques 
                  passed down through generations.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="care" className="mt-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-4">Care Instructions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Dry clean only to maintain fabric quality</li>
                <li>• Store in a cool, dry place</li>
                <li>• Avoid direct sunlight for extended periods</li>
                <li>• Handle embroidery work with care</li>
                <li>• Iron on low heat if necessary</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold mb-4">Customer Reviews</h4>
              <p className="text-muted-foreground">Reviews coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
            You might also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;