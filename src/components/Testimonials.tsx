import { Star, Quote } from "lucide-react";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Product Manager at Microsoft",
    image: person1,
    quote: "SeekYourY transformed my career trajectory. From being stuck in analysis paralysis, I now have a clear 5-year roadmap.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Senior Consultant at Deloitte",
    image: person2,
    quote: "The personalized coaching and weekly accountability calls made all the difference. I finally found my direction.",
    rating: 5,
  },
  {
    name: "Arjun Menon",
    role: "Entrepreneur & Founder",
    image: person3,
    quote: "Best investment I've made in myself. The structured approach helped me transition from corporate to running my own business.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-green mb-4">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Real people, real{" "}
            <span className="headline-primary">transformations</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
                    {testimonial.role}
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
