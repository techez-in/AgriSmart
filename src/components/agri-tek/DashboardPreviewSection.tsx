'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const mobileAppImages = [
  { src: '/images/App-image1.jpeg', alt: 'Mobile app main dashboard screen', hint: 'mobile app dashboard' },
  { src: '/images/App-image2.jpeg', alt: 'Mobile app irrigation schedule screen', hint: 'mobile app schedule' },
  { src: '/images/App-image3.jpeg', alt: 'Mobile app sensor data view', hint: 'mobile app chart' },
  { src: '/images/Agrismart-image.jpeg', alt: 'Mobile app notification and alerts screen', hint: 'mobile app notification' },
];

export default function DashboardPreviewSection() {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Your Farm, in Your Pocket</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our intuitive mobile app gives you a bird's-eye view of your entire farm. Monitor conditions, control systems, and analyze data with ease, right from your phone.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {mobileAppImages.map((image, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4">
                  <Card className="overflow-hidden rounded-2xl shadow-soft-lg border-none m-2">
                    <CardContent className="p-0">
                        <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={800}
                        className="w-full h-[300px] md:h-[460px] transition-transform duration-300 hover:scale-105"
                        data-ai-hint={image.hint}
                        />
                    </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[-50px] hidden sm:flex" />
          <CarouselNext className="mr-[-50px] hidden sm:flex" />
        </Carousel>
        
        <div className="text-center mt-12">
            <Button size="lg" className="cta-gradient text-lg py-7 px-10 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <PlayCircle className="mr-3 h-6 w-6" />
                Play Demo Video
            </Button>
        </div>
      </div>
    </section>
  );
}
