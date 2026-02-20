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
    <section id="experience" className="py-12 md:py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Experience
        </h2>

        <div className="space-y-6 sm:space-y-8">

          {/* ---------- EDUNET ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition">

            <div className="flex gap-3 sm:gap-4 mb-4">

              <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-400 text-lg sm:text-xl mt-1 shrink-0" />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Front End Web Development Intern
                </h3>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20 inline-block w-fit">
                    Edunet Foundation
                  </span>

                  <span className="text-xs sm:text-sm text-gray-500">
                    Aug '25 – Sep '25 • Remote
                  </span>
                </div>
              </div>

            </div>

            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">

              <li className="flex gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faMobileAlt} className="text-indigo-400 mt-1 shrink-0" />
                <span>Developed responsive, mobile-first web interfaces using modern JavaScript (ES6+), focusing on usability, cross-browser compatibility, and dynamic UI behavior.</span>
              </li>

              <li className="flex gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCode} className="text-indigo-400 mt-1 shrink-0" />
                <span>Built Taskmate, a task management app using HTML5, CSS3, and JavaScript with LocalStorage, including task categorization, priority tracking, search, and responsive layouts.</span>
              </li>

            </ul>

          </div>

          {/* ---------- IHUB ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition">

            <div className="flex gap-3 sm:gap-4 mb-4">

              <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400 text-lg sm:text-xl mt-1 shrink-0" />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Full Stack Web Developer Trainee
                </h3>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20 inline-block w-fit">
                    iHUB DivyaSampark @ IIT Roorkee
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">Oct'24</span>
                </div>

              </div>

            </div>

            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">

              <li className="flex gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faCode} className="text-indigo-400 mt-1 shrink-0" />
                <span>Built responsive front-end interfaces while gaining exposure to backend concepts and API workflows.</span>
              </li>

              <li className="flex gap-2 sm:gap-3">
                <FontAwesomeIcon icon={faGitAlt} className="text-indigo-400 mt-1 shrink-0" />
                <span>Used Git and GitHub for version control and collaborative development.</span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
