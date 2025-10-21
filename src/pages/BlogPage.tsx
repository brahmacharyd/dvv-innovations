import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, Tag, Flame } from "lucide-react";

// Reuse your assets to stay on-brand (small thumbs only)
import heroImg from "@/assets/hero-tech.jpg";
import aiImg from "@/assets/ai-visualization.jpg";
import designImg from "@/assets/digital-transformation.jpg";
import cloudImg from "@/assets/cloud-infrastructure.jpg";

type Post = {
  slug: string;
  title: string;
  teaser: string;
  date: string;
  read: string;
  image: string;
  category: "Frontend" | "AI" | "Cloud" | "Design";
  tags: string[];
};

const POSTS: Post[] = [
  {
    slug: "optimizing-angular-for-60fps",
    title: "Optimizing Angular for 60fps UI",
    teaser: "Change detection, virtual scroll, memoization—practical steps to hit buttery 60fps.",
    date: "Oct 2025",
    read: "7 min",
    image: heroImg,
    category: "Frontend",
    tags: ["Angular", "Performance", "Web Vitals"],
  },
  {
    slug: "ai-shaping-next-wave-of-ux",
    title: "How AI is Shaping the Next Wave of UX",
    teaser: "Assistants, adaptive flows, and trust—LLM UX patterns that actually work.",
    date: "Oct 2025",
    read: "6 min",
    image: aiImg,
    category: "AI",
    tags: ["LLM", "RAG", "UX"],
  },
  {
    slug: "monorepo-vs-multirepo-truth",
    title: "Monorepo vs Multirepo: The Architectural Truth",
    teaser: "Scale, ownership, CI, and team topology—without the holy wars.",
    date: "Sep 2025",
    read: "8 min",
    image: designImg,
    category: "Frontend",
    tags: ["Architecture", "DX", "Tooling"],
  },
  {
    slug: "vercel-aws-zero-downtime",
    title: "Vercel + AWS: Zero-Downtime Deploys",
    teaser: "Preview envs, safe rollbacks, and metrics—shipping faster with confidence.",
    date: "Aug 2025",
    read: "5 min",
    image: cloudImg,
    category: "Cloud",
    tags: ["Vercel", "AWS", "DevOps"],
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems that Scale with Confidence",
    teaser: "Tokens, motion, accessibility—cutting friction while speeding teams up.",
    date: "Aug 2025",
    read: "6 min",
    image: designImg,
    category: "Design",
    tags: ["Design Systems", "Accessibility", "Motion"],
  },
];

const CATEGORIES = ["All", "Frontend", "AI", "Cloud", "Design"] as const;

export default function BlogPage() {
  // For now this is static; wire filter/search with state if needed.
  const currentCategory: typeof CATEGORIES[number] = "All";
  const filtered = currentCategory === "All" ? POSTS : POSTS.filter(p => p.category === currentCategory);

  const popular = [POSTS[0], POSTS[1], POSTS[2]];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Compact header (distinct from About) */}
        <AnimatedSection animation="fade-in" delay={200}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <span className="text-sm font-medium text-primary">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3 animate-fadeUp">
              Engineering Journal
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed animate-fadeUp delay-200">
              Practical notes from our work in frontend, AI, and platform engineering.
            </p>
          </div>
        </AnimatedSection>

        {/* Two-column magazine layout: sticky left sidebar + masonry right */}
        <div className="grid gap-8 md:grid-cols-12">
          {/* SIDEBAR */}
          <aside className="md:col-span-4 lg:col-span-3">
            <AnimatedSection>
              <div className="sticky top-24 space-y-6">
                {/* Search */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Search</p>
                  <Input placeholder="Search articles…" />
                </div>

                {/* Categories */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Categories</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(c => (
                      <span
                        key={c}
                        className={`cursor-default rounded-full border px-2.5 py-1 text-xs ${c === currentCategory ? "bg-primary text-primary-foreground border-transparent" : "text-muted-foreground"
                          }`}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular posts */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Flame className="h-4 w-4 text-primary" />
                    <p className="text-xs font-medium text-muted-foreground">Popular</p>
                  </div>
                  <div className="space-y-3">
                    {popular.map(p => (
                      <a key={p.slug} href={`/blog/${p.slug}`} className="group block">
                        <div className="flex items-center gap-3 rounded-xl border bg-card/60 p-2 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow">
                          <img src={p.image} alt={p.title} className="h-12 w-12 rounded-md object-cover" loading="lazy" />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-foreground group-hover:underline">{p.title}</p>
                            <p className="text-[11px] text-muted-foreground">{p.date} • {p.read}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <Separator className="my-2" />

                {/* Newsletter */}
                <div className="rounded-2xl border bg-card/60 p-4 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                  <p className="text-sm font-medium">Get new posts</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Angular/React, performance, AI, and product engineering. No spam.
                  </p>
                  <form className="mt-3 flex gap-2">
                    <Input type="email" placeholder="you@company.com" required />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </aside>

          {/* MAIN (Masonry) */}
          <section className="md:col-span-8 lg:col-span-9">
            <AnimatedSection>
              {/* Masonry using CSS columns; cards use break-inside-avoid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {filtered.map((p) => (
                  <a key={p.slug} href={`/blog/${p.slug}`} className="break-inside-avoid mb-6 block">
                    <Card className="group overflow-hidden border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all">
                      <div className="relative h-36 w-full overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
                        <div className="absolute left-3 top-3">
                          <Badge className="bg-primary/90 text-primary-foreground">{p.category}</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base leading-tight">{p.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{p.teaser}</p>
                        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            {p.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {p.read}
                          </span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {p.tags.map((t) => (
                            <span key={t} className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground">
                              <Tag className="h-3 w-3" /> {t}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}