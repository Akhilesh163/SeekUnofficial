import { Star, Quote, ArrowRight } from "lucide-react";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";

const testimonials = [
  {
    name: "Vatsalya",
    scoreBefore: 313,
    scoreAfter: 324,
    exam: "GRE",
    image: person1,
    quote: "The clarity of logic that Aman provides is unmatched. I went from struggling with basic concepts to scoring in the 96th percentile. The customized plan made all the difference.",
    rating: 5,
  },
  {
    name: "Manya",
    scoreBefore: 302,
    scoreAfter: 328,
    exam: "GRE",
    image: person2,
    quote: "I was terrified of Quant before joining SeekYourY. Aman's structured approach helped me see math as logical, not scary. My score improvement speaks for itself!",
    rating: 5,
  },
  {
    name: "Bala",
    scoreBefore: 298,
    scoreAfter: 325,
    exam: "GRE",
    image: person3,
    quote: "From concept problems to test-day execution, every aspect was covered. The 1-on-1 doubt solving sessions were incredibly helpful. Highly recommend!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background-alt" id="success-stories">
      <div className="container-narrow">
        {/* Header */}
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Score improvement badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.exam}
                </span>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <span className="text-muted-foreground">{testimonial.scoreBefore}</span>
                  <ArrowRight className="w-3 h-3 text-primary" />
                  <span className="text-primary">{testimonial.scoreAfter}</span>
                </div>
              </div>

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.exam} Student
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
