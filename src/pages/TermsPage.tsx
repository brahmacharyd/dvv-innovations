import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollText, Handshake, Lock, Scale, Info, Mail } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function TermsPage() {
  const lastUpdated = "October 21, 2025";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <AnimatedSection>
          <Badge className="mb-3">Terms</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Welcome to DVV Innovations. By accessing or using our website, products, or services,
            you agree to these Terms of Service. Please read them carefully, as they form a legal
            agreement between you and DVV Innovations.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
        </AnimatedSection>

        {/* Overview Cards */}
        <AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <ScrollText className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Legal Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Using our site or services constitutes acceptance of these Terms and our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <Handshake className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Fair Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You agree to use our services responsibly and for lawful purposes only.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We handle your information per our Privacy Policy, applying industry-grade safeguards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader className="flex flex-row items-center gap-3">
                <Scale className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We strive to be transparent in our operations, updates, and any changes to these Terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        {/* Detailed Terms */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="acceptance">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <ScrollText className="h-5 w-5 text-primary" />
                    <span className="font-medium">1. Acceptance of Terms</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    By accessing DVV Innovations’ websites, applications, or services (“Services”), you confirm that you have
                    read, understood, and agree to be bound by these Terms. If you do not agree, please refrain from using our Services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="changes">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span className="font-medium">2. Modifications</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    We may revise these Terms from time to time. The latest version will always be available on this page, and
                    the date of the most recent update will be indicated above. Continued use after changes constitutes acceptance
                    of the revised Terms.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="use">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-primary" />
                    <span className="font-medium">3. Use of Services</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                    <li>You agree to use our Services only for lawful and intended purposes.</li>
                    <li>You may not copy, distribute, or modify our materials without permission.</li>
                    <li>You are responsible for maintaining confidentiality of account credentials.</li>
                    <li>We reserve the right to suspend or terminate accounts violating these Terms.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="intellectual">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-medium">4. Intellectual Property</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    All trademarks, content, graphics, and code are the property of DVV Innovations or its licensors. 
                    You may not use any branding, logos, or content without explicit written consent.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="content">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span className="font-medium">5. User Content</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    If you submit content (e.g., feedback, suggestions, or materials), you grant DVV Innovations a worldwide, 
                    royalty-free license to use, reproduce, and distribute it for service improvement and marketing purposes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <span className="font-medium">6. Privacy & Data Protection</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    We process personal data in accordance with our <a href="/privacy" className="underline">Privacy Policy</a>. 
                    By using our Services, you consent to such processing.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="liability">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-medium">7. Limitation of Liability</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    To the fullest extent permitted by law, DVV Innovations shall not be liable for indirect, incidental, or
                    consequential damages arising from your use or inability to use our Services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="termination">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-primary" />
                    <span className="font-medium">8. Termination</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    We reserve the right to suspend or terminate your access if you breach these Terms or engage in misuse, 
                    fraud, or illegal activity. Termination may occur without prior notice.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="governing-law">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="font-medium">9. Governing Law</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    These Terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction 
                    of courts located in Hyderabad, Telangana.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger>
                  <div className="inline-flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">10. Contact Information</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    If you have questions about these Terms, please contact us at:  
                    <br />📧 <span className="font-medium text-foreground">legal@dvv-innovations.com</span>
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator className="my-8" />
            <div className="text-sm text-muted-foreground text-center">
              By using our Services, you acknowledge that you have read and agree to be bound by these Terms of Service.
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}