import React from "react";
import Badges from "./Badges";
import Image from "next/image";
import RunningText from "./RunningText";

const textGradient = ``

type IntroProps = {};

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <div className="pt-5 flex flex-col gap-3">
      <div className="w-1/3 max-w-[160px] rounded-full overflow-hidden">
        <Image
          src="/dummy-pp.jpg"
          alt="profile"
          width={200}
          height={200}
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
          Nabil Faturrahman
        </h1>
        <RunningText />
        <Badges />
      </div>
    </div>
  );
};

export default Intro;
