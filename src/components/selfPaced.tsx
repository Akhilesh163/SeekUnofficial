import React, { useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown, BarChart3 } from "lucide-react";
import { Footer } from "@/components/Footer";
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
  const [selectedTrack, setSelectedTrack] = useState("quant");

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

  const trackOptions = {
    quant: [
      {
        id: "quant-syllabus",
        icon: "📊",
        title: "Full ETS Quant syllabus",
        description: "Arithmetic, Algebra, Geometry and Data Analysis — every topic, with QC, Numeric Entry and multi-answer strategies.",
      },
      {
        id: "quant-logic",
        icon: "🧠",
        title: "Logic over formulas",
        description: "Aman's signature approach: estimation, elimination and number sense that saves minutes.",
      },
      {
        id: "quant-drills",
        icon: "⏱️",
        title: "Timed drills",
        description: "Section-length drills (12Q/21min and 15Q/26min) that build 165+ pace.",
      },
    ],
    verbal: [
      {
        id: "verbal-rc",
        icon: "📖",
        title: "RC + Critical Reasoning",
        description: "A repeatable process for Reading Comprehension and CR questions — assumptions, strengthen/weaken, paradox and conclusion.",
      },
      {
        id: "verbal-tc",
        icon: "✏️",
        title: "TC & SE mastery",
        description: "Text Completion (1–3 blanks) and Sentence Equivalence with logic-based cluing — not blind vocab guessing.",
      },
      {
        id: "verbal-vocab",
        icon: "💡",
        title: "High-frequency vocab",
        description: "Curated word lists with mnemonics, usage and daily quizzes — no 3,500-word grid.",
      },
    ],
    mixed: [
      {
        id: "mixed-syllabus",
        icon: "📚",
        title: "150+ video lessons",
        description: "Every Quant and Verbal concept on the ETS syllabus — arithmetic to data analysis, RC and Critical Reasoning to Sentence Equivalence — taught logic-first.",
      },
      {
        id: "mixed-practice",
        icon: "🎯",
        title: "4,000+ practice questions",
        description: "Topic-wise sets, timed drills and full sectional tests with detailed video solutions.",
      },
      {
        id: "mixed-analytics",
        icon: "📈",
        title: "Smart analytics + AWA",
        description: "Track accuracy, pace and weak topics — plus AWA templates and 2 evaluated essays.",
      },
    ],
  };

  const getTrackIcon = (icon) => {
    const iconMap = {
      "📊": <BookOpen className="h-8 w-8" />,
      "🧠": <Zap className="h-8 w-8" />,
      "⏱️": <Activity className="h-8 w-8" />,
      "📖": <BookOpen className="h-8 w-8" />,
      "✏️": <Activity className="h-8 w-8" />,
      "💡": <Zap className="h-8 w-8" />,
      "📚": <BookOpen className="h-8 w-8" />,
      "🎯": <Activity className="h-8 w-8" />,
      "📈": <BarChart3 className="h-8 w-8" />,
    };
    return iconMap[icon] || null;
  };

  const getCardColors = (index) => {
    const colors = [
      { bg: "bg-card", border: "border-border", icon: "bg-primary text-primary-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-accent text-accent-foreground" },
      { bg: "bg-card", border: "border-border", icon: "bg-[hsl(var(--exam-gold))] text-foreground" },
    ];
    return colors[index % 3];
  };

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/60 to-indigo-50/40 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            <div className="pt-6">
              <div className="pill pill-blue">GRE® ONLINE PREP</div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[4.5rem]">GRE EXAM PREPARATION AT YOUR OWN PACE</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">For your uninterrupted GRE test prep</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary shadow hover:brightness-95">
                  TAKE A FREE CLASS
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-card/95">
                  CALL US
                </button>
              </div>
            </div>

            {/* Top scorers card */}
            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GRE Top Scorers</p>
                    <p className="mt-2 text-sm text-slate-600">Recent achievers from our GRE cohort</p>
                  </div>
                  <div className="rounded-3xl bg-[#EAF3FF] px-4 py-2 text-sm font-semibold text-[#0052CC]">2025</div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl p-4 bg-[#F8FAFF]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">M</div>
                        <div>
                          <p className="font-semibold text-slate-950">Manya Sharma</p>
                          <p className="text-sm text-slate-600">Punjab College</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">324</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-[#EFF6FF]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-centered gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">A</div>
                        <div>
                          <p className="font-semibold text-slate-950">Anant Govil</p>
                          <p className="text-sm text-slate-600">DTU - Delhi Technological University</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">323</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-[#F8FAFF]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">S</div>
                        <div>
                          <p className="font-semibold text-slate-950">Shaurya Srivastava</p>
                          <p className="text-sm text-slate-600">NIIT University</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">322</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-[#EFF6FF]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">E</div>
                        <div>
                          <p className="font-semibold text-slate-950">Eshan Singh</p>
                          <p className="text-sm text-slate-600">DYPiemr</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">321</p>
                      </div>
                    </div>
                  </div>
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

            <aside className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="text-center text-lg font-semibold text-foreground">Speak to an Expert</h3>
              <form className="mt-4 space-y-3">
                <input className="w-full rounded-lg border border-border bg-card px-3 py-2" placeholder="Name" />
                <div className="flex gap-2">
                  <select className="w-28 rounded-lg border border-border bg-card px-2"> <option>+91</option> </select>
                  <input className="flex-1 rounded-lg border border-border bg-card px-3 py-2" placeholder="Mobile Number" />
                </div>
                <input className="w-full rounded-lg border border-border bg-card px-3 py-2" placeholder="Email Id" />
                <select className="w-full rounded-lg border border-border bg-card px-3 py-2">
                  <option>Interested in?</option>
                </select>
                <select className="w-full rounded-lg border border-border bg-card px-3 py-2">
                  <option>Your City</option>
                </select>
                <select className="w-full rounded-lg border border-border bg-card px-3 py-2">
                  <option>Nearest Center</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="rounded border-border text-primary" /> Stay informed via SMS & WhatsApp
                </label>
                <button className="w-full rounded-lg px-4 py-2 font-semibold text-primary-foreground bg-primary hover:brightness-95">Schedule a Call</button>
              </form>
            </aside>
          </div>
        </div>
      </section>

      {/* Why Choose Seekyoury - Feature Cards */}
     
    

      {/* Pick Your Track Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">CHOOSE YOUR TRACK</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-foreground">Pick your track</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">Already strong in one section? Prep only what you need — or take the full course.</p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedTrack("mixed")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                selectedTrack === "mixed"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Mixed (Quant + Verbal)
            </button>
            <button
              onClick={() => setSelectedTrack("quant")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                selectedTrack === "quant"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Quant Only
            </button>
            <button
              onClick={() => setSelectedTrack("verbal")}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                selectedTrack === "verbal"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "border border-border bg-card text-foreground hover:border-primary hover:bg-primary/5"
              }`}
            >
              Verbal Only
            </button>
          </div>

          {/* Track Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {trackOptions[selectedTrack].map((card, index) => {
              const colors = getCardColors(index);
              return (
                <div
                  key={card.id}
                  className={`rounded-[2rem] border-2 ${colors.border} ${colors.bg} p-8 shadow-sm hover:shadow-lg transition-shadow duration-200`}
                >
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl ${colors.icon}`}>
                    {getTrackIcon(card.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                  <p className="mt-4 text-base text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">PRICING</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-foreground">Plans & pricing</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">Priced below every major alternative — without cutting a single corner.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-12">
            {/* Quant Track Card */}
            <div className="relative rounded-[2rem] border-2 border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950">Quant Track</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹8,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">6-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">80+ Quant video lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">2,000+ practice questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">10 Quant sectional tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Doubt forum access</span>
                </li>
              </ul>

              <button className="w-full rounded-full px-6 py-3 font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition-all duration-200">
                Enroll Now
              </button>
            </div>

            {/* Complete (Mixed) Card - Best Value */}
            <div className="relative rounded-[2rem] border-2 ring-1 ring-primary/20 bg-card p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground px-4 py-1 text-sm font-semibold text-primary-foreground">Best value</div>
              
              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-bold text-foreground">Complete (Mixed)</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹14,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">12-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Full Quant + Verbal (incl. CR) course</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">4,000+ practice questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Full 30-test GRE Test Series included</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">AWA templates + 2 essay reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Monthly live strategy session</span>
                </li>
              </ul>

              <button className="w-full rounded-full px-6 py-3 font-semibold text-primary-foreground bg-primary shadow hover:brightness-95 transition-all duration-200">
                Enroll Now
              </button>
            </div>

            {/* Verbal Track Card */}
            <div className="relative rounded-[2rem] border-2 border-border bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-950">Verbal Track</h3>
                <div className="mt-4">
                  <p className="text-4xl font-bold text-primary">₹8,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">6-month access</p>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">70+ Verbal video lessons (RC, CR, SC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Vocab program + app quizzes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">10 Verbal sectional tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-slate-700">Doubt forum access</span>
                </li>
              </ul>

              <button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow hover:opacity-95 transition-all duration-200">
                Enroll Now
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-6 text-center">
            <p className="text-sm text-indigo-900">
              <span className="font-semibold">How we compare:</span> Princeton Review/Manya online GRE courses run ₹30,000–40,000, Jamboree ₹30,000–35,000, and Magoosh about ₹16,000 (without India-specific mentoring or a full test series). Our Complete track is ₹14,999 with the 30-test series included.
            </p>
          </div>
        </div>
      </section>

      {/* Video + Feature List */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <h3 className="text-center text-3xl font-semibold text-slate-950">GRE Online Self-Paced Training Features</h3>
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
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow">
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
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">✓</span>
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

              <div className="rounded-3xl border border-slate-200 bg-indigo-50/60 p-6 shadow-sm">
                <button
                  type="button"
                  onClick={() => setStaminaOpen((prev) => !prev)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow">
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
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">✓</span>
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
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow">
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
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white text-xs font-bold">✓</span>
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
     
     

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-border p-12 text-white shadow-soft sm:p-16" style={{ backgroundImage: "var(--gradient-primary)" }}>
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur">
                  Your success journey starts here
                </div>
              </div>
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">Ready to find your Y?</h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-primary-foreground">
                Book a free demo session and a 1-on-1 strategy call. We'll map your target score, timeline and study plan — no strings attached.
              </p>
              <div className="pt-6">
                <button className="inline-flex rounded-full bg-card px-8 py-3 text-base font-semibold text-primary shadow-lg shadow-white/20 transition hover:shadow-xl hover:bg-card/95">
                  Book a Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SelfPaced;
