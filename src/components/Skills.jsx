import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faGlobe,
  faServer,
  faTools,
  faTrophy,
  faUserCheck,
  faPlug,
  faDatabase,
  faLightbulb,
  faGraduationCap,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import {
  faJs,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

// local icons
import javaIcon from "../assets/java.svg";
import mongoIcon from "../assets/mongodb-seeklogo.svg";
import postmanIcon from "../assets/postman-icon.svg";
import leetcodeIcon from "../assets/leetcode.svg";

const skillsData = [
  {
    title: "Programming Languages",
    icon: faLaptopCode,
    items: [
      [javaIcon, "Java"],
      ["https://img.icons8.com/color/48/c-programming.png", "C"],
      ["https://img.icons8.com/color/48/c-plus-plus-logo.png", "C++"],
      [faJs, "JavaScript", "fa"],
    ],
  },
  {
    title: "Frontend",
    icon: faGlobe,
    items: [
      ["https://img.icons8.com/color/48/html-5--v1.png", "HTML"],
      ["https://img.icons8.com/color/48/css3.png", "CSS"],
      [faJs, "JavaScript", "fa"],
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    items: [
      [faNodeJs, "Node.js", "fa"],
      ["https://img.icons8.com/ios/50/express-js.png", "Express.js"],
      [mongoIcon, "MongoDB"],
      [faPlug, "REST APIs", "fa"],
      [faDatabase, "Mongoose", "fa"],
    ],
  },
  {
    title: "Developer Tools",
    icon: faTools,
    items: [
      [faGitAlt, "Git", "fa"],
      [faGithub, "GitHub", "fa"],
      ["https://img.icons8.com/color/48/visual-studio-code-2019.png", "VS Code"],
      [postmanIcon, "Postman"],
    ],
  },
  {
    title: "Coding Platforms",
    icon: faTrophy,
    items: [
      ["https://img.icons8.com/color/48/GeeksforGeeks.png", "GeeksforGeeks"],
      [leetcodeIcon, "LeetCode"],
    ],
  },
  {
    title: "Soft Skills",
    icon: faUserCheck,
    items: [
      [faLightbulb, "Technical Curiosity", "fa"],
      [faGraduationCap, "Self Learner", "fa"],
      [faPuzzlePiece, "Problem Solving", "fa"],
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-gray-200">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

          {skillsData.map((category, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:-translate-y-1 hover:border-indigo-500 transition"
            >

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 text-black">
                  <FontAwesomeIcon icon={category.icon} />
                </div>

                <h3 className="font-bold text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">

                {category.items.map(([icon, label, type], idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-full text-sm hover:border-indigo-500 hover:bg-gray-600 transition"
                  >
                    {type === "fa" ? (
                      <FontAwesomeIcon icon={icon} className="text-indigo-400" />
                    ) : (
                      <img src={icon} alt={label} className="w-5 h-5" />
                    )}

                    <span>{label}</span>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
