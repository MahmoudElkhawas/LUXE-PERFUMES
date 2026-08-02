'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HorizontalCarousel } from '@/components/horizontal-carousel';
import { Award, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useState } from 'react';

const bestSellers = [
  { id: 1, name: 'Essence Divine', price: '$89', image: '/products/essence-divine.jpg' },
  { id: 2, name: 'Golden Hour', price: '$79', image: '/products/golden-hour.jpg' },
  { id: 3, name: 'Midnight Bloom', price: '$95', image: '/products/midnight-bloom.jpg' },
  { id: 4, name: 'Silk & Satin', price: '$85', image: '/products/silk-satin.jpg' },
  { id: 5, name: 'Pure Elegance', price: '$92', image: '/products/pure-elegance.jpg' },
];

const newCollection = [
  { id: 1, name: 'Velvet Dreams', price: '$99', image: '/products/velvet-dreams.jpg' },
  { id: 2, name: 'Crystal Night', price: '$88', image: '/products/crystal-night.jpg' },
  { id: 3, name: 'Rose Mystique', price: '$94', image: '/products/rose-mystique.jpg' },
  { id: 4, name: 'Amber Luxe', price: '$91', image: '/products/amber-luxe.jpg' },
  { id: 5, name: 'Pearl Essence', price: '$87', image: '/products/pearl-essence.jpg' },
];

