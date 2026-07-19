import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck, Cloud, BrainCircuit, TrendingUp } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import GradientBlob from "../ui/GradientBlob";
import logoHero from "../../assets/logo-hero.png";

const floatingBadges = [
  { icon: Cloud, label: "Cloud Native", className: "-top-2 -left-4 sm:-left-8", delay: 0 },
  { icon: ShieldCheck, label: "Zero-Trust Security", className: "top-1/3 -right-4 sm:-right-10", delay: 0.6 },
  { icon: BrainCircuit, label: "AI Powered", className: "-bottom-9 -left-6 sm:-left-14", delay: 1.1 },
  { icon: TrendingUp, label: "99.9% Uptime", className: "-bottom-9 -right-2 sm:-right-10", delay: 1.6 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 pt-28 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
      <GradientBlob className="h-[28rem] w-[28rem] bg-sky-accent-2/40 -top-32 -left-32" />
      <GradientBlob className="h-[26rem] w-[26rem] bg-sky-accent/30 top-1/3 -right-20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/40 to-navy-950" />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start gap-6 text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-accent backdrop-blur-sm">
            Enterprise IT Consulting
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Engineering the future of{" "}
            <span className="bg-gradient-to-r from-sky-accent to-sky-accent-2 bg-clip-text text-transparent">
              digital enterprise
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-navy-200">
            CAELUNA partners with ambitious organizations to modernize cloud infrastructure,
            secure critical systems, and build software that scales — turning technology into
            your sharpest competitive edge.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href="/#contact">Get Started</Button>
            <Button href="/#services" variant="ghost" icon={false}>
              Explore Services
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-8 border-t border-white/10 pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-white">240+</p>
              <p className="text-xs text-navy-300">Projects Delivered</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">180+</p>
              <p className="text-xs text-navy-300">Happy Clients</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-white">12+</p>
              <p className="text-xs text-navy-300">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-lg items-center justify-center sm:flex lg:max-w-2xl"
        >
          <img
            src={logoHero}
            alt="CAELUNA — Smart Solutions. Stronger Futures."
            className="relative z-[1] w-full"
            style={{
              maskImage: "linear-gradient(to bottom, transparent, black 6%, black 96%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 6%, black 96%, transparent)",
            }}
          />

          {floatingBadges.map(({ icon: Icon, label, className, delay }) => (
            <motion.div
              key={label}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
              className={`glass absolute z-10 flex items-center gap-2 rounded-2xl px-4 py-3 shadow-xl ${className}`}
            >
              <Icon className="h-4 w-4 text-navy-700" />
              <span className="whitespace-nowrap text-xs font-semibold text-navy-800">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-navy-300"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
