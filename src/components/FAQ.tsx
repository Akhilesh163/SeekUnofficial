import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is SeekYourY different from other coaching programs?",
    answer:
      "SeekYourY combines personalized AI-driven roadmaps with 1:1 human coaching. Unlike generic courses, we create a custom plan based on your specific situation, goals, and constraints.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most members report clarity within the first 2 weeks and measurable progress within 90 days. Our structured approach ensures you're making consistent progress every week.",
  },
  {
    question: "What if I'm not sure what I want to achieve?",
    answer:
      "That's exactly why SeekYourY exists! Our Discovery phase helps you identify your strengths, values, and direction before building your roadmap.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime. We offer a 14-day money-back guarantee if you're not satisfied with the program.",
  },
  {
    question: "Do you offer team or corporate plans?",
    answer:
      "Yes! We have special programs for teams and organizations. Contact us for customized solutions for your team's growth and development.",
  },
];

export const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
