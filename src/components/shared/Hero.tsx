import React from "react";
import NF from "./nf";

const Hero = () => {
  const TEXTS = [
    {
      text: "amazing",
      className:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
    },
    {
      text: "stunning",
      className:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
    },
    {
      text: "fantastic",
      className:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
    },
    {
      text: "amazing",
      className:
        "bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
    },
  ];
  return (
    <div className="my-10 px-2 md:space-y-0 space-y-4">
      <div className="space-y-5 md:space-y-0 md:flex flex-row-reverse justify-between">
      <div>
          <NF outline />
        </div>
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-[600px]">
            {`I'm Nabil, a Full Stack Developer creating stunning websites using React.`}
          </h1>
        </div>
      </div>
      <p className="text-black/40">{"Indonesia, UTC/GMT +7"}</p>
    </div>
  );
};

export default Hero;
