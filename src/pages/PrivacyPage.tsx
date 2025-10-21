import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ShieldCheck, Cookie, Database, Timer, Building2, Lock, Globe2, Bell, Mail } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "October 21, 2025";

  const dataWeCollect = [
    { label: "Contact details", examples: "Name, email, phone, company, role" },
    { label: "Project info", examples: "Goals, timelines, requirements shared in forms or calls" },
    { label: "Usage analytics", examples: "Page views, device/browser info, rough geolocation" },
    { label: "Technical logs", examples: "IP address, request/response metadata, error traces" },
    { label: "Communications", examples: "Emails, support chats, feedback and attachments" },
  ];

  const purposes = [
    "Responding to inquiries and delivering requested services",
    "Operating, protecting, and improving our website and systems",
    "Analytics and performance measurement to enhance experience",
    "Security monitoring, abuse prevention, and debugging",
    "Legal compliance and enforcing our Terms of Service",
  ];

  const cookies = [
    { name: "app_session", purpose: "Keeps you signed in and remembers preferences", expires: "Session/Short-term", type: "Strictly necessary" },
    { name: "analytics_*", purpose: "Anonymous usage statistics (page views, errors, device)", expires: "Up to 13 months", type: "Analytics" },
    { name: "ab_test", purpose: "Helps compare experiences to improve UX", expires: "90 days", type: "Functional" },
  ];

  const rights = [
    "Access — request a copy of your personal data",
    "Rectification — correct inaccurate or incomplete data",
    "Erasure — ask us to delete your data when applicable",
    "Restriction — limit how we use your data in certain cases",
    "Objection — opt out of analytics/marketing where applicable",
    "Portability — request export in a common format (when feasible)",
  ];

  const safeguards = [
    "Encryption in transit (HTTPS/TLS)",
    "Principle of least privilege and role-based access",
    "Dependency and vulnerability monitoring",
    "Regular backups and disaster recovery procedures",
    "Change management and peer review for production changes",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Heading */}
        <AnimatedSection>
          <Badge className="mb-3">Privacy</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Your trust matters. This page explains what we collect, why we collect it, and how you can control your information.
            We keep data minimal, secure, and used only for clear, lawful purposes.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
        </AnimatedSection>

        {/* Summary tiles */}
        <AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Minimal data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We collect only what's necessary to respond to you and run our services.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Security first</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Encryption, access controls, and monitoring help protect your information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Cookie className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Clear cookies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Only essential, analytics, and functional cookies — no invasive tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Globe2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Your choices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You control communications, analytics opt-outs, and can request access or deletion.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* What we collect */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center gap-2 mb-3">
              <Database className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Information we collect</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dataWeCollect.map((d) => (
                <div key={d.label}>
                  <p className="text-sm font-medium">{d.label}</p>
                  <p className="text-sm text-muted-foreground">{d.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Why we collect & legal bases */}
        <AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">How we use your data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {purposes.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Legal bases</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Consent (e.g., contact form submissions, newsletters)</li>
                  <li>Contract (pre-contract steps and service delivery)</li>
                  <li>Legitimate interests (security, analytics, product improvement)</li>
                  <li>Legal obligations (record-keeping, compliance requests)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Cookies table */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center gap-2 mb-3">
              <Cookie className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Cookies & similar technologies</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Cookies help us remember preferences, measure performance, and keep the site secure. You can clear or block cookies
              in your browser settings; essential cookies may be required for core functionality.
            </p>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Purpose</th>
                    <th className="px-4 py-2 text-left">Expires</th>
                    <th className="px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((c) => (
                    <tr key={c.name} className="border-t">
                      <td className="px-4 py-2">{c.name}</td>
                      <td className="px-4 py-2">{c.purpose}</td>
                      <td className="px-4 py-2">{c.expires}</td>
                      <td className="px-4 py-2">{c.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* Retention & sharing */}
        <AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Timer className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Data retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We keep personal data only as long as needed to fulfill the purposes above. Typical retention:
                </p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Contact records: 24 months from last interaction (unless required longer)</li>
                  <li>Logs & analytics: 13 months (aggregated/anonymous thereafter)</li>
                  <li>Contracts, invoices, and compliance: as required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Sharing & third parties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We may share data with service providers that help us operate (e.g., hosting, analytics, email). These providers
                  are bound by contracts to protect your data and use it only on our instructions. We do not sell personal data.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Security, transfers, children's privacy, changes, contact (Accordion) */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="security">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="font-medium">Security</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    We apply administrative, technical, and physical safeguards to protect data. While no system is perfectly
                    secure, measures include: {safeguards.join(", ")}.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transfers">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <Globe2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">International transfers</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    If data is processed outside your country, we use reasonable safeguards and contractual protections to help
                    ensure an adequate level of data protection in line with applicable laws.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="children">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="font-medium">Children’s privacy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Our services are not directed to children. We do not knowingly collect personal data from children. If you
                    believe a child has provided us data, please contact us so we can take appropriate steps.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="changes">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <span className="font-medium">Changes to this policy</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    We may update this policy to reflect improvements or legal requirements. Material changes will be highlighted
                    on this page with a revised “Last updated” date.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rights">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <span className="font-medium">Your rights</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {rights.map((r) => <li key={r}>{r}</li>)}
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    To exercise rights or raise questions, email us with sufficient details to verify your identity and request.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger className="text-left">
                  <div className="inline-flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">Contact us</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    DVV Innovations<br />
                    Hyderabad, India<br />
                    <span className="font-medium text-foreground">contact@dvv-innovations.com</span>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="my-6" />

            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <p className="text-sm text-muted-foreground">
                Prefer not to use analytics cookies? Adjust your browser settings to block or clear cookies. Core functionality may be limited.
              </p>
              <a href="/contact">
                <Button size="lg">Ask a privacy question</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}