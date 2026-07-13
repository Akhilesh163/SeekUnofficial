import React, { useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";

const SelfPaced = () => {
  const [conceptOpen, setConceptOpen] = useState(false);
  const [speedOpen, setSpeedOpen] = useState(false);
  const [staminaOpen, setStaminaOpen] = useState(false);
  const [complimentaryOpen, setComplimentaryOpen] = useState(false);

  const topScorers = [
    { name: "Anant Govil", school: "DTU - DELHI TECHNOLOGICAL UNIVERSITY", score: "323" },
    { name: "Shaurya Srivastava", school: "NIIT UNIVERSITY", score: "322" },
    { name: "Eshan Singh", school: "DYPIEMR", score: "321" },
    { name: "Soumojit Dalui", school: "SRM, CHENNAI", score: "320" },
  ];

  const features = [
    "Concept videos: 40+ hours of GRE prep recordings",
    "Sectional and full length tests to simulate exam conditions",
    "Faculty support: personal doubt-clearing sessions",
    "Online study material and app access",
    "Access to local centers for mock tests and labs",
  ];

  const conceptDetails = [
    "48 hours of training on the Math and Verbal concepts tested on the GRE",
    "Seekyoury’s study material on the learning portal",
    "180+ hours of webinars - Foundation sessions, question discussion, Doubt sessions, Verbal refresher sessions before exams, Admissions Information Sessions",
    "Unlimited AWA essay reviews",
    "Access to the Simplified GRE Vocab app",
    "6-month course validity including the option of repeating classes within the validity period",
    "5 hours of doubt-clearing sessions",
    "IELTS or TOEFL classes (online live) with complete study material and full-length tests",
    "Complimentary session with experts on application & profile building strategy",
  ];

  const speedDetails = [
    "3300+ practice questions with explanations",
    "5 hours of personal doubt clearing",
  ];

  const staminaDetails = [
    "7 full-length Seekyoury mock tests",
    "2 official tests (ETS Tests) discussed as a part of the 11 Learn modules",
  ];

  const complimentaryDetails = [
    "Regular Information webinars",
    "Study material available at additional cost*",
  ];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-emerald-50/60 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GRE® ONLINE PREP</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">GRE EXAM PREPARATION AT YOUR OWN PACE</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">For your uninterrupted GRE test prep</p>

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

      {/* MAIN CONTENT - Description + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-slate-700">
              <p>
                GRE Self-paced coaching allows students to prepare for the GRE at their convenience. These are pre-recorded videos that cover all concepts tested on the GRE with examples of applications of those concepts. GRE online training in a self-paced environment ensures that students can speed up or slow down their preparation based on their schedules.
              </p>

              <ul className="mt-6 space-y-3 list-disc pl-5">
                {features.map((f) => (
                  <li key={f} className="text-slate-700">{f}</li>
                ))}
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

          {/* cards with icons */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: since1993Icon,
                title: "Unmatched Scores on the GRE since 1993",
              },
              {
                icon: analyticsIcon,
                title: "Smart Analytics help you track and evaluate your performance",
              },
              {
                icon: teacherIcon,
                title:
                  "Flexibility to move between online and offline mode of learning as per your convenience & availability",
              },
              {
                icon: booksIcon,
                title: "Targeted study plan & exhaustive Full-length tests to maximize speed and accuracy",
              },
              {
                icon: studentIcon,
                title: "Mentoring and Coaching by the best and most experienced faculty",
              },
              {
                icon: qaIcon,
                title: "Personalized attention through Unlimited Doubt Clearing Sessions",
              },
            ].map((c) => (
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

      {/* Video + Feature List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold">GRE Online Self-Paced Training Features</h3>
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

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-emerald-50/80 p-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => setConceptOpen((prev) => !prev)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow">
                        <BookOpen className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Concept Building</h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-200 ${conceptOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                </button>

                {conceptOpen && (
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {conceptDetails.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white text-xs font-bold">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => setSpeedOpen((prev) => !prev)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow">
                        <Zap className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Speed & Accuracy</h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-200 ${speedOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                </button>

                {speedOpen && (
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {speedDetails.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-bold">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-emerald-50/80 p-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => setStaminaOpen((prev) => !prev)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow">
                        <Activity className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Stamina & Strategy</h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-200 ${staminaOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                </button>

                {staminaOpen && (
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {staminaDetails.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-700 text-white text-xs font-bold">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => setComplimentaryOpen((prev) => !prev)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow">
                        <Gift className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">Complimentary Features</h4>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 transition-transform duration-200 ${complimentaryOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                </button>

                {complimentaryOpen && (
                  <div className="mt-6 space-y-3 text-sm text-slate-700">
                    {complimentaryDetails.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">✓</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h3 className="text-center text-2xl font-semibold">Other GRE Prep Modes</h3>
          <div className="mt-8 overflow-auto">
            <table className="w-full max-w-[1100px] mx-auto table-auto rounded-2xl border-separate border-spacing-0 overflow-hidden">
              <thead>
                <tr className="bg-white text-black">
                  <th className="p-6">GRE Prep Mode</th>
                  <th className="p-6">Class Recordings & Concept Videos</th>
                  <th className="p-6">Study Material</th>
                  <th className="p-6">Mock Tests & Discussion</th>
                  <th className="p-6">Doubt-Clearing Sessions</th>
                  <th className="p-6">Access to Webinars</th>
                  <th className="p-6">Session with Experts</th>
                  <th className="p-6">Course Validity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-200">
                <tr className="bg-emerald-50 text-emerald-900">
                  <td className="p-6">Classroom Training<br/><strong>48 hours</strong></td>
                  <td className="p-6">✕</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">Unlimited</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">Up to 1 year</td>
                </tr>
                <tr className="bg-emerald-50 text-emerald-900">
                  <td className="p-6">Live Online Training<br/><strong>48 hours</strong></td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">Unlimited</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">Up to 1 year</td>
                </tr>
                <tr className="bg-emerald-50 text-emerald-900">
                  <td className="p-6">Private Tutoring<br/><strong>Customised</strong></td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✕</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">✓</td>
                  <td className="p-6">40 hrs of classes + 6 months portal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfPaced;
