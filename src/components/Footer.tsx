import { Separator } from "@/components/ui/separator";
import AnimatedSection from "@/components/AnimatedSection";
import { Globe, Mail, Phone, Linkedin, Twitter, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedSection animation="fade-in-left" className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <span className="text-primary-foreground font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">DVV Innovations LLP</h3>
                <p className="text-sm text-muted-foreground">Digital Visionary Ventures</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming ideas into digital excellence through comprehensive technology solutions. 
              From AI-driven platforms to cloud solutions, we architect the future of technology.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-glow transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "Software Development",
                  "Mobile Applications", 
                  "Web Development",
                  "AI Platforms",
                  "Cloud Solutions",
                  "IT Consulting"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right" delay={400}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">info@dvvinnovations.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Global Services Available</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in" delay={600}>
          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0 flex items-center gap-2">
              © 2024 DVV Innovations LLP. Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> for digital excellence.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Cookie Policy"
              ].map((link, index) => (
                <a key={index} href="#" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;