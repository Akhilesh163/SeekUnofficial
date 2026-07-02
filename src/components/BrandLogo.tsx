import { cn } from "@/lib/utils";
import seekYourYLogo from "@/assets/seekyoury_logo_favicon.png";

type BrandLogoProps = {
  className?: string;
  /** Slightly larger mark for hero-style placements */
  size?: "nav" | "lg";
  /** onLight: white header (blend removes black PNG bg). onDark: navy footer. */
  variant?: "onLight" | "onDark";
};

export function BrandLogo({ className, size = "nav", variant = "onLight" }: BrandLogoProps) {
  return (
    <img
      src={seekYourYLogo}
      alt="Seek Your Y"
      className={cn(
        "w-auto object-contain",
        variant === "onLight" && "mix-blend-screen",
        size === "nav" && "h-14 md:h-16",
        size === "lg" && "h-16 md:h-20",
        className,
      )}
    />
  );
}
