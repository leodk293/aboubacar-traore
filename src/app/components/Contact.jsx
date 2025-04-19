"use client";
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-20 bg-purple-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3" size={20} />
                <p
                  className="cursor-pointer hover:underline"
                  onClick={() => copyToClipboard("aboubatraore04@gmail.com")}
                >
                  aboubatraore04@gmail.com
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href="https://github.com/leodk293"
                  className="hover:text-purple-300 transition-colors flex items-center"
                >
                  <Github className="mr-1" size={20} /> GitHub
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/aboubacar-traore-495736252"
                  className="hover:text-purple-300 transition-colors flex items-center"
                >
                  <Linkedin className="mr-1" size={20} /> LinkedIn
                </Link>
              </div>
            </div>
            {copied && (
              <div className="mt-3 text-sm bg-purple-900 py-1 px-3 rounded-md inline-block">
                Email copied to clipboard!
              </div>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full p-3 rounded-lg bg-purple-900 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full p-3 rounded-lg bg-purple-900 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-purple-900 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-800 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            <span className=" mt-4 font-bold text-green-700 italic">
              {result}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
