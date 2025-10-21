import { Code, Cloud, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-glow/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DVV Innovations - Digital Innovation Technology"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Zap className="w-4 h-4 text-primary animate-glow" />
              <span className="text-sm text-primary font-medium">Digital Visionary Ventures</span>
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection animation="scale-in" delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <HeroLetters text="Transforming Ideas Into" />
              <span className="block hero-highlight text-transparent bg-gradient-primary bg-clip-text animate-glow">
                Digital Excellence
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection animation="fade-in" delay={600}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16">
              We craft scalable web, mobile, and AI-driven systems that shape the future of digital
              transformation. Innovation, design, and engineering — elevated together.
            </p>
          </AnimatedSection>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in-left" delay={800}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/60 hover:scale-105 transition-all duration-300 hover:shadow-card group">
                <Code className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Software Development</p>
                  <p className="text-sm text-muted-foreground">Custom Solutions</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/60 hover:scale-105 transition-all duration-300 hover:shadow-card group">
                <Cloud className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-foreground">Cloud Platforms</p>
                  <p className="text-sm text-muted-foreground">Scalable Infrastructure</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={1200}>
              <div className="flex items-center justify-center gap-3 p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/60 hover:scale-105 transition-all duration-300 hover:shadow-card group">
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
function HeroLetters({ text, delay = 0, step = 40 }: { text: string; delay?: number; step?: number }) {
  return (
    <span className="hero-letters">
      {Array.from(text).map((char, i) => (
        <span key={i} style={{ animationDelay: `${delay + i * step}ms` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
export default Hero;