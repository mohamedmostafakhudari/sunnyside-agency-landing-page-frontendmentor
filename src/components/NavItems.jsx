import React from "react";
import NavItem from "./NavItem";
const navItems = ["About", "Services", "Projects"];
export default function NavItems() {
  return (
    <ul className="flex flex-col text-lg gap-6 md:gap-12 md:flex-row">
      {navItems.map((navItem) => (
        <NavItem key={navItem} title={navItem} />
      ))}
    </ul>
  );
}
