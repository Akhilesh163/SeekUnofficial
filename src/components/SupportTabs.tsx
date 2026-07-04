import { useState } from "react";
import {
  Users,
  Brain,
  Clock,
  Zap,
  CheckCircle,
  FileText,
  Target,
  BarChart2,
  BookOpen,
  MessageSquare,
  ChevronRight,
  Calendar,
  ArrowRight,
  Lightbulb,
  ThumbsUp,
  Play,
  Send,
  Paperclip,
  MoreVertical
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookSessionDialog } from "@/components/BookSessionDialog";

// Avatars
import avatar1 from "@/assets/person1.jpg";
import avatar2 from "@/assets/person2.jpg";
import avatar3 from "@/assets/person3.jpg";

const supportTabs = [
  {
    id: "tutoring",
    label: "1-on-1 Tutoring",
    shortLabel: "1:1",
    icon: Users,
    content: "Personalized attention tailored to your specific weaknesses and learning style.",
    gradient: "from-blue-600 to-indigo-600 shadow-blue-500/20",
    color: "from-[#fae6db] via-[#f7d5c9] to-transparent", // soft pink/peach bg
    badgeTop: "Custom Roadmap",
    badgeBottom: "Direct Feedback",
    ctaText: "Book a Session",
    headingNormal: "Personalized 1-on-1",
    headingAccent: "Tutoring",
    listItems: [
      {
        title: "Customized study plans",
        desc: "Plans designed just for you based on your goals and learning pace.",
        icon: FileText,
        iconBg: "bg-blue-500/10 text-blue-600",
      },
      {
        title: "Targeted practice sessions",
        desc: "Focus on weak areas with expert-guided practice and feedback.",
        icon: Target,
        iconBg: "bg-emerald-500/10 text-emerald-600",
      },
    ],
    visualBadges: [
      {
        title: "Personalized Learning",
        desc: "Made just for you",
        icon: BookOpen,
        pos: "top-[6%] xl:top-[12%] -left-3 sm:left-[-4%] xl:left-[-8%]",
      },
      {
        title: "Targeted Practice",
        desc: "Focus on what matters",
        icon: Target,
        pos: "top-[40%] xl:top-[38%] -right-3 sm:right-[-4%] xl:right-[-10%]",
      },
      {
        title: "Track Progress",
        desc: "See how you grow",
        icon: BarChart2,
        pos: "bottom-[6%] xl:bottom-[12%] -right-3 sm:right-[-4%] xl:right-[-8%]",
      },
    ],
    progressVal: 85,
    progressLabel: "Great job!",
    progressSub: "You're improving consistently",
  },
  {
    id: "doubts",
    label: "Instant Doubt Solving",
    shortLabel: "Doubts",
    icon: Zap,
    content: "Stuck on a question? Get step-by-step explanations from expert tutors in seconds.",
    gradient: "from-purple-600 to-pink-600 shadow-purple-500/20",
    color: "from-[#eae4fc] via-[#dfd3fb] to-transparent", // soft light violet bg
    badgeTop: "How It Works",
    badgeBottom: "Expert Support",
    ctaText: "Ask Your Doubt Now",
    headingNormal: "Get Instant Answers.",
    headingAccent: "Keep Learning.",
    listItems: [
      {
        title: "Ask Any Question",
        desc: "Type, upload image, or voice your doubt",
        icon: MessageSquare,
        iconBg: "bg-indigo-500/10 text-indigo-600",
      },
      {
        title: "Expert Tutors Online",
        desc: "Connect instantly with verified experts",
        icon: Users,
        iconBg: "bg-emerald-500/10 text-emerald-600",
      },
    ],
  },
];

