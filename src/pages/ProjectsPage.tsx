import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, ChartNoAxesColumnIncreasing, Layers } from "lucide-react";

// Use your existing images to keep visual style consistent with Home/Hero
import aiVisual from "@/assets/ai-visualization.jpg";
import analytics from "@/assets/digital-transformation.jpg";
import cloudInfra from "@/assets/cloud-infrastructure.jpg";

// NOTE: If your image aliases differ, change the import paths accordingly.

export default function ProjectsPage() {
  const projects = [
    {
      icon: Bot,
      title: "Verisk AI Chat Assistant",
      summary:
        "Custom LLM orchestration with streaming UI, guardrails, and analytics. Improved first-answer accuracy and reduced handle time.",
      highlights: ["Prompt tools & evaluators", "Streaming UX", "Guardrails & telemetry"],
      image: aiVisual,
      cta: { label: "View case study", to: "/contact" }, // route to contact for now
      tag: "AI & Assistants",
    },
    {
      icon: ChartNoAxesColumnIncreasing,
      title: "Smart Analytics Dashboard",
      summary:
        "Real-time KPIs with drill-downs, role-based access, and 60fps interactions. Built for large datasets and low latency.",
      highlights: ["Realtime charts", "RBAC", "Lighthouse 90+"],
      image: analytics,
      cta: { label: "See capabilities", to: "/services" },
      tag: "Data & Visualization",
    },
    {
      icon: Layers,
      title: "Angular Monorepo Suite",
      summary:
        "Modular components, shared state, and CI pipelines. Performance-first patterns with docs and storybook.",
      highlights: ["Nx monorepo", "NGRX patterns", "Design system"],
      image: cloudInfra,
      cta: { label: "Talk to us", to: "/contact" },
      tag: "Frontend Platforms",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Section header with same spacing/typography as home */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <span className="text-sm font-medium text-primary">Projects</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Work that speaks louder than words
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              A few representative engagements. Want the full tour? We’ll walk you through live demos and results.
            </p>
          </div>
        </AnimatedSection>

        {/* Image-led grid that matches card look/feel from home */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {projects.map(({ icon: Icon, title, summary, highlights, image, cta, tag }) => (
            <AnimatedSection key={title}>
              <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                {/* Image header with soft gradient overlay */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                  {/* Corner tag */}
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
                      <li
                        key={h}
                        className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                      >
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

        {/* CTA strip that mirrors home vibe */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                  Want a tailored walkthrough?
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We’ll demo relevant projects and outline an approach for your problem in 30 minutes.
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