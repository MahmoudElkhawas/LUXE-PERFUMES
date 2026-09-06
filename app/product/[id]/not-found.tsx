import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ProductNotFound() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      <Navigation />
      <section className="max-width-container px-4 md:px-8 py-24 text-center">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">Product unavailable</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4">We couldn&apos;t find that fragrance</h1>
        <p className="text-muted-foreground mb-8">The product may have been removed or the link may be out of date.</p>
        <Link href="/shop" className="btn-primary inline-flex">Back to Shop</Link>
      </section>
      <Footer />
    </main>
  );
}