import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="font-semibold mb-3">DVV Innovations LLP</h3>
          <p className="text-sm text-muted-foreground">Digital Visionary Ventures — modern web & AI solutions.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/careers" className="hover:underline">Careers</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:underline">Web & Mobile</Link></li>
            <li><Link to="/services" className="hover:underline">AI Integration</Link></li>
            <li><Link to="/services" className="hover:underline">Cloud & DevOps</Link></li>
            <li><Link to="/services" className="hover:underline">Design & UX</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DVV Innovations LLP. All rights reserved.
      </div>
    </footer>
  );
}