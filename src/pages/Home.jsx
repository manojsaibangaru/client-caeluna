import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Industries from "../components/Industries/Industries";
import Technologies from "../components/Technologies/Technologies";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import Statistics from "../components/Statistics/Statistics";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo || location.hash?.replace("#", "");
    if (scrollTo) {
      const timeout = setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timeout);
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Technologies />
      <Process />
      <Testimonials />
      <Statistics />
      <FAQ />
      <Contact />
    </>
  );
}
