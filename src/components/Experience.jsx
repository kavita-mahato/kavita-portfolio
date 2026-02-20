import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGraduationCap,
  faMobileAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const Experience = () => {
  return (
    <section id="experience" className="py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="space-y-8">

          {/* ---------- EDUNET ---------- */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-[1.02] transition">

            <div className="flex gap-4 mb-4">

              <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-400 text-xl mt-1" />

              <div>
                <h3 className="text-xl font-semibold">
                  Front End Web Development Intern
                </h3>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-sm text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20">
                    Edunet Foundation
                  </span>

                  <span className="text-sm text-gray-500">
                    Aug ’25 – Sep ’25 • Remote
                  </span>
                </div>
              </div>

            </div>

            <ul className="space-y-3 text-gray-400">

              <li className="flex gap-3">
                <FontAwesomeIcon icon={faMobileAlt} className="text-indigo-400 mt-1" />
                Developed responsive, mobile-first web interfaces using modern JavaScript (ES6+), focusing on usability, cross-browser compatibility, and dynamic UI behavior.
              </li>

              <li className="flex gap-3">
                <FontAwesomeIcon icon={faCode} className="text-indigo-400 mt-1" />
                Built Taskmate, a task management app using HTML5, CSS3, and JavaScript with LocalStorage, including task categorization, priority tracking, search, and responsive layouts.
              </li>

            </ul>

          </div>

          {/* ---------- IHUB ---------- */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-[1.02] transition">

            <div className="flex gap-4 mb-4">

              <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400 text-xl mt-1" />

              <div>
                <h3 className="text-xl font-semibold">
                  Full Stack Web Developer Trainee
                </h3>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-sm text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20">
                    iHUB DivyaSampark @ IIT Roorkee
                  </span>
                  <span className="text-sm text-gray-500">Oct'24</span>
                </div>

              </div>

            </div>

            <ul className="space-y-3 text-gray-400">

              <li className="flex gap-3">
                <FontAwesomeIcon icon={faCode} className="text-indigo-400 mt-1" />
                Built responsive front-end interfaces while gaining exposure to backend concepts and API workflows.
              </li>

              <li className="flex gap-3">
                <FontAwesomeIcon icon={faGitAlt} className="text-indigo-400 mt-1" />
                Used Git and GitHub for version control and collaborative development.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
