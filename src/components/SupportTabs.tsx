import { useState } from "react";
import { Users, BookOpen, Video, Rocket } from "lucide-react";

const supportTabs = [
  {
    id: "coach",
    label: "Dedicated Coach Support",
    icon: Users,
    content: "1:1 check-ins and weekly plan edits to keep you on track.",
    features: ["Personalized feedback", "Weekly accountability", "Goal adjustments"],
  },
  {
    id: "expert",
    label: "Subject Matter Support",
    icon: BookOpen,
    content: "Expert guidance on career, productivity, and decision-making.",
    features: ["Career transitions", "Productivity systems", "Life decisions"],
  },
  {
    id: "live",
    label: "Meet Experts 3X/week",
    icon: Video,
    content: "Live sessions with founders, recruiters, and psychologists.",
    features: ["Interactive Q&A", "Real-world insights", "Network building"],
  },
  {
    id: "sprint",
    label: "Last Mile Push Included",
    icon: Rocket,
    content: "Final 25-day intensive sprint to complete your transformation.",
    features: ["Daily check-ins", "Intensive coaching", "Final push support"],
  },
];

export const SupportTabs = () => {
  const [activeTab, setActiveTab] = useState("coach");

  const activeContent = supportTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-coral mb-4">
            SUPPORT THAT MAXIMIZES YOUR CHANCES OF SUCCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Experience World Class Support
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {supportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-card shadow-elevated text-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className="glass-card p-8 md:p-12 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-pastel-blue flex items-center justify-center mb-6`}
                >
                  <activeContent.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {activeContent.label}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {activeContent.content}
                </p>
                <ul className="space-y-3">
                  {activeContent.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="glass-card p-6 animate-float">
                    <activeContent.icon className="w-16 h-16 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
