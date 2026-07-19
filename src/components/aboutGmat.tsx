import React, { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Zap, Activity, ShieldCheck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Footer } from "@/components/Footer";
import analyticsIcon from "@/assets/paced-icon/analytics.webp";
import booksIcon from "@/assets/paced-icon/books.webp";
import qaIcon from "@/assets/paced-icon/qa.webp";
import since1993Icon from "@/assets/paced-icon/since-1993.webp";
import studentIcon from "@/assets/paced-icon/student.webp";
import teacherIcon from "@/assets/paced-icon/teacher.webp";
import ManyaPhoto from "@/assets/student_pics/Manya.jpeg";
import PraffulPhoto from "@/assets/student_pics/Prafful.jpeg";
import ArjunPhoto from "@/assets/student_pics/Arjun M S.jpeg";
import BalagopalPhoto from "@/assets/student_pics/Balagopal Jayakumar.jpeg";

const AboutGmat: React.FC = () => {
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGmatFocus, setActiveGmatFocus] = useState("learn");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const gmatPrepModes = [
    {
      id: "classroom",
      title: "GMAT Classroom Coaching",
      label: "Hybrid",
      description: "Instructor-led sessions with in-person support, targeted mocks, and live doubt clearing.",
      bullets: [
        "60 hours of classroom coaching with expert GMAT faculty",
        "Weekly mock tests and personalized score reports",
        "Hybrid mode for flexible classroom and online attendance",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "online",
      title: "GMAT Online Coaching",
      label: "Online",
      description: "Live online classes with structured lessons, analytics, and flexible access from home.",
      bullets: [
        "Interactive live sessions with GMAT specialists",
        "Online practice tests and section-wise review",
        "Access to lesson recordings and study dashboards",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "self-paced",
      title: "GMAT Self-Paced Coaching",
      label: "Self-Paced",
      description: "Recorded lessons and practice material for learners who want to move at their own pace.",
      bullets: [
        "HD video lessons for every GMAT topic",
        "7 full-length mock tests with explanations",
        "Self-study support and progress tracking",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "private",
      title: "GMAT Private Tutoring",
      label: "Private",
      description: "One-on-one mentoring for score improvement, strategy, and confidence building.",
      bullets: [
        "Customized lesson plans for your target score",
        "Dedicated expert tutor and regular progress reviews",
        "Focused doubt clearing for verbal, quant, and IR",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
  ];

  const gmatFocusAreas = [
    {
      id: "learn",
      title: "Concept Mastery",
      short: "Build the fundamentals behind every GMAT question.",
      headline: "Learn the core ideas that drive GMAT success.",
      description: "Structured classes, concept drills, and expert guidance make every topic easy to apply on test day.",
      points: [
        "Foundational training for quantitative and verbal reasoning",
        "Topic-by-topic strategy sessions for every question type",
        "Live doubt clearing and revision blocks",
      ],
      image: "/assets/gre-asset/top-learn.png",
    },
    {
      id: "practice",
      title: "Timed Practice",
      short: "Sharpen accuracy and build pacing under exam conditions.",
      headline: "Practice with real GMAT-style questions and mock tests.",
      description: "Timed drills and sectional tests help you get faster, more confident, and adaptive under pressure.",
      points: [
        "Topic-based practice with analytics",
        "Regular full-length mock tests",
        "Error review sessions to fix weak areas",
      ],
      image: "/assets/gre-asset/top-practice.png",
    },
    {
      id: "apply",
      title: "Score Strategy",
      short: "Convert practice into measurable improvement.",
      headline: "Use analytics and mentoring to improve your GMAT score.",
      description: "Personalised score reports, strategy calls, and study-plan adjustments keep you on track toward your goal.",
      points: [
        "Weekly score analytics and growth tracking",
        "Targeted practice based on your performance",
        "Strategy mentoring for test day readiness",
      ],
      image: "/assets/gre-asset/top-apply.png",
    },
  ];

  const activeFocus = gmatFocusAreas.find((item) => item.id === activeGmatFocus) ?? gmatFocusAreas[0];

  const cards = [
    {
      icon: since1993Icon,
      title: "Proven Success",
      description: "High GMAT scores achieved consistently since 1993.",
    },
    {
      icon: analyticsIcon,
      title: "Smart Analytics",
      description: "Actionable insights to improve your performance every week.",
    },
    {
      icon: teacherIcon,
      title: "Expert Faculty",
      description: "Top GMAT instructors with real admissions coaching experience.",
    },
    {
      icon: booksIcon,
      title: "Practice Modules",
      description: "Extensive mocks, drills, and explanation material.",
    },
    {
      icon: studentIcon,
      title: "Personalized Support",
      description: "Doubt clearing, mentoring, and score planning tailored to you.",
    },
    {
      icon: qaIcon,
      title: "Adaptive Strategy",
      description: "Adjust your plan as your strengths and targets evolve.",
    },
  ];

  const studentReviews = [
    {
      name: "Nishtha",
      title: "GMAT teacher",
      image: ManyaPhoto,
      rating: 5,
      text: "Nishtha ma'am is excellent at explaining concepts in a simple and easy to understand way. She is patient, supportive, and always encourages me to do my best.",
      footer: "Sandeep, 1 week ago",
    },
    {
      name: "Dhruv",
      title: "GMAT teacher",
      image: PraffulPhoto,
      rating: 5,
      text: "Hello Dhruv, thank you for the excellent teaching and support you've given to our 10 years old son Thomas. Your clear explanations and friendly approach have made math enjoyable for him.",
      footer: "Fabio, 2 months ago",
    },
    {
      name: "Pratyush",
      title: "GMAT teacher",
      image: ArjunPhoto,
      rating: 5,
      text: "Pratyush has been an excellent calculus tutor for my son. He explains complex concepts in a clear, patient, and easy-to-understand manner, which has greatly improved my son's confidence.",
      footer: "Devesh, 2 weeks ago",
    },
    {
      name: "Balagopal",
      title: "GMAT teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
    },
  ];

  const faqs = [
    {
      question: "What does the GMAT percentile mean?",
      answer:
        "The GMAT percentile tells you about your relative performance on the exam. If you secure 85 percentile, it would mean that 85% of the students who have taken the exam in the past three years are below you, and 15% are equal to or above you.",
    },
    {
      question: "How do I send my score to the colleges I want to apply to?",
      answer:
        "The universities only accept official scores sent directly by GMAC through mba.com. Scores to five colleges can be sent free immediately after the exam.",
    },
    {
      question: "Who can take the GMAT test?",
      answer: "Anyone planning for graduate management programs; minors may need guardian consent.",
    },
    {
      question: "Is there any negative marking in the GMAT exam?",
      answer: "No. There is no negative marking, but unanswered questions will still reduce your scaled score.",
    },
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="bg-background text-foreground">
      <section className="overflow-hidden bg-background py-20">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary shadow-sm">
                GMAT PREP
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-[4.5rem]">
                Achieve GMAT momentum with
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500">
                  coaching built for scores.
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Learn faster, practice smarter, and get the exact GMAT strategy you need for your target business school.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-blue-500/20 transition hover:opacity-95">
                  Book a Free Class
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-primary transition hover:border-primary/60 hover:bg-primary/10">
                  Talk to an Expert
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 hidden h-32 w-32 rounded-full bg-primary/10 blur-3xl lg:block" />
              <div className="rounded-[32px] border border-border bg-card p-6 shadow-soft">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Top GMAT Results</p>
                    <p className="mt-2 text-sm text-muted-foreground">Recent achievers from our coaching batch</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft">
                    2025
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Jinay Nandu", score: "720" },
                    { name: "Sid Makharia", score: "715" },
                    { name: "Riya Joshi", score: "710" },
                  ].map((item) => (
                    <div key={item.name} className="rounded-3xl p-4 bg-card">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">GMAT Achiever</p>
                        </div>
                        <div className="rounded-3xl bg-primary px-4 py-2 text-right text-primary-foreground">
                          <p className="text-xs uppercase text-primary-foreground/70">Score</p>
                          <p className="text-xl font-bold">{item.score}</p>
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

      <section className="bg-background py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
          <div className="grid gap-10 xl:grid-cols-[1.4fr_0.95fr] items-stretch">
            <div className="space-y-8">
              <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
                <h2 className="text-3xl font-semibold text-foreground">What is the GMAT?</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  The GMAT is a standardized exam for graduate management programs. It evaluates your verbal, quantitative, and analytical reasoning skills — the core abilities top business schools value.
                </p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Our GMAT coaching blends strategy, timed practice, and analytics so you can improve quickly and confidently on test day.
                </p>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-soft">
                <div className="border-b border-border bg-background px-6 py-6">
                  <h3 className="text-xl font-semibold text-foreground">GMAT Exam Pattern</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 text-primary-foreground">
                        <th className="px-6 py-4">Section</th>
                        <th className="px-6 py-4">Questions</th>
                        <th className="px-6 py-4">Time</th>
                        <th className="px-6 py-4">Score Scale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {[
                        { section: "Verbal Reasoning", questions: "36", time: "65 min", score: "6-51" },
                        { section: "Quantitative Reasoning", questions: "31", time: "62 min", score: "6-51" },
                        { section: "Integrated Reasoning", questions: "12", time: "30 min", score: "1-8" },
                        { section: "Analytical Writing", questions: "2", time: "30 min", score: "0-6" },
                      ].map((row) => (
                        <tr key={row.section} className="odd:bg-background">
                          <td className="px-6 py-4 font-medium text-foreground">{row.section}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.questions}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.time}</td>
                          <td className="px-6 py-4 text-muted-foreground">{row.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-foreground">Why GMAT matters</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Global business schools use it to compare applicants.",
                    "Strong GMAT scores improve scholarship chances.",
                    "It shows you can think critically under pressure.",
                    "A strong score boosts confidence in your application.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-3xl bg-background p-5">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Speak to an Expert</p>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">Book a GMAT consultation</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Share a few details and our expert team will call you with a tailored GMAT plan.
                </p>
                <form className="mt-6 space-y-4">
                  <input type="text" placeholder="Name" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  <div className="flex gap-2">
                    <select className="w-28 rounded-2xl border border-border bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                      <option>+91</option>
                    </select>
                    <input type="tel" placeholder="Mobile Number" className="flex-1 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                  <select className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option>Interested in?</option>
                  </select>
                  <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-blue-500/20 transition hover:opacity-95">
                    Schedule a Call
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mt-16 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-border bg-card p-10 shadow-soft">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Prep Modes</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Pick the GMAT preparation mode that works best for you</h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Choose from classroom, online, self-paced or private tutoring. Each plan is designed to fit your study habits and timeline.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {gmatPrepModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`group flex h-full flex-col overflow-hidden rounded-[28px] border p-6 text-left transition duration-300 ${
                    activeMode === mode.id
                      ? "border-primary bg-primary/10 shadow-soft"
                      : "border-border bg-card hover:border-primary/70 hover:bg-background hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">{mode.label}</p>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      activeMode === mode.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <span className="text-sm font-bold">{mode.title.split(" ")[1]?.charAt(0) ?? mode.title.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{mode.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{mode.description}</p>
                  <div className="mt-auto pt-6">
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition group-hover:bg-primary/20">
                      Learn More
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[32px] border border-border bg-background p-6 shadow-soft">
              {gmatPrepModes.filter((mode) => mode.id === activeMode).map((mode) => (
                <div key={mode.id} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="text-xl font-semibold text-foreground">{mode.title}</span>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{mode.label}</span>
                    </div>
                    <p className="text-muted-foreground">{mode.description}</p>
                    <ul className="mt-6 space-y-3 text-muted-foreground">
                      {mode.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-6">
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-95 transition">
                        Book a Demo
                      </button>
                      <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center rounded-[2rem] bg-card p-4">
                    <img src={mode.image} alt={mode.title} className="h-auto w-full max-w-[320px] rounded-[2rem] object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 
 
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

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT Tutor Reviews</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">What our students say</h2>
              <p className="mt-3 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                Read the experiences of students who improved their GMAT score with Seekyoury coaching.
              </p>
            </div>
            <Carousel
              opts={{
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                loop: true,
                align: "start",
              }}
              setApi={setCarouselApi}
              className="relative"
            >
              <CarouselContent className="flex gap-4">
                {studentReviews.map((review) => (
                  <CarouselItem key={`${review.name}-${review.footer}`} className="min-w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)]">
                    <div className="rounded-[32px] border border-border bg-background p-6 shadow-soft min-h-full">
                      <div className="flex items-center gap-4">
                        <img src={review.image} alt={review.name} className="h-16 w-16 rounded-full object-cover" />
                        <div>
                          <p className="text-lg font-semibold text-foreground">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.title}</p>
                          <div className="mt-2 flex items-center gap-1 text-[hsl(var(--exam-gold))]">
                            {Array.from({ length: review.rating }).map((_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-muted-foreground">{review.text}</p>
                      <p className="mt-6 text-sm font-semibold text-foreground">{review.footer}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[32px] border border-border bg-card p-8 shadow-soft">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">GMAT FAQs</p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground">Frequently asked questions</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {faqs.map((item, idx) => (
                <div key={item.question} className="rounded-[24px] border border-border bg-background">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-foreground"
                  >
                    <span className="text-base font-semibold">{item.question}</span>
                    <span className="text-2xl text-primary">{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  <div className={`overflow-hidden px-5 pb-5 pt-0 text-muted-foreground transition-all duration-300 ${openFaq === idx ? "max-h-64" : "max-h-0"}`}>
                    <p className="text-sm leading-7">{item.answer}</p>
                  </div>
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

export default AboutGmat;
