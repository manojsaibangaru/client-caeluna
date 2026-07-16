import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../Navbar/Logo";
import Container from "../ui/Container";
import { socialIconMap } from "../ui/socialIcons";
import { services, offices } from "../../utils/data";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Industries", href: "/#industries" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (event, href) => {
    if (href.startsWith("/#")) {
      event.preventDefault();
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-200">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <Container className="relative py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              CAELUNA is an enterprise IT consulting partner helping organizations modernize
              cloud infrastructure, secure their systems, and build software that scales.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((name) => {
                const Icon = socialIconMap[name];
                return (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-navy-200 transition-colors hover:border-sky-accent/50 hover:text-sky-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="transition-colors hover:text-sky-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="transition-colors hover:text-sky-accent">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a
                    href="/#services"
                    onClick={(e) => handleNavClick(e, "/#services")}
                    className="transition-colors hover:text-sky-accent"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h3>
            <div className="space-y-5 text-sm">
              {offices.map((office) => (
                <div key={office.country}>
                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-sky-accent">
                    {office.country}
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-accent" />
                    <span>{office.address}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-sky-accent" />
                    <a href={`tel:${office.phoneHref}`} className="hover:text-sky-accent">
                      {office.phone}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-accent" />
                <a href="mailto:hello@caeluna.com" className="hover:text-sky-accent">
                  hello@caeluna.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-navy-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CAELUNA. All rights reserved. Demo site for client approval.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-sky-accent">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-sky-accent">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
