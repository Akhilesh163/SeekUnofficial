import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { Play } from "lucide-react";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We currently provide GRE and GMAT Quant preparation through self-paced courses, one-on-one private tutoring, high-quality GMAT & GRE Quant test series, and live doubt-clearing sessions.",
  },
  {
    question: "How do I enroll in a course?",
    answer: "",
  },
  {
    question: "Are the courses live or recorded?",
    answer:
      "Our core courses are self-paced and recorded so you can study anytime. In addition, we conduct personalized live sessions where you can interact directly with Aman.",
  },
  {
    question: "How long is the course valid for?",
    answer:
      "Each self-paced course comes with 6 months validity from the date of purchase, giving you plenty of time to complete the course at your own pace.",
  },
];

export const FAQ = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  return (
    <section className="section-padding bg-gradient-to-b from-background via-blue-50/20 to-background relative overflow-hidden mesh-purple-teal" id="faq">
      {/* Decorative colorful glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-400/5 blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="pill pill-purple mb-4">FAQ</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
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
                <AccordionTrigger className="text-left text-lg md:text-lg font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                  {index === 1 ? (
                    <>
                      You can enroll by booking a free demo session on our website, or you can contact us directly. We will guide you through the enrollment process and get you started on your preparation journey with Seek Your Y.
                    </>
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="text-center mt-16 pt-8 border-t border-border/40">
            <p className="text-muted-foreground mb-4 text-base">
              Still have questions about our methodology or programs?
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-soft hover-lift"
              onClick={() => setIsBookDemoOpen(true)}
            >
              <Play className="w-4 h-4 fill-current" />
              Book Free Demo
            </Button>
          </div>
        </div>

        {/* BOOK DEMO DIALOG */}
        <BookSessionDialog
          open={isBookDemoOpen}
          onOpenChange={setIsBookDemoOpen}
          title="Book a free demo"
          description="Share your details and we'll schedule a free 30-minute consultation with Aman."
        />
      </div>
    </section>
  );
};
