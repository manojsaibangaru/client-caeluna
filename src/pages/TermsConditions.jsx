import { useEffect } from "react";
import Container from "../components/ui/Container";

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pb-24 pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-navy-900">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-navy-400">Placeholder document — last updated for demo purposes only.</p>

        <div className="mt-10 flex flex-col gap-8 text-navy-600">
          <p>
            These Terms &amp; Conditions are placeholder content for the CAELUNA demo website
            and will be replaced with a final, legally reviewed version prior to launch.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Use of This Site
            </h2>
            <p>
              This website is provided for demonstration purposes. Content, branding, and
              imagery are placeholders and do not represent a live commercial offering.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Intellectual Property
            </h2>
            <p>
              All placeholder content is provided for client review only and is not licensed
              for redistribution.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Contact Us
            </h2>
            <p>
              Questions about these terms can be directed to hello@caeluna.com.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
