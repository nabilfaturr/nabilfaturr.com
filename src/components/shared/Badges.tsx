import { badges } from "@/constant";
import React from "react";

type BadgesProps = {
  project?: boolean;
  tools?: string[];
};

const Badges: React.FC<BadgesProps> = ({ project, tools }) => {
  if (project) {
    return (
      <div className="flex flex-wrap items-center gap-1 py-1">
        {tools?.map((tool, idx) => (
          <p
            key={idx}
            className="text-sm font-medium bg-indigo-950 px-3 py-[2px] border border-slate-700 rounded-full"
          >
            {tool}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-[5px] py-1">
      {badges.map((badge, idx) => (
        <p key={idx} className="text-slate-500">
          {badge}
        </p>
      ))}
    </div>
  );
};

export default Badges;