export const SupportTabs = () => {
  const [activeTab, setActiveTab] = useState("tutoring");
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  const activeContent = supportTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="pt-16 pb-12 px-8 md:px-16 lg:px-24 xl:px-16 bg-background" id="tutoring">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center bg-primary/5 border border-primary/20 text-foreground text-[11px] font-bold uppercase tracking-[0.12em] px-5 py-2.5 rounded-full mb-6">
              PRIVATE TUTORING
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[28px] md:text-[40px] lg:text-[45px] font-bold font-display text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Personalized 1-on-1 <span className="text-primary">Tutoring</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-[14px] md:text-[16px] text-muted-foreground leading-relaxed max-w-[620px] mx-auto"
          >
            Get dedicated support from Aman to tackle your specific challenges and maximize your score.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {supportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-5 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-card border-border/80 shadow-soft text-foreground scale-105"
                  : "bg-primary/5 border-transparent text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <tab.icon className="w-4 h-4 text-primary" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content with Framer Motion Animation */}
        <div className="min-h-[520px] relative">
          <AnimatePresence mode="wait">
            {activeContent && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="glass-card border border-border/80 p-6 md:p-10 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="grid xl:grid-cols-[1.1fr_1.1fr] gap-10 items-center">
                  {/* Left Column: Content + List Cards + CTA */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                      {activeContent.headingNormal}{" "}
                      <span className="text-primary block">{activeContent.headingAccent}</span>
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-muted-foreground mb-6 leading-relaxed">
                      {activeContent.content}
                    </p>

                    {/* Rich list cards */}
                    <div className="space-y-3 mb-8">
                      {activeContent.listItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-card border border-border/60 hover:border-primary/25 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-soft transition-all duration-300"
                        >
                          <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                            <item.icon className="w-5 h-5 stroke-[1.5]" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="text-[14px] font-bold text-foreground leading-snug">{item.title}</h4>
                            <p className="text-[12px] text-muted-foreground leading-normal mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button + Overlapping Avatars */}
                    <div className="flex flex-wrap items-center gap-6">
                      <Button
                        onClick={() => setIsBookDemoOpen(true)}
                        className="h-12 px-6 bg-primary hover:bg-primary/95 text-primary-foreground font-bold text-[15px] rounded-[14px] flex items-center justify-center gap-2.5 transition-all duration-200"
                      >
                        {activeTab === "tutoring" ? (
                          <Calendar className="w-4.5 h-4.5" />
                        ) : (
                          <Zap className="w-4.5 h-4.5 fill-current" />
                        )}
                        <span>{activeContent.ctaText}</span>
                      </Button>

                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <img src={avatar1} alt="Student" className="w-8 h-8 rounded-full border border-card object-cover" />
                          <img src={avatar2} alt="Student" className="w-8 h-8 rounded-full border border-card object-cover" />
                          <img src={avatar3} alt="Student" className="w-8 h-8 rounded-full border border-card object-cover" />
                        </div>
                        <div className="text-[11px] text-muted-foreground leading-tight">
                          <span className="font-extrabold text-foreground block">4.9/5 ★</span>
                          Trusted by 10K+ students
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup */}
                  <div className="relative scale-[0.8] xs:scale-[0.85] sm:scale-[0.9] xl:scale-100 origin-center py-6 sm:py-0 w-full overflow-visible">
                    <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${activeContent.color} border border-border/40 flex items-center justify-center p-8 overflow-hidden`}>
                      
                      {activeTab === "tutoring" ? (
                        /* TUTORING ORBIT VISUAL */
                        <>
                          <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-primary/10 animate-[spin_50s_linear_infinite]" />
                          <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-primary/15" />

                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-24 h-24 rounded-3xl bg-card border border-border/80 shadow-medium flex items-center justify-center bg-card/90"
                          >
                            <activeContent.icon className="w-12 h-12 text-primary stroke-[1.5]" />
                          </motion.div>
                        </>
                      ) : (
                        /* INSTANT DOUBT SOLVING CHAT VISUAL */
                        <div className="flex flex-col items-center justify-center w-full h-full relative gap-2 mt-4">
                          
                          {/* 3 Simple Steps */}
                          <div className="w-full max-w-[340px] mb-3">
                            <h4 className="text-[11px] font-bold text-center text-foreground mb-3">Get your doubts solved in 3 simple steps</h4>
                            <div className="flex justify-between items-start relative px-4">
                              <div className="absolute top-4 left-[15%] right-[15%] border-t border-dashed border-primary/15 z-0" />
                              
                              <div className="flex flex-col items-center gap-1 text-center relative z-10 w-[70px]">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                                  <MessageSquare className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-bold text-foreground">Ask</span>
                                <span className="text-[7.5px] text-muted-foreground leading-tight">Type or upload doubt</span>
                              </div>

                              <div className="flex flex-col items-center gap-1 text-center relative z-10 w-[70px]">
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                                  <Users className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-bold text-foreground">Connect</span>
                                <span className="text-[7.5px] text-muted-foreground leading-tight">Match with expert</span>
                              </div>

                              <div className="flex flex-col items-center gap-1 text-center relative z-10 w-[70px]">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                                  <CheckCircle className="w-4 h-4" />
                                </div>
                                <span className="text-[9px] font-bold text-foreground">Understand</span>
                                <span className="text-[7.5px] text-muted-foreground leading-tight">Receive solution</span>
                              </div>
                            </div>
                          </div>

                          {/* Chat Window Container */}
                          <div className="bg-card border border-border/70 rounded-2xl shadow-medium p-3.5 text-left max-w-[340px] w-full relative z-10 flex flex-col gap-2.5">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-border/40 pb-2">
                              <div className="flex items-center gap-2">
                                <img src={avatar2} alt="Tutor" className="w-7 h-7 rounded-full object-cover" />
                                <div>
                                  <div className="flex items-center gap-1">
                                    <span className="text-[10px] font-bold text-foreground">Riya Sharma</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[8px] text-emerald-500 font-medium">Online</span>
                                  </div>
                                  <span className="text-[8px] text-muted-foreground block">Math Expert - 5+ years exp.</span>
                                </div>
                              </div>
                              <MoreVertical className="w-3.5 h-3.5 text-muted-foreground cursor-pointer" />
                            </div>

                            {/* Messages Area */}
                            <div className="flex flex-col gap-2 max-h-[140px] overflow-y-auto pr-1">
                              {/* Student Msg */}
                              <div className="self-end bg-primary/10 rounded-2xl rounded-tr-sm p-2 max-w-[85%] text-[10px]">
                                <p className="text-foreground">Can you explain how to solve this integral?</p>
                                <div className="mt-1 bg-card/90 border border-border/40 p-1.5 rounded-lg text-center font-mono text-[9px] text-foreground">
                                  ∫ (x² + 1)/(x² - 4) dx
                                </div>
                                <span className="text-[7px] text-muted-foreground text-right block mt-0.5">10:32 AM ✓✓</span>
                              </div>

                              {/* Tutor Msg */}
                              <div className="self-start bg-secondary/40 rounded-2xl rounded-tl-sm p-2 max-w-[85%] text-[10px]">
                                <p className="text-foreground">Sure! Let's solve it step by step. We can break it down using partial fractions.</p>
                                <div className="mt-1.5 bg-card border border-border/70 p-1.5 rounded-lg flex items-center gap-1.5 hover:border-primary/20 transition-colors cursor-pointer">
                                  <FileText className="w-3.5 h-3.5 text-primary" />
                                  <span className="text-[9px] font-bold text-foreground">Step-by-step Solution.pdf</span>
                                </div>
                                <span className="text-[7px] text-muted-foreground block mt-0.5">10:34 AM</span>
                              </div>
                            </div>

                            {/* Input Bar */}
                            <div className="border-t border-border/40 pt-2 flex items-center gap-2">
                              <Paperclip className="w-3.5 h-3.5 text-muted-foreground cursor-pointer" />
                              <div className="flex-grow bg-secondary/30 border border-border/40 rounded-full px-3 py-1 text-[9px] text-muted-foreground">
                                Type your doubt...
                              </div>
                              <div className="w-5.5 h-5.5 rounded-full bg-primary flex items-center justify-center text-white shrink-0 cursor-pointer">
                                <Send className="w-2.5 h-2.5 fill-current" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Floating Wave Graphic at the bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-35 overflow-hidden pointer-events-none">
                        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full fill-primary/20">
                          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
                        </svg>
                      </div>
                    </div>

                    {/* Conditional floating components right of visual */}
                    {activeTab === "tutoring" ? (
                      /* TUTORING ORBIT FLOATING CARDS */
                      <>
                        {activeContent.visualBadges?.map((badge, idx) => (
                          <motion.div
                            key={badge.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            animate={{
                              y: [0, idx === 0 ? -6 : idx === 1 ? -8 : -5, 0]
                            }}
                            transition={{
                              y: {
                                repeat: Infinity,
                                duration: idx === 0 ? 4.0 : idx === 1 ? 4.6 : 4.2,
                                ease: "easeInOut",
                                delay: idx * 0.2
                              },
                              opacity: { duration: 0.4, delay: idx * 0.1 },
                              scale: { duration: 0.4, delay: idx * 0.1 }
                            }}
                            className={`flex absolute ${badge.pos} bg-card border border-border/70 p-1.5 sm:p-2 xl:p-3 rounded-xl sm:rounded-2xl shadow-soft items-center gap-1.5 sm:gap-2 xl:gap-3 z-10 min-w-[130px] sm:min-w-[160px] xl:min-w-[200px] max-w-[160px] sm:max-w-[190px] xl:max-w-[240px] hover:border-primary/25 transition-colors`}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                              <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.5]" />
                            </div>
                            <div className="text-left">
                              <h5 className="text-[9px] sm:text-[10px] xl:text-[12px] font-bold text-foreground leading-none mb-1">{badge.title}</h5>
                              <span className="text-[7.5px] sm:text-[8.5px] xl:text-[10px] text-muted-foreground leading-none">{badge.desc}</span>
                            </div>
                          </motion.div>
                        ))}

                        {/* Progress Card bottom-left */}
                        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-card border border-border/80 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-soft text-left z-20 min-w-[140px] sm:min-w-[185px] max-w-[160px] sm:max-w-[220px]">
                          <div className="flex justify-between items-center mb-1.5 sm:mb-2.5">
                            <span className="text-[9px] sm:text-[11px] font-bold text-foreground">Your Progress</span>
                            <span className="text-[8px] sm:text-[9px] text-muted-foreground">This Week</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="16" stroke="currentColor" className="text-secondary" strokeWidth="3" fill="transparent" />
                                <circle cx="20" cy="20" r="16" stroke="currentColor" className="text-primary" strokeWidth="3" fill="transparent"
                                  strokeDasharray={2 * Math.PI * 16}
                                  strokeDashoffset={2 * Math.PI * 16 * (1 - activeContent.progressVal / 100)}
                                />
                              </svg>
                              <span className="absolute text-[8.5px] sm:text-[10px] font-black text-foreground">{activeContent.progressVal}%</span>
                            </div>
                            <div>
                              <span className="text-[9px] sm:text-[11px] font-bold text-foreground block leading-tight">{activeContent.progressLabel}</span>
                              <span className="text-[8px] sm:text-[9px] text-muted-foreground block leading-tight mt-0.5">{activeContent.progressSub}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      /* DOUBT SOLVING VERTICAL STATS COLUMN */
                      <div className="flex flex-row flex-wrap justify-center gap-3 mt-6 xl:absolute xl:right-[-14%] xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:gap-2.5 xl:mt-0 z-10">
                        <div className="bg-card border border-border/70 px-3 py-2 rounded-xl shadow-soft flex items-center gap-2.5 min-w-[115px]">
                          <div className="w-6.5 h-6.5 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                            <ThumbsUp className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-left leading-tight">
                            <span className="text-[11px] font-black text-foreground block">98%</span>
                            <span className="text-[8px] text-muted-foreground">Satisfaction</span>
                          </div>
                        </div>

                        <div className="bg-card border border-border/70 px-3 py-2 rounded-xl shadow-soft flex items-center gap-2.5 min-w-[115px]">
                          <div className="w-6.5 h-6.5 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                            <Clock className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-left leading-tight">
                            <span className="text-[9px] text-muted-foreground block">Avg. Response</span>
                            <span className="text-[11px] font-black text-foreground block">25 sec</span>
                          </div>
                        </div>

                        <div className="bg-card border border-border/70 px-3 py-2 rounded-xl shadow-soft flex items-center gap-2.5 min-w-[115px]">
                          <div className="w-6.5 h-6.5 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-left leading-tight">
                            <span className="text-[11px] font-black text-foreground block">10K+</span>
                            <span className="text-[8px] text-muted-foreground">Doubts Solved</span>
                          </div>
                        </div>
                      </div>
                    )}


                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Book Session Dialog Modal */}
      <BookSessionDialog
        open={isBookDemoOpen}
        onOpenChange={setIsBookDemoOpen}
        title="Book a free session"
        description="Share your details and we'll schedule a free 30-minute consultation with Aman."
      />
    </section>
  );
};
