import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { socialIconMap } from "../ui/socialIcons";
import { offices } from "../../utils/data";

const socialIcons = Object.entries(socialIconMap).map(([label, icon]) => ({ icon, label }));

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Reach our teams in India and the USA"
          description="We'd love to hear from you. Reach out by phone or email and our team will get back to you soon."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {offices.map((office, index) => (
            <Reveal key={office.country} variant="up" delay={index * 0.1}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-navy-100 bg-navy-50/50 p-8 shadow-sm">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-navy-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                  {office.country} Office
                </span>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-navy-600" />
                  <p className="text-sm leading-relaxed text-navy-600">{office.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-navy-600" />
                  <a
                    href={`tel:${office.phoneHref}`}
                    className="text-sm font-medium text-navy-800 hover:text-navy-600"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-navy-600" />
                  <p className="text-sm font-medium text-navy-800">{office.hours}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={0.2} className="mt-10">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-navy-100 bg-white p-8 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-navy-600" />
              <a
                href="mailto:hello@caeluna.com"
                className="text-sm font-medium text-navy-800 hover:text-navy-600"
              >
                hello@caeluna.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
