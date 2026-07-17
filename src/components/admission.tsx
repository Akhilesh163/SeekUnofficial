import React from "react";
import { Navbar } from "@/components/Navbar";
import CourseGre from "/assets/gre-asset/course_gre_.webp";
import CourseGmat from "/assets/gre-asset/course_gmat.webp";
import CourseSat from "/assets/gre-asset/course_sat.webp";
import CourseIelts from "/assets/gre-asset/course_ielts.webp";
import GREPREP from "@/assets/svgComponent/GREPREP";
import GMATPREP from "@/assets/svgComponent/GMATPREP";

const Admission: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO: Blueprint */}
        <section className="pt-[100px] pb-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/60 text-sm text-sky-600 mb-6">
              Global Admissions & Profile Building
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Your Blueprint to a
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-teal-400 to-emerald-400">
                World-Class University
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-6">
              We don't just coach exams. We architect your entire profile — scores, essays,
              recommendations, and positioning — so you walk into any top-ranked program as an unforgettable
              candidate.
            </p>
          </div>

          {/* four feature cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "GRE Prep", subtitle: "Top scores for Masters", Icon: GREPREP },
              { title: "GMAT Prep", subtitle: "Elite Business Schools", Icon: GMATPREP },
              { title: "SAT Prep", subtitle: "Top Undergrad Programs" },
              { title: "IELTS Prep", subtitle: "Global English Criteria" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-2xl p-8 text-center shadow-soft">
                <div className="w-14 h-14 rounded-md mx-auto bg-sky-50 flex items-center justify-center mb-4">
                  {c.Icon ? <c.Icon /> : "🎯"}
                </div>
                <h4 className="font-bold text-lg">{c.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{c.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-10 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow-lg">Start Your Admissions Journey</button>
          </div>
        </div>
      </section>

      {/* COURSES GALLERY */}
      <section className="pt-12 pb-16 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 rounded-full bg-white/60 text-sm text-sky-600 mb-4">Test Prep</div>
            <h3 className="text-3xl md:text-4xl font-extrabold">Ace Your <span className="text-sky-500">Entrance Exams</span></h3>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">Expert-led coaching with proven strategies for every major standardized test. Personalized guidance to maximize your scores.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: CourseGre,
                badge: "GRE Prep",
                badgeClass: "bg-slate-500/80 text-white",
                title: "GRE Preparation",
                description: "Master verbal reasoning, quantitative reasoning & analytical writing with personalized guidance.",
              },
              {
                src: CourseGmat,
                badge: "GMAT Prep",
                badgeClass: "bg-emerald-700/90 text-white",
                title: "GMAT Preparation",
                description: "Conquer analytical writing, integrated reasoning, quantitative & verbal sections with customized strategies.",
              },
              {
                src: CourseSat,
                badge: "SAT Prep",
                badgeClass: "bg-amber-500/95 text-white",
                title: "SAT Preparation",
                description: "Clear instruction on math, evidence-based reading & writing plus experienced, focused practice.",
              },
              {
                src: CourseIelts,
                badge: "IELTS Prep",
                badgeClass: "bg-rose-400/95 text-white",
                title: "IELTS Preparation",
                description: "Standardized training for listening, reading, writing & speaking with professional guidance.",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="group relative overflow-hidden rounded-[32px] shadow-elevated h-[520px] bg-slate-900"
              >
                <img
                  src={course.src}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className={`absolute left-6 top-6 rounded-full px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur-sm transition duration-300 ${course.badgeClass}`}>
                  {course.badge}
                </div>
                <div className="absolute left-6 right-6 bottom-6 rounded-[28px] border border-white/20 bg-slate-950/80 p-6 backdrop-blur-md">
                  <h4 className="text-2xl font-extrabold text-white">{course.title}</h4>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-slate-200 transition-all duration-300 group-hover:max-h-24 group-hover:mt-3">
                    {course.description}
                  </p>
                  <button className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/20">
                    Explore Course
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUE CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-500 text-white">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-sm text-white mb-4">Expert Guidance</div>
          <h3 className="text-4xl font-extrabold mb-4">Not Sure Which Path Is Right For You?</h3>
          <p className="max-w-2xl mx-auto text-white/90 mb-8">Our expert counselors will evaluate your profile and recommend the perfect program — absolutely free.</p>
          <div className="flex items-center justify-center gap-6">
            <button className="bg-white text-sky-700 px-6 py-3 rounded-xl font-semibold">Get Free Profile Evaluation</button>
            <button className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-xl">Talk to an Expert</button>
          </div>
        </div>
      </section>

      {/* PROFILE EVALUATION SECTION */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl p-8 shadow-soft">
          <div>
            <img src={CourseSat} alt="profile-eval" className="w-full rounded-xl object-cover h-[420px]" />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 mb-4">★ FREE SERVICE</div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Free Profile <span className="text-amber-500">Evaluation</span></h3>
            <p className="text-muted-foreground mb-6">Get a comprehensive assessment of your academic background, achievements, skills, and potential. Our experts identify your strengths and recommend the perfect programs to maximize your admission chances.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                'Academic Performance',
                'Test Scores',
                'Work & Internships',
                'Research & Publications',
                'Personal Statement',
                'Extracurriculars',
              ].map((t) => (
                <div key={t} className="border border-amber-100 rounded-lg p-4 text-sm">
                  <div className="font-semibold">{t}</div>
                  <div className="text-muted-foreground text-xs mt-1">Relevant details and review</div>
                </div>
              ))}
            </div>

            <button className="bg-amber-500 text-white px-6 py-3 rounded-xl shadow-md">Get Your Free Evaluation →</button>
          </div>
        </div>
      </section>

      {/* FINAL CTA CARDS */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-10 shadow-soft">
            <div className="inline-block px-3 py-1 rounded-full bg-sky-50 text-sky-600 mb-4">For Students</div>
            <h4 className="text-2xl font-extrabold mb-3">Book a Free Counselling Session</h4>
            <p className="text-muted-foreground mb-6">Talk to our admissions experts, evaluate your profile, and map your road to your dream university — at zero cost.</p>
            <button className="bg-sky-600 text-white px-6 py-3 rounded-lg">Book Now →</button>
          </div>

          <div className="bg-card rounded-2xl p-10 shadow-soft">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 mb-4">For Institutions</div>
            <h4 className="text-2xl font-extrabold mb-3">Request a Collaboration Proposal</h4>
            <p className="text-muted-foreground mb-6">Tell us about your institution and your students' goals — we will design a bespoke employability program that fits your needs.</p>
            <button className="bg-emerald-700 text-white px-6 py-3 rounded-lg">Get in Touch →</button>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default Admission;