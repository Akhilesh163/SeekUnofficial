import React, { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface StatCounterProps {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const end = parseInt(value.replace(/[^0-9]/g, ""), 10);
          if (isNaN(end)) return;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easeProgress = progress * (2 - progress); // Ease out quad
            const currentCount = Math.floor(easeProgress * end);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    if (value.includes("+")) {
      return `${num.toLocaleString()}+`;
    }
    if (value.includes("%")) {
      return `${num}%`;
    }
    return num.toLocaleString();
  };

  return (
    <div ref={elementRef} className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>
      <div>
        <div className="text-[28px] font-extrabold text-foreground font-display leading-none tracking-tight">
          {hasAnimated ? formatNumber(count) : "0"}
        </div>
        <div className="text-[14px] md:text-[15px] text-muted-foreground font-normal mt-1 leading-tight whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
};
