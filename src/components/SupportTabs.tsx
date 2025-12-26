import { useState } from "react";
import { Users, Brain, Clock, Zap, CheckCircle } from "lucide-react";

const supportTabs = [
  {
    id: "anxiety",
    label: "Test Anxiety Support",
    shortLabel: "Anxiety",
    icon: Brain,
    content: "Overcome test-day nerves with our proven mindset coaching and anxiety management techniques.",
    features: ["Stress management strategies", "Confidence building exercises", "Mock test simulations"],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: "pacing",
    label: "Pacing Strategies",
    shortLabel: "Pacing",
    icon: Clock,
    content: "Master time management to maximize your score. Learn when to push forward and when to move on.",
    features: ["Time allocation frameworks", "Question prioritization", "Speed vs accuracy balance"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "doubts",
    label: "Instant Doubt Solving",
    shortLabel: "Doubts",
    icon: Zap,
    content: "Get your doubts resolved quickly with direct access to Aman and our expert support team.",
    features: ["Quick response time", "Concept clarification", "Problem-solving walkthroughs"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "tutoring",
    label: "1-on-1 Tutoring",
    shortLabel: "1:1",
    icon: Users,
    content: "Personalized attention tailored to your specific weaknesses and learning style.",
    features: ["Customized study plans", "Targeted practice sessions", "Progress tracking"],
    color: "from-orange-500/20 to-red-500/20",
  },
];

export const SupportTabs = () => {
  const [activeTab, setActiveTab] = useState("anxiety");

  const activeContent = supportTabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="pill pill-coral mb-4">
            PRIVATE TUTORING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Personalized 1-on-1 <span className="headline-primary">Guidance</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get dedicated support from Aman to tackle your specific challenges and maximize your score.
          </p>
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
