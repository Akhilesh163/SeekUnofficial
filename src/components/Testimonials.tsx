import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export const StarPerformers = () => {
  const testimonials = [
    {
      name: "Arjun M.",
      school: "Admitted to INSEAD",
      schoolShort: "INSEAD",
      quote: "Quant was my weak section. Structured practice changed everything.",
      before: 620,
      after: 740,
      delta: "+120",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    },
    {
      name: "Sneha R.",
      school: "Admitted to ISB",
      schoolShort: "ISB",
      quote: "The frameworks are gold. I improved my score and confidence together.",
      before: 580,
      after: 710,
      delta: "+130",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Karan S.",
      school: "Admitted to Kellogg",
      schoolShort: "Kellogg",
      quote: "Every concept clicked. The feedback loop made the biggest difference.",
      before: 640,
      after: 760,
      delta: "+120",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // Monitor viewport size for mobile scaling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatic scrolling loop (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardOffset = (index: number) => {
    let offset = index - currentIndex;
    // Circular offset wrapping for 3 items
    if (offset < -1) offset += 3;
    if (offset > 1) offset -= 3;
    return offset;
  };

  const getPositionX = (offset: number) => {
    if (isMobile) {
      if (offset === -1) return "-150%";
      if (offset === 1) return "150%";
      return "-50%";
    } else {
      if (offset === -1) return "-145%";
      if (offset === 1) return "45%";
      return "-50%";
    }
  };

  const getOpacity = (offset: number) => {
    if (isMobile) {
      return offset === 0 ? 1 : 0;
    } else {
      return offset === 0 ? 1 : 0.35;
    }
  };

  return (
    <section className="pt-12 pb-12 bg-background relative overflow-hidden" id="success-stories">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-[860px] mx-auto mb-16 px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Real Results. Star Performers.
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[26px] md:text-[38px] font-bold font-display text-foreground leading-[1.05] tracking-tight mb-5"
          >
            Star performers. <span className="text-primary">Real transformation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed"
          >
            From confusion to confidence, our star performers have achieved exceptional scores with the{" "}
            <strong className="text-foreground font-semibold">Seek Your Y Method.</strong>
          </motion.p>
        </div>

        {/* 3D VERTICAL LOOPING CAROUSEL WRAPPER */}
        <div className="relative w-full max-w-[1100px] h-[480px] mx-auto flex items-center justify-center select-none px-4 overflow-x-hidden">
          {testimonials.map((t, idx) => {
            const offset = getCardOffset(idx);
            const isActive = offset === 0;

            return (
              <motion.div
                key={t.name}
                style={{
                  y: "-50%",
                }}
                animate={{
                  x: getPositionX(offset),
                  scale: isActive ? 1 : 0.82,
                  opacity: getOpacity(offset),
                  zIndex: isActive ? 30 : 20,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="absolute left-1/2 top-1/2 w-full max-w-[300px] sm:max-w-[330px]"
              >
                <div
                  className={`bg-card rounded-[28px] border overflow-hidden flex flex-col shadow-soft h-[440px] relative transition-all duration-300 group ${
                    isActive ? "border-primary shadow-elevated" : "border-border/80 pointer-events-none"
                  }`}
                >
                  {/* Top Header Background (Active Card Only) */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-0 h-[100px] bg-primary overflow-hidden">
                      {/* Decorative background sparkles */}
                      <div className="absolute top-3 left-8 w-2 h-2 bg-white/20 rounded-full" />
                      <div className="absolute top-8 left-16 w-1.5 h-1.5 bg-white/15 rounded-full" />
                      <div className="absolute top-4 right-14 w-3 h-3 bg-white/20 rounded-full" />
                      <div className="absolute top-8 right-24 w-1.5 h-1.5 bg-white/15 rounded-full" />
                    </div>
                  )}

                  {/* School Badge / Tag */}
                  {isActive ? (
                    <span className="absolute top-[152px] left-1/2 transform -translate-x-1/2 z-20 text-[10px] text-white font-bold bg-primary border border-primary/20 rounded-full px-3 py-1 shadow-sm uppercase tracking-wider">
                      {t.schoolShort}
                    </span>
                  ) : (
                    <span className="absolute top-5 right-5 z-20 text-[10px] text-primary font-bold bg-primary/10 border border-primary/20 rounded-full px-3 py-1 shadow-sm uppercase tracking-wider">
                      {t.schoolShort}
                    </span>
                  )}

                  {/* Centered Avatar Image */}
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden z-10 transition-all duration-300 ${
                      isActive
                        ? "top-[24px] w-36 h-36 border-4 border-card shadow-md"
                        : "top-[20px] w-32 h-32 border border-border/80"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Contents */}
                  <div
                    className={`flex flex-col justify-between h-full px-6 pb-6 ${
                      isActive ? "pt-[190px]" : "pt-[165px]"
                    }`}
                  >
                    {/* Name & Quote */}
                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-[20px] font-bold text-foreground mb-3">{t.name}</h3>
                      <p className="text-[13px] text-muted-foreground leading-relaxed italic px-2">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Separator Line */}
                    <div className="border-t border-border/60 my-4" />

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 divide-x divide-border/60 text-center items-center">
                      <div className="flex flex-col items-center">
                        <span className="text-[8px] sm:text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Before</span>
                        <span className="text-[15px] sm:text-[16px] font-black text-foreground/80 mt-1">{t.before}</span>
                      </div>
                      <div className="flex flex-col items-center px-1">
                        <span className="text-[8px] sm:text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Improvement</span>
                        <span className="text-[15px] sm:text-[16px] font-black text-emerald-500 mt-1 flex items-center justify-center gap-0.5">
                          {t.delta} <span className="text-[12px]">↗</span>
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[8px] sm:text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Final Score</span>
                        <span className="text-[18px] sm:text-[20px] font-black text-primary mt-1">{t.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DOTS INDICATORS */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* BOOK FREE DEMO BUTTON */}
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-soft hover-lift"
            onClick={() => setIsBookDemoOpen(true)}
          >
            <Play className="w-4 h-4 fill-current" />
            Book Free Demo
          </Button>
        </div>

        {/* BOOK DEMO DIALOG */}
        <BookSessionDialog
          open={isBookDemoOpen}
          onOpenChange={setIsBookDemoOpen}
          title="Book a free demo"
          description="Share your details and we'll schedule a free 30-minute consultation with Aman."
        />
      </div>
    </section>
  );
};
