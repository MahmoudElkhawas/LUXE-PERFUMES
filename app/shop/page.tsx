'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Heart, ChevronDown, Truck, Award, Lock, Filter, X } from 'lucide-react';
import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/cart-context';

const products = [
  { id: '1', name: 'Essence Divine', category: 'Women', price: 89.99, image: '/products/essence-divine.jpg' },
  { id: '2', name: 'Golden Hour', category: 'Men', price: 79.99, image: '/products/golden-hour.jpg' },
  { id: '3', name: 'Midnight Bloom', category: 'Women', price: 94.99, image: '/products/midnight-bloom.jpg' },
  { id: '4', name: 'Silk Satin', category: 'Unisex', price: 84.99, image: '/products/silk-satin.jpg' },
  { id: '5', name: 'Pure Elegance', category: 'Unisex', price: 74.99, image: '/products/pure-elegance.jpg' },
  { id: '6', name: 'Velvet Dreams', category: 'Women', price: 99.99, image: '/products/velvet-dreams.jpg' },
  { id: '7', name: 'Crystal Night', category: 'Men', price: 89.99, image: '/products/crystal-night.jpg' },
  { id: '8', name: 'Rose Mystique', category: 'Women', price: 87.99, image: '/products/rose-mystique.jpg' },
  { id: '9', name: 'Amber Luxe', category: 'Men', price: 92.99, image: '/products/amber-luxe.jpg' },
  { id: '10', name: 'Pearl Essence', category: 'Unisex', price: 81.99, image: '/products/pearl-essence.jpg' },
];

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopPageSkeleton />}>
      <ShopPageContent />
    </Suspense>
  );
}

function ShopPageContent() {
  const { addItem } = useCart();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Set category from URL query param on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    return (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] && product.price <= priceRange[1];
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 bg-muted/30">
        <div className="max-width-container">
          <h1 className="text-4xl md:text-6xl font-light text-primary mb-4">
            Shop
          </h1>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Shop</span>
          </div>
        </div>
      </section>



      {/* Shop Section with Filters and Products */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-width-container">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} results
            </p>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Filters Sidebar - Mobile Drawer */}
            <div className={`md:col-span-1 md:block ${showFilters ? 'block' : 'hidden'}`}>
              {/* Mobile Filter Header */}
              <div className="md:hidden flex items-center justify-between mb-6 pb-4 border-b border-border">
                <h2 className="text-lg font-medium text-primary">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X size={24} className="text-primary" />
                </button>
              </div>

              <div className="space-y-6 md:space-y-8 md:sticky md:top-24">
                {/* Category Filter */}
                <div>
                  <h3 className="text-base md:text-lg font-medium text-primary mb-3 md:mb-4 pb-3 border-b border-border">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {['Women', 'Men', 'Unisex'].map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedCategory === cat}
                          onChange={() => {
                            setSelectedCategory(selectedCategory === cat ? null : cat);
                            setShowFilters(false);
                          }}
                          className="w-4 h-4 accent-accent"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-base md:text-lg font-medium text-primary mb-3 md:mb-4 pb-3 border-b border-border">
                    Price Range
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white text-primary focus:outline-none focus:border-accent"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-white text-primary focus:outline-none focus:border-accent"
                        placeholder="Max"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ${priceRange[0]} - ${priceRange[1]}
                    </p>
                  </div>
                </div>

                {/* Mobile Apply Button */}
                <button
                  onClick={() => setShowFilters(false)}
                  className="md:hidden w-full px-4 py-3 bg-accent text-white font-medium uppercase tracking-wider text-sm rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {/* Desktop Top Bar */}
              <div className="hidden md:flex items-center justify-between mb-8 gap-4">
                <p className="text-sm text-muted-foreground">
                  Showing 1–{filteredProducts.length} of {filteredProducts.length} results
                  {selectedCategory && ` (${selectedCategory})`}
                </p>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2 pr-10 bg-white border border-border rounded-lg text-sm text-primary focus:outline-none focus:border-accent cursor-pointer"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Mobile Sort Dropdown */}
              <div className="md:hidden mb-6">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-full px-4 py-2 pr-10 bg-white border border-border rounded-lg text-sm text-primary focus:outline-none focus:border-accent cursor-pointer"
                  >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3 md:mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-40 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2 md:top-4 right-2 md:right-4 w-8 md:w-10 h-8 md:h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition-colors"
                      >
                        <Heart
                          size={16}
                          className={`md:w-5 md:h-5 ${favorites.includes(product.id) ? 'fill-accent text-accent' : ''}`}
                        />
                      </button>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <p className="text-xs uppercase tracking-widest text-accent font-medium truncate">
                        {product.category}
                      </p>
                      <h3 className="text-sm md:text-lg font-light text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-lg font-medium text-primary">${product.price.toFixed(2)}</p>
                    </div>

                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full mt-2 md:mt-4 px-3 md:px-4 py-2 md:py-3 border border-primary text-primary font-medium uppercase tracking-wider text-xs hover:bg-primary hover:text-white transition-colors rounded-lg hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center space-y-2 md:space-y-3">
              <Truck size={28} className="text-accent mx-auto md:w-8 md:h-8" />
              <h3 className="text-base md:text-lg font-medium text-primary">Free Shipping</h3>
              <p className="text-xs md:text-sm text-muted-foreground">On all orders over $100</p>
            </div>

            <div className="text-center space-y-2 md:space-y-3">
              <Award size={28} className="text-accent mx-auto md:w-8 md:h-8" />
              <h3 className="text-base md:text-lg font-medium text-primary">Premium Quality</h3>
              <p className="text-xs md:text-sm text-muted-foreground">Luxury you can trust</p>
            </div>

            <div className="text-center space-y-2 md:space-y-3">
              <Lock size={28} className="text-accent mx-auto md:w-8 md:h-8" />
              <h3 className="text-base md:text-lg font-medium text-primary">Secure Payment</h3>
              <p className="text-xs md:text-sm text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ShopPageSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-8 bg-muted/30">
        <div className="max-width-container animate-pulse">
          <div className="h-12 w-40 rounded bg-muted mb-4" />
          <div className="h-4 w-24 rounded bg-muted" />
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-width-container animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-6">
              <div className="h-8 w-32 rounded bg-muted" />
              <div className="h-20 rounded bg-muted" />
              <div className="h-20 rounded bg-muted" />
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="h-52 rounded bg-muted" />
                  <div className="h-4 w-20 rounded bg-muted" />
                  <div className="h-4 w-28 rounded bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
