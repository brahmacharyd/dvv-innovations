import { Link } from "react-router-dom";
import dvvLogo from "@/assets/dvv-icon-with-innovations.svg"; // make sure you add your SVG logo here

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
        {/* Logo + description */}
      <div className="text-center flex flex-col items-center justify-center">
  <Link to="/" className="inline-flex items-center gap-3 mb-3 hover:scale-105 transition-transform">
    <img
      src={dvvLogo}
      alt="DVV Innovations Logo"
      className="h-12 w-auto"
      loading="lazy"
    />
  </Link>
  <p className="text-sm text-muted-foreground max-w-sm text-center">
    Digital Visionary Ventures — modern web & AI solutions for the next generation of digital transformation.
  </p>
</div>

        {/* Company */}
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/services#frontend" className="hover:underline">Web & Mobile</a></li>
            <li><a href="/services#ai" className="hover:underline">AI Integration</a></li>
            <li><a href="/services#cloud" className="hover:underline">Cloud & DevOps</a></li>
            <li><a href="/services#design" className="hover:underline">Design & UX</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DVV Innovations. All rights reserved.
      </div>
    </footer>
  );
}