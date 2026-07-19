import React from "react";
import { Award, Activity, BookOpen, Gift, Zap, Clock, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GmatSelfPaced: React.FC = () => {
  const cards = [
    {
      icon: since1993Icon,
      title: "Unmatched scores on the GMAT since 1993",
    },
    {
      icon: analyticsIcon,
      title: "Smart analytics help you track and evaluate your performance",
    },
    {
      icon: teacherIcon,
      title: "Powerful adaptive technology platform streamlines your preparation",
    },
    {
      icon: booksIcon,
      title: "Targeted study plan & exhaustive full-length tests to maximise speed and accuracy",
    },
    {
      icon: studentIcon,
      title: "Mentoring and coaching by the best and most experienced faculty",
    },
    {
      icon: qaIcon,
      title: "Personalized attention through unlimited doubt-clearing sessions",
    },
  ];

  const featureItems = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Concept Building",
      description: "Structured concept videos and practice for Quant, Verbal, and DI.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Speed & Accuracy",
      description: "Timed drills, sectional tests and score-based analytics to sharpen pace.",
    },
    {
      icon: <Gift className="h-6 w-6 text-primary" />,
      title: "Complimentary Features",
      description: "Free doubt sessions, application guidance, and repeat access within validity.",
    },
  ];

  const comparisonRows = [
    {
      mode: "Classroom Training",
      detail: "60 hours",
      recording: "✕",
      material: "✓",
      mock: "✓",
      doubt: "Unlimited",
      webinar: "✓",
      expert: "✓",
      validity: "Up to 1 year",
    },
    {
      mode: "Live Online Training",
      detail: "60 hours",
      recording: "✓",
      material: "✓",
      mock: "✓",
      doubt: "Unlimited",
      webinar: "✓",
      expert: "✓",
      validity: "Up to 1 year",
    },
    {
      mode: "Private Tutoring",
      detail: "Customised",
      recording: "✓",
      material: "✓",
      mock: "✓",
      doubt: "✕",
      webinar: "✓",
      expert: "✓",
      validity: "40 hrs of classes + 6 months portal",
    },
  ];

  const plans = [
    {
      id: 'sectional',
      title: 'Sectional',
      price: '₹10,999',
      subtitle: 'Any one section • 6 months',
      bullets: [
        'Quant, Verbal or DI module',
        '1,000+ practice questions',
        'Sectional tests included',
        'Doubt forum access',
      ],
    },
    {
      id: 'full',
      title: 'Full Course',
      price: '₹19,999',
      subtitle: 'All 3 sections • 12 months',
      bullets: [
        'Complete Quant + Verbal + DI',
        '3,000+ practice questions',
        'Full GMAT Test Series included',
        'Monthly live strategy session',
      ],
      recommended: true,
    },
    {
      id: 'mentor',
      title: 'Full Course + Mentor',
      price: '₹27,999',
      subtitle: '12 months + mentor check-ins',
      bullets: [
        'Everything in Full Course',
        'Monthly 1-on-1 mentor call',
        'Personalised study plan',
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground flex flex-col gap-8">
      <section className="relative overflow-hidden bg-background py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">GMAT® SELF-PACED PROGRAM</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl text-foreground">GMAT ONLINE COACHING THAT GETS YOU IN THE 705+ SQUAD</h1>
              <p className="mt-4 text-xl font-semibold text-foreground">Self-Paced Program</p>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Experience learning anywhere, anytime with Seekyoury’s GMAT self-paced program.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-card/95 transition">
                  CALL US
                </button>
              </div>
            </div>

            <div className="relative">
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
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-muted-foreground">
              <h2>Self-Paced GMAT Online Prep: An Overview</h2>
              <p className="text-muted-foreground">Learn at your own pace with Seekyoury’s self-paced GMAT online prep program. Anytime, anywhere, and at your leisure – our program ensures you are not bound by a schedule, making it ideal for working professionals and busy students.</p>
              <p className="text-muted-foreground">Get access to world-class preparation material, practice tests, and expert guidance through a dedicated portal designed for high-scoring GMAT aspirants.</p>
              <button className="mt-6 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">TALK TO A GMAT EXPERT</button>
            </div>

            <aside className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
              <h3 className="text-center text-lg font-semibold text-foreground">Speak to an Expert</h3>
              <form className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-border bg-card px-4 py-3" placeholder="Name" />
                <div className="flex gap-3">
                  <select className="w-28 rounded-2xl border border-border bg-card px-4 py-3"> <option>+91</option> </select>
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
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Pricing</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Plans & pricing</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative overflow-hidden rounded-[28px] bg-card p-8 transition-transform hover:translate-y-[-6px] ${plan.recommended ? 'ring-1 ring-primary/20' : 'border border-border'}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {/* decorative top rim */}
                <div className="absolute left-6 right-6 -top-3 h-2 rounded-t-[18px] bg-gradient-to-r from-primary to-accent shadow-glow" />

                {plan.recommended && (
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Best value</div>
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
                    <button className="w-full rounded-[14px] px-8 py-4 text-sm font-semibold text-primary-foreground bg-primary shadow-lg hover:brightness-105 transition">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">GMAT Online Self-Paced Training Features</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-lg">
              <iframe
                title="GMAT self paced preview"
                src="https://www.youtube.com/embed/0qisGSwZym4"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>

            <div className="space-y-6">
              {featureItems.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-card shadow-sm">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[hsl(var(--logic-navy))] text-primary-foreground">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card/5 p-10 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-center">
              <div>
                <h2 className="text-3xl font-semibold">GMAT DI preparation by India’s most experienced faculty</h2>
                <p className="mt-4 max-w-2xl text-primary-foreground">Build confidence in Data Interpretation and become exam-ready with personalised guidance, targeted practice, and performance review from our expert faculty.</p>
              </div>
              <div className="text-center">
                <button className="rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground bg-primary shadow hover:brightness-95 transition">GMAT DI Preparation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
      <Footer />
    </div>
  );
};

export default GmatSelfPaced;
