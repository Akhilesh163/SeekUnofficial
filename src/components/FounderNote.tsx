import { Heart } from "lucide-react";

export const FounderNote = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-pastel-red flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <span className="pill pill-coral">A NOTE FROM AMAN</span>
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                I Believe in <span className="headline-primary">Your Potential</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  After 8 years of mentoring over 10,000 students, I've seen one pattern repeat itself: 
                  <span className="text-foreground font-medium"> the problem is rarely ability—it's approach.</span>
                </p>
                
                <p>
                  Most students come to me convinced they're "just not math people." Within weeks, they're solving 
                  problems they once thought impossible. Why? Because Quant isn't about memorizing formulas—it's 
                  about understanding <span className="text-foreground font-medium">why</span> things work.
                </p>

                <p>
                  When you learn the logic behind each concept, math stops being scary. It becomes 
                  <span className="text-foreground font-medium"> empowering.</span>
                </p>

                <p>
                  Whether you're starting at 280 or 310, whether you've failed before or you're trying for the 
                  first time—I promise you: with the right guidance and your commitment, 
                  <span className="text-foreground font-medium"> you can achieve the score you deserve.</span>
                </p>

                <p className="text-foreground font-semibold pt-4">
                  Let's conquer Quant together.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-xl font-bold text-foreground">Aman</p>
                <p className="text-muted-foreground">Founder, SeekYourY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
