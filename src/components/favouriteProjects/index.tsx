import { PROJECTS } from "@/constants/constants";
import Image from "next/image";
import React from "react";
import PersonalProjects from "./project";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-3xl md:text-6xl  font-bold py-20 text-center md:text-left px-4 lg:px-0 text-gray-800 dark:text-gray-200">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-[2rem] px-4 lg:px-0">
          {/* Single card */}
          {PROJECTS.map((project) => (
            <PersonalProjects
              description={project.description}
              image={project.image}
              key={project.id}
              link={project.link}
              name={project.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
