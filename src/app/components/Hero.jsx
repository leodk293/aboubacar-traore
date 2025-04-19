import React from "react";
import Image from "next/image";
import profileImage from "../../../public/profile-image.png";
import { Download } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Traore_Aboubacar.pdf";
    link.download = "Traore_Aboubacar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-purple-900 to-blue-900 py-20"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-violet-800 shadow-lg w-56 h-56">
            <Image
              width={100}
              height={100}
              src={profileImage}
              alt="Traore Aboubacar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h1 className="text-4xl text-violet-500 md:text-5xl font-bold mb-4">
            Hi, I'm Traore Aboubacar
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-purple-300">
            Software Engineering Student
          </h2>
          <p className="text-lg font-semibold text-violet-500 mb-8">
            I'm a passionate software engineering student with a focus on web
            development and machine learning. Currently pursuing my degree in
            Computer Science, I love building applications that solve real-world
            problems.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </a>
            <button
              onClick={handleDownload}
              className="border-2 cursor-pointer flex flex-row gap-2 text-white border-purple-500 bg-purple-500 px-6 py-2 rounded-full font-semibold"
            >
              <Download color="#ffffff" />
              <p> Download CV</p>
            </button>
            <a
              href="#projects"
              className="border-2 border-purple-500 text-purple-300 px-6 py-2 rounded-full font-semibold hover:bg-purple-900 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
