import React, { useState } from "react";

const testimonials = [
  {
    name: "Annant Mehta",
    role: "GRE 320 → MS, Texas A&M University, USA",
    image: "/assets/gre-asset/girl.webp",
    quote: "The tailored approach and insightful strategies provided by the team were absolutely crucial. I achieved 170 in Quant and 150 in Verbal — and I owe a lot of that to the focused preparation structure at Seek Your Y. I highly recommend this coaching to anyone serious about graduate school.",
  },
  {
    name: "Vishnu Singh",
    role: "GMAT 730 → Paris School of Business",
    image: "/assets/gre-asset/girl.webp",
    quote: "Working closely with Amit Kumar as my Verbal Faculty was instrumental in achieving a remarkable GMAT score. His expertise and insightful strategies were invaluable throughout my preparation journey. I highly recommend his guidance.",
  },
  {
    name: "Saransh Walia",
    role: "GRE 329 → Alberta University of Arts",
    image: "/assets/gre-asset/girl.webp",
    quote: "Thanks to Amit Kumar's exceptional guidance as my GRE Verbal Faculty, I achieved 329. From day one, his approachable demeanor and genuine interest in my progress created an environment where I actually wanted to study harder.",
  },
  {
    name: "Devshri Sharma",
    role: "GMAT 720 → INSEAD",
    image: "/assets/gre-asset/girl.webp",
    quote: "Studying under the guidance of Amit Kumar was an invaluable experience. I scored 720, surpassing my own expectations, thanks to his effective teaching methods and insightful strategies.",
  },
  {
    name: "Sneha Reddy",
    role: "IELTS 8.5 Band",
    image: "/assets/gre-asset/girl.webp",
    quote: "The personalized attention I received during my IELTS preparation was unparalleled. The faculty's deep understanding of exam patterns and their ability to tailor lessons to my specific weaknesses in Writing and Speaking were the difference-maker.",
  },
  {
    name: "Arjun Mehta",
    role: "IELTS 8.0 Band",
    image: "/assets/gre-asset/girl.webp",
    quote: "Achieving an 8.0 band in IELTS felt like a distant dream until I joined Seek Your Y. The intensive training sessions and focus on nuanced vocabulary for the Writing section made all the difference.",
  },
  {
    name: "Rahul Verma",
    role: "IELTS 8.0 Band (from 6.5)",
    image: "/assets/gre-asset/girl.webp",
    quote: "The mock test series for IELTS at Seek Your Y was a game-changer. It perfectly simulated the pressure of the actual exam. The faculty's feedback on my Speaking module was specific and actionable — I jumped from 6.5 to 8.0.",
  },
  {
    name: "Keshav Goyal",
    role: "SAT → Top US Undergraduate",
    image: "/assets/gre-asset/girl.webp",
    quote: "I completed my entire SAT syllabus in just 20 days under Mr. Pradeep's guidance. The clarity and depth of instruction were exactly what I needed to excel.",
  },
  {
    name: "Mehakjot Kaur Massoun",
    role: "SAT → Top-50 US College",
    image: "/assets/gre-asset/girl.webp",
    quote: "As someone who knew nothing about the process of going abroad — and never thought it was a possibility for me — getting into a top-50 US college felt impossible. Seek Your Y changed that, step by step.",
  },
];

export default function Testimonials(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(5);

  const prev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  const next = () => setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));

  return (
    <section id="testimonials" className="relative min-h-[600px] flex items-center justify-center overflow-hidden py-14 bg-gradient-to-b from-violet-50/50 via-white to-violet-50/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-violet-400/20 blur-[100px] rounded-full top-1/2 left-1/4 transform -translate-y-1/2 animate-pulse" />
        <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-fuchsia-400/20 blur-[100px] rounded-full top-1/2 right-1/4 transform -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-violet-600 font-bold tracking-widest text-xs md:text-sm mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-4 h-4 md:w-5 md:h-5" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
            <span className="uppercase tracking-[0.2em]">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 tracking-tight leading-tight">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Success Stories</span>
          </h2>
        </div>

        <div className="w-full relative group">
          <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
            <div className="flex touch-pan-y transition-transform duration-500" style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}>
              {testimonials.map((person, index) => (
                <div key={person.name} className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-4">
                  <div className="w-full max-w-sm md:max-w-md lg:max-w-xl mx-auto backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/90 hover:scale-[1.02] hover:border-violet-200 hover:shadow-[0_15px_40px_rgb(139,92,246,0.15)] transition-all duration-500 ease-out relative group/card">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute top-8 right-8 w-12 h-12 text-violet-500/10 group-hover/card:text-violet-500/20 transition-colors duration-500" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    <div className="flex items-center gap-5 mb-8">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-violet-100 p-0.5 bg-white">
                        <img src={person.image} alt={person.name} className="w-full h-full rounded-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="font-bold text-gray-900 text-lg tracking-wide">{person.name}</h4>
                        <p className="text-violet-600 text-sm font-medium tracking-wider">{person.role}</p>
                        <div className="flex gap-1 mt-1 text-yellow-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-3.5 h-3.5 fill-current" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-base md:text-lg leading-relaxed md:leading-loose font-light relative z-10">{person.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="hidden md:flex absolute top-1/2 -left-4 xl:-left-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 border border-violet-100 text-violet-600 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-violet-600 hover:border-violet-500 hover:text-white hover:scale-110 shadow-sm transition-all duration-300 z-10"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
          </button>

          <button
            className="hidden md:flex absolute top-1/2 -right-4 xl:-right-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 border border-violet-100 text-violet-600 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-violet-600 hover:border-violet-500 hover:text-white hover:scale-110 shadow-sm transition-all duration-300 z-10"
            aria-label="Next testimonial"
            onClick={next}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
          </button>

          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  index === activeIndex ? "w-8 bg-violet-600" : "w-2 bg-violet-200 hover:bg-violet-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <a className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5 text-sm group" href="/testimonials">
          View All Testimonials
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </section>
  );
}

