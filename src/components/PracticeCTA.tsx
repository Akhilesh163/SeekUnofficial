import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Target, TrendingUp, Calendar } from "lucide-react";

export const PracticeCTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="pill pill-pink mb-6">PRACTICE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Practice with SeekYourY Tools
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access our proprietary assessment engine and habit trackers. Build lasting change with tools designed for real transformation.
              </p>
              <Button size="lg" className="rounded-full px-8 h-14 gap-2 group">
                Start Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Visual mockup */}
            <div className="relative">
              <div className="bg-card rounded-3xl shadow-elevated p-5 border border-border/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-background rounded-2xl p-6">
                  {/* Mock browser header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                    <div className="flex-1 h-7 bg-secondary rounded-full ml-4 flex items-center px-3">
                      <span className="text-xs text-muted-foreground">seekyoury.com/dashboard</span>
                    </div>
                  </div>

                  {/* Mock dashboard content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Your Progress Dashboard</div>
                        <div className="text-xs text-muted-foreground">Week 4 of 12 • 67% complete</div>
                      </div>
                    </div>
                    
                    {/* Stats cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-pastel-green rounded-xl p-3 text-center">
                        <Target className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-foreground">12</div>
                        <div className="text-xs text-muted-foreground">Goals Set</div>
                      </div>
                      <div className="bg-pastel-purple rounded-xl p-3 text-center">
                        <TrendingUp className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-foreground">8</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                      <div className="bg-pastel-blue rounded-xl p-3 text-center">
                        <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                        <div className="text-lg font-bold text-foreground">28</div>
                        <div className="text-xs text-muted-foreground">Day Streak</div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-primary to-primary/70 rounded-full" />
                    </div>
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
