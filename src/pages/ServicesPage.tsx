import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Cloud, Palette, ShieldCheck, Gauge } from "lucide-react";

// Reuse your existing hero images to keep visuals consistent
import webMobileImg from "@/assets/hero-tech.jpg";
import aiImg from "@/assets/ai-visualization.jpg";
import cloudImg from "@/assets/cloud-infrastructure.jpg";
import designImg from "@/assets/digital-transformation.jpg";

type Service = {
  icon: any;
  title: string;
  summary: string;
  highlights: string[];
  image: string;
  tag: string;
  cta: { label: string; to: string };
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      icon: Globe,
      title: "Web & Mobile Engineering",
      summary:
        "SPA/SSR apps that load fast and feel fluid. Accessibility-first, responsive UI, and clean architecture for the long run.",
      highlights: ["Angular/React", "SSR/CSR/ISR", "Lighthouse 90+"],
      image: webMobileImg,
      tag: "Frontend",
      cta: { label: "Discuss your app", to: "/contact" },
    },
    {
      icon: Cpu,
      title: "AI Integration & Automation",
      summary:
        "LLM-powered chat, RAG pipelines, and task automation with proper guardrails, evals, and observability—value over hype.",
      highlights: ["RAG/Embeddings", "Guardrails & evals", "Analytics"],
      image: aiImg,
      tag: "AI",
      cta: { label: "Explore AI options", to: "/contact" },
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      summary:
        "Vercel/AWS, Docker, CI/CD, and infra that scales quietly. Zero-downtime deploys, metrics, alerts, and cost awareness.",
      highlights: ["Vercel/AWS", "Docker & CI/CD", "SLOs & alerts"],
      image: cloudImg,
      tag: "Platform",
      cta: { label: "Optimize infra", to: "/services" },
    },
    {
      icon: Palette,
      title: "UI/UX & Design Systems",
      summary:
        "Design tokens, motion, and components that feel cohesive. Usability research to reduce friction and increase conversion.",
      highlights: ["Design tokens", "Motion & micro-UX", "WCAG 2.1 AA"],
      image: designImg,
      tag: "Design",
      cta: { label: "Start a design sprint", to: "/contact" },
    },
  ];

  const addOns = [
    { icon: ShieldCheck, title: "Security", text: "OWASP-driven reviews, dependency checks, CSP, and auth hardening." },
    { icon: Gauge, title: "Performance", text: "Budgets, profiling, code-split, caching, and Core Web Vitals tuning." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Header */}
        <AnimatedSection>
          <Badge className="mb-3">Services</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Engineering ideas into impact
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We ship reliable, beautiful, and measurable products—fast. Here’s how we help teams build smarter.
          </p>
        </AnimatedSection>

        {/* Grid of services (image-led cards, matching Projects look) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-10">
          {services.map(({ icon: Icon, title, summary, highlights, image, tag, cta }) => (
            <AnimatedSection key={title}>
              <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                {/* Image header */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground shadow">
                      {tag}
                    </span>
                  </div>
                </div>

                <CardHeader className="flex flex-row items-start gap-3 pb-2">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <p className="text-sm text-muted-foreground">{summary}</p>

                  <ul className="mt-3 flex flex-wrap gap-2">
                    {highlights.map((h) => (
                      <li key={h} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <a href={cta.to}>
                      <Button className="group/btn">
                        {cta.label}
                        <svg
                          className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Add-ons / specializations strip */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="grid gap-6 md:grid-cols-2">
              {addOns.map(({ icon: Ico, title, text }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Ico className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA strip */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">Not sure where to start?</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We’ll scope your idea, recommend an approach, and share timelines in a 30-minute call.
                </p>
              </div>
              <a href="/contact">
                <Button size="lg">Book a quick call</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}