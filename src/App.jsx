import React from "react";
import Hero from "./components/Hero";
import Paket from "./components/Paket";
import Manfaat from "./components/Manfaat";
import Topik from "./components/Topik";
import BonusAndPricing from "./components/BonusAndPricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CTA from "./components/CTA";

const App = () => {
  return (
    <div className="max-w-sm mx-auto">
      <Hero />
      <Paket />
      <Manfaat />
      <Topik />
      <BonusAndPricing />
      <Testimonials />
      <Faq />
      <CTA />
    </div>
  );
};

export default App;
