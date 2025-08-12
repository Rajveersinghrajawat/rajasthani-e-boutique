import ProductCard from './ProductCard';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const BestSellProducts = () => {
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
      isFreeShipping: true
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
      isFreeShipping: true
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
      isFreeShipping: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Best Selling Products
          </h2>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px bg-gradient-royal w-20"></div>
            <div className="w-3 h-3 bg-royal-gold rounded-full"></div>
            <div className="h-px bg-gradient-royal w-20"></div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collection of authentic Rajputi poshaks, crafted with traditional techniques and modern elegance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-royal text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-royal transition-all duration-300 hover:scale-105">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellProducts;