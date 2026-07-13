import React, { useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GrePrivateTut: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  const topScorers = [
    { name: "Dhruv Puri", school: "MIT", score: "328" },
    { name: "Anunya Sharma", school: "IGDTUW", score: "325" },
    { name: "Pooja Saluja", school: "SRI VENKATESWARA COLLEGE, DHAULA KUAN, UNIVERSITY OF DELHI", score: "325" },
    { name: "Sanika Tiwarekar", school: "SARDAR PATEL INSTITUTE", score: "322" },
  ];

  const cards = [
    { icon: since1993Icon, title: "Unmatched Scores on the GRE since 1993" },
    { icon: analyticsIcon, title: "Smart Analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Flexibility to move between online and offline mode of learning as per your convenience & availability" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive Full-Length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and Coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through Unlimited Doubt Clearing Sessions" },
  ];

  const features = [
    {
      key: "concept",
      title: "Concept Building",
      details: [
        "Best GRE tutors support with in-depth understanding of concepts and application to unique problems in a 1-1 classroom setting.",
        "Personalized GRE roadmap: build a custom GRE prep plan with faculty guidance.",
      ],
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      key: "speed",
      title: "Speed & Accuracy",
      details: ["Comprehensive study material: GRE books, sectional tests and full length tests", "Targeted practice and tests for pacing and accuracy"],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      key: "stamina",
      title: "Stamina & Strategy",
      details: ["Flexibility: plan classes based on availability and level of prep", "Both online & offline options available"],
      icon: <Activity className="h-6 w-6" />,
    },
    {
      key: "complimentary",
      title: "Complimentary Features",
      details: ["Regular Information webinars", "Study material available at additional cost*"],
      icon: <Gift className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-emerald-50/60 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GRE® CLASSES</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">GRE EXAM PREPARATION FROM YOUR HOME</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">GRE Coaching with a private mentor</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-emerald-700 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  CALL US
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-border">
                <div className="rounded-xl bg-emerald-700/90 p-4 text-white">
                  {topScorers.map((s) => (
                    <div key={s.name} className="mb-4 flex items-center justify-between gap-4 rounded-lg bg-emerald-700 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-white/20" />
                        <div>
                          <div className="font-semibold">{s.name}</div>
                          <div className="text-xs">{s.school}</div>
                        </div>
                      </div>
                      <div className="ml-2 rounded-md bg-black px-4 py-2 text-right text-white">
                        <div className="text-xs opacity-70">GRE</div>
                        <div className="text-xl font-bold">{s.score}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + FORM */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-slate-700">
              <p>
                GRE private tutoring is the most personalised form of GRE prep which ensures that you work with the best GRE tutors in India, build a customized study plan and learn in a 1-1 classroom setting. These classes can be done in-person or online or hybrid based on availability.
              </p>

              <p>
                Students looking for a very high GRE score or those with uncertain work schedules generally opt for a GRE tutor. The tutor ensures high concept clarity, focused practice and regular test reviews.
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-5">
                <li><strong>Personalized GRE roadmap:</strong> Build a custom GRE prep roadmap to achieve the best GRE scores possible in consultation with GRE faculty.</li>
                <li><strong>Comprehensive study material:</strong> GRE books, sectional tests and full length tests ensure you cover all areas of your prep.</li>
                <li><strong>Flexibility:</strong> Choose classes based on your availability and level of prep.</li>
                <li><strong>Both online & offline:</strong> You can choose in-person or online sessions as per convenience.</li>
              </ul>
            </div>

            <aside className="rounded-2xl border border-border bg-emerald-50 p-6">
              <h3 className="text-center text-lg font-semibold text-emerald-800">Speak to an Expert</h3>
              <form className="mt-4 space-y-3">
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Name" />
                <div className="flex gap-2">
                  <select className="w-28 rounded-lg border border-slate-200 px-2"> <option>+91</option> </select>
                  <input className="flex-1 rounded-lg border border-slate-200 px-3 py-2" placeholder="Mobile Number" />
                </div>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2" placeholder="Email Id" />
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Interested in?</option>
                </select>
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Your City</option>
                </select>
                <select className="w-full rounded-lg border border-slate-200 px-3 py-2">
                  <option>Nearest Center</option>
                </select>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" /> Stay informed via SMS & WhatsApp
                </label>
                <button className="w-full rounded-lg bg-emerald-700 px-4 py-2 text-white font-semibold">Schedule a Call</button>
              </form>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE - CARDS */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">Why Choose Seekyoury for GRE Private Tutoring</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="rounded-[2rem] bg-emerald-50/80 p-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-sm">
                  <img src={c.icon} alt={c.title} className="h-16 w-16 object-contain" loading="lazy" />
                </div>
                <div className="text-center text-sm text-slate-800">{c.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold">TALK TO A GRE EXPERT</button>
          </div>
        </div>
      </section>

      {/* Features video + list */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold">GRE Private Tutoring Features</h3>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-lg">
                <iframe
                  title="GRE preview"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.key} className="rounded-3xl border border-slate-200 bg-emerald-50/80 p-6">
                  <button
                    type="button"
                    onClick={() => setOpen(open === f.key ? null : f.key)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow">{f.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold">{f.title}</h4>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open === f.key ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>

                  {open === f.key && (
                    <div className="mt-4 space-y-2 text-sm text-slate-700">
                      {f.details.map((d) => (
                        <div key={d} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white text-xs font-bold">✓</span>
                          <span>{d}</span>
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

export default GrePrivateTut;
