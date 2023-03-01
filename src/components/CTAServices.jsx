import React from "react";
import CTAService from "./CTAService";
const ctaServices = [
  {
    imgSrc: "image-transform",
    title: "Transform your brand",
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  },
  {
    imgSrc: "image-stand-out",
    title: "Stand out to the right audience",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriter, we'll build and extend your brand in digital places",
  },
];
export default function CTAServices() {
  return (
    <>
      <>
        {ctaServices.map(({ imgSrc, title, text }) => (
          <CTAService key={title} title={title} text={text} imgSrc={imgSrc} />
        ))}
      </>
    </>
  );
}
