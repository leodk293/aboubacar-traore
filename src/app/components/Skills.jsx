import React from "react";

export default function Skills() {
  const skills = [
    "JavaScript",
    "Node.js",
    "React",
    "Redux",
    "Next.js",
    "TypeScript",
    "Php",
    "Java",
    "SQL",
    "Git",
    "Tailwind CSS",
    "Bootstrap",
    "MongoDB",
    "Express",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          My Skills
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-600 transition-colors"
              >
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
