import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Linguistics Learning" className="h-10 w-10" />
              <div className="font-bold text-lg">Linguistics Learning</div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              India's premier Japanese language institute, bridging cultures through authentic language education and cultural immersion.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Courses
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Beginner Japanese
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Intermediate Japanese
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Advanced Japanese
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Business Japanese
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  JLPT Preparation
                </a>
              </li>
              <li>
                <a href="#courses" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-smooth">
                  Cultural Immersion
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-glow" />
                <div className="text-secondary-foreground/80">
                  123 Language Learning Complex<br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-glow" />
                <div className="text-secondary-foreground/80">
                  +91-XXX-XXX-XXXX
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-glow" />
                <div className="text-secondary-foreground/80">
                  info@linguisticslearning.in
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
            <div>
              © 2024 Linguistics Learning. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-secondary-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-secondary-foreground transition-smooth">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};