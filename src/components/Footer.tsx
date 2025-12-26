import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const footerLinks = {
  Courses: ["GMAT Quant", "GRE Quant", "Quant Foundations", "Private Tutoring"],
  Company: ["About Aman", "Success Stories", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Refund Policy"],
};

export const Footer = () => {
  return (
    <footer className="bg-dark-footer text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-primary-foreground">
                SeekYourY
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-4 max-w-sm">
              Led by Aman with 8+ years of experience mentoring 10,000+ students to conquer GMAT & GRE Quant.
            </p>
            <p className="text-primary-foreground/70 mb-6 max-w-sm italic">
              "Quant doesn't have to be scary."
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Book Free Demo
            </Button>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 SeekYourY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-elevated transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
};
