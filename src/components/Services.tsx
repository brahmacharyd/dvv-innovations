import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Code2, Smartphone, Globe, Brain, Cloud, Users, Palette,
  BarChart3, Cog, Import, Zap, Shield
} from "lucide-react";
import digitalTransformation from "@/assets/digital-transformation-service.jpg";
import aiVisualization from "@/assets/ai-visualization.jpg";
import cloudInfrastructure from "@/assets/cloud-infrastructure-service.jpg";
import teamCollaboration from "@/assets/team-workspace-service.jpg";
import mobileApp from "@/assets/mobile-app.jpg";
import webTech from "@/assets/hero-tech.jpg";
import analytics from "@/assets/data-analytics.jpg";
import uxDesign from "@/assets/design-creative.jpg";
import consulting from "@/assets/consulting.jpg";
import systemArch from "@/assets/system-architecture.jpg";
import security from "@/assets/security.jpg";
import softwareImport from "@/assets/software-licensing.jpg";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Custom applications built on modern frameworks to meet complex business needs with scalability and reliability.",
      image: digitalTransformation
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and hybrid mobile solutions for seamless cross-device experiences on iOS and Android.",
      image: mobileApp
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Fast, accessible, SEO-optimized websites and web applications using cutting-edge frontend technologies.",
      image: webTech
    },
    {
      icon: Brain,
      title: "AI-Driven Platforms",
      description:
        "From chatbots to intelligent data systems — integrating AI models that enhance business decision-making.",
      image: aiVisualization
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Cloud-native architecture, migrations, and DevOps pipelines for reliable and cost-efficient infrastructure.",
      image: cloudInfrastructure
    },
    {
      icon: Users,
      title: "IT Consulting",
      description:
        "Strategic IT advisory to align technology, architecture, and operations with your long-term business goals.",
      image: consulting
    },
    {
      icon: Cog,
      title: "System Architecture",
      description:
        "Blueprints for scalable, secure systems — ensuring performance, modularity, and long-term sustainability.",
      image: systemArch
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Human-centered design with cohesive systems, intuitive interfaces, and delightful experiences.",
      image: uxDesign
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "ETL pipelines and visual dashboards that turn raw data into actionable business insights.",
      image: analytics
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Reimagining legacy processes and systems to create connected, intelligent, and agile organizations.",
      image: teamCollaboration
    },
    {
      icon: Import,
      title: "Software Licensing & Distribution",
      description:
        "End-to-end software distribution, licensing, and compliance management for global markets.",
      image: softwareImport
    },
    {
      icon: Shield,
      title: "Testing & Deployment",
      description:
        "Comprehensive QA automation, deployment strategies, and CI/CD implementation for zero-downtime releases.",
      image: security
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-background">
      {/* background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-6 relative">
        {/* header */}
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6">
              <Cog className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Complete Digital Engineering Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine innovation, technology, and design to help businesses build intelligent,
              scalable, and visually exceptional digital solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 80;

            return (
              <AnimatedSection key={index} animation="fade-in" delay={delay}>
                <Card className="group overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 rounded-2xl hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/90 text-primary-foreground shadow-lg group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* bottom note */}
        <AnimatedSection animation="fade-in" delay={1600}>
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 bg-muted/40 border border-border/40 px-6 py-4 rounded-2xl backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Every service is customizable — built around your product vision.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;