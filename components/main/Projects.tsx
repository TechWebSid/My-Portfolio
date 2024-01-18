import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project-1.png"
          title="Modern Shoe Website"
          description="Designed a clean user interface website using HTML CSS and GSAP."
        />
        <ProjectCard
          src="/project-2.png"
          title="Design System for Modern Web Designers"
          description="A react application with clean UI and animations "
        />
        <ProjectCard
          src="/project-3.png"
          title="Space Themed Portfolio"
          description="Made a personal portfolio using nextjs framer motion and threejs."
        />
      </div>
    </div>
  );
};

export default Projects;