import { Mail, Phone, MapPin, Map } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ContactForm from "./ContactForm";
import { socialIconMap } from "../ui/socialIcons";

const socialIcons = Object.entries(socialIconMap).map(([label, icon]) => ({ icon, label }));

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["500 Innovation Drive, Suite 320", "Austin, TX 78701, USA"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@caeluna.com", "support@caeluna.com"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+1 (512) 555-0142", "Mon - Fri, 9am - 6pm CST"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something exceptional together"
          description="Tell us about your project and a member of our team will get back to you within one business day."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal variant="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/50 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-navy-900">
                      {detail.title}
                    </h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-sm text-navy-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 pt-2">
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

              <div className="relative flex min-h-[10rem] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-dashed border-navy-200 bg-navy-50/50">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
                <div className="relative flex flex-col items-center gap-2 text-navy-400">
                  <Map className="h-8 w-8" />
                  <span className="text-xs font-medium">Google Maps embed placeholder</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="left" delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-navy-100 bg-white p-6 shadow-lg sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
