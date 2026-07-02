import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Maps clean URL paths to section element ids on the home page. */
const PATH_TO_SECTION: Record<string, string> = {
  "/programs": "programs",
  "/tutoring": "book-demo",
  "/book-demo": "book-demo",
  "/success-stories": "success-stories",
  "/about": "about",
};

export function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const hashId = window.location.hash.replace(/^#/, "");
    const sectionId = PATH_TO_SECTION[pathname] ?? (hashId || undefined);

    if (!sectionId) {
      if (pathname === "/" && !hashId) window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const scroll = () => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    // Wait for home sections to mount after route change.
    requestAnimationFrame(() => requestAnimationFrame(scroll));
  }, [pathname]);

  return null;
}
