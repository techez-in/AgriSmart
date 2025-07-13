import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const states = [
  { name: 'VIC', logo: 'https://placehold.co/100x50.png', hint: 'Victoria government logo' },
  { name: 'QLD', logo: 'https://placehold.co/100x50.png', hint: 'Queensland government logo' },
  { name: 'NSW', logo: 'https://placehold.co/100x50.png', hint: 'NSW government logo' },
  { name: 'WA', logo: 'https://placehold.co/100x50.png', hint: 'Western Australia government logo' },
];

export default function GrantsSection() {
  return (
    <section id="grants" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-2xl shadow-soft-lg bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Claim Rebates & Save Up to 50%</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                AgriSmart is eligible under Smart Farm Grants in various states. Many farmers receive up to <strong>$50,000 in support</strong> to adopt new technology.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                {states.map(state => (
                  <Image key={state.name} src={state.logo} alt={`${state.name} Grant Logo`} width={80} height={40} data-ai-hint={state.hint} className="grayscale hover:grayscale-0 transition-all duration-300" />
                ))}
              </div>
              <div className="mt-8">
                 <Button size="lg" className="cta-gradient text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <HelpCircle className="mr-3 h-5 w-5" />
                    Need Help Applying?
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-secondary/50 rounded-xl border border-dashed">
                <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-slate-800">Free Application Guide</h3>
                <p className="text-muted-foreground text-center mb-6 max-w-xs">
                    Download our comprehensive PDF guide to navigate the grant application process with ease.
                </p>
                <Button variant="outline" className="w-full text-base py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF Guide
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
