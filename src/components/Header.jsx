import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-600/30 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-primary hover:text-white transition-colors duration-300">
          Kishan Gautam
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 gap-2 text-sm font-medium">
          {sections.map((item, i) => (
            <a
              key={i}
              href={`#${item}`}
              className={`transition-all duration-500 transform capitalize px-3 py-2 rounded-lg hover:bg-white/10 ${
                scrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${activeSection === item ? "text-white font-semibold bg-white/20" : "text-muted-foreground hover:text-white"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item}
            </a>
          ))}

          <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
            <a href="/resume.pdf">Download Resume</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-gray-600/30">
          <nav className="flex flex-col space-y-2 p-4">
            {sections.map((item, i) => (
              <a
                key={i}
                href={`#${item}`}
                className={`px-4 py-3 rounded-lg transition-all duration-300 capitalize ${
                  activeSection === item 
                    ? "text-white font-semibold bg-white/20" 
                    : "text-muted-foreground hover:text-white hover:bg-white/10"
                }`}
                onClick={handleLinkClick}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300">
                <a href="/resume.pdf">Download Resume</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
