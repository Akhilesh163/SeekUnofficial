import { Calculator, BookOpen, Target, ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "GMAT Quant",
    desc: "Master GMAT Quant with concept videos, step-by-step explanations, and targeted practice quizzes.",
    icon: Calculator,
    iconBg: "bg-pastel-green",
    iconColor: "text-emerald-600",
    features: ["Concept Videos", "Practice Quizzes", "Up-to-date Resources"],
  },
  {
    id: 2,
    title: "GRE Quant",
    desc: "Comprehensive GRE Quant prep with logic-based approach and test-day execution strategies.",
    icon: Target,
    iconBg: "bg-pastel-purple",
    iconColor: "text-purple-600",
    features: ["Logic-based Learning", "Test Strategies", "Score Improvement"],
  },
  {
    id: 3,
    title: "Quant Foundations",
    desc: "Build rock-solid fundamentals before diving into GMAT or GRE specific preparation.",
    icon: BookOpen,
    iconBg: "bg-pastel-blue",
    iconColor: "text-blue-600",
    features: ["Core Concepts", "Foundation Building", "Confidence Boosting"],
  },
];

export const ProductJourney = () => {
  return (
    <section className="section-padding bg-background-alt" id="programs">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-blue mb-4">COURSES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Choose Your <span className="headline-primary">Quant Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you're starting from scratch or fine-tuning for test day, we have the right course for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="glass-card p-8 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${course.iconBg} flex items-center justify-center mb-6`}>
                <course.icon className={`w-8 h-8 ${course.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{course.desc}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                Explore Course
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
