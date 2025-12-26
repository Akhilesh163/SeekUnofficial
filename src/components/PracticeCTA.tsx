import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const PracticeCTA = () => {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="pill pill-pink mb-6">4. PRACTICE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Practice with SeekYourY Tools
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Access our proprietary assessment engine and habit trackers. Build lasting change with tools designed for real transformation.
              </p>
              <Button size="lg" className="rounded-full px-8 h-14 gap-2 group">
                Start Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Visual mockup */}
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-elevated p-4 border border-border/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-background rounded-xl p-6">
                  {/* Mock browser header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                    <div className="flex-1 h-6 bg-secondary rounded-full ml-4" />
                  </div>

                  {/* Mock dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-4 bg-secondary rounded w-3/4 mb-2" />
                        <div className="h-3 bg-secondary/50 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-20 bg-secondary rounded-xl"
                        />
                      ))}
                    </div>
                    <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
