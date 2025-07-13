import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path><path d="M12 15-3.13 4.93"></path><path d="M14.63 7.52 8.5 2.5"></path><path d="m21.13 4.93-12.23 10.14"></path></svg>
    ),
    title: '30%+ Water Savings',
    description: 'Precision irrigation ensures you use only the water you need, reducing waste and cost.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M2 22v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6"></path><path d="M12 12V2l-3 4-3-4"></path><path d="M12 12V2l3 4 3-4"></path><path d="M14 22v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path></svg>
    ),
    title: 'Higher Crop Yields',
    description: 'Optimized water and nutrient delivery leads to healthier plants and more abundant harvests.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M5 12.55a8 8 0 0 1 14.08 0"></path><path d="M1.42 9a12 12 0 0 1 21.16 0"></path><path d="M8.53 16.11a4 4 0 0 1 6.95 0"></path><line x1="12" x2="12" y1="20" y2="22"></line></svg>
    ),
    title: 'Remote Monitoring',
    description: 'Keep an eye on your entire operation from anywhere with our user-friendly mobile and web apps.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path><path d="M12 15-3.13 4.93"></path><path d="M14.63 7.52 8.5 2.5"></path><path d="m21.13 4.93-12.23 10.14"></path><path d="M16 4.01c2.6.82 4.57 3.06 4.99 5.99"></path><path d="M8 4.01A8.01 8.01 0 0 1 12 2a8 8 0 0 1 7.99 8"></path></svg>
    ),
    title: 'Weather-Based Irrigation',
    description: 'Our system intelligently adjusts schedules based on local weather forecasts to prevent overwatering.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path><path d="M8 22v-3c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v3"></path></svg>
    ),
    title: 'AI-Powered Alerts',
    description: 'Receive proactive alerts for potential issues like equipment failure, leaks, or soil imbalances.',
  },
  {
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path><path d="M4 22h16"></path><path d="M2 22h20"></path></svg>
    ),
    title: 'Access via Mobile & Web',
    description: 'Full control and visibility whether you are in the field with your phone or in the office on your computer.',
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Why Farmers Choose AgriSmart</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience a new level of efficiency and productivity. Our system empowers you to make data-driven decisions that directly benefit your bottom line.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={benefit.title} className="text-center p-6 shadow-soft-lg rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-xl">
              <CardHeader className="flex items-center justify-center !p-0 mb-5">
                <div className="bg-secondary p-4 rounded-full">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardTitle className="text-xl font-semibold mb-2">{benefit.title}</CardTitle>
              <CardContent className="!p-0">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
