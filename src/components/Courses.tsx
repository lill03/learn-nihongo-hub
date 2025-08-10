import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Star, Award } from "lucide-react";

const courses = [
  {
    title: "Beginner Japanese (N5-N4)",
    description: "Perfect for absolute beginners. Learn Hiragana, Katakana, basic grammar, and essential vocabulary.",
    duration: "3 months",
    students: "120+",
    level: "Beginner",
    features: ["Hiragana & Katakana", "Basic Grammar", "Essential Vocabulary", "Cultural Context"],
    price: "₹8,000",
    popular: false,
  },
  {
    title: "Intermediate Japanese (N3-N2)",
    description: "Build on your foundation with complex grammar, Kanji mastery, and conversational skills.",
    duration: "6 months",
    students: "85+",
    level: "Intermediate",
    features: ["Advanced Grammar", "Kanji Mastery", "Conversation Practice", "Business Japanese Basics"],
    price: "₹15,000",
    popular: true,
  },
  {
    title: "Advanced Japanese (N1)",
    description: "Master advanced grammar, formal writing, and achieve near-native proficiency.",
    duration: "4 months",
    students: "45+",
    level: "Advanced",
    features: ["Advanced Grammar", "Formal Writing", "Literature Reading", "Professional Japanese"],
    price: "₹12,000",
    popular: false,
  },
  {
    title: "Business Japanese",
    description: "Specialized course for professionals working with Japanese companies.",
    duration: "3 months",
    students: "60+",
    level: "Intermediate+",
    features: ["Business Etiquette", "Formal Communication", "Presentation Skills", "Cultural Training"],
    price: "₹18,000",
    popular: false,
  },
  {
    title: "JLPT Preparation",
    description: "Intensive preparation for Japanese Language Proficiency Test (N5 to N1).",
    duration: "2 months",
    students: "200+",
    level: "All Levels",
    features: ["Mock Tests", "Exam Strategies", "Time Management", "Focused Practice"],
    price: "₹10,000",
    popular: false,
  },
  {
    title: "Cultural Immersion",
    description: "Learn Japanese through cultural activities, tea ceremony, calligraphy, and more.",
    duration: "4 months",
    students: "75+",
    level: "All Levels",
    features: ["Tea Ceremony", "Calligraphy", "Traditional Arts", "Cultural Workshops"],
    price: "₹14,000",
    popular: false,
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Our Japanese Language Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to take you from complete beginner to fluent speaker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="relative bg-gradient-card border-border shadow-card-custom hover:shadow-elegant transition-spring group">
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="text-2xl font-bold text-primary">{course.price}</div>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full" variant={course.popular ? "hero" : "default"}>
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-xl p-8 shadow-card-custom border border-border">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Learning Paths</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Not sure which course is right for you? We offer personalized learning assessments and custom course combinations to match your specific goals and schedule.
            </p>
            <Button variant="hero" size="lg">
              Get Personalized Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};