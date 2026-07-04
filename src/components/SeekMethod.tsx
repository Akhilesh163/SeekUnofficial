import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Lightbulb,
  Target,
  LineChart,
  CheckCircle2,
  Users,
  BookOpen,
  BarChart2,
  Play,
  Calculator,
  GraduationCap,
  Video,
  FileText,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

export const SeekMethod = () => {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  return (
    <section className="pt-16 pb-12 px-8 md:px-16 lg:px-24 xl:px-16 bg-background-alt" id="programs">
      <div className="max-w-[1440px] mx-auto">
        {/* TOP: Badge + Headline + Sub */}
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              The Seek Your Y Method
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[28px] md:text-[40px] font-bold font-display text-foreground leading-[1.05] tracking-tight mb-5"
          >
            A proven system to make quant{" "}
            <span className="text-primary">simple, structured,</span> and score-driven.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed"
          >
            We don't teach random tricks. We build a system that helps you{" "}
            <strong className="text-foreground font-semibold">understand, apply,</strong> and{" "}
            <strong className="text-foreground font-semibold">improve consistently.</strong>
          </motion.p>
        </div>

        {/* FRAMEWORK CARDS */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 mb-20">
          {[
            {
              num: "01",
              label: "CLARITY",
              icon: Lightbulb,
              desc: "We simplify complex concepts and build strong foundations with clear frameworks.",
              chip: "Concepts that finally make sense",
            },
            {
              num: "02",
              label: "STRATEGY",
              icon: Target,
              desc: "We teach smart problem-solving strategies tailored to each question type and pattern.",
              chip: "Approach every question with confidence",
            },
            {
              num: "03",
              label: "RESULTS",
              icon: LineChart,
              desc: "We help you practice with purpose and build consistency that shows in your scores.",
              chip: "Consistent improvement. Better scores.",
            },
          ].map((card, i) => (
            <React.Fragment key={card.num}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="flex-1 relative flex flex-col bg-card border border-border/85 rounded-[24px] px-6 pt-12 pb-6 shadow-soft"
              >
                {/* Number badge floating above card */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-[16px] font-extrabold text-primary">{card.num}</span>
                </div>

                {/* Icon LEFT + Heading+Text RIGHT */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 flex-1 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-2">
                    <card.icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col items-center sm:items-start">
                    <h3 className="text-[18px] font-extrabold text-foreground uppercase tracking-wide leading-tight">
                      {card.label}
                    </h3>
                    <div className="w-8 h-[3px] bg-primary rounded-full mt-1.5 mb-3" />
                    <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                </div>

                {/* Single chip */}
                <div className="flex justify-center pt-2">
                  <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 text-[13px] text-primary font-medium px-4 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
                    {card.chip}
                  </span>
                </div>
              </motion.div>

              {/* Connector arrow */}
              {i < 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  className="hidden lg:flex items-center justify-center px-4 shrink-0"
                >
                  <svg width="56" height="20" viewBox="0 0 56 20" fill="none">
                    <line
                      x1="0"
                      y1="10"
                      x2="44"
                      y2="10"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeDasharray="5 3"
                    />
                    <polygon points="42,4 56,10 42,16" fill="hsl(var(--primary))" />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* COURSES HEADER */}
        <div className="text-center max-w-[900px] mx-auto mt-24 mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center bg-primary/5 border border-primary/20 text-foreground text-[11px] font-bold uppercase tracking-[0.12em] px-5 py-2.5 rounded-full mb-6">
              COURSES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[28px] md:text-[40px] lg:text-[45px] font-bold font-display text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Choose Your <span className="text-primary">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed max-w-[620px] mx-auto"
          >
            Whether you're starting from scratch or fine-tuning for test day, we have the right course for you.
          </motion.p>
        </div>

        {/* SUPPORT STRIP */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            {
              title: "GRE Quants",
              desc: "Master quantitative reasoning with focused concepts, logic shortcuts, and targeted drills.",
              logoText: "GRE",
              logoSub: "QUANT",
              gradient: "from-emerald-500 to-teal-600 shadow-emerald-500/20",
              icon: Target,
              href: "https://lms.seekyoury.com/learn/Quants-for-GRE",
            },
            {
              title: "GRE Verbal",
              desc: "Elevate your verbal score using advanced reading comprehension and vocabulary frameworks.",
              logoText: "GRE",
              logoSub: "VERBAL",
              gradient: "from-teal-500 to-cyan-600 shadow-teal-500/20",
              icon: BookOpen,
              href: "https://lms.seekyoury.com/learn",
            },
            {
              title: "GMAT Quants",
              desc: "Build speed and accuracy with structured concept videos and logic-based practice quizzes.",
              logoText: "GMAT",
              logoSub: "QUANT",
              gradient: "from-blue-600 to-indigo-600 shadow-blue-500/20",
              icon: Calculator,
              href: "https://lms.seekyoury.com/learn/Quants-For-GMAT",
            },
            {
              title: "GMAT Verbal",
              desc: "Ace critical reasoning and sentence correction with systematic reasoning strategies.",
              logoText: "GMAT",
              logoSub: "VERBAL",
              gradient: "from-indigo-600 to-violet-600 shadow-indigo-500/20",
              icon: GraduationCap,
              href: "https://lms.seekyoury.com/learn",
            },
            {
              title: "Private Tutoring",
              desc: "1-on-1 personalized mentoring tailored directly to your score goals and timelines.",
              logoText: "1:1",
              logoSub: "PRIVATE",
              gradient: "from-amber-500 to-orange-600 shadow-orange-500/20",
              icon: Users,
              href: "/tutoring",
              isInternal: true,
            },
            {
              title: "Live Classes",
              desc: "Interactive live preparation cohorts with real-time doubt solving and peer learning.",
              logoText: "LIVE",
              logoSub: "CLASSES",
              gradient: "from-rose-500 to-pink-600 shadow-rose-500/20",
              icon: Video,
              href: "https://lms.seekyoury.com/learn/Quants-For-GMAT",
            },
            {
              title: "Test Series",
              desc: "High-quality mock tests and sectional practice with in-depth performance analytics.",
              logoText: "TEST",
              logoSub: "SERIES",
              gradient: "from-slate-600 to-slate-800 shadow-slate-500/20",
              icon: FileText,
              href: "https://lms.seekyoury.com/learn/view-all?show=mock-tests&type=2",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[260px] max-w-[320px] bg-card border border-border/80 hover:border-primary/40 rounded-[24px] p-8 flex flex-col items-center text-center gap-6 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Logo / Badge container (size w-20 h-20, gradient, shadow) */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-[16px] font-black tracking-wider leading-none">
                  {item.logoText}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest opacity-80 mt-1.5">
                  {item.logoSub}
                </span>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white text-foreground flex items-center justify-center shadow-md border border-border/20">
                  <item.icon className="w-3.5 h-3.5 stroke-[2] text-primary" />
                </div>
              </div>

              <div className="flex-grow flex flex-col items-center">
                <h4 className="text-[19px] font-bold text-foreground mb-3 transition-colors duration-200 group-hover:text-primary">{item.title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[240px]">
                  {item.desc}
                </p>
              </div>
              {item.isInternal ? (
                <Link
                  to={item.href}
                  className="mt-auto text-[14px] font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/btn"
                >
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-[14px] font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 group/btn"
                >
                  Explore <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              )}
            </motion.div>
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
