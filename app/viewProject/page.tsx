"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Contact from "../contact/page";

const projectData = {
  "beyond-pixels": {
    title: "Beyond Pixels",
    description:
      "An AI-powered browser extension improving accessibility by generating context-aware image descriptions using Google Gemini API and reading them aloud with screen readers.",
    demo: "", 
    technologies: ["React", "JavaScript", "CSS", "Responsive Design"],
    sourceCode: "https://github.com/rebeccad71011/BeyondPixels",
  },
  "gdrive-aws": {
    title: "gdrive to AWS",
    description:
      "A utility tool that automates the migration of files from Google Drive to AWS S3, ensuring efficient, secure, and reliable cloud storage transfer.",
    demo: "", 
    technologies: ["Node.js", "Google Drive API", "AWS S3", "Auth0"],
    sourceCode: "", 
  },
  "My Schedules": {
    title: "My Schedules",
    description:
      "A personal task and schedule management web app that allows users to create, update, and track tasks, meetings, and events with reminders and calendar views.",
    demo: "", 
    technologies: ["Angular", "TypeScript", "Python", "Django", "PostgreSQL"],
    sourceCode: "https://github.com/sahajpatel008/mySchedules", 
  },
  "Billing and Inventory Management System": {
    title: "Billing and Inventory Management System",
    description:
      "A full-stack application built with Angular, C#, and MySQL to manage product inventory, billing, and customer records with secure login and real-time data updates.",
    demo: "", 
    technologies: ["C#", "MySQL"],
    sourceCode: "https://github.com/bhattrishita/billing-and-inventory-management-system", 
  },
  "FatJ": {
    title: "FatJ",
    description:
      "A website developed for a local café to showcase their menu, location, and contact details. Designed with a clean, responsive UI to enhance customer experience and online presence.",
    demo: "", 
    technologies: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/bhattrishita/fatj-website", 
  },
};

export default function ProjectDetail() {
  const searchParams = useSearchParams();
  const projectKey = searchParams.get("project");

  const project = projectData[projectKey as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#1E293B] font-sans flex flex-col justify-between">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-[#245673] mb-4">{project.title}</h1>
        <p className="text-lg text-[#475569] mb-8">{project.description}</p>

        {/* Demo Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#245673]">Project Demo</h2>
          {/* <div className="rounded-lg shadow-md overflow-hidden">
            <Image
              src={project?.demo}
              alt="Project Demo"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div> */}
          {project?.demo && (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Image
        src={project.demo}
        alt="Project Demo"
        width={800}
        height={450}
        className="w-full h-auto object-cover"
      />
    </div>
  )}
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <ul className="flex flex-wrap gap-3">
            {project.technologies.map((tech:any, index:any) => (
              <li
                key={index}
                className="bg-white px-4 py-2 rounded-full shadow text-sm text-[#1E293B]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Source Code Button */}
        {project.sourceCode && (
          <div className="mb-16">
            <Link href={project.sourceCode} target="_blank">
              {/* <button className="bg-[#93C5FD] hover:bg-[#60A5FA] text-white font-semibold px-6 py-2 rounded-md shadow transition cursor-pointer"> */}
              <button className="viewBtn">  
                View Source Code
              </button>
            </Link>
          </div>
        )}
      </main>

      <footer id="contact" className="w-full bg-black text-white py-15 px-4 flex justify-center">
        <div className="max-w-screen-lg w-full">
          <Contact />
        </div>
      </footer>
    </div>
  );
}
