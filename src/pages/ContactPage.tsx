import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import contactImg from "@/assets/digital-transformation.jpg";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-16">
        {/* Hero */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <span className="text-sm font-medium text-primary">Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Let’s build something exceptional together
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Whether you’re exploring a new project, need expert advice, or just want to collaborate,
              our team is here to help. Every great partnership starts with a conversation —
              reach out, and we’ll get back to you within one business day.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image */}
        <AnimatedSection>
          <div className="mt-8 overflow-hidden rounded-2xl border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="relative h-56 w-full">
              <img
                src={contactImg}
                alt="Contact DVV Innovations"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <div className="absolute left-6 bottom-6 text-xs text-foreground/80">
                <span className="inline-flex items-center gap-1">
                  <Send className="h-4 w-4 text-primary" /> Let’s make your vision real.
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form + Info */}
        <AnimatedSection>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Form */}
            <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
              <CardHeader>
                <CardTitle className="text-lg">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <Input placeholder="Your name" required />
                  <Input type="email" placeholder="Email address" required />
                  <Input placeholder="Subject" />
                  <Textarea rows={5} placeholder="Tell us about your project or idea..." required />
                  <Button type="submit" size="lg" className="mt-2">
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">
                    We usually respond within 24 hours (Mon–Fri, 9 AM – 6 PM IST).
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg">Reach us directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">contact@dvv-innovations.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        DVV Innovations LLP<br />
                        Plot 12, Financial District<br />
                        Hyderabad, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Mon–Fri, 9 AM – 6 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                <iframe
                  title="DVV Innovations Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7367092936933!2d78.35789687458383!3d17.427157802820436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e1efbb9b2b%3A0xd3cccae391d4a09!2sFinancial%20District%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1696789123456"
                  width="100%"
                  height="250"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="mt-12 rounded-2xl border bg-card/60 p-6 md:p-8 text-center backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              Let’s discuss your goals and challenges — we’ll share a roadmap, timeline, and
              execution strategy designed around your business. Whether it’s a new AI-powered platform,
              a design system, or a full-stack revamp, we’d love to collaborate.
            </p>
            <div className="mt-6">
              <a href="mailto:contact@dvv-innovations.com">
                <Button size="lg">Start a Conversation</Button>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Separator */}
        <Separator className="my-8" />
        <div className="text-xs text-muted-foreground text-center">
          📩 contact@dvv-innovations.com • 🌐 www.dvv-innovations.vercel.app
        </div>
      </main>

      <Footer />
    </div>
  );
}