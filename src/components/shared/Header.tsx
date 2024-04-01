import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Link from "next/link";
import NF from "./nf";

const Header = () => {
  return (
    <header className="def-width mx-auto px-4 py-2 place-center justify-between border rounded-lg h-[50px]">
      <Link href={"/"}>
        <h1 className="font-bold tracking-tight">NF</h1>
      </Link>
      <div>
        <Navbar />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
