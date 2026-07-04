import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Play } from "lucide-react";
import { buildMessageWithPhone, useContactFormSubmit } from "@/hooks/useContactFormSubmit";

const emptyForm = { name: "", email: "", phone: "", message: "" };

export const BookDemoForm = () => {
  const [formData, setFormData] = useState(emptyForm);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Book a free demo",
    successMessage: "Demo request submitted! We'll contact you within 24 hours.",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submit(
      {
        name: formData.name,
        email: formData.email,
        message: buildMessageWithPhone(formData.message, formData.phone) || "Book a free demo request",
      },
      () => setFormData(emptyForm),
    );
  };

  return (
    <section className="section-padding bg-background-alt" id="book-demo">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="pill pill-blue mb-4">BOOK A DEMO</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Start Your <span className="headline-primary">Quant Journey</span> Today
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Book a free 30-minute consultation with Aman to discuss your goals,
              understand your current level, and create a personalized study plan.
            </p>

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

          <div className="glass-card p-8 md:p-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Fill this form to book a free Demo</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="demo-name">Name</Label>
                <Input
                  id="demo-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="demo-email">Email</Label>
                <Input
                  id="demo-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="demo-phone">Phone</Label>
                <Input
                  id="demo-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="demo-message">Anything you like to share (optional)</Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  placeholder="Tell us about your goals, current score, target score..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 min-h-[100px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Free Demo
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
