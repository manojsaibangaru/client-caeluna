import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { faqs } from "../../utils/data";

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-semibold text-navy-900 sm:text-lg">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-navy-500">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-navy-50/50 py-24 sm:py-32">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers to common questions"
          description="Can't find what you're looking for? Reach out to our team directly and we'll be happy to help."
        />

        <div className="mt-14 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} variant="up" delay={index * 0.05}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
