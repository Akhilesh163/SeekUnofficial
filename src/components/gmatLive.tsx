import React, { useState } from "react";
import { Activity, BookOpen, Gift, Zap, ChevronDown, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GmatLive: React.FC = () => {
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  const cards = [
    { icon: since1993Icon, title: "Unmatched scores on the GMAT since 1993" },
    { icon: analyticsIcon, title: "Smart analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Powerful adaptive technology platform streamlines your preparation" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive full-length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through unlimited doubt-clearing sessions" },
  ];

  const features = [
    {
      id: "concept",
      title: "Concept Building",
      description: [
        "Live interactive concept sessions for Quant, Verbal, and Data Insights.",
        "Topic-based doubt clearing and instant feedback.",
      ],
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      id: "speed",
      title: "Speed & Accuracy",
      description: [
        "Timed sectional practice with performance analytics.",
        "Live strategy classes to improve pacing under pressure.",
      ],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: "stamina",
      title: "Stamina & Strategy",
      description: [
        "Test-taking strategies, recovery techniques, and review sessions.",
        "Full-length mock simulation with expert debriefs.",
      ],
      icon: <Activity className="h-6 w-6" />,
    },
    {
      id: "bonus",
      title: "Complimentary Features",
      description: [
        "Doubt-clearing clinics, application sessions, and progress tracking.",
        "Access to recorded sessions for repeat review.",
      ],
      icon: <Gift className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-background py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">GMAT® LIVE CLASSES</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">GMAT LIVE TRAINING FOR 705+ SCORES</h1>
              <p className="mt-4 text-xl font-semibold text-foreground">Online interactive classes with expert faculty</p>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Join live GMAT classes that combine real-time doubt resolution, strategy sessions, and sectional drills designed for top-percentile performance.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition">JOIN A LIVE CLASS</button>
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
              <h2>Live GMAT Online Prep That Fits Your Schedule</h2>
              <p>Experience expert-led GMAT classes from anywhere, with live sessions, real-time problem discussions, and a structured plan designed for high scoring aspirants.</p>
              <ul className="mt-6 space-y-3 list-disc pl-5 text-muted-foreground">
                <li>Interactive trainer-led sessions with personalised doubt resolution.</li>
                <li>Performance analytics, weekly mocks, and strategy reviews.</li>
                <li>Flexible timings that suit both working professionals and students.</li>
              </ul>
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
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">WHAT YOU GET</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Built for the Focus Edition</h2>
          <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-primary to-accent" />

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transform transition duration-200 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-sm">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Live concept classes</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground">Quant, Verbal and DI taught live, with recordings available the same day.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transform transition duration-200 hover:shadow-elevated hover:-translate-y-2 md:scale-105 md:ring-1 md:ring-primary/20">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-4 shadow-md">
                    <Activity className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">DI-first curriculum</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground">Most courses treat Data Insights as an afterthought. Ours gives all five DI question types equal weight from week one.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transform transition duration-200 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-3 shadow-sm">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Weekly mock + analysis</h3>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground">A full Focus-style mock every weekend, followed by a live breakdown of strategy, pacing and the review-&amp;edit tool.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[hsl(var(--card-bg, 0 0% 100%))]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-primary">Batches</p>
          <h2 className="mt-2 text-center text-4xl font-extrabold text-foreground">Upcoming batches</h2>
          <p className="mt-3 text-center text-muted-foreground">Sample schedule — to be replaced with live batch data.</p>

          <div className="mt-8">
            <div className="mx-auto max-w-[1100px] rounded-3xl bg-card p-0 shadow-elevated overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-0 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-3xl">
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Batch</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Starts</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Schedule</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Duration</div>
                <div className="px-6 py-4 font-semibold text-sm md:text-base">Mode</div>
              </div>

              <div className="divide-y divide-border bg-card">
                <div className="grid grid-cols-1 md:grid-cols-5 items-center px-6 py-6 bg-card hover:bg-card/95 transition">
                  <div className="text-foreground py-2 md:py-0">Weekday Evening</div>
                  <div className="text-muted-foreground py-2 md:py-0">Aug 10, 2026</div>
                  <div className="text-muted-foreground py-2 md:py-0">Mon/Wed/Fri, 8–10 PM IST</div>
                  <div className="text-muted-foreground py-2 md:py-0">12 weeks</div>
                  <div className="text-muted-foreground py-2 md:py-0">Online (live)</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 items-center px-6 py-6 bg-card hover:bg-card/95 transition">
                  <div className="text-foreground py-2 md:py-0">Weekend Intensive</div>
                  <div className="text-muted-foreground py-2 md:py-0">Aug 15, 2026</div>
                  <div className="text-muted-foreground py-2 md:py-0">Sat–Sun, 10 AM–1 PM IST</div>
                  <div className="text-muted-foreground py-2 md:py-0">14 weeks</div>
                  <div className="text-muted-foreground py-2 md:py-0">Online (live)</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg hover:brightness-95 transition">Reserve a Seat</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-card/60 px-4 py-2 text-sm font-semibold text-primary">READY TO TRANSFORM YOUR GRE PREP?</p>
              <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-foreground">Find Your <span className="text-primary">Y</span> Today</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">Get personalized GRE tutoring with a 1-on-1 strategy session. We’ll assess your current level, understand your goals, and create a roadmap to your target score.</p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Free strategy consultation</div>
                    <div className="text-sm text-muted-foreground">30-minute session with GRE experts</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Personalized study roadmap</div>
                    <div className="text-sm text-muted-foreground">Custom plan tailored to your timeline</div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">No commitment required</div>
                    <div className="text-sm text-muted-foreground">Pure guidance, zero obligations</div>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <button className="rounded-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg">Book Your Free Demo</button>
              </div>
            </div>

            <div>
              <div className="rounded-3xl bg-card p-6 shadow-elevated relative">
                <div className="absolute -top-3 left-6 right-6 h-2 rounded-t-[12px] bg-gradient-to-r from-primary to-accent" />
                <div className="space-y-6">
                  <div className="rounded-xl bg-card/95 p-6 shadow-sm">
                    <div className="text-3xl font-extrabold text-primary">92% <span className="text-foreground font-semibold text-base">Success</span></div>
                    <div className="text-sm text-muted-foreground mt-2">Students achieve their target scores with personalized tutoring</div>
                  </div>

                  <div className="rounded-xl bg-card/95 p-6 shadow-sm">
                    <div className="text-3xl font-extrabold text-primary">+120 <span className="text-foreground font-semibold text-base">Avg. Gain</span></div>
                    <div className="text-sm text-muted-foreground mt-2">Average score improvement with our complete program</div>
                  </div>

                  <div className="rounded-xl bg-card/95 p-6 shadow-sm">
                    <div className="text-3xl font-extrabold text-primary">15+ <span className="text-foreground font-semibold text-base">Years</span></div>
                    <div className="text-sm text-muted-foreground mt-2">Expert faculty with proven track record since 1993</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">GMAT Live Training Features</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-lg">
              <iframe
                title="GMAT live preview"
                src="https://www.youtube.com/embed/0qisGSwZym4"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="rounded-3xl border border-border bg-card/60 p-6 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFeature(openFeature === feature.id ? null : feature.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-sm">{feature.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openFeature === feature.id ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>
                  {openFeature === feature.id && (
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {feature.description.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                          <span>{item}</span>
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

export default GmatLive;
