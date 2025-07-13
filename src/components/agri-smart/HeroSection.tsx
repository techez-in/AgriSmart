'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationClass = (delay: string) =>
    isMounted ? `animate-fade-in-up style="animation-delay: ${delay}"` : 'opacity-0';

  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/AgriSmart-hero-image.png"
          alt="Drone shot of an Australian farm using smart irrigation"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-[0.9] scale-105"
          priority
          data-ai-hint="drone farm irrigation"
        />
      </div>
      <div className="relative z-10 text-center p-4 max-w-4xl">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDuration: '600ms' }}>
          Smarter Farming. Bigger Yields. Lower Costs.
        </h1>
        <p className={`mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDuration: '600ms', animationDelay: '200ms' }}>
          Monitor your farm, control irrigation, and save water – from your mobile or web dashboard.
        </p>
        <div className={`mt-10 flex flex-col sm:flex-row justify-center gap-4 ${isMounted ? 'animate-zoom-in' : 'opacity-0'}`} style={{ animationDuration: '500ms', animationDelay: '400ms' }}>
          <Button asChild size="lg" className="text-lg py-7 px-10 rounded-lg cta-gradient shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 transform">
            <a href="#contact">Request a Demo</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg py-7 px-10 rounded-lg bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 transform">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
