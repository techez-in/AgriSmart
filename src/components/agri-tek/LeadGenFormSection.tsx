'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(8, 'Please enter a valid phone number.'),
  farmSize: z.string().min(1, 'Please enter farm size.'),
  region: z.string().min(1, 'Please select a region.'),
  message: z.string().optional(),
});

const regions = ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory'];

export default function LeadGenFormSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      farmSize: '',
      region: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to a CRM like Airtable, Notion, or an API
    toast({
      title: 'Enquiry Submitted!',
      description: "Thanks for reaching out. We'll be in touch with you shortly.",
      variant: 'default',
      className: 'bg-green-100 border-green-300 text-green-800'
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-soft-xl rounded-2xl border-none">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold">Let’s Make Your Farm Smart Today</CardTitle>
            <CardDescription className="text-lg mt-2">
              Fill out the form below and one of our specialists will get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Appleseed" {...field} className="py-6"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@appleseed.com" {...field} className="py-6"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="0400 123 456" {...field} className="py-6"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="farmSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Farm Size (Acres)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 500" {...field} className="py-6"/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="py-6">
                            <SelectValue placeholder="Select your state/territory" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {regions.map(region => (
                            <SelectItem key={region} value={region}>{region}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us about your farm, your crops, and what you're looking to achieve..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full cta-gradient text-lg py-7" size="lg">Submit Enquiry</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
