import { useState } from "react";
import { Users, BookOpen, Video, Rocket, CheckCircle } from "lucide-react";

const supportTabs = [
  {
    id: "coach",
    label: "Dedicated Coach Support",
    shortLabel: "Coach",
    icon: Users,
    content: "1:1 check-ins and weekly plan edits to keep you on track towards your goals.",
    features: ["Personalized feedback sessions", "Weekly accountability calls", "Real-time goal adjustments"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "expert",
    label: "Subject Matter Support",
    shortLabel: "Experts",
    icon: BookOpen,
    content: "Expert guidance on career transitions, productivity systems, and life decisions.",
    features: ["Career transition playbooks", "Productivity frameworks", "Decision-making tools"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "live",
    label: "Meet Experts 3X/week",
    shortLabel: "Live",
    icon: Video,
    content: "Live interactive sessions with founders, recruiters, coaches and psychologists.",
    features: ["Interactive Q&A sessions", "Real-world industry insights", "Networking opportunities"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "sprint",
    label: "Last Mile Push Included",
    shortLabel: "Sprint",
    icon: Rocket,
    content: "Final 25-day intensive sprint designed to complete your transformation journey.",
    features: ["Daily accountability check-ins", "Intensive focused coaching", "Final push support system"],
    color: "from-orange-500/20 to-red-500/20",
  },
];

export const SupportTabs = () => {
  const [activeTab, setActiveTab] = useState("coach");

  const activeContent = supportTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-coral mb-4">
            WORLD CLASS SUPPORT
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Support that maximizes your chances of{" "}
            <span className="headline-primary">success</span>
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {supportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-2xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-card shadow-elevated text-foreground scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">{tab.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div className="glass-card p-8 md:p-12 animate-scale-in">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Content */}
              <div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-pastel-blue flex items-center justify-center mb-6`}
                >
                  <activeContent.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {activeContent.label}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {activeContent.content}
                </p>
                <ul className="space-y-4">
                  {activeContent.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className={`aspect-[4/3] rounded-3xl bg-gradient-to-br ${activeContent.color} flex items-center justify-center p-8`}>
                  <div className="glass-card p-8 animate-float shadow-glow">
                    <activeContent.icon className="w-20 h-20 text-primary" />
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
