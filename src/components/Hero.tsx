import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Zap, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="DVV Innovations - Digital Innovation Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Zap className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm text-primary font-medium">Digital Visionary Ventures</span>
            </div>
          </AnimatedSection>
            
          <AnimatedSection animation="scale-in" delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transforming Ideas Into
              <span className="text-transparent bg-gradient-primary bg-clip-text animate-glow"> Digital Excellence</span>
            </h1>
          </AnimatedSection>
            
          <AnimatedSection animation="fade-in" delay={600}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              From AI-driven platforms to cloud solutions, we architect the future of technology. 
              Experience innovation without boundaries with DVV Innovations LLP.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="lg" className="shadow-glow hover:shadow-elegant hover:scale-110 transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-300 group">
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in-left" delay={1000}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:scale-105 transition-all duration-300 hover:shadow-card group">
                <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Software Development</p>
                  <p className="text-sm text-muted-foreground">Custom Solutions</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={1200}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:scale-105 transition-all duration-300 hover:shadow-card group">
                <Cloud className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Cloud Platforms</p>
                  <p className="text-sm text-muted-foreground">Scalable Infrastructure</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right" delay={1400}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 hover:scale-105 transition-all duration-300 hover:shadow-card group">
                <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">AI Integration</p>
                  <p className="text-sm text-muted-foreground">Smart Automation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;