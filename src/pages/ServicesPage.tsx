import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Cloud, Palette, ShieldCheck, Gauge, Workflow, Wrench, CheckCircle2, Rocket } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Key = "frontend" | "ai" | "cloud" | "design";

export default function ServicesPage() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  // Tab model
  const tabs = useMemo(() => ([
    {
      key: "frontend" as Key,
      label: "Web & Mobile",
      icon: Globe,
      heading: "Web & Mobile Engineering",
      subheading: "SPA/SSR experiences that are fast, accessible, and maintainable.",
      overview: [
        "Angular/React with clean architecture & design systems.",
        "Lighthouse 90+, Core Web Vitals, and performance budgets.",
        "SSR/CSR/ISR based on product needs."
      ],
      features: [
        { icon: Gauge, title: "Performance", text: "Code-splitting, prefetching, caching, and 60fps UX." },
        { icon: ShieldCheck, title: "Security", text: "OWASP checks, CSP, dependency audits, and auth hardening." },
        { icon: Wrench, title: "DX & Quality", text: "Storybook, tests, CI checks, and docs that age well." },
      ],
      cta: { label: "Discuss your app", to: "/contact" },
    },
    {
      key: "ai" as Key,
      label: "AI Integration",
      icon: Cpu,
      heading: "AI Integration & Automation",
      subheading: "LLM features where they add real value — observable and safe.",
      overview: [
        "Chat/voice assistants with tool-use and analytics.",
        "RAG pipelines with embeddings, caching, and guardrails.",
        "Evals to track quality and regressions."
      ],
      features: [
        { icon: Workflow, title: "Pipelines", text: "Chunking, retrieval, re-ranking, and output checks." },
        { icon: Gauge, title: "Observability", text: "Traces, metrics, dashboards for production AI." },
        { icon: ShieldCheck, title: "Governance", text: "PII handling, abuse prevention, rate limits." },
      ],
      cta: { label: "Explore AI options", to: "/contact" },
    },
    {
      key: "cloud" as Key,
      label: "Cloud & DevOps",
      icon: Cloud,
      heading: "Cloud & DevOps",
      subheading: "Infra that scales quietly with smart costs and strong signals.",
      overview: [
        "Vercel/AWS, Docker, CI/CD, IaC where it matters.",
        "Zero-downtime deploys with rollbacks.",
        "SLOs, alerts, and budgets baked in."
      ],
      features: [
        { icon: Gauge, title: "Reliability", text: "Health checks, autoscaling, and error budgets." },
        { icon: ShieldCheck, title: "Hardening", text: "Secrets, policies, TLS, and least privilege." },
        { icon: Wrench, title: "Tooling", text: "Pipelines, preview deploys, and perf profiles." },
      ],
      cta: { label: "Optimize infra", to: "/contact" },
    },
    {
      key: "design" as Key,
      label: "Design & UX",
      icon: Palette,
      heading: "UI/UX & Design Systems",
      subheading: "Interfaces that reduce user effort and increase conversion.",
      overview: [
        "Tokens, theming, and cohesive component libraries.",
        "Motion & micro-interactions for clarity.",
        "Research-driven flows and accessibility."
      ],
      features: [
        { icon: Gauge, title: "Usability", text: "Task success, speed, and fewer errors." },
        { icon: Wrench, title: "Scale", text: "Docs, Figma kits, and handoff-ready assets." },
        { icon: ShieldCheck, title: "Accessibility", text: "WCAG 2.1 AA as a baseline." },
      ],
      cta: { label: "Start a design sprint", to: "/contact" },
    },
  ]), []);

  // Determine initial tab from hash; default to frontend
  const tabFromHash = (h: string): Key => {
    const key = (h || "").replace("#", "") as Key;
    return (["frontend","ai","cloud","design"] as Key[]).includes(key) ? key : "frontend";
  };

  const [active, setActive] = useState<Key>(tabFromHash(hash));

  // Keep state in sync with URL hash (supports deep links and back/forward)
  useEffect(() => {
    const k = tabFromHash(hash);
    setActive(k);
  }, [hash]);

  // Update hash when user clicks a tab
  const setActiveAndHash = (k: Key) => {
    setActive(k);
    // push a hash without reloading route
    navigate(`#${k}`, { replace: false });
  };

  const current = tabs.find(t => t.key === active)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Page header */}
        <AnimatedSection>
          <Badge className="mb-3">Services</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Engineering ideas into impact
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A focused set of capabilities — delivered with speed, quality, and clear outcomes.
          </p>
        </AnimatedSection>

        {/* Custom Tabs (no shadcn dependency) */}
        <AnimatedSection>
          <div className="mt-8 flex flex-wrap gap-2">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveAndHash(t.key)}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors",
                  active === t.key
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "hover:bg-muted text-foreground"
                ].join(" ")}
                aria-pressed={active === t.key}
                aria-controls={`panel-${t.key}`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active panel */}
        <AnimatedSection>
          <section
            id={`panel-${current.key}`}
            aria-labelledby={`tab-${current.key}`}
            className="mt-6"
          >
            <div className="grid gap-6 md:grid-cols-5">
              {/* Overview */}
              <Card className="md:col-span-2 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                <CardHeader className="flex flex-row items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <current.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{current.heading}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{current.subheading}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {current.overview.map(o => <li key={o}>{o}</li>)}
                  </ul>
                  <div className="mt-5">
                    <a href={current.cta.to}>
                      <Button className="group/btn">
                        {current.cta.label}
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

              {/* Features */}
              <div className="md:col-span-3 grid gap-6">
                {current.features.map((f) => (
                  <Card key={f.title} className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                    <CardHeader className="flex flex-row items-start gap-3 pb-2">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <f.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base leading-tight">{f.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{f.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Process strip (applies to all services) */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">How we work</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-5">
              {[
                { step: 1, title: "Discover", text: "Goals, constraints, users, and KPIs." },
                { step: 2, title: "Design", text: "Flows, wireframes, tokens, and components." },
                { step: 3, title: "Build", text: "Iterative delivery with CI, tests, and previews." },
                { step: 4, title: "Launch", text: "Perf pass, security checks, and rollout plan." },
                { step: 5, title: "Evolve", text: "Metrics, A/Bs, and a roadmap that compounds." },
              ].map(p => (
                <div key={p.step} className="relative">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      {p.step}
                    </span>
                    <span className="text-sm font-medium">{p.title}</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Capabilities chips */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Capabilities</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { area: "Frontend", items: ["Angular/React", "Design Systems", "SSR/ISR"] },
                { area: "AI", items: ["RAG", "Guardrails", "Evals/Telemetry"] },
                { area: "Cloud", items: ["Vercel/AWS", "CI/CD", "IaC (selective)"] },
                { area: "Design", items: ["Tokens", "Motion", "Accessibility"] },
              ].map((c) => (
                <div key={c.area}>
                  <p className="text-sm font-medium mb-2">{c.area}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map(i => (
                      <span key={i} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}