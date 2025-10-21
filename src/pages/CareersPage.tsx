import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Users2, Rocket, Coffee, Laptop, Target, Star } from "lucide-react";
import teamImg from "@/assets/team-workspace.jpg";
import cultureImg from "@/assets/digital-transformation.jpg";

export default function CareersPage() {
  const openings = [
    {
      title: "Frontend Engineer (Angular)",
      type: "Full-Time • Hyderabad / Remote",
      desc: "Own features end-to-end in Angular, TypeScript, and RxJS. Build high-performance UI and reusable components.",
      skills: ["Angular", "TypeScript", "RxJS", "NGRX"],
    },
    {
      title: "Full-Stack Developer",
      type: "Full-Time • Hybrid",
      desc: "Deliver features from API to UI using Node.js, PostgreSQL, and React. Experience in CI/CD is a plus.",
      skills: ["React", "Node.js", "PostgreSQL", "CI/CD"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-Time • Remote",
      desc: "Craft clean, intuitive designs and collaborate with developers to bring design systems to life.",
      skills: ["Figma", "Design Systems", "Accessibility", "Motion"],
    },
  ];

  const culture = [
    { icon: Coffee, title: "Flexible Culture", text: "We work smart, not just long. Flexibility with accountability is our rhythm." },
    { icon: Laptop, title: "Modern Stack", text: "Angular, React, AI integrations — you’ll always be working on something relevant." },
    { icon: Target, title: "Clear Growth Paths", text: "Skill-based progression, mentorship, and recognition at every milestone." },
    { icon: Star, title: "Learning First", text: "Workshops, internal projects, and open experimentation are part of the job." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero */}
        <AnimatedSection>
          <Badge className="mb-3">Careers</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Build tomorrow with us
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We’re not just hiring developers — we’re bringing together people who love solving hard problems, designing better
            experiences, and shipping real impact.
          </p>
        </AnimatedSection>

        {/* Hero Image */}
        <AnimatedSection>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="relative h-56 w-full">
              <img
                src={teamImg}
                alt="Team at DVV Innovations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute left-6 bottom-6 flex items-center gap-2">
                <Users2 className="h-5 w-5 text-primary" />
                <span className="text-xs text-foreground/90">Collaboration • Curiosity • Craft</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Openings */}
        <AnimatedSection>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Open Positions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              If you love performance, DX, and clean code, there’s a place for you here.
            </p>
            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
              {openings.map((job) => (
                <Card key={job.title} className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">{job.type}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((s) => (
                        <span key={s} className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a href="/contact">
                        <Button size="sm">Apply now</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Culture */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Life at DVV Innovations</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {culture.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="font-medium text-sm">{title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border">
              <img src={cultureImg} alt="DVV culture" className="h-48 w-full object-cover" loading="lazy" />
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 text-center backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <h3 className="text-xl font-semibold text-foreground">Didn’t find the right role?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We’re always open to meeting great people. Share your profile and we’ll reach out if it’s a fit.
            </p>
            <div className="mt-4">
              <a href="/contact">
                <Button size="lg">Send your profile</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Separator */}
        <Separator className="my-8" />
        <div className="text-xs text-muted-foreground text-center">
          📩 careers@dvv-innovations.com
        </div>
      </main>

      <Footer />
    </div>
  );
}