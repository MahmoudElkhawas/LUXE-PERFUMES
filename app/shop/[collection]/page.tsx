'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const collectionData = {
  'new-arrivals': {
    title: 'New Arrivals',
    description: 'Discover the latest additions to our luxury collection',
    image: '/new-arrivals.jpg',
  },
  'best-sellers': {
    title: 'Best Sellers',
    description: 'Our most loved fragrances by customers worldwide',
    image: '/best-sellers.jpg',
  },
  'luxury-collection': {
    title: 'Luxury Collection',
    description: 'Premium fragrances for the discerning collector',
    image: '/luxury-collection.jpg',
  },
};

export default function CollectionPage({
  params,
}: {
  params: { collection: string };
}) {
  const collection = collectionData[params.collection as keyof typeof collectionData];

  if (!collection) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 px-4 md:px-8 text-center">
          <h1 className="text-4xl font-light text-primary mb-4">Collection Not Found</h1>
          <Link href="/shop" className="text-accent hover:opacity-90">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-background/20" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-4">{collection.title}</h1>
          <p className="text-lg max-w-2xl mx-auto">{collection.description}</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-width-container">
          <h2 className="text-4xl font-light text-primary mb-12 text-center">
            Curated Selection
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden h-80 mb-6 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-6xl font-light text-muted-foreground opacity-20">
                    {item}
                  </div>
                </div>
                <h3 className="text-lg font-light text-primary mb-2">
                  Signature Fragrance {item}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A luxurious blend of premium notes
                </p>
                <button className="px-6 py-2 border border-accent text-accent font-medium uppercase tracking-wider text-xs hover:bg-accent hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
