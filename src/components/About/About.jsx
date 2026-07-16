import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Empower organizations to modernize with confidence through resilient, secure, and scalable technology.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the trusted technology partner behind the world's most forward-thinking enterprises.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "We do right by our clients — transparent pricing, honest timelines, and accountable delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Excellence",
    description:
      "Every engagement is held to enterprise-grade standards of quality, security, and craftsmanship.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <Reveal variant="right">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-navy-100 to-sky-accent/10 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
                    <ShieldCheck className="h-10 w-10 text-sky-accent" />
                  </div>
                  <p className="font-display text-xl font-semibold text-white">
                    Building Enterprise Technology Since 2013
                  </p>
                  <p className="text-sm text-navy-300">
                    A distributed team of engineers, architects, and strategists across three
                    continents.
                  </p>
                </div>
              </div>

              <div className="glass absolute -bottom-8 -right-6 flex items-center gap-4 rounded-2xl px-6 py-5 shadow-xl sm:-right-10">
                <div className="text-center">
                  <p className="font-display text-2xl font-bold text-navy-900">
                    <AnimatedCounter value={98} suffix="%" />
                  </p>
                  <p className="text-[11px] font-medium text-navy-500">Client Retention</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            <SectionHeading
              align="left"
              eyebrow="About CAELUNA"
              title="A technology partner built for the long run"
              description="Founded on the belief that great technology should be an accelerant, not a bottleneck, CAELUNA has spent over a decade helping enterprises navigate digital transformation with clarity and confidence."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} variant="up" delay={index * 0.1}>
                  <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-navy-800 group-hover:text-white">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1.5 font-display text-base font-semibold text-navy-900">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-navy-500">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
