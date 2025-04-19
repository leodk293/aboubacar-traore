import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Education
        </h2>
        <div className="max-w-4xl flex flex-col gap-1 text-white mx-auto">
          <h1 className=" text-purple-600 font-extrabold text-3xl">
            ISGA Marrakech – 4th year in Computer Science
          </h1>
          <h1 className=" text-3xl text-purple-800 mt-3 font-bold">Skills & Training</h1>
          <ul className=" flex flex-col gap-2 mt-3">
            <li className=" font-medium text-lg">
              <span className=" font-bold text-gray-200 text-2xl">- Web Development :</span> Building responsive and dynamic web applications
              using modern frameworks.
            </li>
            <li className=" font-medium text-lg">
              <span className=" font-bold text-gray-200 text-2xl">- Databases :</span> Designing, querying, and optimizing SQL and NoSQL
              databases.
            </li>
            <li className=" font-medium text-lg">
              <span className=" font-bold text-gray-200 text-2xl">- System Administration :</span> Configuring and maintaining servers and
              networks
            </li>
            <li className=" font-medium text-lg">
              <span className=" font-bold text-gray-200 text-2xl">- Artificial Intelligence :</span> Exploring machine learning models and
              AI-driven solutions.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
