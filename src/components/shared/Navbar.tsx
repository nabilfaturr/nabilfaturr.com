import React from "react";
import { navigationLinks } from "@/constant";
import NextLink from "next/link";
import Logo from "./Logo";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="max-w-2xl md:px-0 px-3 mx-auto flex justify-between">
      <Logo />
      {/* <ul className="flex justify-between gap-16">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <NextLink href={link.href} className="text-slate-200">
              {link.name}
            </NextLink>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
