import React, { useState, useEffect, useRef } from "react";
import { LucideIcon } from "lucide-react";

interface StatCounterProps {
  value: string;
  label: string;
  icon: LucideIcon;
  color?: "blue" | "emerald" | "violet" | "amber" | "rose";
}

const colorMap = {
  blue:    { bg: "bg-blue-100",    border: "border-blue-200",   text: "text-blue-600",   gradient: "from-blue-600 to-indigo-600" },
  emerald: { bg: "bg-emerald-100", border: "border-emerald-200",text: "text-emerald-600",gradient: "from-emerald-500 to-teal-600" },
  violet:  { bg: "bg-violet-100",  border: "border-violet-200", text: "text-violet-600", gradient: "from-violet-500 to-purple-600" },
  amber:   { bg: "bg-amber-100",   border: "border-amber-200",  text: "text-amber-600",  gradient: "from-amber-500 to-orange-500" },
  rose:    { bg: "bg-rose-100",    border: "border-rose-200",   text: "text-rose-600",   gradient: "from-rose-500 to-pink-500" },
};

export const StatCounter: React.FC<StatCounterProps> = ({ value, label, icon: Icon, color = "blue" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const c = colorMap[color];

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
            const easeProgress = progress * (2 - progress);
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
    if (currentElement) observer.observe(currentElement);
    return () => { if (currentElement) observer.unobserve(currentElement); };
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    if (value.includes("+")) return `${num.toLocaleString()}+`;
    if (value.includes("%")) return `${num}%`;
    return num.toLocaleString();
  };

  return (
    <div ref={elementRef} className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full ${c.bg} border ${c.border} flex items-center justify-center ${c.text} shrink-0`}>
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>
      <div>
        <div className={`text-xl font-extrabold font-display leading-none tracking-tight bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>
          {hasAnimated ? formatNumber(count) : "0"}
        </div>
        <div className="text-base text-muted-foreground font-normal mt-1 leading-tight whitespace-nowrap">
          {label}
        </div>
      </div>
    </div>
  );
};
