import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Rocket, HeartHandshake, BrainCircuit, Gauge, ShieldCheck, Users2, Target } from "lucide-react";

// Reuse existing assets to keep theme consistent with Home
import teamImg from "@/assets/team-workspace.jpg";
import heroImg from "@/assets/hero-tech.jpg";

export default function AboutPage() {
  const values = [
    {
      icon: Sparkles,
      title: "Human-centered",
      text: "We design for clarity and joy. Interfaces that reduce effort and increase trust.",
    },
    {
      icon: Gauge,
      title: "Performance-first",
      text: "Budgets, profiling, and Core Web Vitals. 60fps is a feature, not a bonus.",
    },
    {
      icon: BrainCircuit,
      title: "Pragmatic AI",
      text: "LLMs where they add real value—guardrails, evals, and observability included.",
    },
    {
      icon: HeartHandshake,
      title: "Partnership",
      text: "Long-term outcomes over short-term outputs. We win with you, not just for you.",
    },
  ];

  const story = [
    {
      year: "2025",
      title: "Founded",
      text: "DVV Innovations began its journey in 2025 with a vision to create intelligent, scalable, and design-driven digital experiences."
    },
    {
      year: "2025 Q2",
      title: "First Deliverables",
      text: "Launched initial client projects in web and AI-assisted platforms, emphasizing speed, usability, and modern architecture."
    },
    {
      year: "2025 Q4",
      title: "Product Expansion",
      text: "Evolved into a full-service innovation partner, integrating AI solutions, cloud optimization, and next-gen UI frameworks."
    }
  ];

  const stats = [
    { label: "Avg Lighthouse", value: "90+" },
    { label: "Deploy frequency", value: "Daily" },
    { label: "Industries", value: "4+" },
    { label: "Repeat clients", value: "92%" },
  ];

  const stack = [
    { area: "Frontend", items: ["Angular", "React", "TypeScript", "Design Systems"] },
    { area: "AI", items: ["RAG", "Embeddings", "Guardrails", "Evals/Telemetry"] },
    { area: "Cloud", items: ["Vercel", "AWS", "Docker", "CI/CD"] },
    { area: "Quality", items: ["Testing", "Accessibility", "Security", "Perf Budgets"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Intro */}
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 animate-fadeUp">
              Where vision meets velocity
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DVV Innovations is a studio of passionate creators building the next generation of digital
              experiences — from scalable web platforms to intelligent assistants. We keep tech simple, fast,
              and purposeful so users love using it and teams love maintaining it.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero banner (subtle, on-brand) */}
        <AnimatedSection>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="relative h-56 w-full">
              <img
                src={heroImg}
                alt="DVV Innovations — modern engineering"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute left-6 bottom-6">
                <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground shadow">
                  Building fast. Shipping faster.
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">What defines us</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-3xl">
              Our operating principles keep the bar high across design, engineering, and delivery.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
              {values.map(({ icon: Icon, title, text }) => (
                <Card key={title} className="h-full bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all">
                  <CardHeader className="flex flex-row items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Story timeline + photo */}
        <AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">Our story</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="relative border-s pl-6 space-y-6">
                  {story.map(s => (
                    <li key={s.year}>
                      <span className="absolute -left-2 mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary" />
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{s.year}</span>
                        <span className="text-sm font-medium">{s.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <div className="relative h-64 w-full">
                <img
                  src={teamImg}
                  alt="DVV Innovations team"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                <div className="absolute left-6 bottom-6 flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-primary" />
                  <span className="text-xs text-foreground/90">Craft, curiosity, and care.</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats strip */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="grid gap-6 text-center md:grid-cols-4">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-foreground">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Principles & Trust */}
        <AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Principles we ship with</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Value first — every iteration should improve user or business outcomes.</li>
                  <li>Small, safe steps — continuous delivery with strong feedback loops.</li>
                  <li>Clarity over cleverness — readable code, clear flows, crisp UI.</li>
                  <li>Measure what matters — vitals, errors, and experience metrics.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Security & Accessibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We build with OWASP checks, dependency audits, and sensible defaults (CSP, TLS, least-privilege). WCAG 2.1 AA
                  baseline ensures inclusive experiences for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Tech stack chips */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Our stack</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tools we use to deliver quickly without compromising quality.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stack.map(group => (
                <div key={group.area}>
                  <p className="text-sm font-medium mb-2">{group.area}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(i => (
                      <span key={i} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="text-sm text-muted-foreground">
                Curious how this fits your roadmap? We’ll map tech to outcomes in a quick call.
              </p>
              <a href="/contact">
                <Button size="lg">Talk to us</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}