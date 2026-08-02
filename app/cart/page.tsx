'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, AlertCircle, Check, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();
  const [mounted, setMounted] = useState(false);
  const [removeConfirm, setRemoveConfirm] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="pt-32 pb-16 min-h-screen" />;
  }

  const TAX_RATE = 0.10;
  const FREE_SHIPPING_THRESHOLD = 100;
  const subtotal = total - discount;
  const tax = Math.max(0, subtotal) * TAX_RATE;
  const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.99;
  const finalTotal = Math.max(0, subtotal) + tax + shippingCost;

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'LUXURY20') {
      setDiscount(subtotal * 0.2);
    }
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background pt-32 pb-16">
        <section className="py-24 px-4 md:px-8">
          <div className="max-width-container">
            <div className="flex flex-col items-center justify-center text-center space-y-8">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag size={64} className="text-muted-foreground/50" />
              </div>
              <div className="space-y-3 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-semibold text-primary">
                  Your cart is empty
                </h1>
                <p className="text-muted-foreground text-lg">
                  Explore our luxury fragrance collection and discover your signature scent.
                </p>
              </div>
              <Link href="/shop">
                <button className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 group">
                  Start Shopping
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <section className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-width-container">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground mt-2">
              <span className="text-accent font-semibold">{itemCount}</span> item{itemCount !== 1 ? 's' : ''} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-lg border border-border p-4 md:p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex gap-4 md:gap-6">
                      <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg md:text-lg font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-accent font-bold text-lg mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                            In Stock
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} className="text-primary" />
                            </button>
                            <span className="w-6 text-center font-semibold text-primary text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} className="text-primary" />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                              onClick={() => setRemoveConfirm(item.id)}
                            >
                              Remove
                            </button>
                            <div className="w-px h-4 bg-border" />
                            <button
                              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="text-right flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Subtotal</p>
                          <p className="text-lg md:text-xl font-bold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {removeConfirm === item.id && (
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between bg-red-50 rounded p-3">
                        <p className="text-sm text-red-700">Remove this item?</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setRemoveConfirm(null)}
                            className="px-3 py-1 text-sm bg-white border border-red-200 text-red-700 rounded hover:bg-red-50 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              removeItem(item.id);
                              setRemoveConfirm(null);
                            }}
                            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="w-full py-2 text-muted-foreground hover:text-red-600 font-medium text-sm transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-lg border border-border p-6 space-y-6">
                <h2 className="text-xl font-semibold text-primary">Order Summary</h2>

                <div className="space-y-3 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-primary">${total.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-medium text-green-600">-${discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium text-primary">${tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    {shippingCost === 0 ? (
                      <span className="font-medium text-accent">Free</span>
                    ) : (
                      <span className="font-medium text-primary">${shippingCost.toFixed(2)}</span>
                    )}
                  </div>
                </div>

                {total < FREE_SHIPPING_THRESHOLD && (
                  <div className="p-3 bg-blue-50 rounded-lg flex gap-2">
                    <AlertCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700">
                      Add ${(FREE_SHIPPING_THRESHOLD - total).toFixed(2)} for free shipping
                    </p>
                  </div>
                )}

                <div className="pt-4 flex justify-between items-baseline">
                  <span className="text-sm font-medium text-muted-foreground">Total</span>
                  <span className="text-3xl font-bold text-primary">${finalTotal.toFixed(2)}</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <label className="text-sm font-medium text-primary">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                    <button
                      onClick={applyPromo}
                      className="px-4 py-2 bg-muted text-primary text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {discount > 0 && (
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <Check size={14} /> Promo applied!
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">Try &quot;LUXURY20&quot;</p>
                </div>

                <button className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2">
                  <Lock size={18} />
                  Proceed to Checkout
                </button>

                <Link href="/shop">
                  <button className="w-full py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
                    Continue Shopping
                  </button>
                </Link>

                <div className="pt-4 space-y-2 text-center text-xs text-muted-foreground">
                  <p>✓ Secure checkout with SSL</p>
                  <p>✓ Free returns within 30 days</p>
                  <p>✓ Premium gift packaging included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
