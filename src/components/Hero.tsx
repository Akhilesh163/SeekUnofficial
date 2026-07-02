import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BookSessionDialog } from "@/components/BookSessionDialog";

import praffulImg from "@/assets/student_pics/Prafful.jpeg";
import arjunImg from "@/assets/student_pics/Arjun M S.jpeg";
import sabhyataImg from "@/assets/student_pics/Sabhyata.jpeg";
import balaImg from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import manyaImg from "@/assets/student_pics/Manya.jpeg";

const LMS_LEARN_URL = "https://lms.seekyoury.com/learn";

/** Praful, Arjun, Sabhyata first so they appear on page load; then remaining students. */
const successStories = [
  { displayName: "Praful", image: praffulImg, scoreLabel: "Quant 156 -> 169", examLabel: "GRE" },
  { displayName: "Arjun", image: arjunImg, scoreLabel: "Quant 160 -> 168", examLabel: "GRE" },
  { displayName: "Sabhyata", image: sabhyataImg, scoreLabel: "Quant 155 -> 160", examLabel: "GRE" },
  { displayName: "Bala", image: balaImg, scoreLabel: "Quant 158 -> 166", examLabel: "GRE" },
  { displayName: "Manya", image: manyaImg, scoreLabel: "DI 83/90", examLabel: "GMAT" },
];

const studentAvatars = successStories.map((s) => s.image);

export const Hero = () => {
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pausedUntilRef = useRef<number>(0);
  const dragStartXRef = useRef<number | null>(null);
  const dragLastXRef = useRef<number | null>(null);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) pausedUntilRef.current = Date.now() + 60_000;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActiveIndex((i) => (i + 1) % successStories.length);
    }, 5000);

    return () => {
      window.clearInterval(id);
    };
  }, []);

  const pauseBriefly = () => {
    pausedUntilRef.current = Date.now() + 1500;
  };

  const goPrev = () => {
    pauseBriefly();
    setActiveIndex((i) => (i - 1 + successStories.length) % successStories.length);
  };

  const goNext = () => {
    pauseBriefly();
    setActiveIndex((i) => (i + 1) % successStories.length);
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    pauseBriefly();
    dragStartXRef.current = e.clientX;
    dragLastXRef.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (dragStartXRef.current == null) return;
    dragLastXRef.current = e.clientX;
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = () => {
    if (dragStartXRef.current == null || dragLastXRef.current == null) return;
    const dx = dragLastXRef.current - dragStartXRef.current;
    dragStartXRef.current = null;
    dragLastXRef.current = null;

    const threshold = 50;
    if (dx > threshold) goPrev();
    else if (dx < -threshold) goNext();
  };

  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden bg-background">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base md:text-lg text-muted-foreground mb-4 animate-fade-up">
            Led by <span className="font-semibold text-foreground">Aman</span> • 8+ years mentoring experience • 10,000+ students guided
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] mb-6 animate-fade-up font-display">
            <span className="headline-primary">Quant doesn't have to be scary.</span>
            <br />
            <span className="text-foreground">Master GMAT & GRE quant!</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up stagger-1 leading-relaxed">
            Build confidence with a logic-first approach that translates directly to test-day speed and accuracy.
          </p>

          <div className="flex items-center justify-center gap-3 mb-10 animate-fade-up stagger-2">
            <div className="flex items-center">
              {studentAvatars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  className={`h-9 w-9 rounded-full object-cover border-2 border-background shadow-soft ${
                    idx === 0 ? "" : "-ml-3"
                  }`}
                />
              ))}
            </div>
            <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground shadow-soft">
              Trusted by <span className="mx-1 font-bold text-primary">10,000+</span> Achievers
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mb-10 animate-fade-up stagger-3">
            <Button size="lg" className="rounded-full px-10 h-14 text-base gap-2 group" asChild>
              <a href={LMS_LEARN_URL} target="_blank" rel="noopener noreferrer">
                Start Learning Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto animate-fade-up stagger-5">
          <div className="relative px-4 sm:px-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 h-11 w-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-soft flex items-center justify-center hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 h-11 w-11 rounded-full bg-background/90 backdrop-blur border border-border shadow-soft flex items-center justify-center hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className="relative mx-auto h-[520px] md:h-[620px] overflow-hidden"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              style={{
                ["--centerW" as string]: "clamp(320px, 36vw, 440px)",
                ["--centerH" as string]: "clamp(480px, 52vw, 620px)",
                ["--sideW" as string]: "clamp(280px, 30vw, 360px)",
                ["--sideH" as string]: "clamp(440px, 46vw, 540px)",
                ["--sidePeek" as string]: "1",
                ["--gap" as string]: "18px",
                width:
                  "min(100%, calc(var(--centerW) + (var(--sideW) * var(--sidePeek) * 2) + (var(--gap) * 2)))",
                ["--offsetX" as string]: "calc((var(--centerW) / 2) + (var(--sideW) / 2) + var(--gap))",
              }}
            >
              {successStories.map((story, i) => {
                const n = successStories.length;
                const raw = (i - activeIndex + n) % n;
                const offset = raw === 0 ? 0 : raw === 1 ? 1 : raw === n - 1 ? -1 : 99;
                const isVisible = offset !== 99;

                const base =
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[28px] overflow-hidden shadow-elevated transition-[transform,opacity] duration-500 ease-out will-change-transform";

                const cls = offset === 0 ? "z-30 opacity-100" : "z-20 opacity-95";

                return (
                  <div
                    key={story.displayName}
                    className={`${base} ${cls}`}
                    style={{
                      display: isVisible ? "block" : "none",
                      width: offset === 0 ? "var(--centerW)" : "var(--sideW)",
                      height: offset === 0 ? "var(--centerH)" : "var(--sideH)",
                      transform:
                        offset === 0
                          ? "translate(-50%, -50%) translate3d(0, 0, 0) scale(1)"
                          : offset === -1
                            ? "translate(-50%, -50%) translate3d(calc(-1 * var(--offsetX)), 0, 0) scale(0.94)"
                            : "translate(-50%, -50%) translate3d(var(--offsetX), 0, 0) scale(0.94)",
                    }}
                  >
                    <img src={story.image} alt={story.displayName} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-center">
                      <p className="font-semibold text-white mb-1 text-base md:text-lg">{story.displayName}</p>
                      <p className="text-white/80 text-sm mb-3">{story.examLabel} Student</p>
                      <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-lg md:text-2xl">
                        {story.scoreLabel}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-up stagger-6">
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

      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </section>
  );
};
