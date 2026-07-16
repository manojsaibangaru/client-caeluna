import { useEffect } from "react";
import { Briefcase, MapPin, Clock, GraduationCap, HeartPulse, Plane, TrendingUp } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import GradientBlob from "../components/ui/GradientBlob";

const openRoles = [
  {
    title: "Senior Cloud Solutions Architect",
    department: "Cloud Consulting",
    location: "Austin, TX / Remote",
    type: "Full-time",
  },
  {
    title: "Machine Learning Engineer",
    department: "AI Solutions",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Cybersecurity Analyst",
    department: "Cyber Security",
    location: "Austin, TX",
    type: "Full-time",
  },
  {
    title: "Full-Stack Software Engineer",
    department: "Software Development",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    department: "DevOps",
    location: "Austin, TX / Remote",
    type: "Full-time",
  },
  {
    title: "Data Analytics Consultant",
    department: "Data Analytics",
    location: "Remote",
    type: "Contract",
  },
];

const perks = [
  { icon: HeartPulse, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage." },
  { icon: Plane, title: "Flexible Time Off", description: "Generous PTO plus company-wide wellness days." },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual stipend for courses, certifications, and conferences." },
  { icon: TrendingUp, title: "Growth Paths", description: "Clear career ladders and mentorship at every level." },
];

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-24 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.07]" />
        <GradientBlob className="h-96 w-96 bg-sky-accent-2/30 -top-20 -right-20" />
        <Container className="relative">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-accent">
              Join Our Team
            </span>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Build the future of enterprise technology with us
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-200">
              CAELUNA is home to engineers, strategists, and problem-solvers who care about
              doing meaningful work with people they respect.
            </p>
            <div className="mt-8">
              <Button href="#open-roles">View Open Roles</Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Life at CAELUNA"
            title="Benefits that support your whole life"
            description="We invest in our people the same way we invest in our clients — for the long term."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <Reveal key={perk.title} variant="up" delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <perk.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1.5 font-display text-base font-semibold text-navy-900">
                    {perk.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-navy-500">{perk.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="open-roles" className="bg-navy-50/50 py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            title="Find your next opportunity"
            description="We're always looking for talented people to join our growing team."
          />
          <div className="mt-14 flex flex-col gap-4">
            {openRoles.map((role, index) => (
              <Reveal key={role.title} variant="up" delay={index * 0.05}>
                <div className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-white">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy-900">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-navy-500">{role.department}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-navy-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" /> {role.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button href="/#contact" variant="secondary" className="w-full sm:w-fit">
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
