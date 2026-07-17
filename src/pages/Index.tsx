import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SeekMethod } from "@/components/SeekMethod";
import Testimonials from "@/components/Testimonials";
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

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* TRUST HEADER */}
        <section className="pt-16 pb-4 px-8 md:px-16 lg:px-24 xl:px-16 text-center bg-gradient-to-b from-background via-blue-50/20 to-indigo-50/30 mesh-blue-indigo">
          <div className="max-w-[1440px] mx-auto">
            {/* Pill with lines */}
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Trusted by 10,000+ Learners
              </span>
              <div className="h-px w-12 bg-primary/40" />
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-[36.4px] font-bold font-display text-foreground leading-[1.1] tracking-tight mb-4">
              From Top Schools. From Around the World.
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed max-w-[560px] mx-auto">
              Our learners come from the world's leading universities and business schools.
            </p>
          </div>
        </section>

        {/* RESULTS & TRUST SECTION */}
        <section className="pt-8 pb-16 px-8 md:px-16 lg:px-24 xl:px-16 bg-gradient-to-b from-indigo-50/30 via-white to-background relative overflow-hidden" id="results">
          {/* Soft color glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-300/10 blur-3xl pointer-events-none -z-10" />
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-card rounded-[28px] border border-border/80 shadow-soft overflow-hidden relative bg-gradient-to-br from-white via-white to-blue-50/20">
              {/* Stats area */}
              <div className="px-8 md:px-12 pt-12 pb-10">
                {/* Pill label */}
                <div className="flex justify-center mb-10">
                  <span className="inline-flex items-center bg-primary/5 border border-primary/20 text-foreground text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 rounded-full">
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
                       theme: "from-blue-600 to-indigo-600",
                       glow: "hover:shadow-blue-500/10 hover:border-blue-500/30",
                       iconBg: "bg-blue-50 text-blue-600 border-blue-200/50",
                       valueColor: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                     },
                     {
                       icon: BarChart2,
                       value: "92%",
                       label: "Success Rate",
                       desc: "Students achieve their target scores.",
                       theme: "from-emerald-600 to-teal-600",
                       glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/30",
                       iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200/50",
                       valueColor: "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                     },
                     {
                       icon: TrendingUp,
                       value: "+120",
                       label: "Avg. Score Improvement",
                       desc: "Average score improvement across our learners.",
                       theme: "from-purple-600 to-violet-600",
                       glow: "hover:shadow-purple-500/10 hover:border-purple-500/30",
                       iconBg: "bg-purple-50 text-purple-600 border-purple-200/50",
                       valueColor: "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                     },
                     {
                       icon: Award,
                       value: "15+",
                       label: "Years of Experience",
                       desc: "Deep expertise. Proven methodologies.",
                       theme: "from-amber-500 to-orange-500",
                       glow: "hover:shadow-amber-500/10 hover:border-amber-500/30",
                       iconBg: "bg-amber-50 text-amber-600 border-amber-200/50",
                       valueColor: "bg-gradient-to-r from-amber-50 to-orange-500 bg-clip-text text-transparent"
                     },
                     {
                       icon: Star,
                       value: "4.9/5",
                       label: "Learner Rating",
                       desc: "Consistently rated excellent by our students.",
                       theme: "from-rose-500 to-pink-500",
                       glow: "hover:shadow-rose-500/10 hover:border-rose-500/30",
                       iconBg: "bg-rose-50 text-rose-600 border-rose-200/50",
                       valueColor: "bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"
                     },
                   ].map((stat, i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: i * 0.08 }}
                       whileHover={{ y: -4 }}
                       className={`relative bg-card rounded-[24px] border border-border/50 p-6 flex flex-col gap-4 items-center text-center shadow-soft transition-all duration-300 ${stat.glow} sm:last:col-span-2 lg:last:col-span-1 overflow-hidden`}
                     >
                       {/* Top accent line */}
                       <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.theme}`} />

                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${stat.iconBg}`}>
                         <stat.icon className="w-6 h-6 stroke-[2]" />
                       </div>
                       <div>
                         <div className={`text-4xl md:text-5xl font-extrabold font-display leading-none tracking-tight mb-2 ${stat.valueColor}`}>
                           {stat.value}
                         </div>
                         <div className="text-base font-bold text-foreground mb-1.5">{stat.label}</div>
                         <div className="text-sm text-muted-foreground font-normal leading-snug">{stat.desc}</div>
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
