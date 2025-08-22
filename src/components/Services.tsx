import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Brain, 
  Cloud, 
  Users, 
  Palette, 
  BarChart3, 
  Cog,
  Import,
  Zap,
  Shield
} from "lucide-react";
import digitalTransformation from "@/assets/digital-transformation.jpg";
import aiVisualization from "@/assets/ai-visualization.jpg";
import cloudInfrastructure from "@/assets/cloud-infrastructure.jpg";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom software applications designed to meet your unique business requirements with cutting-edge technology.",
      featured: true,
      image: digitalTransformation
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest frameworks and best practices."
    },
    {
      icon: Brain,
      title: "AI-Driven Platforms",
      description: "Intelligent systems and machine learning solutions that automate processes and provide valuable insights.",
      featured: true,
      image: aiVisualization
    },
    {
      icon: Cloud,
      title: "Cloud Solutions", 
      description: "Scalable cloud infrastructure, migration services, and cloud-native application development.",
      featured: true,
      image: cloudInfrastructure
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with business objectives."
    },
    {
      icon: Cog,
      title: "System Architecture",
      description: "Robust, scalable system design and architecture planning for enterprise-level applications."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging experiences across digital platforms."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes and technology."
    },
    {
      icon: Import,
      title: "Software Licensing & Distribution",
      description: "Import, export, licensing, and distribution of software products for global market reach."
    },
    {
      icon: Shield,
      title: "Testing & Deployment",
      description: "Comprehensive testing, secure deployment, and ongoing maintenance for all digital solutions."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300">
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Our Services</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services 
              that drive innovation and accelerate business growth.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 100;
            
            return (
              <AnimatedSection key={index} animation="fade-in" delay={delay}>
                <Card className={`bg-gradient-card border-border/50 hover:shadow-card transition-all duration-500 hover:scale-105 group overflow-hidden ${
                  service.featured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}>
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className={service.image ? 'pt-4' : ''}>
                    {!service.image && (
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    )}
                    <CardTitle className="text-foreground group-hover:text-primary transition-all duration-300">
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

        <AnimatedSection animation="fade-in" delay={1600}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 p-6 bg-gradient-card border border-border/50 rounded-xl hover:shadow-card transition-all duration-300">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-primary-glow rounded-full border-2 border-background"></div>
              </div>
              <div>
                <p className="text-foreground font-semibold">Ready to get started?</p>
                <p className="text-sm text-muted-foreground">Contact us for a free consultation</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;