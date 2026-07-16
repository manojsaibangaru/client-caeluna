import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { processSteps } from "../../utils/data";

export default function Process() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A proven process from idea to impact"
          description="Every engagement follows a disciplined, transparent process so you always know what's happening and why."
        />

        <div className="no-scrollbar mt-16 flex snap-x snap-mandatory items-start gap-0 overflow-x-auto px-1 pb-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex shrink-0 items-start">
              <Reveal
                variant="up"
                delay={index * 0.08}
                className="flex w-[190px] snap-start flex-col items-center text-center sm:w-[210px]"
              >
                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-sky-accent-2 text-white shadow-lg">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-sky-accent">
                  Step {index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
              </Reveal>

              {index < processSteps.length - 1 && (
                <div className="mt-7 h-px w-8 shrink-0 bg-navy-200 sm:w-12" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
