
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const steps = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a8 8 0 0 1 14.08 0"/><path d="M1.42 9a12 12 0 0 1 21.16 0"/><path d="M8.53 16.11a4 4 0 0 1 6.95 0"/><line x1="12" x2="12" y1="20" y2="22"/></svg>
    ),
    title: '1. Smart Sensors',
    description: 'Install our rugged soil, weather, tank & pump sensors across your fields for hyper-local data.',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="8" x2="12" y1="16" y2="16"/><line x1="8" x2="12" y1="8" y2="8"/></svg>
    ),
    title: '2. Live Dashboard',
    description: 'Access real-time insights, analytics, and visual graphs on any device, anywhere, anytime.',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 12-4.04 4.04a2.82 2.82 0 1 0 3.99-3.99l4.04-4.04a2.82 2.82 0 1 0-3.99 3.99L10 16"/><path d="M18 8c-3.5 0-3.5 3.5 0 3.5C21.5 11.5 21.5 8 18 8Z"/><path d="M6 16c-3.5 0-3.5 3.5 0 3.5C9.5 19.5 9.5 16 6 16Z"/></svg>
    ),
    title: '3. Irrigation Control',
    description: 'Take full control with manual or smart automated pump and valve operations to save water.',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
       <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path><path d="M8 22v-3c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v3"></path></svg>
    ),
    title: '4. AI-Powered Alerts',
    description: 'Receive proactive alerts for potential issues like equipment failure, leaks, or soil imbalances.',
  },
    {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path><path d="M12 15-3.13 4.93"></path><path d="M14.63 7.52 8.5 2.5"></path><path d="m21.13 4.93-12.23 10.14"></path><path d="M16 4.01c2.6.82 4.57 3.06 4.99 5.99"></path><path d="M8 4.01A8.01 8.01 0 0 1 12 2a8 8 0 0 1 7.99 8"></path></svg>
    ),
    title: '5. Weather-Based Irrigation',
    description: 'Our system intelligently adjusts schedules based on local weather forecasts to prevent overwatering.',
  },
];

export default function HowItWorksSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    const onPointerDown = () => {
      autoplayPlugin.current.stop();
    };

    const onPointerUp = () => {
      setTimeout(() => {
        autoplayPlugin.current.play();
      }, 5000);
    };

    api.on('select', onSelect);
    api.on('pointerDown', onPointerDown);
    api.on('pointerUp', onPointerUp);

    return () => {
      api.off('select', onSelect);
      api.off('pointerDown', onPointerDown);
      api.off('pointerUp', onPointerUp);
    };
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our process makes precision agriculture simple, powerful, and accessible for every farmer.
          </p>
        </div>
        
        <Carousel 
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
        >
            <CarouselContent className="-ml-4">
                {steps.map((step, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                             <Card className="bg-secondary/40 border-none shadow-soft-lg rounded-2xl text-center p-6 lg:p-8 flex flex-col items-center h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-soft-xl">
                                <CardHeader className="p-0 mb-5 flex-col items-center">
                                    <div className="bg-white p-5 rounded-full mb-4 ring-8 ring-background">
                                    <step.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl font-semibold">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-muted-foreground">{step.description}</p>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-50px] hidden md:flex" />
            <CarouselNext className="mr-[-50px] hidden md:flex" />
        </Carousel>

        <div className="flex md:hidden justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-4 bg-primary' : 'bg-muted'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
