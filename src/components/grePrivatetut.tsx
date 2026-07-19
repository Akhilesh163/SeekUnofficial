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
      <section className="pt-[100px] pb-16 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div className="pt-6">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 text-sky-600">
                <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                <span className="text-sm font-bold uppercase tracking-wide">GRE® Private Tutoring</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6 tracking-tight">
                GRE Exam <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400">Preparation</span> From Your Home
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">Get expert GRE coaching with a private mentor, personalized study plan, and 1-on-1 guidance to crush your target score.</p>

              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  Take a Free Class
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover:bg-card/95 transition-all duration-200">
                  Call Us
                </button>
              </div>
            </div>

            {/* Top Scorers Card */}
            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GRE Top Scorers</p>
                    <p className="mt-2 text-sm text-slate-600">Recent achievers from our GRE cohort</p>
                  </div>
                  <div className="rounded-3xl bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">2025</div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-3xl p-4 bg-sky-50">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">D</div>
                        <div>
                          <p className="font-semibold text-foreground">Dhruv Puri</p>
                          <p className="text-sm text-muted-foreground">MIT</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">328</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-sky-50">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">A</div>
                        <div>
                          <p className="font-semibold text-foreground">Anunya Sharma</p>
                          <p className="text-sm text-muted-foreground">IGDTUW</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">325</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-sky-50">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">P</div>
                        <div>
                          <p className="font-semibold text-foreground">Pooja Saluja</p>
                          <p className="text-sm text-muted-foreground">SRI VENKATESWARA COLLEGE, DHAULA KUAN, UNIVERSITY OF DELHI</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">325</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl p-4 bg-sky-50">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">S</div>
                        <div>
                          <p className="font-semibold text-foreground">Sanika Tiwarekar</p>
                          <p className="text-sm text-muted-foreground">SARDAR PATEL INSTITUTE</p>
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                        <p className="mt-1 text-2xl font-bold leading-none">322</p>
                      </div>
                    </div>
                  </div>
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
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Why Choose Seekyoury for <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">GRE Private Tutoring</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience personalized GRE preparation backed by 30+ years of expertise
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl bg-card border border-border p-10 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-sky-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-base text-muted-foreground leading-relaxed">
                  {card.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Talk to a GRE Expert
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sky-600 mb-2">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Packages</h2>
            <div className="mx-auto w-32 h-1 bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 rounded-full"></div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {/* Booster Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Booster</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-foreground">₹24,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">8 sessions • single section • ~₹3,125/session</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">8 × 60-min 1-on-1 sessions</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">Custom drills & homework</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">WhatsApp doubt support</span>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 px-6 py-3 text-white font-bold hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Complete Card (Recommended) */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group lg:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="inline-flex px-4 py-1 rounded-full bg-foreground text-primary-foreground text-xs font-bold">Recommended</span>
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4 mt-2">Complete</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-foreground">₹44,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">16 sessions • full GRE • ~₹2,812/session</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">16 × 60-min 1-on-1 sessions</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">Self-paced course + 30-test series</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">Mock reviews after every test</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">Priority doubt support</span>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 px-6 py-3 text-white font-bold hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Elite Card */}
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Elite 330+</h3>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-foreground">₹69,999</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">24 sessions • directly with Aman</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">24 sessions with Aman himself</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">Everything in Complete</span>
                </div>
                <div className="flex gap-3">
                  <svg className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 font-medium">MBA/MS admissions strategy session</span>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 px-6 py-3 text-white font-bold hover:shadow-lg shadow-md hover:scale-105 transform transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-sky-50 border border-sky-200 p-6 max-w-4xl mx-auto">
            <p className="text-slate-700">
              <span className="font-bold text-slate-900">How we compare:</span> private GRE tutoring in India typically runs ₹2,500–4,000 per hour (and US firms like Manhattan Prep or Princeton Review charge $200–300/hr). Our Complete package works out to ~₹2,812/session — with course, mocks and mentoring included free.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-sky-50/30 to-background py-20">
        {/* Decorative glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-sky-400/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-emerald-400/5 blur-3xl pointer-events-none -z-10" />
        
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-sky-100/80 border border-sky-200/60">
                <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                <span className="text-sm font-bold text-sky-700 uppercase tracking-wide">Ready to Transform Your GRE Prep?</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                Find Your <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent">Y</span> Today
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Get personalized GRE tutoring with a 1-on-1 strategy session. We'll assess your current level, understand your goals, and create a roadmap to your target score.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { title: "Free strategy consultation", desc: "30-minute session with GRE experts" },
                  { title: "Personalized study roadmap", desc: "Custom plan tailored to your timeline" },
                  { title: "No commitment required", desc: "Pure guidance, zero obligations" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-100 mt-0.5 flex-shrink-0">
                      <svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Book Your Free Demo
              </button>
            </div>

            {/* Right Visual Card */}
            <div className="relative">
              {/* Gradient card background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-50 via-emerald-50/60 to-white border border-sky-200/60 shadow-xl"></div>
              
              {/* Accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-500"></div>

              <div className="relative p-10 lg:p-12">
                <div className="space-y-8">
                  {/* Stat cards */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">92%</span>
                      <span className="text-slate-600 font-semibold">Success</span>
                    </div>
                    <p className="text-sm text-slate-600">Students achieve their target scores with personalized tutoring</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">+120</span>
                      <span className="text-slate-600 font-semibold">Avg. Gain</span>
                    </div>
                    <p className="text-sm text-slate-600">Average score improvement with our complete program</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">15+</span>
                      <span className="text-slate-600 font-semibold">Years</span>
                    </div>
                    <p className="text-sm text-slate-600">Expert faculty with proven track record since 1993</p>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4 sm:grid-cols-2 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Seek Your Y</h3>
              <p className="text-sm text-slate-400">Your guide to conquering the GRE. Live classes, expert mentorship, and personalized strategies.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Programs</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">GRE Live Coaching</a></li>
                <li><a href="#" className="hover:text-white transition">Self-Paced Course</a></li>
                <li><a href="#" className="hover:text-white transition">GRE Coaching</a></li>
                <li><a href="#" className="hover:text-white transition">Private Tutoring</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400">
                © 2026 Seek Your Y. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.104 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GrePrivateTut;
