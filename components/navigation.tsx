'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, Search, ShoppingBag, Moon, SunMedium, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCart } from '@/context/cart-context';
import { shopProducts } from '@/lib/products';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const { itemCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) return;

    searchInputRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = shopProducts.filter((product) => {
    if (!normalizedQuery) return true;

    return [product.name, product.category, product.description]
      .some((value) => value.toLowerCase().includes(normalizedQuery));
  });

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50 transition-all duration-300">
      <div className="max-width-container px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Search size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold tracking-widest text-primary opacity-0 md:opacity-100 transition-opacity duration-300">
              LUXE PERFUMES
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Shop' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-primary group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/60 text-primary shadow-sm transition-all duration-300 hover:border-accent/60 hover:text-accent hover:bg-muted/80"
            >
              {mounted && isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>

            <button
              type="button"
              aria-label="Search perfumes"
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen(true)}
              className="text-primary hover:text-accent transition-colors p-2 hover:bg-muted rounded-lg transition-all duration-300"
            >
              <Search size={20} />
            </button>

            <Link href="/cart" className="relative group">
              <button type="button" className="text-primary hover:text-accent transition-colors p-2 hover:bg-muted rounded-lg transition-all duration-300 relative">
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </Link>
            
            <button
              className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 border-t border-border pt-4 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Shop' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-primary hover:text-accent hover:bg-muted px-3 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 px-4 pt-24 backdrop-blur-sm sm:px-8">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
            <div className="flex items-center gap-3 border-b border-border px-4 py-3 sm:px-6">
              <Search className="shrink-0 text-accent" size={22} />
              <input
                ref={searchInputRef}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search perfumes..."
                aria-label="Search perfumes"
                className="min-w-0 flex-1 bg-transparent py-2 text-base text-primary outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={closeSearch}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[calc(100vh-10rem)] overflow-y-auto p-3 sm:p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={closeSearch}
                      className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-muted sm:px-4"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-medium text-primary sm:text-base">
                          {product.name}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground sm:text-sm">
                          {product.category} - {product.description}
                        </span>
                      </span>
                      <ArrowRight className="shrink-0 text-accent transition-transform group-hover:translate-x-1" size={18} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-3 py-10 text-center sm:py-14">
                  <p className="text-base font-medium text-primary">No products found</p>
                  <p className="mt-1 text-sm text-muted-foreground">Try searching for a different scent or category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
