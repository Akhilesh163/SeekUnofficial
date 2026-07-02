import { Star, Quote } from "lucide-react";

import praffulImg from "@/assets/student_pics/Prafful.jpeg";
import balaImg from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import manyaImg from "@/assets/student_pics/Manya.jpeg";

const testimonials = [
  {
    displayName: "Prafful",
    image: praffulImg,
    examLabel: "GRE Student",
    scoreLabel: "Quant 156 -> 169",
    quote:
      "The clarity of logic that Aman provides is unmatched. The customized plan made all the difference on test day.",
    rating: 5,
  },
  {
    displayName: "Bala",
    image: balaImg,
    examLabel: "GRE Student",
    scoreLabel: "Quant 158 -> 166",
    quote:
      "I was terrified of Quant before joining Seek Your Y. Aman's structured approach helped me see math as logical, not scary.",
    rating: 5,
  },
  {
    displayName: "Manya",
    image: manyaImg,
    examLabel: "GMAT Student",
    scoreLabel: "DI 83/90",
    quote:
      "From concept problems to test-day execution, every aspect was covered. The doubt-solving sessions were incredibly helpful.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background-alt" id="success-stories">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="pill pill-green mb-4">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Real Students, Real{" "}
            <span className="headline-primary">Score Jumps</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            See how our students conquered their Quant fears and achieved their dream scores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.displayName}
              className="glass-card p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonial.scoreLabel}
              </span>

              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.displayName}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.displayName}
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.examLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
