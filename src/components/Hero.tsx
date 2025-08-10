import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { ArrowRight, BookOpen, Users, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Japanese learning environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <BookOpen className="w-8 h-8 text-primary-glow opacity-60" />
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <Users className="w-10 h-10 text-accent opacity-70" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: "4s" }}>
        <Globe className="w-6 h-6 text-primary-glow opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Linguistics Learning Logo" 
            className="w-20 h-20 md:w-24 md:h-24 animate-shimmer"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground">
          Master 
          <span className="text-primary-glow japanese-text"> 日本語 </span>
          with Confidence
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Embark on your Japanese language journey with expert guidance, immersive cultural experiences, and proven teaching methods.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-6">
            Explore Courses
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">500+</div>
            <div className="text-sm md:text-base">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">15+</div>
            <div className="text-sm md:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-glow mb-2">95%</div>
            <div className="text-sm md:text-base">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};