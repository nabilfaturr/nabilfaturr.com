import React from "react";
import { navigationLinks } from "@/constant";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-16">
      {navigationLinks.map((link) => (
        <ul key={link.name}>
          <li>
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm text-gray-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default Navbar;
