import React from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Anime Web App 🍥",
      description:
        "Development of a website allowing users to discover the best anime and manga of the moment thanks to recommendations and rankings.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/leodk293/clone-anime",
      demo: "https://clone-anime-xi.vercel.app",
    },
    {
      title: "AI image generator 🤖",
      description:
        "Development of a web application integrating the Hugging Face API to generate images from a prompt via AI.",
      technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "API"],
      github: "https://github.com/leodk293/ai-image-creator",
      demo: "https://ai-image-creator-peach.vercel.app",
    },
    {
      title: "Company Website 🏬",
      description:
        "Development of a showcase website for a company, allowing it to present its services and facilitate contact with customers.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "https://github.com/leodk293/envol-technology",
      demo: "https://envol-technology.vercel.app",
    },
    {
      title: "Crypto currency web app 🪙",
      description:
        "Development of a web app displaying crypto details, as well as market rises and falls in real time",
      technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "API"],
      github: "https://github.com/leodk293/NexaCoins",
      demo: "https://nexa-coins.vercel.app",
    },
    {
      title: "Recipes App 🍔",
      description:
        "Development of a recipes app allowing users to browse among several recipes, filtering them by region, category and ingredients.",
      technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/leodk293/feastify",
      demo: "https://feastify-orpin.vercel.app",
    },
    {
      title: "Blog website 📝",
      description:
        "Development of a blog website allowing users to create, edit and delete posts, as well as comment on them.",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/leodk293/blog",
      demo: "https://neonthoughts.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-transform hover:translate-y-[-5px] border border-gray-700"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-purple-300 text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start space-x-4">
                  <Link
                    target="_blank"
                    href={project.github}
                    className="text-gray-300 hover:text-purple-400 flex items-center"
                  >
                    <Github size={18} className="mr-1" />
                    {/* <GitHub size={18}  /> Code */}
                  </Link>
                  {project.demo && (
                    <Link
                      target="_blank"
                      href={project.demo}
                      className="text-gray-300 hover:text-purple-400 flex items-center"
                    >
                      <ExternalLink size={18} className="mr-1" /> Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
