import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Plane, Heart, Building, GraduationCap, Camera } from "lucide-react";

const studentProfiles = [
  {
    icon: Briefcase,
    title: "Business Professionals",
    description: "Executives and managers working with Japanese companies or planning to expand their career in Japan.",
    benefits: ["Career advancement", "Business networking", "Cultural understanding", "Professional communication"],
    percentage: "35%",
  },
  {
    icon: Plane,
    title: "Travel Enthusiasts",
    description: "Adventure seekers planning to explore Japan's rich culture, cuisine, and breathtaking landscapes.",
    benefits: ["Authentic experiences", "Local interactions", "Cultural immersion", "Travel confidence"],
    percentage: "25%",
  },
  {
    icon: Heart,
    title: "Anime & Manga Fans",
    description: "Pop culture enthusiasts wanting to enjoy their favorite content in its original language.",
    benefits: ["Understand without subtitles", "Deeper cultural appreciation", "Connect with community", "Access exclusive content"],
    percentage: "20%",
  },
  {
    icon: GraduationCap,
    title: "Academic Students",
    description: "Students pursuing higher education in Japan or Japanese studies programs.",
    benefits: ["University preparation", "Research capabilities", "Academic writing", "Scholarship opportunities"],
    percentage: "15%",
  },
  {
    icon: Camera,
    title: "Creative Professionals",
    description: "Artists, designers, and creatives inspired by Japanese aesthetics and craftsmanship.",
    benefits: ["Artistic inspiration", "Traditional techniques", "Cultural authenticity", "Professional collaboration"],
    percentage: "5%",
  },
];

export const StudentProfiles = () => {
  return (
    <section id="students" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Who Learns with Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse community of learners comes from all walks of life, united by their passion for Japanese language and culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {studentProfiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card key={index} className="relative bg-gradient-card border-border shadow-card-custom hover:shadow-elegant transition-spring group overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {profile.percentage}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                    {profile.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {profile.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">Key Benefits:</h4>
                    {profile.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories Summary */}
        <div className="bg-gradient-card rounded-xl p-8 shadow-card-custom border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Course Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-muted-foreground">JLPT Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};