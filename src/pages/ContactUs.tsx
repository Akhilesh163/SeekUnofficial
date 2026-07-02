import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useContactFormSubmit } from "@/hooks/useContactFormSubmit";

const emptyForm = { name: "", email: "", message: "" };

const ContactUs = () => {
  const [formData, setFormData] = useState(emptyForm);

  const { isSubmitting, submit } = useContactFormSubmit({
    formSource: "Contact Us",
    successMessage: "Message sent! We'll get back to you within 24–48 hours.",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit(
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      () => setFormData(emptyForm),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-padding pt-32">
        <div className="container-narrow max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground">Seek Your Y</p>
          </div>

          <div className="glass-card p-8 md:p-10 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Thank you for your interest in Seek Your Y. We are here to assist you with any questions,
                support needs, or inquiries related to our courses, services, or technical assistance.
              </p>
            </section>

            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
                <div>
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    required
                    className="mt-1.5 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="rounded-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4" />
                      Send
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="border-t border-border pt-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  You can also reach us directly:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:seekyoury@gmail.com" className="text-primary hover:underline">
                        seekyoury@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-pastel-green flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/917020183495"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        +91 70201 83495
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground leading-relaxed">
                For collaboration or business partnerships, email{" "}
                <a href="mailto:seekyoury@gmail.com" className="text-primary hover:underline">
                  seekyoury@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
