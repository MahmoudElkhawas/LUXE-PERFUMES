'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
}

export function HorizontalCarousel({ children }: CarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth < 768 ? 300 : 400;
      
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
      setTimeout(checkScroll, 300);
    }
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      setShowArrows(scrollWidth > clientWidth);
    }
  };

  return (
    <div className="relative group w-full">
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
      >
        {children}
      </div>

      {/* Left Arrow - Responsive positioning and sizing */}
      {mounted && showArrows && (
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 md:-translate-x-16 lg:-translate-x-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-white flex items-center justify-center transition-all duration-300 hover:bg-accent/90 z-10 ${
            canScrollLeft ? 'opacity-100 hover:scale-110' : 'opacity-20 cursor-not-allowed'
          }`}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
      )}

      {/* Right Arrow - Responsive positioning and sizing */}
      {mounted && showArrows && (
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-white flex items-center justify-center transition-all duration-300 hover:bg-accent/90 z-10 ${
            canScrollRight ? 'opacity-100 hover:scale-110' : 'opacity-20 cursor-not-allowed'
          }`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      )}
    </div>
  );
}
