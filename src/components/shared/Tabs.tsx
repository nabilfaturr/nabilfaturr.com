"use client";
import React from "react";
import ProjectCard from "./Card/ProjectCard";
import LocationCard from "./Card/LocationCard";

type TabsProps = {};

const Tabs: React.FC<TabsProps> = ({}) => {
  const [tabs, setTabs] = React.useState("project");
  return (
    <div>
      <div className="flex bg-gray-900 text-center p-1 my-4 rounded gap-2 font-medium shadow-xl">
        <button
          onClick={() => {
            setTabs("project");
          }}
          className={`w-1/2 py-2 px-1 rounded ${
            tabs === "project" && "bg-black/20"
          }`}
        >
          Project
        </button>
        <button
          onClick={() => {
            setTabs("aboutme");
          }}
          className={`w-1/2 py-2 px-1 rounded ${
            tabs === "aboutme" && "bg-black/20"
          }`}
        >
          About
        </button>
      </div>
      <div>
        {tabs === "project" && <ProjectTab />}
        {tabs === "aboutme" && <AboutTab />}
      </div>
    </div>
  );
};

const ProjectTab = () => {
  return <ProjectCard />;
};

const AboutTab = () => {
  return (
    <div>
      <LocationCard />
    </div>
  );
};

export default Tabs;
