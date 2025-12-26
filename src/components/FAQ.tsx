import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is SeekYourY for?",
    answer:
      "SeekYourY is for anyone preparing for GMAT or GRE Quant—whether you're a complete beginner, someone who struggled with math in school, or a professional looking to improve your score.",
  },
  {
    question: "What makes SeekYourY different from other Quant courses?",
    answer:
      "Unlike courses that focus on formula memorization, we teach you the 'why' behind every concept. Our approach builds genuine understanding, which translates to better test-day performance.",
  },
  {
    question: "I'm terrible at math. Can I still improve?",
    answer:
      "Absolutely! Most of our students came to us believing they were 'bad at math.' With the right approach, anyone can master Quant. We've helped 10,000+ students overcome their math fears.",
  },
  {
    question: "How long does it take to see improvement?",
    answer:
      "Most students start seeing noticeable improvement within 4-6 weeks of consistent study. During your free demo, we'll create a personalized timeline for you.",
  },
  {
    question: "How does private tutoring work?",
    answer:
      "Private tutoring is 1-on-1 sessions with Aman. We assess your current level, identify weak areas, and create a customized study plan covering concept building, problem-solving, and pacing.",
  },
];

export const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill pill-purple mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked <span className="headline-primary">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
