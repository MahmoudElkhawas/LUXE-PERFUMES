'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Search, ShoppingBag, Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useCart } from '@/context/cart-context';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { itemCount } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50 transition-all duration-300">
      <div className="max-width-container px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Search size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold tracking-widest text-primary opacity-0 md:opacity-100 transition-opacity duration-300">
              LUXE PERFUMES
            </span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/60 text-primary shadow-sm transition-all duration-300 hover:border-accent/60 hover:text-accent hover:bg-muted/80"
            >
              {mounted && isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>

            <button className="text-primary hover:text-accent transition-colors hidden sm:flex p-2 hover:bg-muted rounded-lg transition-all duration-300">
              <Search size={20} />
            </button>

            {/* Cart Icon */}
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
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
    </nav>
  );
}
