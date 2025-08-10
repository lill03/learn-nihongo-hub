import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Globe, Heart, Users, Trophy } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About Linguistics Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a passion for bridging cultures through language, we've been India's premier Japanese language institute for over 15 years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Linguistics Learning was born from a simple belief: language is the key to understanding culture, building relationships, and opening opportunities. What started as a small classroom with just 10 students has grown into India's most trusted Japanese language institute.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our founder, having lived and studied in Japan for over a decade, brought authentic teaching methods and cultural insights that traditional language schools often miss. We don't just teach grammar and vocabulary – we immerse you in the Japanese way of thinking.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Est. 2009</Badge>
              <Badge variant="outline">500+ Graduates</Badge>
              <Badge variant="outline">Cultural Immersion</Badge>
              <Badge variant="outline">Certified Teachers</Badge>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To make Japanese language learning accessible, enjoyable, and culturally enriching for every Indian student. We believe that understanding Japan goes beyond words – it's about embracing a mindset of continuous improvement, respect, and precision.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-border shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm">Cultural Respect</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-border shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm">Excellence</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-border shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm">Community</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-card border-border shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold text-sm">Global Perspective</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Teaching Methodology */}
        <div className="bg-gradient-card rounded-xl p-8 shadow-card-custom border border-border mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Teaching Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Immersive Learning</h4>
              <p className="text-sm text-muted-foreground">
                Experience Japanese culture through language with authentic materials, cultural activities, and real-world applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Personalized Approach</h4>
              <p className="text-sm text-muted-foreground">
                Small class sizes and individualized attention ensure every student progresses at their optimal pace.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Proven Results</h4>
              <p className="text-sm text-muted-foreground">
                Our structured curriculum and experienced teachers deliver consistent, measurable progress for all students.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Successful Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">87%</div>
              <div className="text-sm text-muted-foreground">JLPT Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};