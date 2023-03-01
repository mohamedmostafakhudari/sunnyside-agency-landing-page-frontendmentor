import React from "react";
import Services from "./Services";
import CTAServices from "./CTAServices";
export default function ServicesSection() {
  return (
    <section>
      <div className="flex flex-col gap-12 md:gap-0">
        <div className="flex flex-col gap-12 md:gap-0">
          <CTAServices />
        </div>
        <div className="flex flex-col md:flex-row">
          <Services />
        </div>
      </div>
    </section>
  );
}
