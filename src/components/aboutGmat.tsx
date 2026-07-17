import React, { useEffect, useState } from "react";
import { BookOpen, Zap, Activity, Gift, ChevronDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
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
  const [open, setOpen] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState("classroom");
  const [activeGmatFocus, setActiveGmatFocus] = useState("learn");

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

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

  const gmatFocusAreas = [
    {
      id: "learn",
      title: "Learn",
      short: "Foundations & Concept Mastery",
      image: "/assets/gre-asset/top-learn.png",
      headline: "GMAT classes by Seekyoury award-winning expert faculty",
      description: "Structured classes and concept-first teaching to build strong fundamentals.",
      points: [
        "GMAT classes by Seekyoury award-winning expert faculty",
        "Personalised GMAT study plan based on your target score and test date",
        "Learn with in-house study material + official GMAT study material",
        "100+ hours of free sessions on syllabus basics, question discussions, admissions information, and GMAT exam strategies",
        "Access to Seekyoury’s GMAT test-prep apps",
      ],
      pointIcons: [
        "/assets/gre-asset/teacher.webp",
        "/assets/gre-asset/plan.png",
        "/assets/gre-asset/books.png",
        "/assets/gre-asset/mock-test.png",
        "/assets/gre-asset/apps.png",
      ],
    },
    {
      id: "practice",
      title: "Practice",
      short: "Timed drills & mocks",
      image: "/assets/gre-asset/top-practice.png",
      headline: "Improve accuracy and speed with structured practice",
      description: "Timed practice, sectional drills and mock tests to sharpen performance.",
      points: [
        "Topic-based exercises to help gain mastery of concepts",
        "Improve accuracy and speed with timed practice drills",
        "Unlimited doubt-clearing sessions with best GMAT faculty",
        "HD concept videos for easy reference outside of the classroom",
        "Access to Seekyoury’s online training portal which simulates actual testing software",
      ],
      pointIcons: [
        "/assets/gre-asset/board.webp",
        "/assets/gre-asset/books.png",
        "/assets/gre-asset/teacher.webp",
        "/assets/gre-asset/video.png",
        "/assets/gre-asset/apps.png",
      ],
    },
    {
      id: "apply",
      title: "Apply",
      short: "Strategy & Analytics",
      image: "/assets/gre-asset/top-apply.png",
      headline: "Strategise your test journey with personalized plans",
      description: "Advanced analytics and mentoring to convert practice into scores.",
      points: [
        "Take 12 full-length GMAT mock tests so you can get used to real testing conditions",
        "Strategise GMAT preparation test journey using customized study plans",
        "AI-powered score reports with detailed insights and advanced analytics",
      ],
      pointIcons: [
        "/assets/gre-asset/mock-test.png",
        "/assets/gre-asset/plan.png",
        "/assets/gre-asset/analytics.png",
      ],
    },
  ];

  const activeGmat = gmatFocusAreas.find((f) => f.id === activeGmatFocus) ?? gmatFocusAreas[0];

  const gmatPrepModes = [
    {
      id: "classroom",
      title: "GMAT Classroom Coaching",
      label: "Hybrid",
      description: "In-person mentor attention and peer learning.",
      bullets: [
        "Comprehensive GMAT Prep Mode: 60 hours of classroom coaching by experienced GMAT tutors.",
        "GMAT Test Prep: Covers Verbal, Quant and Integrated Reasoning with 6 full-length mock tests.",
        "GMAT Study Material: Official GMAT practice tests with topic-wise exercises for quant, verbal and DI.",
        "Doubt-Clearing Sessions: Unlimited sessions from 7 AM to midnight with expert faculty.",
        "Hybrid Prep Mode: Flexible switch between classroom and online training as needed.",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "online",
      title: "GMAT Online Coaching",
      label: "Online",
      description: "GMAT online exam preparation mode is no less than a classroom experience from the comfort of your home.",
      bullets: [
        "Flexibility and Convenience: Access top-quality GMAT prep from anywhere.",
        "GMAT Online Practice Tests: Topic-wise exercises and sectional tests with verbal and quant refreshers.",
        "Interactive GMAT Prep Classes Online: Real-time online classes with the best GMAT faculty.",
        "Online GMAT Course: Comprehensive study materials, mock tests, videos, webinars and doubt clearing.",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "self-paced",
      title: "GMAT Self-Paced Online Coaching",
      label: "Self-Paced Online",
      description: "Self-paced GMAT preparation with recorded lessons and flexible study timing.",
      bullets: [
        "Self-managed study schedule with concept videos and practice exercises.",
        "7 full-length GMAT mock tests and sectional exercises.",
        "Study material and portal access for self-review and progress tracking.",
        "Limited one-on-one doubt-clearing support for focused preparation.",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
    {
      id: "private",
      title: "GMAT Private Tutoring",
      label: "Hybrid",
      description: "Personalised GMAT test prep with maximum one-on-one attention.",
      bullets: [
        "1-on-1 GMAT private tutoring with topic-wise concept building and test analysis.",
        "Comprehensive Study Material: 3 books for quant and verbal in GMAT private coaching.",
        "GMAT Test Prep Strategy: 100+ hours of webinars on GMAT basics, admissions and exam strategy.",
        "Flexible coaching for retest takers and students needing personalised attention.",
      ],
      image: "https://www.jamboreeindia.com/assets/version-2/img/product/prep-products/online-coaching.webp",
    },
  ];

  const cards = [
    { icon: since1993Icon, title: "Unmatched Scores on the GMAT since 1993" },
    { icon: analyticsIcon, title: "Smart Analytics help you track and evaluate your performance" },
    { icon: teacherIcon, title: "Powerful adaptive technology platform streamlines your preparation" },
    { icon: booksIcon, title: "Targeted study plan & exhaustive Full-Length tests to maximize speed and accuracy" },
    { icon: studentIcon, title: "Mentoring and Coaching by the best and most experienced faculty" },
    { icon: qaIcon, title: "Personalized attention through Unlimited Doubt Clearing Sessions" },
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
      name: "Dhruv",
      title: "GMAT teacher",
      image: BalagopalPhoto,
      rating: 5,
      text: "Handling a 5 year old homeschooler with ease. Dhruv is an amazing teacher. I sincerely appreciate his patience with my daughter and the fun learning vibe.",
      footer: "Sreethy, 3 months ago",
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

  const features = [
    { key: "quant", title: "Quantitative Reasoning", details: ["Problem solving practice", "Topic-wise drills and tests"], icon: <BookOpen className="h-6 w-6" /> },
    { key: "verbal", title: "Verbal Reasoning", details: ["Reading comprehension drills", "Critical reasoning practice"], icon: <Zap className="h-6 w-6" /> },
    { key: "data", title: "Data Insights", details: ["Graphics interpretation", "Two-part analysis practice"], icon: <Activity className="h-6 w-6" /> },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-emerald-50/60 py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            <div className="pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">GMAT® CLASSES</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">BEST GMAT PREPARATION COACHING IN INDIA</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Open Endless Opportunities with the GMAT Test</p>

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
                  <div className="mb-4 flex items-center justify-between gap-4 rounded-lg bg-emerald-700 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20" />
                      <div>
                        <div className="font-semibold">Jinay Nandu</div>
                        <div className="text-xs">GMAT 715</div>
                      </div>
                    </div>
                    <div className="ml-2 rounded-md bg-black px-4 py-2 text-right text-white">
                      <div className="text-xs opacity-70">GMAT</div>
                      <div className="text-xl font-bold">715</div>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center justify-between gap-4 rounded-lg bg-emerald-700 p-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-white/20" />
                      <div>
                        <div className="font-semibold">Sid Makharia</div>
                        <div className="text-xs">GMAT 715</div>
                      </div>
                    </div>
                    <div className="ml-2 rounded-md bg-black px-4 py-2 text-right text-white">
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
              <h2>What is the GMAT?</h2>
              <p>
                The GMAT (Graduate Management Admission Test) is a standardised test that business schools use to evaluate applicants for admissions to graduate management degree programs.
              </p>
              <p>
                Admissions committees at business schools assess a candidate’s readiness for a management program based on their GMAT score.
              </p>

              <h3>GMAT – Exam Structure</h3>
              <div className="overflow-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-4">GMAT Sections</th>
                      <th className="p-4">Number of Questions</th>
                      <th className="p-4">Question Types</th>
                      <th className="p-4">Time Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Quantitative Reasoning</td>
                      <td className="p-4">21</td>
                      <td className="p-4">Problem Solving</td>
                      <td className="p-4">45 minutes</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Verbal Reasoning</td>
                      <td className="p-4">23</td>
                      <td className="p-4">Reading Comprehension, Critical Reasoning</td>
                      <td className="p-4">45 minutes</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Data Insights</td>
                      <td className="p-4">20</td>
                      <td className="p-4">Graphics Interpretation, Multi-source Reasoning</td>
                      <td className="p-4">45 minutes</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Total</td>
                      <td className="p-4">64 Questions</td>
                      <td className="p-4">-</td>
                      <td className="p-4">2 hours 15 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8">GMAT - Score Range</h3>
              <p className="mb-4">Here’s a look at the score breakdown for each section of the GMAT, as well as the total score:</p>
              <div className="overflow-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-4">GMAT Sections</th>
                      <th className="p-4">Score Range</th>
                      <th className="p-4">Score Interval</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Quantitative Reasoning</td>
                      <td className="p-4">60–90</td>
                      <td className="p-4">1</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Verbal Reasoning</td>
                      <td className="p-4">60–90</td>
                      <td className="p-4">1</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Data Insights</td>
                      <td className="p-4">60–90</td>
                      <td className="p-4">1</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50">
                      <td className="p-4">Total</td>
                      <td className="p-4">205–805</td>
                      <td className="p-4">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8">Why is the GMAT important?</h3>
              <p className="mb-4">The GMAT is a measure of your ability to adapt, learn, and apply concepts and ideas in complex situations. Your GMAT score helps admissions committees evaluate your potential as an MBA applicant. Having said that, there are several other reasons a GMAT score can help you with your MBA applications:</p>

              <div className="grid gap-4 sm:grid-cols-2 text-slate-700">
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />Your GMAT score serves as a common metric of comparison in the applicant pool</li>
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />Over 8,000 universities worldwide accept GMAT scores</li>
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />Scholarships & financial aid awarded by business schools are based on your GPA, GMAT score, and interview. Hence, a good GMAT score can help you secure significant scholarships</li>
                </ul>

                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />A good GMAT score can help you make up for a low GPA</li>
                  <li className="flex items-start gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-700" />Other than college applications, your GMAT score can also help you land your dream job. Companies across management, consulting, financial services, and investment banking consider GMAT scores when reviewing job applications</li>
                </ul>
              </div>

              <div className="mt-6">
                <button className="rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold">BOOK FREE GMAT CONSULTATION</button>
              </div>
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

      <section className="mx-4 my-16 rounded-[32px] bg-black/90 p-6 text-white lg:mx-auto lg:max-w-[1200px]">
        <div className="mx-auto max-w-[1100px] px-4 lg:px-6">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">GMAT Prep Modes</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pick the GMAT preparation mode that works best for you</h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-300">
              At Seekyoury we believe that every individual has their own learning style and requirement when it comes to GMAT preparation. We offer four different GMAT prep modes so each student can choose the option that fits their schedule, goals and comfort.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {gmatPrepModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
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
            {gmatPrepModes
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
                      <button className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-emerald-800 transition">
                        BOOK A DEMO
                      </button>
                      <a
                        href="https://www.jamboreeindia.com/gmat-prep#collapse17"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                      >
                        KNOW MORE
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Seekyoury GMAT Coaching</p>
              <h2 className="mt-2 text-3xl font-semibold">Seekyoury GMAT Coaching</h2>
              <p className="mt-2 text-sm text-slate-500">Designed To Help Your GMAT Prep In 3 Key Areas</p>
            </div>

            <div className="relative">
              <div className="grid gap-4 md:grid-cols-3">
                {gmatFocusAreas.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveGmatFocus(area.id)}
                    className={`relative flex items-center gap-4 rounded-lg px-6 py-6 text-left transition ${
                      activeGmatFocus === area.id ? "bg-emerald-700 text-white" : "bg-emerald-700/20 text-white"
                    }`}
                  >
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-white/90 p-2">
                      <img src={area.image} alt={area.title} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{area.title}</div>
                      <div className="text-sm opacity-90">{area.short}</div>
                    </div>
                  </button>
                ))}

                {/* pointer - position under active tab */}
              </div>

              {/* triangle pointer */}
              {(() => {
                const total = gmatFocusAreas.length;
                const activeIndex = gmatFocusAreas.findIndex((f) => f.id === activeGmatFocus);
                const leftPercent = total > 1 ? ((activeIndex + 0.5) / total) * 100 : 50;
                return (
                  <div
                    className="pointer absolute -bottom-3 h-4 w-4 bg-black rotate-45"
                    style={{ left: `${leftPercent}%`, transform: "translateX(-50%) rotate(45deg)" }}
                  />
                );
              })()}
            </div>

            <div className="mt-6 rounded-[18px] bg-black/95 p-8 text-white">
              <div className="grid gap-6 md:grid-cols-3">
                {activeGmat.points.map((p, i) => (
                  <div key={p} className="rounded-xl border-2 border-dashed border-white/40 p-6 text-center">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/90 flex items-center justify-center text-black">
                      <img src={activeGmat.pointIcons?.[i] ?? "/assets/gre-asset/books.png"} alt="icon" className="h-6 w-6 object-contain" />
                    </div>
                    <p className="text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-6">
                <img src={activeGmat.image} alt="focus" className="hidden w-48 flex-shrink-0 rounded-lg object-cover md:block" />
                <div>
                  <h3 className="text-xl font-semibold">{activeGmat.headline}</h3>
                  <p className="mt-2 text-sm text-slate-200">{activeGmat.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold">Why Choose Seekyoury for GMAT Preparation Coaching</h2>
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
            <button className="rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold">TALK TO A GMAT EXPERT</button>
          </div>

          <section className="mt-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Our students in Nashik review their GMAT Tutors</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">GMAT Tutor Reviews</h2>
              <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-slate-500">
                See what our students say about GMAT tutoring, concept clarity, and one-on-one support from our top faculty.
              </p>
            </div>

            <Carousel
              opts={{
                containScroll: "trimSnaps",
                slidesToScroll: 1,
                loop: true,
                align: "start",
                speed: 10,
              }}
              setApi={setCarouselApi}
              className="relative"
            >
              <CarouselContent className="flex gap-4">
                {studentReviews.map((review) => (
                  <CarouselItem
                    key={`${review.name}-${review.footer}`}
                    className="min-w-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)]"
                  >
                    <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-soft min-h-full">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-lg font-semibold text-slate-950">{review.name}</p>
                          <p className="text-sm text-slate-600">{review.title}</p>
                          <div className="mt-2 flex items-center gap-1 text-amber-400">
                            {Array.from({ length: review.rating }).map((_, index) => (
                              <span key={index}>★</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-7 text-slate-700">{review.text}</p>
                      <p className="mt-6 text-sm font-semibold text-slate-900">{review.footer}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>

          <section className="mt-6 px-6">
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
          </section>

          
        </div>
      </section>

      
      
    </div>
  );
};

export default AboutGmat;