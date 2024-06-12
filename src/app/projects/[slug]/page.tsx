import { selectedProjects } from "@/constant";
import React from "react";

type SubProjectPageProps = {
  params: { slug: string };
};

const SubProjectPage = ({ params }: SubProjectPageProps) => {
  const { slug } = params;

  const project = selectedProjects.filter(
    (project) => project.siteUrl === `/${slug}`
  );

  if (project.length === 0)
    return (
      <div className="flex h-[calc(100vh-120px)] justify-center items-center text-center">
        <h1 className="text-xl font-bold">Sorry, Project not found</h1>
      </div>
    );

  return <div>{slug}</div>;
};

export default SubProjectPage;
