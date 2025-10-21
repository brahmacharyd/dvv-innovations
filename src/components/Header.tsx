import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Item = ({ to, label }: { to: string; label: string }) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
          isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 ${scrolled ? "border-b" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-semibold text-lg">DVV Innovations</Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map(n => <Item key={n.to} to={n.to} label={n.label} />)}
        </nav>

        {/* Mobile */}
        <button className="md:hidden p-2 rounded-lg hover:bg-muted" aria-label="Toggle Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {nav.map(n => <Item key={n.to} to={n.to} label={n.label} />)}
          </div>
        </div>
      )}
    </header>
  );
}