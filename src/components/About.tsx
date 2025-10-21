import { Card, CardContent } from "@/components/ui/card";
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
      {/* Softer background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left */}
          <AnimatedSection animation="fade-in-left">
            <div>
              <a href="/about" className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/15 transition-colors">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">About DVV Innovations</span>
              </a>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Digital Visionary Ventures
                <span className="text-transparent bg-gradient-primary bg-clip-text"> Leading Innovation</span>
              </h2>
              {/* slim accent underline */}
              <div className="h-1 w-24 bg-primary/70 rounded-full mb-6" />

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                DVV Innovations is a forward-thinking technology company specializing in 
                comprehensive digital solutions. We combine cutting-edge technology with strategic 
                vision to deliver transformative results for businesses worldwide.
              </p>

              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => (
                  <AnimatedSection key={index} animation="fade-in-left" delay={index * 160}>
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                      <span className="text-foreground transition-colors group-hover:text-primary">{highlight}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Link-style CTA (replaces Button) */}
              <AnimatedSection animation="slide-up" delay={640}>
                {/* <Link to="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/90 underline underline-offset-4"> */}
                <a href="/about" className="inline-flex items-center gap-2 text-primary hover:text-primary/90 underline underline-offset-4">
                  Learn more about us
                  <ArrowRight className="w-4 h-4" />
                </a>
                {/* </Link> */}
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Right */}
          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <Card className="border-border/50 overflow-hidden group bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <img 
                    src={teamWorkspace} 
                    alt="DVV Innovations Team Workspace"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center shadow">
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
                    <AnimatedSection key={index} animation="scale-in" delay={420 + index * 120}>
                      <Card className="text-center border-border/50 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-3xl font-bold text-transparent bg-gradient-primary bg-clip-text mb-1">
                            {stat.number}
                          </div>
                          <div className="text-xs text-muted-foreground tracking-wide uppercase">
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
  <div className="text-center mb-16">
    <h3 className="text-4xl font-bold text-foreground mb-3 relative inline-block">
      Our Core Values
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></span>
    </h3>
    <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
      The principles that drive our innovation, shape our decisions, and define how we
      collaborate with clients worldwide.
    </p>
  </div>
</AnimatedSection>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {values.map((value, index) => {
    const Icon = value.icon;
    return (
      <AnimatedSection key={index} animation="slide-up" delay={index * 200}>
        <Card className="text-center border border-border/40 bg-gradient-to-b from-card/70 to-background/50 backdrop-blur-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 group">
          <CardContent className="p-10">
            <div className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-primary blur-lg opacity-30 group-hover:opacity-60 transition-opacity rounded-full"></div>
              <div className="relative w-16 h-16 bg-gradient-to-tr from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-3 transition-transform duration-500">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {value.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
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