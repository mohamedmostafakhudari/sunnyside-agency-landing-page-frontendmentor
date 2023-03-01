import React from "react";

export default function Testimonial({ imgSrc, name, role, text }) {
  return (
    <div className="flex flex-col items-center md:max-w-[250px]">
      <div className="w-24">
        <img
          src={`./assets/images/${imgSrc}.jpg`}
          alt={name}
          className="rounded-full object-contain object-center"
        />
      </div>
      <p className="text-veryDarkGrayishBlue text-lg text-center py-10 md:min-w-[34ch]">
        {text}
      </p>
      <div className="text-center space-y-2">
        <span className="font-fraunces text-2xl font-extrabold block">
          {name}
        </span>
        <span className="text-grayishBlue block">{role}</span>
      </div>
    </div>
  );
}
