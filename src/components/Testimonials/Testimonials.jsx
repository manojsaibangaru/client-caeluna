import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../utils/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-navy-50/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Voices"
          title="Trusted by leaders who demand results"
          description="Hear directly from the executives and teams who've partnered with CAELUNA."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <Quote className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2 text-navy-100" />

          <div className="relative min-h-[19rem] overflow-hidden rounded-3xl border border-navy-100 bg-white p-8 shadow-lg sm:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mb-8 text-lg font-medium leading-relaxed text-navy-800 sm:text-xl">
                  &ldquo;{active.review}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-sky-accent-2 font-display text-lg font-bold text-white">
                    {active.avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-display text-base font-semibold text-navy-900">
                      {active.name}
                    </p>
                    <p className="text-sm text-navy-500">
                      {active.role}, {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-navy-500 hover:text-navy-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-navy-800" : "w-2 bg-navy-200"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy-200 text-navy-700 transition-colors hover:border-navy-500 hover:text-navy-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
