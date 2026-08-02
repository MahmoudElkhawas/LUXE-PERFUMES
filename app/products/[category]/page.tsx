'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { catalogData } from '@/lib/products';
import { Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function ProductsPage({ params }: { params: { category: 'men' | 'women' | 'unisex' } }) {
  const category = params.category as 'men' | 'women' | 'unisex';
  const data = catalogData[category];
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddedToCart(id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Category Hero */}
      <section className="pt-32 md:pt-40 pb-12 section-padding bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-width-container">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {data.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.products.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Product Card */}
                <div className="bg-muted/50 rounded-lg overflow-hidden mb-4 h-72 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:bg-muted/70 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20 transition-all" />
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-accent/20 transition-colors">
                    {String(product.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        addedToCart === product.id
                          ? 'bg-accent text-white'
                          : 'bg-primary/10 text-primary hover:bg-accent hover:text-white'
                      }`}
                      aria-label="Add to cart"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-width-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Not Sure Which One?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our fragrance experts are here to help you find the perfect scent. Schedule a consultation today.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Get Personalized Recommendation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
