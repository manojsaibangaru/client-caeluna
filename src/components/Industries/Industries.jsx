import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { industries } from "../../utils/data";

export default function Industries() {
  return (
    <section id="industries" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Specialized expertise across every sector"
          description="We understand the regulatory pressures, operational realities, and technical demands unique to your industry."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} variant="scale" delay={(index % 6) * 0.08}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-white px-4 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-gradient-to-br hover:from-navy-800 hover:to-navy-950 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-600 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-sky-accent">
                  <industry.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-semibold text-navy-800 transition-colors duration-300 group-hover:text-white">
                  {industry.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
