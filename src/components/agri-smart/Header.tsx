'use client';
import { Leaf, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React from 'react';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
        { href: '/products', label: 'Products' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl tracking-tight">AgriSmart</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-base font-medium">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="transition-colors hover:text-primary">
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className='flex items-center gap-4'>
                <Button asChild variant="outline" className="demo-button text-base px-6 py-5 rounded-lg font-semibold transition-all duration-300 ease-in-out">
                  <a href="#contact">Request a Demo</a>
                </Button>
                <Button asChild className="text-base px-6 py-5 rounded-lg cta-gradient hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  <a href="#contact">Get a Quote</a>
                </Button>
            </div>
        </div>


        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col h-full p-6">
                        <a href="#" className="flex items-center gap-2 mb-8" onClick={() => setOpen(false)}>
                            <Leaf className="h-7 w-7 text-primary" />
                            <span className="font-bold text-xl tracking-tight">AgriSmart</span>
                        </a>
                        <nav className="flex flex-col gap-6 text-lg font-medium">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href} className="transition-colors hover:text-primary" onClick={() => setOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-auto flex flex-col gap-4">
                            <Button asChild variant="outline" className="demo-button text-base px-6 py-5 rounded-lg font-semibold w-full">
                              <a href="#contact" onClick={() => setOpen(false)}>Request a Demo</a>
                            </Button>
                            <Button asChild className="text-base px-6 py-5 rounded-lg cta-gradient hover:opacity-90 w-full">
                              <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}