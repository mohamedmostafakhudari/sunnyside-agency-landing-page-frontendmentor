import React from "react";
import Testimonial from "./Testimonial";
const testimonials = [
  {
    imgSrc: "image-emily",
    name: "Emily R.",
    role: "Marketing Director",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    imgSrc: "image-thomas",
    name: "Thomas S.",
    role: "Chief Operating Officer",
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  },
  {
    imgSrc: "image-jennie",
    name: "Jennie F.",
    role: "Business Owner",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];
export default function Testimonials() {
  return (
    <div className="flex flex-col gap-20 items-center flex-wrap mt-12 mx-auto max-w-5xl md:flex-row md:items-end md:justify-between">
      {testimonials.map(({ imgSrc, name, role, text }) => (
        <Testimonial
          key={name}
          imgSrc={imgSrc}
          name={name}
          role={role}
          text={text}
        />
      ))}
    </div>
  );
}
