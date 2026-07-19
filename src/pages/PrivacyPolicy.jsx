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
        </div>
      </Container>
    </section>
  );
}
