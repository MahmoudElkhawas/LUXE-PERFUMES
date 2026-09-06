'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/cart-context';
import type { ShopProduct } from '@/lib/products';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { toast } from 'sonner';

export function ProductDetails({ product }: { product: ShopProduct }) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    toast.success('Product added to cart successfully', {
      duration: 3000,
      className: 'border-accent/40 bg-background text-primary',
    });
    openCart();
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 md:px-8">
        <div className="max-width-container">
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-8 md:mb-12">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="space-y-6 md:pt-4">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight">{product.name}</h1>

              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
                <div className="flex items-center gap-1" aria-label={`${product.rating} out of 5 stars`}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} className={star <= Math.round(product.rating) ? 'fill-accent text-accent' : 'text-border'} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="border-y border-border py-6">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-primary">Quantity</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="w-9 h-9 flex items-center justify-center hover:bg-white rounded transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} className="text-primary" />
                    </button>
                    <span className="w-8 text-center font-semibold text-primary">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-white rounded transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} className="text-primary" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">In Stock</span>
                </div>
              </div>

              <button type="button" onClick={handleAddToCart} className="btn-primary w-full flex items-center justify-center gap-2">
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}