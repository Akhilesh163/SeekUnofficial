import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
                  {index === 1 ? (
                    <>
                      You can begin by clicking on &ldquo;Start Learning Free&rdquo; on our website. Explore the
                      courses and learning experience on our{" "}
                      <a
                        href="https://lms.seekyoury.com/learn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                      >
                        learn page
                      </a>
                      , and once you&apos;re ready, you can sign up and start your preparation journey with Seek
                      Your Y.
                    </>
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
