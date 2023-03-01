import React from "react";
import Testimonials from "./Testimonials";
export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="uppercase text-lg font-fraunces font-extrabold text-grayishBlue tracking-[4px] text-center md:text-xl">
          client testimonials
        </h2>
        <Testimonials />
      </div>
    </section>
  );
}