export default function Home() {
  const { addItem, items, updateQuantity } = useCart();
  const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});

  const getProductQuantity = (productId: number) => {
    const cartItem = items.find(item => item.id === productId.toString());
    return cartItem?.quantity || 0;
  };

  const handleAddToCart = (product: typeof bestSellers[0]) => {
    const quantity = getProductQuantity(product.id);
    if (quantity === 0) {
      addItem({
        id: product.id.toString(),
        name: product.name,
        price: parseFloat(product.price.replace('$', '')),
        image: product.image,
        quantity: 1,
      });
    }
  };

  const handleQuantityChange = (product: typeof bestSellers[0], newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }
    updateQuantity(product.id.toString(), newQuantity);
  };


  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-20 md:pt-0 min-h-screen flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0">
          <Image
            src="/hero-perfume.jpg"
            alt="Luxury perfume collection"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/30 to-background/20 transition-opacity duration-700" />
        </div>

        <div className="relative z-10 max-width-container px-4 md:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-px w-12 bg-accent" />
                <div className="text-accent text-sm font-semibold tracking-widest">
                  DISCOVER
                </div>
                <div className="h-px w-12 bg-accent" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Discover Your <br /> Signature Scent
              </h1>

              <Link
                href="/shop"
                className="inline-block px-8 py-4 bg-accent text-white font-semibold uppercase tracking-widest text-sm hover:bg-accent/90 hover:shadow-xl transition-all duration-300 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}
              >
                Shop Now
              </Link>
            </div>

            <div className="hidden md:block relative h-96 animate-fade-in" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </section>


      <section className="py-24 bg-background">
        <div className="max-width-container px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/shop?category=Women" className="group">
              <div className="relative overflow-hidden h-96 mb-6 rounded-xl">
                <Image
                  src="/woman-collection.jpg"
                  alt="New arrivals collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold tracking-widest text-primary uppercase transition-colors duration-300 group-hover:text-accent">
                  Women
                </h3>
                <button className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold uppercase tracking-wider text-xs rounded-lg hover:bg-accent hover:text-white transition-all duration-300 group-hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </Link>

            <Link href="/shop?category=Unisex" className="group">
              <div className="relative overflow-hidden h-96 mb-6 rounded-xl">
                <Image
                  src="/unisex-collection.jpg"
                  alt="Best sellers collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold tracking-widest text-primary uppercase transition-colors duration-300 group-hover:text-accent">
                  Unisex
                </h3>
                <button className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold uppercase tracking-wider text-xs rounded-lg hover:bg-accent hover:text-white transition-all duration-300 group-hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </Link>

            <Link href="/shop?category=Men" className="group">
              <div className="relative overflow-hidden h-96 mb-6 rounded-xl">
                <Image
                  src="/man-collection.jpg"
                  alt="Luxury collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold tracking-widest text-primary uppercase transition-colors duration-300 group-hover:text-accent">
                  Man 
                </h3>
                <button className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold uppercase tracking-wider text-xs rounded-lg hover:bg-accent hover:text-white transition-all duration-300 group-hover:shadow-lg">
                  Shop Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
        <div className="max-width-container">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 pb-4 border-b-2 border-accent w-fit transition-all duration-300 hover:border-primary">
              Most Seller
            </h2>
            <p className="text-muted-foreground">Discover our best-selling fragrances loved by customers worldwide</p>
          </div>

          <div className="mt-8 md:mt-12 mx-auto">
            <HorizontalCarousel>
              {bestSellers.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-56 sm:w-64 md:w-72 group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-muted to-muted/80 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-4 md:p-5 text-center space-y-3">
                      <h3 className="text-sm md:text-base font-semibold text-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-accent font-bold text-lg">{product.price}</p>
                      {getProductQuantity(product.id) === 0 ? (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full px-4 py-2 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-2 bg-accent/10 rounded-lg p-1">
                          <button
                            onClick={() => handleQuantityChange(product, getProductQuantity(product.id) - 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-accent hover:text-white rounded transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-semibold text-accent text-sm">
                            {getProductQuantity(product.id)}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(product, getProductQuantity(product.id) + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-accent hover:text-white rounded transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 pb-4 border-b-2 border-accent w-fit transition-all duration-300 hover:border-primary">
              New Collection
            </h2>
            <p className="text-muted-foreground">Explore our latest arrivals and exclusive releases</p>
          </div>

          <div className="mt-8 md:mt-12 mx-auto">
            <HorizontalCarousel>
              {newCollection.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-56 sm:w-64 md:w-72 group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-muted to-muted/80 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-4 md:p-5 text-center space-y-3">
                      <h3 className="text-sm md:text-base font-semibold text-primary line-clamp-2 group-hover:text-accent transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-accent font-bold text-lg">{product.price}</p>
                      {getProductQuantity(product.id) === 0 ? (
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full px-4 py-2 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-2 bg-accent/10 rounded-lg p-1">
                          <button
                            onClick={() => handleQuantityChange(product, getProductQuantity(product.id) - 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-accent hover:text-white rounded transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-semibold text-accent text-sm">
                            {getProductQuantity(product.id)}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(product, getProductQuantity(product.id) + 1)}
                            className="w-7 h-7 flex items-center justify-center hover:bg-accent hover:text-white rounded transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </section>

      <section className="relative lg:h-150 h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-perfume.jpg"
          alt="Featured perfume"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />

        <div className="relative z-10 max-width-container px-4 md:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-4xl mx-auto">
            Crafted for the Extraordinary
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Every fragrance tells a story. Immerse yourself in luxury scents that capture the essence of elegance, sophistication, and timeless beauty.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-accent text-white font-medium uppercase tracking-widest text-sm hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4 text-center">
            Why Choose Us
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Experience luxury perfumery with world-class service and premium quality
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 group p-8 rounded-xl bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Award size={32} className="text-accent transition-transform duration-500 group-hover:rotate-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Premium Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Each fragrance is carefully crafted with the finest ingredients sourced from around the world.
              </p>
            </div>

            <div className="text-center space-y-6 group p-8 rounded-xl bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Truck size={32} className="text-accent transition-transform duration-500 group-hover:rotate-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Free shipping on orders over $100. Delivered within 5-7 business days worldwide.
              </p>
            </div>

            <div className="text-center space-y-6 group p-8 rounded-xl bg-white transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <RotateCcw size={32} className="text-accent transition-transform duration-500 group-hover:rotate-6" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Easy Returns</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Not satisfied? Return within 30 days for a full refund. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
