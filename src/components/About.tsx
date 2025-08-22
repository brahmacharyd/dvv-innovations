import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Globe, Users, Award, ArrowRight, TrendingUp, Target, Lightbulb } from "lucide-react";
import teamWorkspace from "@/assets/team-workspace.jpg";

const About = () => {
  const highlights = [
    "Comprehensive software development expertise",
    "AI-driven platforms and cloud solutions",
    "International software licensing and distribution", 
    "End-to-end digital transformation services"
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: Target },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with localized expertise and support."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="fade-in-left">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">About DVV Innovations</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Digital Visionary Ventures
                <span className="text-transparent bg-gradient-primary bg-clip-text"> Leading Innovation</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                DVV Innovations LLP is a forward-thinking technology company specializing in 
                comprehensive digital solutions. We combine cutting-edge technology with strategic 
                vision to deliver transformative results for businesses worldwide.
              </p>

              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => (
                  <AnimatedSection key={index} animation="fade-in-left" delay={index * 200}>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">{highlight}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection animation="slide-up" delay={800}>
                <Button variant="hero" size="lg" className="hover:scale-110 transition-all duration-300 group">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="relative h-48">
                  <img 
                    src={teamWorkspace} 
                    alt="DVV Innovations Team Workspace"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">Global Reach</h3>
                        <p className="text-muted-foreground">International Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Serving clients across domestic and international markets with 
                    software licensing, distribution, and custom development services.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <AnimatedSection key={index} animation="scale-in" delay={600 + index * 100}>
                      <Card className="bg-gradient-card border-border/50 text-center hover:shadow-card hover:scale-105 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div className="text-3xl font-bold text-transparent bg-gradient-primary bg-clip-text mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Section */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to technology and client partnerships
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                <Card className="bg-gradient-card border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;