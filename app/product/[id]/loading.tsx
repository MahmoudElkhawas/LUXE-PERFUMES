import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ProductLoading() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      <Navigation />
      <div className="max-width-container px-4 md:px-8 animate-pulse">
        <div className="h-4 w-36 bg-muted rounded mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="aspect-square rounded-xl bg-muted" />
          <div className="space-y-6 py-4">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-12 w-3/4 bg-muted rounded" />
            <div className="h-8 w-28 bg-muted rounded" />
            <div className="h-24 w-full bg-muted rounded" />
            <div className="h-12 w-full bg-muted rounded" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}