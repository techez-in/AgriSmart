import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is this eligible for Australian government grants?',
    answer:
      'Yes, AgriSmart Systems is eligible for several state and federal grants, including the Smart Farms Small Grants program. Many of our clients have successfully received rebates of up to 50% on their investment. We can even provide guidance to help with your application.',
  },
  {
    question: 'What types of crops does AgriSmart work with?',
    answer:
      'Our system is versatile and can be adapted for a wide variety of crops, including vineyards, orchards, row crops, and specialty vegetables. The sensor parameters and irrigation schedules can be customized to meet the specific needs of your crop.',
  },
  {
    question: 'Does the system work offline or in low-signal areas?',
    answer:
      'Absolutely. Our on-farm sensors and controllers are designed to operate even in areas with poor or no internet connectivity. The devices store data locally and will continue to run automated schedules. Once a connection is re-established, all data is synced with the dashboard.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'A typical installation for a small to medium-sized farm can be completed in a single day. Our technicians will handle the sensor placement, network setup, and initial calibration to ensure everything is running smoothly from day one.',
  },
  {
    question: 'Can I use only the app without buying sensors?',
    answer:
      'While our sensors provide the most accurate, real-time data for automation, you can still use our app to manually control irrigation systems and monitor weather forecasts. However, to unlock the full potential of AI-powered recommendations and water savings, the sensor suite is highly recommended.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Common Questions from Farmers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. Here are some of the most common queries we receive.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl shadow-soft-sm bg-secondary/30 transition-shadow hover:shadow-soft-lg">
              <AccordionTrigger className="p-6 text-lg font-medium text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
