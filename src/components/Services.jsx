import React from "react";
import Service from "./Service";
const services = [
  {
    imgSrc: "image-graphic-design",
    title: "Graphic Design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
  },
  {
    imgSrc: "image-photography",
    title: "Photography",
    text: "Increase your credibility by getting the most stunning. high-quality photos that improve your business image.",
  },
];
export default function Services() {
  return (
    <>
      {services.map(({ imgSrc, title, text }) => (
        <Service key={title} title={title} text={text} imgSrc={imgSrc} />
      ))}
    </>
  );
}
