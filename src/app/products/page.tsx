import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Download, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/agri-smart/Header';
import Footer from '@/components/agri-smart/Footer';
import Link from 'next/link';

const products = [
  {
    name: 'Weather Sensor',
    description: 'Monitors on-farm weather in real time — track rainfall, temperature, humidity, and wind for precision planning.',
    features: [
      'Real-time rainfall and temperature tracking',
      'Helps forecast irrigation needs',
      'Solar-powered, long-range',
      'Weather alerts via app',
      'Easy installation in any field',
    ],
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'AgriSmart Weather Sensor installed in a field.',
      hint: 'weather sensor agriculture',
    },
  },
  {
    name: 'Smart Irrigation System',
    description: 'Automate your irrigation based on soil moisture and weather — save water, labor, and time.',
    features: [
      'Set thresholds or schedules',
      'Remotely start/stop pumps',
      'Soil moisture-triggered watering',
      'Works with drip or sprinkler setups',
      'Manual + automatic control modes',
    ],
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'AgriSmart Irrigation Controller connected to pipes.',
      hint: 'irrigation controller farm',
    },
  },
  {
    name: 'Water Level Sensor',
    description: 'Monitor water tank levels to avoid dry-outs or overflow — essential for remote and livestock farms.',
    features: [
      'Real-time tank water level alerts',
      'Works on tanks, troughs, and reservoirs',
      'Battery or solar-powered',
      'Sends low/high water notifications',
      'View trends in dashboard',
    ],
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A water level sensor on top of a large water tank.',
      hint: 'water tank sensor',
    },
  },
  {
    name: 'Pump Control System',
    description: 'Control water pumps remotely from your phone — no need to be on-site.',
    features: [
      'Switch pumps on/off via app',
      'Set timers or auto triggers',
      'Works with 1HP–5HP motors',
      'Supports valve/relay integration',
      'Works offline via SMS fallback (optional)',
    ],
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A pump control unit mounted on a wall with wiring.',
      hint: 'pump controller electrical',
    },
  },
  {
    name: 'Farm Monitoring System',
    description: 'All-in-one dashboard that brings together your farm’s data — sensors, alerts, irrigation, and weather.',
    features: [
      'Unified mobile/web dashboard',
      'View sensor data, water usage, weather',
      'Alerts for low moisture or tank',
      'Visual map with sensor locations',
      'Secure and easy to use',
    ],
    image: {
      src: 'https://placehold.co/600x400.png',
      alt: 'A phone showing the AgriSmart farm monitoring dashboard.',
      hint: 'farm dashboard phone',
    },
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-secondary/30 py-20 md:py-32 text-center">
            <div className="container mx-auto px-4 z-10 relative">
                 <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                    Smart Agri-Tech Solutions Built for Australian Farms
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Explore our range of IoT-powered hardware designed to monitor, automate, and optimize every part of your farm.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="text-lg py-7 px-10 rounded-lg cta-gradient shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 transform">
                        <Link href="/#contact">
                            <Mail className="mr-3" />
                            Enquire Now
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="text-lg py-7 px-10 rounded-lg bg-white border-2 border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 transform">
                        <a href="#">
                            <Download className="mr-3" />
                            Download Product Brochure
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {products.map((product) => (
                <Card key={product.name} className="flex flex-col rounded-2xl shadow-soft-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-xl">
                  <div className="relative h-64 w-full">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={product.image.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
                    <CardDescription className="text-base pt-1">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-4">
                     <Button asChild variant="outline" className="w-full text-base py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                        <Link href="/#contact">
                            Contact Sales <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 bg-secondary">
             <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold">Ready to Smartify Your Farm?</h2>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Contact our team to learn more or schedule a personalized demo.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                      <Button asChild size="lg" className="text-lg py-7 px-10 rounded-lg cta-gradient shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300 transform">
                        <Link href="/#contact">Book Demo</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-lg py-7 px-10 rounded-lg bg-white border-2 border-primary text-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 transform">
                        <a href="#">
                            <Download className="mr-3" />
                            Download Product Sheet
                        </a>
                    </Button>
                  </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
