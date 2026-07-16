import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { services } from "../../utils/data";

export default function Services() {
  return (
    <section id="services" className="relative bg-navy-50/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive IT services built for scale"
          description="From cloud strategy to custom software, our teams deliver end-to-end technology capabilities designed around your business outcomes."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} variant="up" delay={(index % 3) * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy-900/10">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-navy-100 to-sky-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-sky-accent-2 text-white shadow-lg shadow-navy-700/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="relative mb-3 font-display text-xl font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-navy-500">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
