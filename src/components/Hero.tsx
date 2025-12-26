import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import person5 from "@/assets/person5.jpg";

const successStories = [
  {
    name: "Vatsalya",
    image: person1,
    scoreBefore: 302,
    scoreAfter: 326,
    exam: "GRE",
    position: "left-far",
  },
  {
    name: "Manya",
    image: person2,
    scoreBefore: 313,
    scoreAfter: 331,
    exam: "GRE",
    position: "left",
  },
  {
    name: "Bala",
    image: person3,
    scoreBefore: 298,
    scoreAfter: 328,
    exam: "GRE",
    position: "center",
  },
  {
    name: "Priya",
    image: person4,
    scoreBefore: 305,
    scoreAfter: 325,
    exam: "GRE",
    position: "right",
  },
  {
    name: "Arjun",
    image: person5,
    scoreBefore: 310,
    scoreAfter: 332,
    exam: "GRE",
    position: "right-far",
  },
];

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mentor Introduction */}
          <p className="text-base md:text-lg text-muted-foreground mb-4 animate-fade-up">
            Led by <span className="font-semibold text-foreground">Aman</span> • 8+ years mentoring experience • 10,000+ students guided
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6 animate-fade-up">
            <span className="headline-primary">Quant Doesn't Have to Be Scary.</span>
            <br />
            <span className="text-foreground">Master GMAT & GRE Quant!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-4 animate-fade-up stagger-1">
            <span className="font-semibold">Rebuild your confidence through logic-based learning.</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            No more formula memorization. Our structured approach bridges the gap between concept problems and test-day execution.{" "}
            <span className="font-semibold text-foreground">Join 10,000+ students who conquered Quant!</span>
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Button size="lg" className="rounded-full px-8 h-14 text-base gap-2 group">
              Start Learning Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base gap-2"
            >
              <Play className="w-4 h-4" />
              Book Free Demo
            </Button>
          </div>
        </div>

        {/* Success Stories Cards */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-center">
                    {/* Name */}
                    <p className={`font-medium text-white mb-1 ${isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"}`}>
                      {story.name}
                    </p>
                    
                    {/* Exam badge */}
                    <p className={`text-white/70 mb-2 ${isCenter ? "text-xs" : "text-[10px]"}`}>
                      {story.exam} Quant
                    </p>
                    
                    {/* Score improvement badge */}
                    <div className="flex items-center justify-center gap-1.5">
                      <span
                        className={`bg-primary text-primary-foreground px-2.5 py-1 rounded-lg font-bold ${
                          isCenter ? "text-lg md:text-2xl" : "text-sm md:text-base"
                        }`}
                      >
                        {story.scoreBefore}
                      </span>
                      <ArrowRight className={`text-white/80 ${isCenter ? "w-5 h-5" : "w-3 h-3"}`} />
                      <span
                        className={`bg-white text-foreground px-2.5 py-1 rounded-lg font-bold ${
                          isCenter ? "text-lg md:text-2xl" : "text-sm md:text-base"
                        }`}
                      >
                        {story.scoreAfter}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-up stagger-5">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">10,000+</p>
            <p className="text-sm text-muted-foreground">Students Mentored</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">96th</p>
            <p className="text-sm text-muted-foreground">Percentile Achievers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary">8+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};
