import { useEffect } from "react";
import Container from "../components/ui/Container";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white pb-24 pt-40">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-navy-900">Privacy Policy</h1>
        <p className="mt-3 text-sm text-navy-400">Placeholder document — last updated for demo purposes only.</p>

        <div className="mt-10 flex flex-col gap-8 text-navy-600">
          <p>
            This Privacy Policy is a placeholder for the CAELUNA demo website and will be
            replaced with a final, legally reviewed policy prior to launch.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Information We Collect
            </h2>
            <p>
              We may collect information you provide directly, such as your name, email
              address, and message contents when submitting our contact form.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              How We Use Information
            </h2>
            <p>
              Information submitted through this site is used solely to respond to inquiries
              and is not sold or shared with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Contact Us
            </h2>
            <p>
              Questions about this policy can be directed to hello@caeluna.com.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
