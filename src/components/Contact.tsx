import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    level: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      level: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Start Your Japanese Journey Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to begin? Get in touch with us for a free consultation and personalized learning plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Interested Course</Label>
                      <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner Japanese (N5-N4)</SelectItem>
                          <SelectItem value="intermediate">Intermediate Japanese (N3-N2)</SelectItem>
                          <SelectItem value="advanced">Advanced Japanese (N1)</SelectItem>
                          <SelectItem value="business">Business Japanese</SelectItem>
                          <SelectItem value="jlpt">JLPT Preparation</SelectItem>
                          <SelectItem value="cultural">Cultural Immersion</SelectItem>
                          <SelectItem value="custom">Custom Learning Path</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Current Japanese Level</Label>
                    <Select value={formData.level} onValueChange={(value) => handleChange("level", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="absolute-beginner">Absolute Beginner</SelectItem>
                        <SelectItem value="some-knowledge">Some Basic Knowledge</SelectItem>
                        <SelectItem value="n5">JLPT N5 Level</SelectItem>
                        <SelectItem value="n4">JLPT N4 Level</SelectItem>
                        <SelectItem value="n3">JLPT N3 Level</SelectItem>
                        <SelectItem value="n2">JLPT N2 Level</SelectItem>
                        <SelectItem value="n1">JLPT N1 Level</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us about your learning goals, preferred schedule, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Contact us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Visit Our Institute</div>
                    <div className="text-sm text-muted-foreground">
                      Chinamy Apartment, Flat No-5<br />
                      Shinde Nagar, Bavdhan<br />
                      Pune - 411021, India
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-muted-foreground">
                      +91-XXX-XXX-XXXX<br />
                      +91-XXX-XXX-XXXX (WhatsApp)
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-muted-foreground">
                      info@linguisticslearning.in<br />
                      admissions@linguisticslearning.in
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Mon - Fri: 9:00 AM - 7:00 PM<br />
                      Sat: 9:00 AM - 5:00 PM<br />
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card-custom">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};