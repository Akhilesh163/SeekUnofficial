import { Compass, Hammer, BarChart3, ArrowRight } from "lucide-react";

const journeyCards = [
  {
    id: 1,
    title: "Discover",
    desc: "Find your strengths, values, and direction.",
    icon: Compass,
    iconBg: "bg-pastel-green",
    iconColor: "text-emerald-600",
  },
  {
    id: 2,
    title: "Build",
    desc: "Learn skills, habits, and execution systems.",
    icon: Hammer,
    iconBg: "bg-pastel-purple",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    title: "Track",
    desc: "See progress weekly with measurable milestones.",
    icon: BarChart3,
    iconBg: "bg-pastel-red",
    iconColor: "text-rose-600",
  },
];

export const ProductJourney = () => {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-blue mb-4">JOURNEY</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Solutions for every aspect of your{" "}
            <span className="headline-primary">SeekYourY</span> Journey
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {journeyCards.map((card, index) => (
            <div
              key={card.id}
              className="glass-card p-8 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6`}
              >
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-6">{card.desc}</p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
