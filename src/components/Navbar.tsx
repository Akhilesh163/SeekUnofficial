import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BookSessionDialog } from "@/components/BookSessionDialog";
import { BrandLogo } from "@/components/BrandLogo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookSessionOpen, setIsBookSessionOpen] = useState(false);

  // Dropdown states for Desktop
  const [isGreDropdownOpen, setIsGreDropdownOpen] = useState(false);
  const [isGmatDropdownOpen, setIsGmatDropdownOpen] = useState(false);

  // Accordion states for Mobile
  const [isMobileGreOpen, setIsMobileGreOpen] = useState(false);
  const [isMobileGmatOpen, setIsMobileGmatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (hashId?: string) => {
    setIsMobileMenuOpen(false);
    if (hashId) {
      setTimeout(() => {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        isScrolled
          ? "h-[72px] bg-white/95 backdrop-blur-xl border-b border-border/50 shadow-soft"
          : "h-[72px] bg-white/90 backdrop-blur-xl border-b border-border/20 shadow-soft"
      }`} 
    >
      <div className="max-w-[1440px] mx-auto h-full px-4 md:px-8 xl:px-12 flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none cursor-pointer">
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* GRE Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsGreDropdownOpen(true)}
            onMouseLeave={() => setIsGreDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 outline-none">
              GRE
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isGreDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isGreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card border border-border/80 rounded-xl shadow-elevated p-1.5 z-50"
                >
                  <Link
                    to="/programs"
                    onClick={() => {
                      setIsGreDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    About GRE
                  </Link>
                  <Link
                    to="/self-paced"
                    onClick={() => {
                      setIsGreDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GRE Self Paced Course
                  </Link>
                  <Link
                    to="/gre-live"
                    onClick={() => {
                      setIsGreDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GRE Live Classes
                  </Link>
                  <Link
                    to="/gmat-private-tutoring"
                    onClick={() => {
                      setIsGreDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GRE Private Tutoring
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* GMAT Dropdown */}
          <div
            className="relative py-2"
            onMouseEnter={() => setIsGmatDropdownOpen(true)}
            onMouseLeave={() => setIsGmatDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 outline-none">
              GMAT
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isGmatDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isGmatDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-56 bg-card border border-border/80 rounded-xl shadow-elevated p-1.5 z-50"
                >
                          <Link
                            to="/about-gmat"
                            onClick={() => {
                              setIsGmatDropdownOpen(false);
                            }}
                            className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                          >
                            About GMAT
                          </Link>
                  <Link
                    to="/gmat-self-paced"
                    onClick={() => {
                      setIsGmatDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GMAT Self Paced Course
                  </Link>
                  <Link
                    to="/gmat-live"
                    onClick={() => {
                      setIsGmatDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GMAT Live Class
                  </Link>
                  <Link
                    to="/gmat-private-tutoring"
                    onClick={() => {
                      setIsGmatDropdownOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                  >
                    GMAT Private Tutoring
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/tutoring"
            className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => handleLinkClick("book-demo")}
          >
            Private Tutoring
          </Link>

          <Link
            to="/admissions"
            className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Admissions
          </Link>

          <Link
            to="/success-stories"
            className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
            onClick={() => handleLinkClick("success-stories")}
          >
            Success Stories
          </Link>

          <Link
            to="/contact"
            className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{
              y: -2,
              boxShadow: "0 8px 24px rgba(0, 74, 198, 0.25)",
            }}
            onClick={() => setIsBookSessionOpen(true)}
            className="h-10 px-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-xl transition-all duration-200"
          >
            Book a Session
          </motion.button>
        </div>

        {/* Mobile Actions (CTA + Menu) */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsBookSessionOpen(true)}
            className="h-9 px-3.5 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-sm rounded-[10px] transition-all duration-200 shrink-0"
          >
            Book a Session
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="text-foreground bg-white/95 border border-border/80 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-full p-2 shadow-sm"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[90] lg:hidden"
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[90vw] sm:max-w-[340px] bg-white/98 backdrop-blur-xl z-[95] shadow-elevated p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 select-none cursor-pointer">
                    <BrandLogo />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground focus:outline-none"
                    aria-label="Close Menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {/* Mobile GRE Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileGreOpen(!isMobileGreOpen)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-foreground py-1 text-left"
                    >
                      <span>GRE</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileGreOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileGreOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-2 mt-2 border-l border-border"
                        >
                          <Link
                            to="/programs"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGreOpen(false);
                            }}
                          >
                            About GRE
                          </Link>
                          <Link
                            to="/self-paced"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGreOpen(false);
                            }}
                          >
                            GRE Self Paced Course
                          </Link>
                          <Link
                            to="/gre-live"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGreOpen(false);
                            }}
                          >
                            GRE Live Classes
                          </Link>
                          <Link
                            to="/gmat-private-tutoring"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGreOpen(false);
                            }}
                          >
                            GRE Private Tutoring
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile GMAT Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileGmatOpen(!isMobileGmatOpen)}
                      className="flex items-center justify-between w-full text-sm font-semibold text-foreground py-1 text-left"
                    >
                      <span>GMAT</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isMobileGmatOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileGmatOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-2 mt-2 border-l border-border"
                        >
                          <Link
                            to="/about-gmat"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGmatOpen(false);
                            }}
                          >
                            About GMAT
                          </Link>
                          <Link
                            to="/gmat-self-paced"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGmatOpen(false);
                            }}
                          >
                            GMAT Self Paced Course
                          </Link>
                          <Link
                            to="/gmat-live"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGmatOpen(false);
                            }}
                          >
                            GMAT Live Class
                          </Link>
                          <Link
                            to="/gmat-private-tutoring"
                            className="text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileGmatOpen(false);
                            }}
                          >
                            GMAT Private Tutoring
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/tutoring"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-foreground hover:text-primary py-1"
                  >
                    Private Tutoring
                  </Link>

                  <Link
                    to="/admissions"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-foreground hover:text-primary py-1"
                  >
                    Admissions
                  </Link>

                  <Link
                    to="/success-stories"
                    onClick={() => handleLinkClick("success-stories")}
                    className="text-sm font-semibold text-foreground hover:text-primary py-1"
                  >
                    Success Stories
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-foreground hover:text-primary py-1"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="w-full pt-6">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsBookSessionOpen(true);
                  }}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-primary/20"
                >
                  Book a Session
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <BookSessionDialog open={isBookSessionOpen} onOpenChange={setIsBookSessionOpen} />
    </motion.nav>
  );
};
