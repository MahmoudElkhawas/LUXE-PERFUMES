'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useCart } from '@/context/cart-context';

export function CartDrawer() {
  const {
    items,
    total,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();

  return (
    <Drawer direction="right" open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
      <DrawerContent className="!w-[92vw] !max-w-none border-border bg-background md:!w-[30vw]">
        <DrawerHeader className="flex-row items-center justify-between border-b border-border px-5 py-5">
          <div>
            <DrawerTitle className="text-xl font-semibold text-primary">Shopping Cart</DrawerTitle>
            <DrawerDescription className="sr-only">Review and update the products in your cart.</DrawerDescription>
          </div>
          <DrawerClose asChild>
            <button
              type="button"
              aria-label="Close shopping cart"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              <X size={20} />
            </button>
          </DrawerClose>
        </DrawerHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag size={36} className="text-muted-foreground/60" />
            </div>
            <h2 className="text-xl font-semibold text-primary">Your cart is empty</h2>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Discover a fragrance to make your collection complete.
            </p>
            <Link href="/shop" onClick={closeCart} className="btn-primary mt-6 inline-flex">
              Return to Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 border-b border-border pb-4 last:border-0">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="truncate text-sm font-semibold text-primary">{item.name}</h3>
                        <p className="mt-1 text-sm font-bold text-accent">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 rounded p-1 text-muted-foreground transition-colors hover:text-red-600"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="flex h-7 w-7 items-center justify-center rounded transition-colors hover:bg-white"
                        >
                          <Minus size={14} className="text-primary" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-primary">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="flex h-7 w-7 items-center justify-center rounded transition-colors hover:bg-white"
                        >
                          <Plus size={14} className="text-primary" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <DrawerFooter className="border-t border-border bg-muted/20 px-5 py-5">
              <div className="flex items-center justify-between text-base font-semibold text-primary">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
              <Link href="/cart" onClick={closeCart} className="btn-primary mt-2 flex w-full justify-center">
                View Cart
              </Link>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}