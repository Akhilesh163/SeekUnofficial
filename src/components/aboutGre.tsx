import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Globe2,
  Play,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";
import SabhyataPhoto from "@/assets/student_pics/Sabhyata.jpeg";

const AboutGre = () => {
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGreFocus, setActiveGreFocus] = useState("concepts");
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isReviewPaused, setIsReviewPaused] = useState(false);
  const reviewListRef = useRef<HTMLDivElement | null>(null);
  const reviewCardsRef = useRef<HTMLDivElement[]>([]);

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GRE teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GRE teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Dhruv",
      title: "GRE teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  useEffect(() => {
    if (isReviewPaused || studentReviews.length <= 1) return;

    const timeout = window.setTimeout(() => {
      setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [activeReviewIndex, isReviewPaused, studentReviews.length]);

  useEffect(() => {
    reviewCardsRef.current[activeReviewIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeReviewIndex]);

  const results = [
    {
      name: "Manya Sharma",
      school: "Punjab College",
      score: "324",
      avatar: "M",
    },
    {
      name: "Anant Govil",
      school: "DTU - Delhi Technological University",
      score: "323",
      avatar: "A",
    },
    {
      name: "Shaurya Srivastava",
      school: "NIIT University",
      score: "322",
      avatar: "S",
    },
    {
      name: "Eshan Singh",
      school: "DYPiemr",
      score: "321",
      avatar: "E",
    },
  ];

  const features = [
    {
      title: "Top Results",
      description: "Proven GRE success with 320+ scorers and expert coaching.",
      iconPath: "/assets/gre-icons/since-1993.svg",
    },
    {
      title: "Smart Analytics",
      description: "Actionable progress tracking and score insights for every student.",
      iconPath: "/assets/gre-icons/analytics.svg",
    },
    {
      title: "Hybrid Learning",
      description: "Switch easily between online and offline sessions for flexibility.",
      iconPath: "/assets/gre-icons/teacher.svg",
    },
    {
      title: "Practice Modules",
      description: "Section-based drills and full mocks to sharpen accuracy and speed.",
      iconPath: "/assets/gre-icons/books.svg",
    },
    {
      title: "Expert Faculty",
      description: "Mentorship from GRE experts with years of admissions experience.",
      iconPath: "/assets/gre-icons/student.svg",
    },
    {
      title: "Personalized Attention",
      description: "Dedicated doubt-solving and individualized study planning.",
      iconPath: "/assets/gre-icons/qa.svg",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does the GMAT percentile mean?",
      answer:
        "The GMAT percentile tells you about your relative performance on the exam. If you secure 85 percentile, it would mean that 85% of the students who have taken the exam in the past three years are below you, and 15% are equal to or above you.",
    },
    {
      question: "How do I send my score to the colleges I want to apply to?",
      answer:
        "The universities only accept official scores sent directly by GMAC through www.mba.com. Scores to five colleges can be sent free of cost immediately after taking the exam. Subsequently, for each score report sent to a college, you would have to pay USD 35.",
    },
    { question: "Who can take the GMAT test?", answer: "Anyone planning for graduate management programs; proof of age or consent may be required for minors." },
    { question: "Is there any negative marking in the GMAT exam?", answer: "No, there is no negative marking for an incorrect answer, however you will lose points on leaving a question unanswered." },
    { question: "Can I reschedule my GMAT exam date?", answer: "Yes, you can reschedule your exam subject to GMAC rescheduling rules and fees." },
    { question: "What is the GMAT exam?", answer: "The GMAT is a computer adaptive test used for admissions to graduate business programs." },
    { question: "What is the eligibility to take the GMAT exam?", answer: "There is no minimum educational requirement; applicants commonly take it in their final year or after graduating." },
    { question: "How is the GMAT exam scored?", answer: "Section scores range from 130-170 for Verbal and Quant; the total scaled score is between 260-340." },
  ];

  const grePrepModes = [
    {
      id: "classroom",
      title: "GRE Classroom Coaching",
      label: "Hybrid",
      description: "Structured GRE classroom prep under the guidance and mentorship of faculty. Ensures high accountability and in-depth understanding of concepts.",
      bullets: [
        "48 hours (24 classes) of classroom training by experienced GRE tutors",
        "7 full-length GRE mock tests and 15 sectional tests",
        "GRE study material, Vocabulary app and webinars (foundation and advanced)",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "online",
      title: "GRE Online Coaching",
      label: "Online",
      description: "GRE online prep is a comprehensive classroom program with live classes conducted by faculty. Best suited for students who want the best of classes but have difficulty in travelling.",
      bullets: [
        "48 hours (24 classes) of GRE online training from anywhere.",
        "7 full-length GRE practice tests and test review with GRE teachers",
        "Sectional tests and topic-wise exercises",
        "Comprehensive GRE books to cover all areas of learning and practice",
        "Unlimited doubt-clearing sessions from 7 AM to midnight every day",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "self-paced",
      title: "GRE Self-Paced Online Coaching",
      label: "Self-Paced Online",
      description: "GRE Self-paced program consists of detailed concept videos and practice exercises that the student can work with at their own pace. Best suited for highly motivated students who keep track of their performance and regularity.",
      bullets: [
        "48 hours of pre-recorded HD classroom videos",
        "7 full-length GRE mock tests",
        "Sectional tests and topic-wise exercises",
        "GRE study material available on the student portal",
        "5 hours of one-on-one doubt-clearing sessions with GRE tutor",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
    {
      id: "private",
      title: "GRE Private Tutoring",
      label: "Hybrid",
      description: "GRE tutor for personalized GRE preparation based on individual requirements. This is best suited for students who have unpredictable schedules or need personalized attention in certain topics or retest takers wanting to improve their GRE scores in a certain area.",
      bullets: [
        "40 hours of one-on-one classes over 3 months with the best GRE tutors in India",
        "Student GRE portal access for 1-year for tests and practice with advanced analytics",
        "Customized GRE roadmap to achieve best GRE score possible",
        "7 full-length GRE mock tests, 15 sectional tests and additional topic-wise exercises",
        "Comprehensive GRE books that covers learning and practice",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
      cta: {
        demo: {
          label: "BOOK A DEMO",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-w.png",
          href: "#",
        },
        knowMore: {
          label: "KNOW MORE",
          icon: "https://www.jamboreeindia.com/assets/version-2/img/product/call-icon-g.png",
          href: "https://www.jamboreeindia.com/gre-online-prep",
        },
      },
    },
  ];

  const greFocusAreas = [
    {
      id: "concepts",
      title: "Concepts Tested on the Exam",
      short: "Master the core GRE concepts that actually appear on the test.",
      image: "/assets/gre-asset/board.webp",
      headline: "Build confidence in the concepts that matter most on the GRE.",
      description:
        "Our GRE coaching teaches you exactly what you need to ace the GRE prep — nothing more, nothing less. Every lesson is designed to strengthen the fundamentals and sharpen the reasoning behind the exam's most tested ideas.",
      points: [
        "Foundation-first teaching for verbal and quantitative reasoning",
        "Concept drills mapped to the latest GRE question patterns",
        "Clear explanations that make tricky topics easy to retain",
      ],
    },
    {
      id: "faculty",
      title: "GRE Courses by Our Expert Faculty",
      short: "Learn from GRE specialists who simplify complex topics and guide your prep.",
      image: "/assets/gre-asset/teacher.webp",
      headline: "Learn from mentors who know how to turn strategy into results.",
      description:
        "GRE test prep with topic-based exercises to help gain mastery of concepts. Our expert faculty keeps each session practical, focused, and aligned with the way the exam is actually structured.",
      points: [
        "Live classes with faculty who teach for clarity and speed",
        "Structured topic-wise practice to build mastery over time",
        "Personalized guidance for weak areas and score improvement",
      ],
    },
    {
      id: "accuracy",
      title: "Accuracy and Speed",
      short: "Improve precision and pacing so you can perform confidently under timing pressure.",
      image: "/assets/gre-asset/plan.png",
      headline: "Train for accuracy and speed without burning out.",
      description:
        "Accuracy and speed are the difference between a good GRE score and a great one. Our practice framework helps you build the rhythm, control, and timing needed to perform with confidence on test day.",
      points: [
        "Timed practice sets that sharpen decision-making under pressure",
        "Error analysis to improve accuracy and reduce avoidable mistakes",
        "Smart pacing strategies for verbal and quantitative sections",
      ],
    },
  ];

  const activeFocus = greFocusAreas.find((item) => item.id === activeGreFocus) ?? greFocusAreas[0];
  reviewCardsRef.current = [];

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
  };

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % studentReviews.length);
  };

  return (
    <div className="bg-slate-50 text-slate-950">
      <section className="overflow-hidden bg-slate-50 py-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-[#EFF6FF] via-white to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-[#0052CC]/15 bg-[#EAF3FF] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#0052CC] shadow-sm">
                GRE PREP
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-[4.5rem]">
                We Deliver the GRE Scores that Top Colleges Want
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Premium GRE coaching designed for ambitious learners. Build the test skills, speed, and confidence you need to compete for top programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#0052CC] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0052CC]/20 transition hover:bg-[#0041a8]">
                  Take a Free Class
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-[#0052CC] bg-white px-7 py-3 text-sm font-semibold text-[#0052CC] transition hover:bg-[#0052CC]/5">
                  Call Us
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 hidden h-32 w-32 rounded-full bg-[#6366F1]/10 blur-3xl lg:block" />
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">GRE Top Scorers</p>
                    <p className="mt-2 text-sm text-slate-600">Recent achievers from our GRE cohort</p>
                  </div>
                  <div className="rounded-3xl bg-[#EAF3FF] px-4 py-2 text-sm font-semibold text-[#0052CC]">
                    2025
                  </div>
                </div>
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={result.name}
                      className={`rounded-3xl p-4 ${index % 2 === 0 ? "bg-[#F8FAFF]" : "bg-[#EFF6FF]"}`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0052CC]/10 text-[#0052CC] font-semibold">
                            {result.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-950">{result.name}</p>
                            <p className="text-sm text-slate-600">{result.school}</p>
                          </div>
                        </div>
                        <div className="rounded-3xl bg-slate-950 px-4 py-3 text-right text-white shadow-sm">
                          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-slate-300">GRE</p>
                          <p className="mt-1 text-2xl font-bold leading-none">{result.score}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[1.4fr_0.95fr]">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <h2 className="text-3xl font-semibold text-slate-950">What is the GRE?</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  The Graduate Record Examination (GRE) General Test is a multiple-choice exam for applicants seeking advanced study overseas. It helps graduate schools evaluate reasoning, analytical writing, and critical thinking across multiple fields.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our GRE prep combines targeted strategy, timed practice, and expert mentoring so you can build score-driving confidence for top programs in the US, UK, Canada, and beyond.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-6">
                  <h3 className="text-xl font-semibold text-slate-950">GRE 2025 Key points</h3>
                </div>
                <div className="divide-y divide-slate-200">
                  {[
                    ["Exam name", "Graduate Record Examination (GRE)"],
                    ["Conducted by", "Educational Testing Service (ETS)"],
                    ["GRE Scoring", "AWA 0–6; Quantitative 130–170; Verbal 130–170; Total 260–340"],
                    ["Score Validity", "5 years"],
                    ["GRE fees", "₹22,500/-"],
                    ["Number of attempts", "Up to 5 times in 365 days"],
                    ["Question type", "MCQs for Quant & Verbal plus one AWA essay"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className={`grid gap-4 px-6 py-5 md:grid-cols-[180px_1fr] ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <span className="font-semibold text-slate-900">{label}</span>
                      <span className="text-slate-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-6">
                  <h3 className="text-xl font-semibold text-slate-950">GRE Exam Pattern</h3>
                </div>
                <div className="grid divide-y divide-slate-200">
                  {[
                    {
                      section: "Analytical Writing Assessment (AWA)",
                      details: "Task – “Analyze an Issue”",
                      time: "30 min",
                    },
                    {
                      section: "Quantitative reasoning",
                      details: "Section 1: 12 questions · Section 2: 15 questions",
                      time: "21 min / 26 min",
                    },
                    {
                      section: "Verbal reasoning",
                      details: "Section 1: 12 questions · Section 2: 15 questions",
                      time: "18 min / 23 min",
                    },
                  ].map((row) => (
                    <div key={row.section} className="grid gap-4 px-6 py-5 md:grid-cols-[1.5fr_1.2fr_0.8fr]">
                      <div className="font-semibold text-slate-900">{row.section}</div>
                      <div className="text-slate-600">{row.details}</div>
                      <div className="font-medium text-slate-900">{row.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFF] to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,_102,_241,_0.14),_transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#0052CC] shadow-lg">
                      <Play className="h-8 w-8" />
                    </div>
                    <div className="mt-4 max-w-[24rem] rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-sm">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0052CC]">GRE Overview</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">Watch a crisp preview of our GRE preparation approach and student success stories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="mb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0052CC]">Speak to an Expert</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-950">Book a GRE consultation</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Share a few details and our expert team will call you with a tailored plan.
                  </p>
                </div>
                <form className="space-y-4">
                  <label className="block text-sm font-medium text-slate-900">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-900">
                    Mobile Number
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-1.5">
                      <span className="inline-flex items-center rounded-2xl bg-slate-100 px-3 text-sm font-semibold text-slate-600">+91</span>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="flex-1 rounded-2xl border-none bg-transparent px-3 py-3 text-sm text-slate-900 outline-none"
                      />
                    </div>
                  </label>
                  <label className="block text-sm font-medium text-slate-900">
                    Email
                    <input
                      type="email"
                      placeholder="Email Id"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20"
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-900">
                    Interested in?
                    <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20">
                      <option>GRE Coaching</option>
                      <option>Mock Tests</option>
                      <option>Hybrid Program</option>
                      <option>One-on-One Mentoring</option>
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-slate-900">
                    Your City
                    <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20">
                      <option>Delhi</option>
                      <option>Gurgaon</option>
                      <option>Mumbai</option>
                      <option>Bengaluru</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-slate-900">
                    Nearest Center
                    <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20">
                      <option>Central Delhi</option>
                      <option>South Delhi</option>
                      <option>Gurugram</option>
                      <option>Online</option>
                    </select>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0052CC] focus:ring-[#0052CC]" />
                    <span>Stay informed via SMS & WhatsApp</span>
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#3B82F6] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#3B82F6]/20 transition hover:opacity-95"
                  >
                    Schedule a Call
                  </button>
                </form>
              </div>
            </aside>
          </div>

          <section className="mt-16 rounded-[32px] border border-slate-200 bg-black/90 p-6 shadow-soft text-white">
            <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">GRE Prep Modes</p>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pick the GRE preparation mode that works best for you</h2>
                <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-300">
                  At Seekyoury we believe that every individual has their own learning style and requirement when it comes to GRE preparation. We offer four different GRE prep modes so each student can choose the option that fits their schedule, goals and comfort.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {grePrepModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`rounded-3xl border px-4 py-5 text-left transition duration-200 ${
                      activeMode === mode.id
                        ? "border-emerald-400 bg-emerald-700/15 text-white"
                        : "border-slate-700/10 bg-white/5 text-slate-200 hover:border-emerald-300/70 hover:bg-white/10"
                    }`}
                  >
                    <p className="text-base font-semibold leading-tight">{mode.title}</p>
                    <span className="mt-3 inline-flex rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-100">
                      {mode.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-[32px] bg-white p-6 text-slate-900 shadow-soft">
                {grePrepModes
                  .filter((mode) => mode.id === activeMode)
                  .map((mode) => (
                    <div key={mode.id} className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-center">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span className="text-xl font-semibold text-slate-950">{mode.title}</span>
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">{mode.label}</span>
                        </div>
                        <p className="text-sm leading-7 text-slate-700">{mode.description}</p>
                        <ul className="mt-4 space-y-2 text-slate-700">
                          {mode.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2 text-sm leading-6">
                              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <a
                            href={mode.cta.demo.href}
                            className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition"
                          >
                            <img src={mode.cta.demo.icon} alt="call" className="h-4 w-4" />
                            {mode.cta.demo.label}
                          </a>
                          <a
                            href={mode.cta.knowMore.href}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                          >
                            <img src={mode.cta.knowMore.icon} alt="call" className="h-4 w-4" />
                            {mode.cta.knowMore.label}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center justify-center rounded-[2rem] bg-slate-100 p-4">
                        <img src={mode.image} alt={mode.title} className="h-auto w-full max-w-[320px] rounded-[2rem] object-cover" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          



          <section className="mt-12 px-6">
            <div className="mx-auto max-w-[1200px]">
              <div className="text-center mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">How we help</p>
                <h2 className="mt-2 text-3xl font-semibold">Seekyoury GRE Coaching</h2>
                <p className="mt-2 text-sm text-slate-500">Designed To Help Your GRE Prep In 3 Key Areas</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {greFocusAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveGreFocus(area.id)}
                    className={`relative flex items-center gap-4 rounded-lg px-6 py-6 text-left transition ${
                      activeGreFocus === area.id ? "bg-emerald-700 text-white" : "bg-emerald-700/20 text-white"
                    }`}
                  >
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-white/90 p-2">
                      <img src={area.image} alt={area.title} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{area.title}</div>
                      <div className="text-sm opacity-90">{area.short}</div>
                    </div>
                    {activeGreFocus === area.id && <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-black" />}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[18px] bg-black/95 p-8 text-white">
                <div className="grid gap-6 md:grid-cols-3">
                  {activeFocus.points.map((p) => (
                    <div key={p} className="rounded-xl border-2 border-dashed border-white/40 p-6 text-center">
                      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/90 flex items-center justify-center text-black">
                        <img src={activeFocus.image} alt="" className="h-6 w-6 object-contain" />
                      </div>
                      <p className="text-sm">{p}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-start gap-6">
                  <img
                    src={activeGreFocus === "concepts" ? (greFocusAreas.find((f) => f.id === "faculty")?.image ?? activeFocus.image) : activeFocus.image}
                    alt="focus"
                    className="hidden w-48 flex-shrink-0 rounded-lg object-cover md:block"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{activeGreFocus === "concepts" ? (greFocusAreas.find((f) => f.id === "faculty")?.title ?? activeFocus.title) : activeFocus.title}</h3>
                    <p className="mt-2 text-sm text-slate-200">{activeFocus.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-950 text-center">Why Choose Seekyoury for GRE Test Prep?</h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-soft">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-[#EEF2FF]">
                  <img src={feature.iconPath} alt={feature.title} className="h-8 w-8 object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <section className="mt-12 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Our students in Nashik review their GRE Tutors</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">GRE Tutor Reviews</h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-slate-500">
                See what our students say about GRE tutoring, concept clarity, and one-on-one support from our top faculty.
              </p>
            </div>

            <div className="relative mt-6 sm:mt-8">
              <button
                type="button"
                onClick={handlePrevReview}
                className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-soft transition hover:bg-slate-100 sm:flex"
                aria-label="Previous review"
              >
                ‹
              </button>

              <div
                ref={reviewListRef}
                className="overflow-x-auto overflow-y-visible pt-4 pb-4 scrollbar-none scroll-smooth px-6 sm:px-8"
                onMouseEnter={() => setIsReviewPaused(true)}
                onMouseLeave={() => setIsReviewPaused(false)}
                onTouchStart={() => setIsReviewPaused(true)}
                onTouchEnd={() => setIsReviewPaused(false)}
              >
                <div className="flex gap-4 snap-x snap-mandatory items-start justify-start pl-6 pr-48 sm:pl-8">
                  {studentReviews.map((review, index) => {
                    const isActive = index === activeReviewIndex;
                    return (
                      <div
                        key={`${review.name}-${review.footer}`}
                        ref={(el) => {
                          if (el) reviewCardsRef.current[index] = el;
                        }}
                        className={`min-w-[64vw] max-w-[280px] sm:min-w-[34%] lg:min-w-[28%] snap-start rounded-[32px] border border-slate-200 bg-slate-50 p-4 pb-6 shadow-soft transition duration-300 ${
                          isActive
                            ? "scale-105 ring-2 ring-emerald-200 shadow-xl opacity-100"
                            : "opacity-50 hover:opacity-80 scale-95"
                        } first:ml-2 sm:first:ml-4 last:mr-28`}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="h-14 w-14 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-base sm:text-lg font-semibold text-slate-950">{review.name}</p>
                            <p className="text-xs sm:text-sm text-slate-600">{review.title}</p>
                            <div className="mt-2 flex items-center gap-1 text-amber-400">
                              {Array.from({ length: review.rating }).map((_, starIndex) => (
                                <span key={starIndex}>★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="mt-5 text-sm sm:text-sm leading-6 sm:leading-7 text-slate-700">{review.text}</p>
                        <p className="mt-6 text-xs sm:text-sm font-semibold text-slate-900">{review.footer}</p>
                      </div>
                    );
                  })}
                  <div className="shrink-0 w-[24vw] sm:w-[12rem] lg:w-[16rem]" />
                </div>
              </div>

              <button
                type="button"
                onClick={handleNextReview}
                className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-soft transition hover:bg-slate-100 sm:flex"
                aria-label="Next review"
              >
                ›
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {studentReviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveReviewIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeReviewIndex ? "bg-emerald-600" : "bg-slate-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

              <div className="mt-6">
                <div className="mx-auto max-w-[1200px]">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-semibold text-slate-950">GMAT Prep FAQs</h2>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((item, idx) => (
                      <div key={item.question} className="rounded-md bg-white border border-slate-100">
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left"
                        >
                          <span className="text-base font-medium text-slate-900">{item.question}</span>
                          <span className="ml-4 text-lg font-bold text-slate-700">{openFaq === idx ? "−" : "+"}</span>
                        </button>
                        <div className={`px-4 pb-4 pt-0 text-slate-600 overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}>
                          <p className="leading-6 text-sm">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutGre;
