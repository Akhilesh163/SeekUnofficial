import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SeekMethod } from "@/components/SeekMethod";
import { StarPerformers } from "@/components/Testimonials";
import { AboutMe } from "@/components/AboutMe";
import { SupportTabs } from "@/components/SupportTabs";
import { BookDemoForm } from "@/components/BookDemoForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ScrollToSection } from "@/components/ScrollToSection";
import { motion } from "framer-motion";
import { Users, BarChart2, TrendingUp, Award, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToSection />
      <Navbar />
      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* STAR PERFORMERS */}
        <StarPerformers />

        {/* TRUST HEADER */}
        <section className="pt-12 pb-4 px-8 md:px-16 lg:px-24 xl:px-16 text-center bg-background">
          <div className="max-w-[1440px] mx-auto">
            {/* Pill with lines */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Trusted by 10,000+ Learners
              </span>
              <div className="h-px w-12 bg-primary/40" />
            </div>

            {/* Headline */}
            <h2 className="text-[36px] md:text-[52px] font-bold font-display text-foreground leading-[1.1] tracking-tight mb-4">
              From Top Schools. From Around the World.
            </h2>

            {/* Subtext */}
            <p className="text-[16px] md:text-[18px] text-muted-foreground font-normal leading-relaxed max-w-[560px] mx-auto">
              Our learners come from the world's leading universities and business schools.
            </p>
          </div>
        </section>

        {/* RESULTS & TRUST SECTION */}
        <section className="pt-8 pb-12 px-8 md:px-16 lg:px-24 xl:px-16 bg-background" id="results">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-card rounded-[28px] border border-border/80 shadow-soft overflow-hidden">
              {/* Stats area */}
              <div className="px-8 md:px-12 pt-12 pb-10">
                {/* Pill label */}
                <div className="flex justify-center mb-10">
                  <span className="inline-flex items-center bg-primary/5 border border-primary/20 text-foreground text-[11px] font-bold uppercase tracking-[0.12em] px-5 py-2.5 rounded-full">
                    Proven Results. Real Impact.
                  </span>
                </div>

                {/* 5 stat cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    {
                      icon: Users,
                      value: "10,000+",
                      label: "Students Mentored",
                      desc: "Across 50+ countries and growing.",
                    },
                    {
                      icon: BarChart2,
                      value: "92%",
                      label: "Success Rate",
                      desc: "Students achieve their target scores.",
                    },
                    {
                      icon: TrendingUp,
                      value: "+120",
                      label: "Avg. Score Improvement",
                      desc: "Average score improvement across our learners.",
                    },
                    {
                      icon: Award,
                      value: "15+",
                      label: "Years of Experience",
                      desc: "Deep expertise. Proven methodologies.",
                    },
                    {
                      icon: Star,
                      value: "4.9/5",
                      label: "Learner Rating",
                      desc: "Consistently rated excellent by our students.",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="bg-card rounded-[20px] border border-border/50 p-6 flex flex-col gap-4 items-center text-center shadow-soft sm:last:col-span-2 lg:last:col-span-1"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <stat.icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <div>
                        <div className="text-[36px] md:text-[44px] font-bold font-display text-foreground leading-none tracking-tight mb-2">
                          {stat.value}
                        </div>
                        <div className="text-[14px] sm:text-[15px] font-bold text-foreground mb-1.5">{stat.label}</div>
                        <div className="text-[12px] text-muted-foreground font-normal leading-snug">{stat.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <ProblemSection />

        {/* METHOD/SOLUTION SECTION */}
        <SeekMethod />

        {/* 1-ON-1 TUTORING SECTION */}
        <SupportTabs />

        {/* MEET YOUR MENTOR */}
        <AboutMe />

        {/* BOOK A DEMO */}
        <BookDemoForm />

        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
