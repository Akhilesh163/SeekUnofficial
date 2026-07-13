import React, { useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const GreLive: React.FC = () => {
  const [openFeature, setOpenFeature] = useState<string | null>(null);

  const topScorers = [
    { name: "Siddhant Tomar", school: "BTECH IT", score: "328" },
    { name: "Manya Sharma", school: "PUNJAB COLLEGE", score: "324" },
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
  ];

  const featureCards = [
    { icon: since1993Icon, title: "Unmatched Scores on the GRE since 1993" },
    { icon: analyticsIcon, title: "Smart Analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Flexibility to move between online and offline mode of learning as per your convenience & availability" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive Full-length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and Coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through Unlimited Doubt Clearing Sessions" },
  ];

  const liveFeatures = [
    {
      key: "concept",
      title: "Concept Building",
      details: [
        "48 hours of training on the Math and Verbal concepts tested on the GRE",
        "Seekyoury’s study material on the learning portal",
        "Unlimited AWA essay reviews",
      ],
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      key: "speed",
      title: "Speed & Accuracy",
      details: ["3300+ practice questions with explanations", "5 hours of personal doubt clearing"],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      key: "stamina",
      title: "Stamina & Strategy",
      details: ["7 full-length Seekyoury mock tests", "2 official tests (ETS Tests) discussed as a part of the 11 Learn modules"],
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
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GRE® ONLINE COACHING</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">LOG IN TO THE BEST GRE COACHING CLASSES ONLINE</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">With the Pioneers of GRE Test Prep</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-emerald-700 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">
                  CALL US
                </button>
              </div>
            </div>

            {/* Top scorers card */}
            <div className="relative">
              <div className="rounded-2xl bg-white p-4 shadow-lg border border-border">
                <div className="rounded-xl bg-emerald-700/90 p-4 text-white">
                  {topScorers.map((s) => (
                    <div key={s.name} className="mb-4 flex items-center justify-between gap-4 rounded-lg bg-emerald-700 p-3">
                      <div className="flex items-center gap-3">
                        <img src="/assets/student_pics/person1.jpg" alt="avatar" className="h-10 w-10 rounded-full object-cover" />
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

      {/* MAIN CONTENT - Description + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-slate-700">
              <p>
                GRE online classes are live, scheduled sessions that combine classroom rigor with online convenience. Our live GRE training provides in-depth concept clarity, application practice and continuous doubt resolution so you progress with confidence.
              </p>

              <p>
                Students attending live online classes get access to structured schedules, live doubt-clearing, recordings and an integrated LMS to revise lessons at their own pace.
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-5">
                <li className="text-slate-700"><strong>Comprehensive GRE online course:</strong> 48 hrs of GRE live online classes with faculty for in-depth understanding and practice.</li>
                <li className="text-slate-700"><strong>Unlimited doubt-clearing sessions:</strong> Schedule live doubt-clearing sessions with faculty from 7am to midnight every day.</li>
                <li className="text-slate-700"><strong>GRE practice tests and books:</strong> Course includes books, full-length tests and online preparation tools.</li>
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

      {/* Why Choose Seekyoury - Feature Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">Why Choose Seekyoury for GRE Online Prep Coaching</h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((c) => (
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

      {/* Live Training Features - Video + Expandable list */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold">GRE Online Live Training Features</h3>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-lg">
                <iframe
                  title="GRE live preview"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  className="h-full w-full"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="space-y-6">
              {liveFeatures.map((f) => (
                <div key={f.key} className="rounded-3xl border border-slate-200 bg-emerald-50/80 p-4">
                  <button
                    type="button"
                    onClick={() => setOpenFeature(openFeature === f.key ? null : f.key)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow">{f.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold">{f.title}</h4>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openFeature === f.key ? "rotate-180" : "rotate-0"}`} />
                    </div>
                  </button>

                  {openFeature === f.key && (
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

          <div className="mt-8 text-center">
            <button className="rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold">TALK TO AN EXPERT</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreLive;