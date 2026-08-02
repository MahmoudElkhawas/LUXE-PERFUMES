import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10">
      <div className="max-width-container px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4 group">
            <h3 className="text-lg font-semibold tracking-widest mb-4 uppercase transition-colors duration-300 group-hover:text-accent">
              Luxe Perfumes
            </h3>
            <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Crafting luxury fragrances that define elegance and sophistication.
            </p>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider mb-6 uppercase text-sm text-accent">Collections</h4>
            <ul className="space-y-3">
              {[
                { href: '/shop/new-arrivals', label: 'New Arrivals' },
                { href: '/shop/best-sellers', label: 'Best Sellers' },
                { href: '/shop/luxury-collection', label: 'Luxury Collection' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 relative group/link"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider mb-6 uppercase text-sm text-accent">Company</h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
                { href: '#', label: 'Shipping Info' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 relative group/link"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider mb-6 uppercase text-sm text-accent">Follow Us</h4>
            <ul className="space-y-3">
              {[
                { href: '#', label: 'Instagram' },
                { href: '#', label: 'Facebook' },
                { href: '#', label: 'Twitter' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300 relative group/link"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover/link:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm opacity-70 hover:opacity-100 transition-opacity duration-300">
            © 2024 Luxe Perfumes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
