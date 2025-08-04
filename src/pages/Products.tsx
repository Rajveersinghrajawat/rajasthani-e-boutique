import { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: 'GULABBAAH POSHAK',
      description: 'Natural crep poshak with intricate thread embroidery and traditional patterns',
      price: 5999,
      originalPrice: 7999,
      image: product1,
      rating: 5,
      isNew: true,
      isFreeShipping: true,
      category: 'Pure Poshak'
    },
    {
      id: 2,
      name: 'FULBAHAR POSHAK',
      description: 'Thread embroidery with zari and sequence work, perfect for special occasions',
      price: 3800,
      originalPrice: 4500,
      image: product2,
      rating: 5,
      isNew: true,
      isFreeShipping: true,
      category: 'Semi Pure Poshak'
    },
    {
      id: 3,
      name: 'ROYAL MAROON POSHAK',
      description: 'Traditional royal maroon poshak with golden thread work and mirror embellishments',
      price: 4200,
      originalPrice: 5200,
      image: product3,
      rating: 5,
      isNew: false,
      isFreeShipping: true,
      category: 'Pure Poshak'
    },
    {
      id: 4,
      name: 'ELEGANT PINK POSHAK',
      description: 'Beautiful pink poshak with delicate embroidery work and traditional motifs',
      price: 4800,
      originalPrice: 6000,
      image: product1,
      rating: 4,
      isNew: true,
      isFreeShipping: true,
      category: 'Stitched Poshaks'
    },
    {
      id: 5,
      name: 'FESTIVE GOLD POSHAK',
      description: 'Stunning gold poshak with heavy zari work and premium fabric quality',
      price: 8999,
      originalPrice: 10999,
      image: product2,
      rating: 5,
      isNew: false,
      isFreeShipping: true,
      category: 'Pure Poshak'
    },
    {
      id: 6,
      name: 'TRADITIONAL BLUE POSHAK',
      description: 'Classic blue poshak with traditional Rajasthani patterns and mirror work',
      price: 3200,
      originalPrice: 4000,
      image: product3,
      rating: 4,
      isNew: false,
      isFreeShipping: true,
      category: 'Regular Suit'
    }
  ];

  const categories = ['Pure Poshak', 'Semi Pure Poshak', 'Stitched Poshaks', 'Regular Suit'];
  const priceRanges = [
    { label: 'Under ₹3,000', min: 0, max: 3000 },
    { label: '₹3,000 - ₹5,000', min: 3000, max: 5000 },
    { label: '₹5,000 - ₹8,000', min: 5000, max: 8000 },
    { label: 'Above ₹8,000', min: 8000, max: Infinity }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Our Products
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our exquisite collection of traditional Rajputi poshaks, crafted with authentic techniques and premium materials.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Showing {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center border border-border rounded-md">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={category} />
                    <Label htmlFor={category} className="text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Price Range</h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <div key={range.label} className="flex items-center space-x-2">
                    <Checkbox id={range.label} />
                    <Label htmlFor={range.label} className="text-sm">
                      {range.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="free-shipping" />
                  <Label htmlFor="free-shipping" className="text-sm">
                    Free Shipping
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="new-arrivals" />
                  <Label htmlFor="new-arrivals" className="text-sm">
                    New Arrivals
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="on-sale" />
                  <Label htmlFor="on-sale" className="text-sm">
                    On Sale
                  </Label>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;