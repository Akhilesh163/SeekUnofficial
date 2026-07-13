import React, { useState } from "react";
import { Activity, BookOpen, Gift, Zap, ChevronDown } from "lucide-react";
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
      <section className="relative overflow-hidden bg-emerald-50/70 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GMAT® LIVE CLASSES</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">GMAT LIVE TRAINING FOR 705+ SCORES</h1>
              <p className="mt-4 text-xl font-semibold text-slate-900">Online interactive classes with expert faculty</p>
              <p className="mt-4 max-w-2xl text-lg text-slate-700">Join live GMAT classes that combine real-time doubt resolution, strategy sessions, and sectional drills designed for top-percentile performance.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition-colors duration-200">JOIN A LIVE CLASS</button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-700 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors duration-200">CALL US</button>
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-lg">
              <div className="space-y-4 rounded-3xl bg-emerald-700 p-5 text-white shadow-inner">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-emerald-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/20" />
                    <div>
                      <div className="font-semibold">Jinay Nandu</div>
                      <div className="text-xs opacity-80">GMAT 715</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-black px-4 py-3 text-right">
                    <div className="text-xs opacity-70">GMAT</div>
                    <div className="text-xl font-bold">715</div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 rounded-2xl bg-emerald-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-white/20" />
                    <div>
                      <div className="font-semibold">Sid Makharia</div>
                      <div className="text-xs opacity-80">GMAT 715</div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-black px-4 py-3 text-right">
                    <div className="text-xs opacity-70">GMAT</div>
                    <div className="text-xl font-bold">715</div>
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
            <div className="prose max-w-none text-base text-slate-700">
              <h2>Live GMAT Online Prep That Fits Your Schedule</h2>
              <p>Experience expert-led GMAT classes from anywhere, with live sessions, real-time problem discussions, and a structured plan designed for high scoring aspirants.</p>
              <ul className="mt-6 space-y-3 list-disc pl-5 text-slate-700">
                <li>Interactive trainer-led sessions with personalised doubt resolution.</li>
                <li>Performance analytics, weekly mocks, and strategy reviews.</li>
                <li>Flexible timings that suit both working professionals and students.</li>
              </ul>
              <button className="mt-6 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition-colors duration-200">TALK TO A GMAT EXPERT</button>
            </div>

            <aside className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
              <h3 className="text-center text-lg font-semibold text-emerald-900">Speak to an Expert</h3>
              <form className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" placeholder="Name" />
                <div className="flex gap-3">
                  <select className="w-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"> <option>+91</option> </select>
                  <input className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" placeholder="Mobile Number" />
                </div>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" placeholder="Email Id" />
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <option>Interested in?</option>
                </select>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <option>Your City</option>
                </select>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <option>Nearest Center</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-700" /> Stay informed via SMS & WhatsApp
                </label>
                <button className="w-full rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition-colors duration-200">Schedule a Call</button>
              </form>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-emerald-50">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">Why Choose Seekyoury for GMAT Live Coaching</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="rounded-[2rem] bg-white/90 p-8 shadow-sm border border-emerald-100">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 shadow-inner">
                  <img src={card.icon} alt={card.title} className="h-16 w-16 object-contain" loading="lazy" />
                </div>
                <p className="text-center text-sm font-medium text-slate-900">{card.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition-colors duration-200">TALK TO A GMAT EXPERT</button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">GMAT Live Training Features</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-black shadow-lg">
              <iframe
                title="GMAT live preview"
                src="https://www.youtube.com/embed/0qisGSwZym4"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="rounded-3xl border border-slate-200 bg-emerald-50 p-6 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFeature(openFeature === feature.id ? null : feature.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">{feature.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openFeature === feature.id ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>
                  {openFeature === feature.id && (
                    <div className="mt-4 space-y-3 text-sm text-slate-700">
                      {feature.description.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-700" />
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
    </div>
  );
};

export default GmatLive;
