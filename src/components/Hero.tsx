import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import person5 from "@/assets/person5.jpg";

const successStories = [
  {
    name: "Rajesh Kumar",
    image: person1,
    before: "Stuck",
    after: "90-day Roadmap",
    position: "left-far",
  },
  {
    name: "Priya Sharma",
    image: person2,
    before: "Overwhelmed",
    after: "Weekly Momentum",
    position: "left",
  },
  {
    name: "Arjun Menon",
    image: person3,
    before: "Confused",
    after: "Clear Vision",
    position: "center",
  },
  {
    name: "Sneha Patel",
    image: person4,
    before: "Lost",
    after: "Found Direction",
    position: "right",
  },
  {
    name: "Vikram Singh",
    image: person5,
    before: "Uncertain",
    after: "Career Path",
    position: "right-far",
  },
];

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 animate-fade-up">
            <span className="headline-primary">Transform Your Life Direction,</span>
            <br />
            <span className="text-foreground">No Matter Where You Begin!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-4 animate-fade-up stagger-1">
            <span className="font-semibold">Starting confused, stuck, or overwhelmed? It doesn't matter.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            Hundreds of our members have executed their custom roadmaps to achieve clarity from various starting points.{" "}
            <span className="font-semibold text-foreground">You can too!</span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Button size="lg" className="rounded-full px-8 h-14 text-base gap-2 group">
              Try SeekYourY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </Button>
          </div>
        </div>

        {/* Success Stories Cards - e-GMAT Style */}
        <div className="relative w-full max-w-6xl mx-auto animate-fade-up stagger-4">
          <div className="flex items-end justify-center gap-3 md:gap-4 px-4">
            {successStories.map((story, index) => {
              const isCenter = story.position === "center";
              const isFar = story.position.includes("far");
              
              return (
                <div
                  key={story.name}
                  className={`relative flex-shrink-0 rounded-2xl overflow-hidden shadow-elevated transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    isCenter
                      ? "w-44 h-72 md:w-56 md:h-[340px] z-30"
                      : isFar
                      ? "w-28 h-48 md:w-36 md:h-56 z-10 hidden sm:block"
                      : "w-36 h-56 md:w-44 md:h-72 z-20"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Image */}
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                    <p className={`font-medium mb-2 ${isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"}`}>
                      {story.name}
                    </p>
                    
                    {/* Transformation badge */}
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`bg-primary/90 text-primary-foreground px-2 py-1 rounded-lg font-bold ${
                          isCenter ? "text-sm md:text-lg" : "text-xs md:text-sm"
                        }`}
                      >
                        {story.before}
                      </span>
                      <ArrowRight className={`text-white/80 ${isCenter ? "w-4 h-4" : "w-3 h-3"}`} />
                      <span
                        className={`bg-white text-foreground px-2 py-1 rounded-lg font-bold ${
                          isCenter ? "text-sm md:text-lg" : "text-xs md:text-sm"
                        }`}
                      >
                        {story.after}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
