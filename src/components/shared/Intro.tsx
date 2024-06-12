import React from "react";
import Badges from "./Badges";
import Image from "next/image";
import RunningText from "./RunningText";

type IntroProps = {};

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <div className="pt-5 space-y-4">
      <div className="rounded-full w-fit overflow-hidden">
        <Image src="/dummy-pp.jpg" alt="profile" width={200} height={200} />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">Nabil Faturrahman</h1>
        <RunningText />
        <Badges />
      </div>
    </div>
  );
};

export default Intro;
