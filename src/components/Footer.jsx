import React from "react";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";
const footerLinks = ["About", "Services", "Projects"];
const socialLinks = [
  {
    imgSrc: "icon-facebook.svg",
    url: "#",
  },
  {
    imgSrc: "icon-instagram.svg",
    url: "#",
  },
  {
    imgSrc: "icon-twitter.svg",
    url: "#",
  },
  {
    imgSrc: "icon-pinterest.svg",
    url: "#",
  },
];
export default function Footer() {
  return (
    <footer className="bg-darkModerateCyan bg-opacity-60 py-14 relative">
      <div className="container mx-auto px-6 md:p-0">
        <h2 className="text-4xl font-fraunces font-extrabold text-darkDesaturatedCyan text-center">
          sunnyside
        </h2>
      </div>
      <div className="mt-10 text-darkDesaturatedCyan text-lg">
        <ul className="flex items-center justify-center gap-8 md:gap-16">
          {footerLinks.map((link) => (
            <FooterLink key={link} link={link} />
          ))}
        </ul>
      </div>
      <div className="mt-20">
        <ul className="flex items-center justify-center gap-8">
          {socialLinks.map(({ imgSrc, url }) => (
            <SocialLink key={url} imgSrc={imgSrc} url={url} />
          ))}
        </ul>
      </div>
      <div className="absolute w-full bottom-0 text-center">
        <p className="text-darkDesaturatedCyan flex items-center justify-center gap-2">
          <div className="text-2xl">&copy;</div>
          <div className="text-lg">Mohamed Mostafa</div>
        </p>
      </div>
    </footer>
  );
}
