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

        <div className="mt-10 flex flex-col gap-8 text-navy-600">
          <p>
            At Caeluna Technologies Private Limited (&ldquo;Caeluna Technologies,&rdquo;
            &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we
            are committed to protecting the privacy and confidentiality of the personal
            information entrusted to us. This Privacy Policy explains how we collect, use,
            disclose, store, and protect information obtained through our website and
            recruitment services.
          </p>

          <div>
            <h2 className="mb-2 font-display text-xl font-semibold text-navy-900">
              Contact Us
            </h2>
            <p>
              Plot-20, Ganesh Nagar, Vanasthalipuram, Hyderabad 500070
              <br />
              Email:{" "}
              <a href="mailto:info@caelunaglobal.com" className="text-navy-800 hover:text-navy-600">
                info@caelunaglobal.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
