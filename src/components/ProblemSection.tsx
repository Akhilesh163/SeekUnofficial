import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Brain, Target, TrendingDown, Lightbulb, Users, Play } from "lucide-react";
import studentImage from "@/assets/image.webp";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export const ProblemSection = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  return (
    <section className="pt-16 pb-12 px-8 md:px-16 lg:px-24 xl:px-16 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 items-center">
          {/* LEFT: Problem content (moved right on desktop via grid-order) */}
          <div className="lg:order-2 lg:pl-8">
            {/* "THE REALITY" pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-destructive/30 bg-destructive/5 text-destructive rounded-full px-4 py-1.5 mb-6"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold uppercase tracking-widest">
                The Reality
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[28px] md:text-[42px] font-bold font-display text-foreground leading-[1.05] tracking-tight mb-4"
            >
              Why Most Students<br />Struggle with Quant
            </motion.h2>

            {/* Accent text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.13 }}
              className="text-[18px] md:text-[22px] font-bold font-display text-primary leading-tight mb-6"
            >
              It's not your potential.<br />
              It's the wrong approach.
            </motion.p>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-[15px] text-muted-foreground leading-relaxed mb-4"
            >
              Students work hard. They solve questions. They watch videos. But the results don't reflect their effort. Why?
              <br />
              <strong className="text-foreground font-bold">Because they focus on the wrong things.</strong>
            </motion.p>

            {/* 3 Problem cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  num: "01",
                  icon: Brain,
                  title: "Confusing Concepts",
                  desc: "Topics feel hard because they're taught without clarity or connection.",
                },
                {
                  num: "02",
                  icon: Target,
                  title: "No Clear Strategy",
                  desc: "Random practice and guesswork make it hard to see real improvement.",
                },
                {
                  num: "03",
                  icon: TrendingDown,
                  title: "Inconsistent Results",
                  desc: "Mock scores fluctuate, confidence drops, and doubts keep coming back.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="relative bg-card rounded-[20px] border border-border/80 p-5 flex flex-col items-center text-center shadow-soft"
                >
                  <span className="absolute top-4 right-4 text-[12px] font-semibold text-primary">
                    {card.num}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mb-4 text-primary">
                    <card.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h4 className="text-[13px] font-bold text-foreground mb-2">{card.title}</h4>
                  <p className="text-[12px] text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                  <div className="w-6 h-0.5 bg-primary mt-4" />
                </motion.div>
              ))}
            </div>

            {/* Bottom callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[14px] text-muted-foreground">The problem is not you.</p>
                <p className="text-[15px] font-bold text-foreground">
                  The problem is the system most students follow.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual split panel (moved left on desktop via grid-order) */}
          <div className="lg:order-1">
            {/* "From → To" header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-6">
              <span className="text-[13px] font-medium text-muted-foreground whitespace-nowrap">
                From Confusion &amp; Overwhelm
              </span>
              <div className="hidden sm:flex items-center opacity-30 flex-1 min-w-[50px]">
                <svg viewBox="0 0 192 20" preserveAspectRatio="none" className="w-full h-[14px]">
                  <line x1="0" y1="10" x2="175" y2="10" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="175,4 192,10 175,16" fill="currentColor" />
                </svg>
              </div>
              <span className="text-muted-foreground/40 sm:hidden text-[12px]">↓</span>
              <span className="text-[13px] font-semibold text-emerald-600 whitespace-nowrap">
                To Clarity &amp; Confidence
              </span>
            </div>

            {/* Split panel */}
            <div className="relative rounded-[32px] overflow-hidden h-[260px] sm:h-[420px] md:h-[520px] lg:h-[480px] xl:h-[520px] isolate bg-gradient-to-b from-primary/5 to-transparent border border-border/40">
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                <img
                  src={studentImage}
                  alt="Student with GMAT books"
                  className="h-[95%] w-auto object-contain object-bottom rounded-3xl drop-shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-8 lg:gap-16 mt-12 items-center">
          {/* You're not alone */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-[20px] border border-border/80 p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left w-full shadow-soft"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              You're not alone. Thousands of students felt the same way—until they found the right guidance and system.
            </p>
          </motion.div>

          {/* Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:pl-8"
          >
            <p className="text-[19px] md:text-[21px] font-bold text-foreground leading-snug mb-1">
              Real guidance. Right strategy. Consistent results.
            </p>
            <p className="text-[17px] md:text-[18px] font-semibold text-primary">
              That's what changes everything.
            </p>
          </motion.div>
        </div>

        {/* BOOK FREE DEMO BUTTON */}
        <div className="flex justify-center mt-12">
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
