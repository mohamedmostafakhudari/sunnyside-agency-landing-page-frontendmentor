import React from "react";

export default function CTAService({ imgSrc, title, text }) {
  return (
    <div
      className={`flex flex-col min-h-screen md:flex-row md:items-center md:min-h-0 md:odd:flex-row-reverse`}
    >
      <div className="flex-1 max-h-lg">
        <picture className="">
          <source
            srcSet={`./assets/images/desktop/${imgSrc}.jpg`}
            media="(min-width:768px)"
          />
          <img
            src={`./assets/images/mobile/${imgSrc}.jpg`}
            alt={title}
            className="md:min-w-[400px]"
          />
        </picture>
      </div>
      <div className="grid place-items-center place-content-center flex-1 py-4">
        <div className="text-center mt-16 md:text-left">
          <h2 className="text-4xl font-extrabold font-fraunces md:max-w-[15ch] lg:text-5xl">
            {title}
          </h2>
          <p className="max-w-[32ch] mx-auto py-8 text-darkGrayishBlue md:ml-0 md:max-w-[44ch] lg:text-lg">
            {text}
          </p>
        </div>
        <div className="w-fit mx-auto relative md:ml-0">
          <div
            className={`absolute w-full h-[10px] ${
              title === "Transform your brand" ? "bg-yellow" : "bg-softRed"
            } bg-opacity-80 top-full -translate-y-[10px] -z-10 rounded-lg`}
          ></div>
          <a
            href="#"
            className="uppercase font-fraunces font-extrabold tracking-widest px-2"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
}
