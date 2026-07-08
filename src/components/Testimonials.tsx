import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Play, ChevronLeft, ChevronRight, Trophy, TrendingUp, BarChart2 } from "lucide-react";
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
      percentage: "+19.35%",
      sliderVal: 75,
      starColor: "text-amber-500 fill-amber-500",
      sliderColor: "bg-blue-600",
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
      percentage: "+22.41%",
      sliderVal: 78,
      starColor: "text-purple-500 fill-purple-500",
      sliderColor: "bg-purple-600",
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
      percentage: "+18.75%",
      sliderVal: 80,
      starColor: "text-blue-500 fill-blue-500",
      sliderColor: "bg-blue-600",
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
    <section className="pt-16 pb-16 bg-gradient-to-b from-blue-50/20 via-indigo-50/10 to-background relative overflow-hidden mesh-blue-indigo" id="success-stories">
      {/* Decorative colorful glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="max-w-[1440px] mx-auto relative px-4 sm:px-16">
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
              STAR PERFORMERS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl md:text-4xl font-bold font-display text-foreground leading-[1.05] tracking-tight mb-5"
          >
            Our Top Achievers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-[15px] md:text-lg text-muted-foreground leading-relaxed"
          >
            Celebrating outstanding performance and continuous improvement
          </motion.p>
        </div>

        {/* 3D CAROUSEL WRAPPER WITH NAVIGATION CHEVRONS */}
        <div className="relative w-full max-w-[1150px] h-[480px] mx-auto flex items-center justify-center select-none">
          {/* Left Arrow Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 bg-white rounded-full border border-border/80 shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer text-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-11 bg-white rounded-full border border-border/80 shadow-md flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer text-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* 3D Carousel Cards Container */}
          <div className="w-full h-full relative overflow-visible flex items-center justify-center">
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
                    onClick={() => {
                      if (!isActive) setCurrentIndex(idx);
                    }}
                    className={`bg-slate-900 text-white rounded-[28px] border overflow-hidden flex flex-col shadow-soft h-[460px] w-full relative transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? "border-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.25)]" 
                        : "border-border/80 hover:border-white/20"
                    }`}
                  >
                    {/* Full Bleed Background Image */}
                    <div className="absolute inset-0 w-full h-full z-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Dark gradient overlay at the bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </div>

                    {/* Left Badge (Active only): Gold trophy badge */}
                    {isActive && (
                      <div className="absolute top-5 left-5 z-20 flex flex-col items-center select-none text-amber-500">
                        <Trophy className="w-7 h-7 stroke-[1.5] text-amber-500 fill-amber-500/20" />
                        <span className="text-[9px] font-black uppercase tracking-widest mt-1">
                          Top Performer
                        </span>
                      </div>
                    )}

                    {/* Right Badge (School Badge) */}
                    <span className="absolute top-5 right-5 z-20 text-[10px] text-white font-bold bg-blue-600/90 border border-blue-500/30 rounded-full px-3 py-1 shadow-sm uppercase tracking-wider">
                      {t.schoolShort}
                    </span>

                    {/* Card overlay content - aligned to bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col z-10 pt-24">
                      {/* Name */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-3">{t.name}</h3>
                      </div>

                      {/* Separator Line */}
                      <div className="border-t border-white/20 mb-4" />

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 divide-x divide-white/10 text-center items-start">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Before</span>
                          <span className="text-[22px] sm:text-[24px] font-black text-white mt-0.5">{t.before}</span>
                          {isActive && (
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-2">
                              <BarChart2 className="w-4.5 h-4.5" />
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-center px-1">
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Improvement</span>
                          <span className="text-[22px] sm:text-[24px] font-black text-emerald-400 mt-0.5 flex items-center justify-center gap-0.5">
                            {t.delta} <span className="text-[16px]">↗</span>
                          </span>
                          {isActive && (
                            <div className="h-8 flex items-center justify-center mt-2">
                              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                                {t.percentage}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">Final Score</span>
                          <span className="text-[22px] sm:text-[24px] font-black text-blue-400 mt-0.5">{t.after}</span>
                          {isActive && (
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-2">
                              <Trophy className="w-4.5 h-4.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
