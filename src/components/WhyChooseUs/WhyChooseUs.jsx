import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { whyChooseUs } from "../../utils/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-accent-2/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Why CAELUNA"
          title="Trusted by teams who need it right the first time"
          description="We combine deep technical expertise with a relentless focus on outcomes — so you get technology partners, not just vendors."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <Reveal key={item.title} variant="up" delay={(index % 3) * 0.1}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-accent/40 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-accent/20 to-sky-accent-2/20 text-sky-accent transition-colors duration-300 group-hover:from-sky-accent group-hover:to-sky-accent-2 group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-300">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
