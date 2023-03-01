import React from "react";
import useWindowSize from "../hooks/useWindowSize";
export default function Service({ imgSrc, title, text }) {
  const { width } = useWindowSize();
  const backgroundStyle = {
    backgroundImage: `url(./assets/images/${
      width < 768 ? "mobile" : "desktop"
    }/${imgSrc}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="flex-1 relative min-h-screen md:min-h-[600px]"
      style={backgroundStyle}
    >
      <div
        className={`${
          title === "Graphic Design"
            ? "text-darkDesaturatedCyan"
            : "text-darkBlue"
        } text-center absolute bottom-0 -translate-y-1/3 w-full`}
      >
        <h2 className={`text-4xl font-fraunces font-extrabold md:text-5xl`}>
          {title}
        </h2>
        <p className="py-6 max-w-[38ch] mx-auto md:text-lg">{text}</p>
      </div>
    </div>
  );
}
