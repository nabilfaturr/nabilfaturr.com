import React from "react";
import Navbar from "./Navbar";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className="fixed top-0 left-0 backdrop-blur border-b border-white/10 flex-inline justify-center py-3">
      <Navbar />
    </header>
  );
};

export default Header;
