import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { technologies } from "../../utils/data";

export default function Technologies() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-navy-50/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Tech Stack"
          title="Powered by the tools enterprises trust"
          description="We work across the modern cloud, data, and application stack — choosing the right tool for the outcome, not the trend."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <Reveal key={tech} variant="up" delay={(index % 8) * 0.06}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg hover:border-sky-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-sky-accent-2 font-display text-sm font-bold text-white">
                  {tech
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="text-sm font-semibold text-navy-800">{tech}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
