import React from "react";
import { Award, Activity, BookOpen, Gift, Zap, Clock, CheckCircle2 } from "lucide-react";
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
      icon: <BookOpen className="h-6 w-6 text-emerald-700" />,
      title: "Concept Building",
      description: "Structured concept videos and practice for Quant, Verbal, and DI.",
    },
    {
      icon: <Zap className="h-6 w-6 text-emerald-700" />,
      title: "Speed & Accuracy",
      description: "Timed drills, sectional tests and score-based analytics to sharpen pace.",
    },
    {
      icon: <Gift className="h-6 w-6 text-emerald-700" />,
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

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-emerald-50/70 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GMAT® SELF-PACED PROGRAM</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">GMAT ONLINE COACHING THAT GETS YOU IN THE 705+ SQUAD</h1>
              <p className="mt-4 text-xl font-semibold text-slate-900">Self-Paced Program</p>
              <p className="mt-4 max-w-2xl text-lg text-slate-700">Experience learning anywhere, anytime with Seekyoury’s GMAT self-paced program.</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition-colors duration-200">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-emerald-700 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors duration-200">
                  CALL US
                </button>
              </div>
            </div>

            <div className="relative">
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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] items-start">
            <div className="prose max-w-none text-base text-slate-700">
              <h2>Self-Paced GMAT Online Prep: An Overview</h2>
              <p>Learn at your own pace with Seekyoury’s self-paced GMAT online prep program. Anytime, anywhere, and at your leisure – our program ensures you are not bound by a schedule, making it ideal for working professionals and busy students.</p>
              <p>Get access to world-class preparation material, practice tests, and expert guidance through a dedicated portal designed for high-scoring GMAT aspirants.</p>
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
          <h2 className="text-center text-2xl font-semibold">Why Choose Seekyoury for GMAT Online Prep Coaching</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card.title} className="rounded-[2rem] bg-white/80 p-8 shadow-sm border border-emerald-100">
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

      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">GMAT Online Self-Paced Training Features</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-black shadow-lg">
              <iframe
                title="GMAT self paced preview"
                src="https://www.youtube.com/embed/0qisGSwZym4"
                className="aspect-video w-full"
                allowFullScreen
              />
            </div>

            <div className="space-y-6">
              {featureItems.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-slate-200 bg-emerald-50 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                      <p className="mt-2 text-sm text-slate-700">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-900 text-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] items-center">
              <div>
                <h2 className="text-3xl font-semibold">GMAT DI preparation by India’s most experienced faculty</h2>
                <p className="mt-4 max-w-2xl text-slate-200">Build confidence in Data Interpretation and become exam-ready with personalised guidance, targeted practice, and performance review from our expert faculty.</p>
              </div>
              <div className="text-center">
                <button className="rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow hover:bg-emerald-800 transition-colors duration-200">GMAT DI Preparation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold">Other GMAT Prep Modes</h2>
          <div className="mt-8 overflow-auto rounded-[2rem] border border-emerald-100 bg-white shadow-sm">
            <table className="min-w-full border-collapse text-left">
              <thead className="bg-slate-100 text-slate-900">
                <tr>
                  <th className="whitespace-nowrap px-5 py-4">GMAT Prep Mode</th>
                  <th className="px-5 py-4">Class Recordings & Concept Videos</th>
                  <th className="px-5 py-4">Study Material</th>
                  <th className="px-5 py-4">Mock Tests & Discussion Sessions</th>
                  <th className="px-5 py-4">Doubt-Clearing Sessions</th>
                  <th className="px-5 py-4">Access to Webinars</th>
                  <th className="px-5 py-4">Session with Admissions Experts</th>
                  <th className="px-5 py-4">Course Validity</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.mode} className="border-t border-emerald-100 bg-emerald-50/80 text-slate-900">
                    <td className="px-5 py-5 font-semibold">
                      <div>{row.mode}</div>
                      <div className="text-sm text-slate-700">{row.detail}</div>
                    </td>
                    <td className="px-5 py-5">{row.recording}</td>
                    <td className="px-5 py-5">{row.material}</td>
                    <td className="px-5 py-5">{row.mock}</td>
                    <td className="px-5 py-5">{row.doubt}</td>
                    <td className="px-5 py-5">{row.webinar}</td>
                    <td className="px-5 py-5">{row.expert}</td>
                    <td className="px-5 py-5">{row.validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GmatSelfPaced;
