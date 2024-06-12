import React from "react";
import { selectedProjects } from "@/constant";
import Image from "next/image";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import Badges from "../Badges";

const ProjectCard: React.FC = ({}) => {
  const projects = selectedProjects;
  return (
    <div className="flex flex-col gap-4  h-[60vh] overflow-y-scroll pb-20">
      {projects.map((project, idx) => (
        <div key={idx} className="project-card-container">
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 rounded-xl bg-tertiary p-1.5 shadow-md"
          >
            <path
              d="M244.379 48.435L121.911 50.04l.754 2.614L2.476 469.189h122.479l58.949-204.299 58.511 202.779-.525 1.766h122.479L487 48.435H364.369l-59.555 209.449L245.37 51.87l.269-.933h-.538l-.722-2.502z"
              fill="url(#paint0_linear_6_6)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_6_6"
                x1="421.5"
                y1="48"
                x2="69.0953"
                y2="468.661"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1A3B8D"></stop>
                <stop offset="1" stopColor="#206E86"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1>{project.title}</h1>
              <p className="text-slate-400">{project.shortDescription}</p>
              <Badges project tools={project.techStack} />
            </div>
            <div className="flex gap-2">
              <Link href={project.liveUrl}>
                <GithubIcon className="project-card-button" />
              </Link>
              <Link href={project.liveUrl}>
                <ExternalLinkIcon className="project-card-button" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
