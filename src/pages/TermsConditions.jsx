import { useEffect } from "react";
import Container from "../components/ui/Container";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pb-24 pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-navy-900">Terms and Conditions</h1>

        <div className="mt-10 flex flex-col gap-8 text-navy-600">
          <p>Welcome to the website of Caeluna Technologies Private Limited.</p>

          <p>
            These Terms and Conditions govern your access to and use of our website and
            services. By accessing or using this website, you agree to comply with these Terms.
            If you do not agree, please discontinue use of the website.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Website Use
            </h2>
            <p>
              The information provided on this website is intended solely for general
              informational and business purposes relating to our recruitment, staffing,
              consulting, and technology services.
            </p>
            <p className="mt-3">You agree to use this website only for lawful purposes.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
