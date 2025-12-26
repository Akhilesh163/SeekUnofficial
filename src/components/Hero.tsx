import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const socialProofCards = [
  { name: "Arjun", badge: "Stuck → 90-day Roadmap", color: "green" },
  { name: "Sarah", badge: "Overwhelmed → Weekly Momentum", color: "purple" },
  { name: "Kevin", badge: "Confused → Clear Plan", color: "coral" },
];

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-fade-up">
            <span className="headline-primary">Transform Your Life Direction,</span>
            <br />
            <span className="text-foreground">No Matter Where You Begin!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-1">
            Personalized roadmaps to move from confusion to clarity. Join 1000+ professionals finding their true north.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-2">
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

          {/* Social Proof Strip */}
          <div className="animate-fade-up stagger-3">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by professionals worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialProofCards.map((card, index) => (
                <div
                  key={card.name}
                  className={`glass-card px-5 py-3 flex items-center gap-3 hover-lift ${
                    index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      card.color === "green"
                        ? "bg-pastel-green text-emerald-700"
                        : card.color === "purple"
                        ? "bg-pastel-purple text-purple-700"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {card.name[0]}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">{card.name}</p>
                    <p className="text-xs text-muted-foreground">{card.badge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
