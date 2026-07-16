import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";
import GradientBlob from "../ui/GradientBlob";
import { stats } from "../../utils/data";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <GradientBlob className="h-80 w-80 bg-sky-accent/25 -bottom-24 left-1/4" />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} variant="scale" delay={index * 0.1} className="text-center">
              <p className="font-display text-4xl font-extrabold text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-navy-300">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
