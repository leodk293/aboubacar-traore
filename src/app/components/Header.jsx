"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link target="_blank" href={"https://www.linkedin.com/in/aboubacar-traore-495736252"}>
          <h1 className="text-lg font-bold text-purple-800 md:text-2xl">
            Traore Aboubacar
          </h1>
        </Link>

        <button
          className="lg:hidden text-purple-800 hover:text-purple-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:block text-purple-800 font-bold">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-purple-400 transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-800 text-purple-800 font-bold">
          <ul className="flex flex-col px-4 pb-4">
            <li className="py-2 border-b border-gray-700">
              <a
                href="#about"
                className="block hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li className="py-2 border-b border-gray-700">
              <a
                href="#skills"
                className="block hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li className="py-2 border-b border-gray-700">
              <a
                href="#projects"
                className="block hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li className="py-2 border-b border-gray-700">
              <a
                href="#education"
                className="block hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Education
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                className="block hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
