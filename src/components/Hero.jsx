import React from "react";
import useWindowSize from "../hooks/useWindowSize";
export default function Hero({ children }) {
  const { width } = useWindowSize();
  const headerBackgroundImage = {
    backgroundImage: `url(./assets/images/${
      width < 768 ? "mobile" : "desktop"
    }/image-header.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <header className="min-h-[80vh]" style={headerBackgroundImage}>
      <div className="container mx-auto px-4 md:p-0">
        {children}
        <div className="text-white uppercase text-5xl font-fraunces text-center leading-tight font-extrabold tracking-widest relative mt-8">
          we are creatives
          <div className="absolute left-1/2 -translate-x-1/2 top-[150%] topBottomAnimation md:top-[270%]">
            <img src="./assets/images/icon-arrow-down.svg" alt="arrowDown" />
          </div>
        </div>
      </div>
    </header>
  );
}
