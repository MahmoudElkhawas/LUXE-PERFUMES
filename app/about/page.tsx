'use client';

import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32  px-4 md:px-8">
        <div className="max-width-container">
          <h1 className="text-5xl md:text-6xl font-light text-primary mb-4">
            About Luxe Perfumes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Crafting luxury fragrances with passion and precision
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Luxe Perfumes was founded on the belief that fragrance is more than just a scent—it&apos;s an experience, a memory, a moment in time captured in a bottle. Our journey began with a passion for creating exceptional fragrances that transcend the ordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every fragrance in our collection is meticulously crafted by our master perfumers, combining traditional techniques with innovative approaches to create scents that are truly timeless and unforgettable.
              </p>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/hero-perfume.jpg"
                alt="About Luxe Perfumes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 md:px-8 bg-muted/20">
        <div className="max-width-container">
          <h2 className="text-4xl font-light text-primary mb-12 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-light text-accent mb-4">✓</div>
              <h3 className="text-xl font-medium text-primary">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source only the finest ingredients from master perfumers around the world, ensuring every bottle meets our exacting standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-light text-accent mb-4">✓</div>
              <h3 className="text-xl font-medium text-primary">Sustainability</h3>
              <p className="text-muted-foreground">
                Our commitment to the environment means eco-friendly packaging and ethically sourced materials in every creation.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-light text-accent mb-4">✓</div>
              <h3 className="text-xl font-medium text-primary">Innovation</h3>
              <p className="text-muted-foreground">
                We blend traditional perfume-making techniques with modern creativity to create fragrances that feel fresh and timeless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
