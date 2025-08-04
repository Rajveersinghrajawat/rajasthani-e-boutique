import { Card, CardContent } from '@/components/ui/card';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      title: 'PURE POSHAK',
      image: product1,
      description: 'Authentic traditional poshaks with pure fabrics'
    },
    {
      id: 2,
      title: 'SEMI PURE POSHAK',
      image: product2,
      description: 'Elegant semi-pure designs with rich embroidery'
    },
    {
      id: 3,
      title: 'STITCHED POSHAK',
      image: product3,
      description: 'Ready-to-wear stitched traditional outfits'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer overflow-hidden border-border hover:shadow-warm transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-royal-gold transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {category.description}
                    </p>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-2 border-royal-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-royal-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;