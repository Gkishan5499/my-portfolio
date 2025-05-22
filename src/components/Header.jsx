import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = ["about", "skills","experience", "projects" ,"contact"];

  // Scroll handler for animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-600 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight text-primary">
          Kishan Gautam
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 gap-2 text-sm font-medium">
          {sections.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className={`transition-all duration-500 transform capitalize ${
                scrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${activeSection === item ? "text-white font-semibold border-b border-white" : "text-muted-foreground"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}

          <Button variant="outline" size="sm">
            <a href="/resume.pdf">Download Resume</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
