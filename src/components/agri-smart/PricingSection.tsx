import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'For small to medium farms',
    features: [
      '1–2 sensors included',
      'Manual irrigation control',
      'Mobile App Access',
      'Standard support',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
  {
    name: 'Pro Bundle',
    description: 'For large farms & agri agencies',
    features: [
      'Full sensor suite',
      'Smart automation',
      'Full dashboard & analytics',
      'Priority support + grant help',
    ],
    cta: 'Compare Plans',
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Simple Plans, Built for Every Farm</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing designed to scale with your needs. Get the right tools for your operation, big or small.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col rounded-2xl shadow-soft-lg transition-transform duration-300 hover:scale-105 hover:shadow-soft-xl ${plan.popular ? 'border-2 border-primary' : 'border'}`}>
              <CardHeader className="p-8">
                {plan.popular && <div className="text-sm font-bold uppercase text-primary mb-2">Most Popular</div>}
                <CardTitle className="text-3xl font-semibold">{plan.name}</CardTitle>
                <CardDescription className="text-base text-muted-foreground pt-1">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow p-8 pt-0">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-base">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8">
                <Button asChild className={`w-full text-base py-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'cta-gradient hover:shadow-lg hover:shadow-primary/30' : 'bg-slate-800 text-white hover:bg-slate-700'}`} size="lg">
                  <a href='#contact'>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
