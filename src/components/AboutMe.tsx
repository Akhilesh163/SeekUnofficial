import { GraduationCap, Users, Award, Target } from "lucide-react";
import amanImage from "@/assets/aman.png";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Mentored" },
  { icon: GraduationCap, value: "8+", label: "Years Experience" },
  { icon: Award, value: "96th", label: "Percentile Achievers" },
  { icon: Target, value: "325+", label: "Avg. Score Improvement" },
];

export const AboutMe = () => {
  return (
    <section className="section-padding bg-background" id="about">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={amanImage}
                alt="Aman - Founder of SeekYourY"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-3xl shadow-elevated object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10 scale-105" />
          </div>

          {/* Content Column */}
          <div>
            <span className="pill pill-blue mb-4">MEET YOUR MENTOR</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Hi, I'm <span className="headline-primary">Aman</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                For the past 8 years, I've dedicated my life to one mission: 
                <span className="text-foreground font-medium"> making Quant accessible and conquerable for everyone.</span>
              </p>
              
              <p>
                I've mentored over 10,000 students from all backgrounds—engineers, 
                artists, working professionals, and fresh graduates. Many came to me 
                believing they were "just not math people." Today, they're in top 
                business schools and thriving careers.
              </p>

              <p>
                My approach is simple: <span className="text-foreground font-medium">understand the "why" behind every concept.</span> When 
                you stop memorizing formulas and start seeing patterns, Quant 
                transforms from a nightmare to an empowering skill.
              </p>

              <p>
                I don't just teach test strategies—I rebuild confidence. I help 
                students bridge the gap between understanding concepts and 
                executing under pressure on test day.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
