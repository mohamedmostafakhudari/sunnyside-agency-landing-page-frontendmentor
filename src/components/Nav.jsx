import React from "react";
import NavItems from "./NavItems";
import Menu from "./Menu";
import { useState } from "react";
export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="text-lg py-10 relative text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-40">
          <img src="./assets/images/logo.svg" alt="logo" className="w-full" />
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <NavItems />
          <button className="uppercase bg-white text-black p-3 px-8 rounded-[30px] text-[16px] font-fraunces duration-200 ease-in-out hover:bg-opacity-30 hover:text-white">
            contact
          </button>
        </div>
        <div className="md:hidden">
          <div onClick={() => setShowMenu((prev) => !prev)} className="">
            <img src="./assets/images/icon-hamburger.svg" alt="hamburgerIcon" />
          </div>
          <Menu showMenu={showMenu} />
        </div>
      </div>
    </nav>
  );
}
