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

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-navy-100 sm:block lg:left-1/2 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal
                  key={step.title}
                  variant={isEven ? "right" : "left"}
                  delay={index * 0.05}
                  className={`relative flex flex-col gap-6 sm:flex-row lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-1 items-start gap-5 sm:pl-16 lg:pl-0">
                    <div
                      className={`hidden lg:block lg:flex-1 ${isEven ? "lg:text-right lg:pr-14" : "lg:pl-14"}`}
                    >
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-sky-accent">
                        Step {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-500">
                        {step.description}
                      </p>
                    </div>

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-navy-700 to-sky-accent-2 text-white shadow-lg sm:absolute sm:left-0 lg:static lg:left-auto">
                      <step.icon className="h-5 w-5" />
                    </div>

                    <div className="lg:hidden">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-sky-accent">
                        Step {index + 1}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy-500">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
