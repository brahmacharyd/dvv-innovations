import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  const items = [
    { title: "Minimal collection", text: "We collect only what’s necessary to operate the site and respond to your requests." },
    { title: "No selling of data", text: "We don’t sell or trade personal information—ever." },
    { title: "Transparent use", text: "We use analytics to improve UX; you can opt out via your browser settings." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Your trust matters. This page explains what we collect and how we use it.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3 mt-10">
          {items.map(({ title, text }) => (
            <AnimatedSection key={title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}