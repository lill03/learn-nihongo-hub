import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X, Phone, Mail } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Linguistics Learning" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="font-bold text-lg md:text-xl text-foreground">
              Linguistics Learning
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91-XXX-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@linguisticslearning.in</span>
              </div>
            </div>
            <Button variant="default" size="sm">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-soft">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-smooth py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="default" className="w-full mb-2">
                  Book Consultation
                </Button>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>📞 +91-XXX-XXX-XXXX</div>
                  <div>✉️ info@linguisticslearning.in</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};