import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const struggleOptions = [
  { value: "concept", label: "Concept Problem - I struggle to understand the basics" },
  { value: "applying", label: "Problem in Applying - I know concepts but can't apply them" },
  { value: "score", label: "Score Improvement - I need to push my score higher" },
  { value: "guidance", label: "Overall Guidance - I need a complete study plan" },
];

export const BookDemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    struggle: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Demo request submitted! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", struggle: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-background-alt" id="book-demo">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="pill pill-blue mb-4">BOOK A DEMO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Start Your <span className="headline-primary">Quant Journey</span> Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Book a free 30-minute consultation with Aman to discuss your goals, 
              understand your current level, and create a personalized study plan.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Free personalized assessment",
                "Custom study plan recommendation",
                "No obligation - just guidance",
                "Direct access to Aman",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-pastel-blue flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Book Free Demo</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="struggle">What's Your Primary Struggle?</Label>
                <Select
                  value={formData.struggle}
                  onValueChange={(value) => setFormData({ ...formData, struggle: value })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select your struggle" />
                  </SelectTrigger>
                  <SelectContent>
                    {struggleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Anything else you'd like to share? (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your goals, current score, target score..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Book My Free Demo
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
