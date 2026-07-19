import React, { useState } from "react";
import { Activity, BookOpen, Gift, Zap, ChevronDown, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GmatPrivateTut: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const cards = [
    { icon: since1993Icon, title: "Unmatched scores on the GMAT since 1993" },
    { icon: analyticsIcon, title: "Smart analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Powerful adaptive technology platform streamlines your preparation" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive full-length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through unlimited doubt-clearing sessions" },
  ];

  const sections = [
    {
      id: "structured-plan",
      title: "Structured Study Plan",
      details: [
        "Personalized weekly study roadmap tailored to your GMAT target.",
        "Regular checkpoints with score tracking and topic-wise progress.",
      ],
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      id: "expert-coaching",
      title: "Expert Coaching",
      details: [
        "One-to-one live sessions with experienced GMAT instructors.",
        "Direct doubt clearing and strategic review after every class.",
      ],
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      id: "adaptive-feedback",
      title: "Adaptive Feedback",
      details: [
        "Regular mock tests with detailed performance analytics.",
        "Adaptive revisions based on your weak areas and score trends.",
      ],
      icon: <Activity className="h-6 w-6 text-primary" />,
    },
    {
      id: "extra-support",
      title: "Extra Support",
      details: [
        "Unlimited doubt-clearing sessions and recorded support classes.",
        "Application guidance and interview prep built into the program.",
      ],
      icon: <Gift className="h-6 w-6 text-primary" />,
    },
  ];

  const plans = [
    {
      id: 'booster',
      title: 'Booster',
      price: '₹29,999',
      subtitle: '8 sessions • single section',
      bullets: [
        '8 × 60-min 1-on-1 sessions',
        'Custom drills & homework',
        'WhatsApp doubt support',
      ],
    },
    {
      id: 'complete',
      title: 'Complete',
      price: '₹54,999',
      subtitle: '16 sessions • full GMAT Focus',
      bullets: [
        '16 × 60-min 1-on-1 sessions',
        'Self-paced course + test series',
        'Mock reviews after every test',
        'Priority doubt support',
      ],
      recommended: true,
    },
    {
      id: 'elite',
      title: 'Elite 735+',
      price: '₹84,999',
      subtitle: '24 sessions • directly with Aman',
      bullets: [
        '24 sessions with Aman himself',
        'Everything in Complete',
        'B-school strategy session',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-background py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">GMAT® PRIVATE TUTORING</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Personalised GMAT Coaching to Target 700+</h1>
              <p className="mt-4 text-xl font-semibold text-foreground">One-on-one training with expert tutors</p>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Get focused GMAT tutoring with a custom study plan, detailed feedback, and live doubt sessions designed for top percentile scores.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">BOOK A FREE CONSULTATION</button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-card/95 transition">CALL US</button>
              </div>
            </div>

            <div className="rounded-[32px] border border-border bg-card p-6 shadow-soft">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Top GMAT Results</p>
                  <p className="mt-2 text-sm text-muted-foreground">Recent achievers from our coaching batch</p>
                </div>
                <div className="rounded-3xl bg-primary/5 px-4 py-2 text-sm font-semibold text-primary shadow-sm">2025</div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl p-4 bg-background">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">Jinay Nandu</p>
                      <p className="text-sm text-muted-foreground">GMAT Achiever</p>
                    </div>
                    <div className="rounded-3xl bg-primary px-4 py-2 text-right text-primary-foreground">
                      <p className="text-xs uppercase text-primary-foreground/70">Score</p>
                      <p className="text-xl font-bold">720</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl p-4 bg-background">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">Sid Makharia</p>
                      <p className="text-sm text-muted-foreground">GMAT Achiever</p>
                    </div>
                    <div className="rounded-3xl bg-primary px-4 py-2 text-right text-primary-foreground">
                      <p className="text-xs uppercase text-primary-foreground/70">Score</p>
                      <p className="text-xl font-bold">715</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl p-4 bg-background">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">Riya Joshi</p>
                      <p className="text-sm text-muted-foreground">GMAT Achiever</p>
                    </div>
                    <div className="rounded-3xl bg-primary px-4 py-2 text-right text-primary-foreground">
                      <p className="text-xs uppercase text-primary-foreground/70">Score</p>
                      <p className="text-xl font-bold">710</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-muted-foreground">
              <h2>GMAT Private Tutoring That Works</h2>
              <p>Our private tutoring program gives you 1-on-1 coaching with GMAT experts, personalised lesson plans, and targeted support to improve your scores quickly.</p>
              <ul className="mt-6 space-y-3 list-disc pl-5 text-muted-foreground">
                <li>Custom study plan built around your current score and goals.</li>
                <li>Live sessions, feedback, and section-level strategy reviews.</li>
                <li>Performance monitoring with mock tests and adaptive corrections.</li>
              </ul>
              <button className="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">TALK TO A GMAT EXPERT</button>
            </div>

            <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
              <h3 className="text-center text-lg font-semibold text-foreground">Speak to an Expert</h3>
              <form className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-border bg-card px-4 py-3" placeholder="Name" />
                <div className="flex gap-3">
                  <select className="w-28 rounded-2xl border border-border bg-card px-4 py-3">
                    <option>+91</option>
                  </select>
                  <input className="flex-1 rounded-2xl border border-border bg-card px-4 py-3" placeholder="Mobile Number" />
                </div>
                <input className="w-full rounded-2xl border border-border bg-card px-4 py-3" placeholder="Email Id" />
                <select className="w-full rounded-2xl border border-border bg-card px-4 py-3">
                  <option>Interested in?</option>
                </select>
                <select className="w-full rounded-2xl border border-border bg-card px-4 py-3">
                  <option>Your City</option>
                </select>
                <select className="w-full rounded-2xl border border-border bg-card px-4 py-3">
                  <option>Nearest Center</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" /> Stay informed via SMS & WhatsApp
                </label>
                <button className="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">Schedule a Call</button>
              </form>
            </aside>
          </div>
        </div>
      </section>

     
    
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Why 1-on-1</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Why 1-on-1 works</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Real diagnosis</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Mock data + live observation reveals whether your issue is concepts, process or pacing.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft md:scale-105 md:ring-1 md:ring-primary/20">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Targeted fixes</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Every session attacks your specific faltering points — nothing generic, nothing wasted.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-sm">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Faster improvement</h3>
                  <p className="mt-3 text-sm text-muted-foreground">Our 1-on-1 students typically improve 2x faster than self-study on the same schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Pricing</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Packages</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[28px] bg-card p-8 transition-transform hover:translate-y-[-6px] ${plan.recommended ? 'ring-1 ring-primary/20' : 'border border-border'}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[18px] bg-gradient-to-r from-primary to-accent shadow-glow" />

                {plan.recommended && (
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Recommended</div>
                )}

                <div className="flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-foreground">{plan.title}</h3>

                  <div className="mt-6 flex items-baseline gap-4">
                    <p className="text-4xl font-extrabold text-primary leading-none">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                  </div>

                  <ul className="mt-6 space-y-4 flex-1">
                    {plan.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="mt-1 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                          <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition">Get Started</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="mx-auto max-w-[900px] rounded-2xl border border-border bg-card/50 p-6 text-muted-foreground">How we compare: GMAT private tutoring typically costs ₹3,000–5,000/hour in India and $250+/hour with US firms. Our Complete package works out to ~₹3,437/session with course and mocks included.</div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">GMAT Private Tutoring Features</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-lg">
              <iframe
                title="GMAT private tutoring preview"
                src="https://www.youtube.com/embed/0qisGSwZym4"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>
            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.id} className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-sm">{section.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openSection === section.id ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>
                  {openSection === section.id && (
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {section.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default GmatPrivateTut;
