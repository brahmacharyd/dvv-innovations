import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  const clauses = [
    { title: "Acceptable use", text: "Use this website responsibly. Don’t attempt to disrupt or misuse services." },
    { title: "Content ownership", text: "All content is owned by DVV Innovations LLP unless stated otherwise." },
    { title: "Changes", text: "We may update the site, design, or availability. We’ll keep the experience smooth." },
    { title: "Contact consent", text: "By using contact forms, you agree to be contacted regarding your inquiry." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <AnimatedSection>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A quick summary of guidelines for using our website and services.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {clauses.map(({ title, text }) => (
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