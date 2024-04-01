import { cn } from "@/lib/utils";
import React from "react";

type NFProps = {
  outline?: boolean;
};

const NF = ({ outline }: NFProps) => {
  return (
    <h1
      className={cn(
        "tracking-tighter font-bold",
        outline &&
          "rounded-full w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-black border bg-black text-white text-3xl"
      )}
    >
      NF
    </h1>
  );
};

export default NF;
