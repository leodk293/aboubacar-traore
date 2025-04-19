import React from "react";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Aboubacar Traore. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              target="_blank"
              className=" text-white border border-white bg-transparent p-1 rounded-full transition-colors"
              href={"https://github.com/leodk293"}
            >
              <Github size={20} />
            </Link>
            <Link
              target="_blank"
              className=" text-white border border-white bg-transparent p-1 rounded-full transition-colors"
              href={"https://www.linkedin.com/in/aboubacar-traore-495736252"}
            >
              <Linkedin size={20} />
            </Link>
            <Link
              target="_blank"
              className=" text-white border border-white bg-transparent p-1 rounded-full transition-colors"
              href={"https://x.com/Aboubac48530295"}
            >
              <Twitter size={20} />
            </Link>
            <Link
              target="_blank"
              className=" text-white border border-white bg-transparent p-1 rounded-full transition-colors"
              href={"https://www.youtube.com/@aboubacartraore5831"}
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
