"use client";

import React from "react";
import { runningText } from "@/constant";

const RunningText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % runningText.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300">
      {`I'm Nabil, a fullstack developer passionate about creating `}
      <span className={`${runningText[currentIndex].color}`}>
        {runningText[currentIndex].text}
      </span>{" "}
      websites using React.
    </p>
  );
};

export default RunningText;
