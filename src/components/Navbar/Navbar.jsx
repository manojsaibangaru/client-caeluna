import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { navLinks } from "../../utils/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

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
    <header
      className={`fixed top-0 z-50 w-full border-b border-navy-100/60 bg-white/85 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled || mobileOpen ? "shadow-[0_4px_30px_rgba(11,21,51,0.08)]" : ""
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link to="/" onClick={(e) => handleNavClick(e, "/#home")} aria-label="CAELUNA home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-navy-700 transition-colors hover:text-navy-500"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-base font-semibold text-navy-700 transition-colors hover:text-navy-500"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="!py-3 !px-7 !text-sm"
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-navy-800 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-100 bg-white/95 backdrop-blur-lg lg:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block rounded-lg px-3 py-3 text-lg font-semibold text-navy-800 hover:bg-navy-50"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="block rounded-lg px-3 py-3 text-lg font-semibold text-navy-800 hover:bg-navy-50"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <Button
                    href="/#contact"
                    onClick={(e) => handleNavClick(e, "/#contact")}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
