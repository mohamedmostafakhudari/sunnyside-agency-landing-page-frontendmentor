import React from "react";
import NavItems from "./NavItems";
export default function Menu({ showMenu }) {
  return (
    <div
      className={`absolute bg-white w-full left-0 text-grayishBlue top-28 flex flex-col items-center p-10 gap-6 z-10 duration-300 ease-in-out ${
        showMenu ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute border-[13px] border-r-white border-l-transparent border-t-transparent border-b-white bottom-full right-0"></div>
      <NavItems />
      <button className="uppercase text-black text-[15px] bg-yellow p-4 px-8 rounded-[30px] font-fraunces">
        contact
      </button>
    </div>
  );
}
