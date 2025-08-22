import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@dvvinnovations.com",
      description: "Send us your project details and we'll get back to you within 24 hours.",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Speak with our experts about your technology needs.",
      action: "Call Now"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      value: "Book a consultation",
      description: "Schedule a free 30-minute consultation to discuss your project.",
      action: "Book Now"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300">
              <MessageCircle className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how DVV Innovations can transform your ideas into digital reality. 
              Contact us today for a free consultation.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-left">
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block group-focus-within:text-primary transition-colors">Name *</label>
                    <Input 
                      placeholder="Your full name" 
                      className="bg-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                    />
                  </div>
                  <div className="group">
                    <label className="text-sm font-medium text-foreground mb-2 block group-focus-within:text-primary transition-colors">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="text-sm font-medium text-foreground mb-2 block group-focus-within:text-primary transition-colors">Company</label>
                  <Input 
                    placeholder="Your company name (optional)" 
                    className="bg-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-medium text-foreground mb-2 block group-focus-within:text-primary transition-colors">Project Type</label>
                  <Input 
                    placeholder="e.g., Mobile App, Web Development, AI Platform" 
                    className="bg-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300" 
                  />
                </div>
                
                <div className="group">
                  <label className="text-sm font-medium text-foreground mb-2 block group-focus-within:text-primary transition-colors">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, timeline, and budget..." 
                    className="bg-secondary border-border hover:border-primary/50 focus:border-primary transition-all duration-300 min-h-[120px] resize-none"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedSection key={index} animation="fade-in-right" delay={index * 200}>
                  <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                            {method.title}
                          </h3>
                          <p className="text-primary font-medium mb-2">{method.value}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {method.description}
                          </p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}

            <AnimatedSection animation="scale-in" delay={800}>
              <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                    <Clock className="w-8 h-8 text-primary-foreground animate-float" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Business Hours
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p><span className="font-medium">Mon - Fri:</span> 9:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Weekend:</span> Emergency Support</p>
                    <p className="text-xs mt-2 text-primary">Response time: Within 24 hours</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection animation="fade-in" delay={1000}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-6 p-8 bg-gradient-card border border-border/50 rounded-2xl hover:shadow-card hover:scale-105 transition-all duration-300">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Join 100+ Satisfied Clients
                </h4>
                <p className="text-muted-foreground">
                  Start your digital transformation journey today
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;