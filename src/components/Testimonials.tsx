import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Toyota",
    content: "The business Japanese course was exactly what I needed for my role. I can now confidently communicate with our Japanese clients and understand the cultural nuances that make all the difference.",
    rating: 5,
    achievement: "Landed promotion after course completion",
  },
  {
    name: "Arjun Patel",
    role: "Travel Blogger",
    content: "Learning Japanese transformed my travel experience in Japan. I could have authentic conversations with locals and discovered hidden gems that most tourists never see. The cultural immersion class was incredible!",
    rating: 5,
    achievement: "Published 'Japan Through Local Eyes' blog series",
  },
  {
    name: "Meera Krishnan",
    role: "Anime Enthusiast & Student",
    content: "I've been watching anime for years, but actually understanding the original dialogue without subtitles is magical. The teachers understand otaku culture and make learning fun with references I love.",
    rating: 5,
    achievement: "Passed JLPT N3 in first attempt",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Research Scholar",
    content: "The advanced course prepared me perfectly for my research fellowship at Tokyo University. The academic writing component was particularly valuable for publishing papers in Japanese journals.",
    rating: 5,
    achievement: "Accepted to Tokyo University PhD program",
  },
  {
    name: "Kavya Reddy",
    role: "UX Designer",
    content: "The Japanese aesthetic has always inspired my work. Learning the language gave me deeper insights into Japanese design philosophy. Now I collaborate with design studios in Tokyo regularly.",
    rating: 5,
    achievement: "Launched design studio partnership in Tokyo",
  },
  {
    name: "Vikram Singh",
    role: "Business Consultant",
    content: "JLPT preparation course was intensive but incredibly effective. The mock tests and personalized feedback helped me identify weak areas. Passed N2 with flying colors and it opened new career opportunities.",
    rating: 5,
    achievement: "Secured consulting contract with Japanese MNC",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our graduates who have achieved their Japanese language goals and transformed their careers, travels, and passions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card-custom hover:shadow-elegant transition-spring group">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground italic pl-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                
                <div className="bg-accent/50 rounded-lg p-3 border-l-4 border-primary">
                  <div className="text-sm font-medium text-foreground">Achievement:</div>
                  <div className="text-sm text-muted-foreground">{testimonial.achievement}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-xl p-8 shadow-card-custom border border-border max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-2xl font-bold text-foreground">4.9/5</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Join Our Success Community</h3>
            <p className="text-muted-foreground mb-6">
              Based on 500+ verified reviews from our students across all course levels. 
              Experience the transformation that Japanese language mastery can bring to your life.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Career Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};