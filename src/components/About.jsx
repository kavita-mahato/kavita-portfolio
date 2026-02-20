import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faSitemap,
  faServer,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 text-gray-200">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">Dedicated B.Tech Information Technology student focused on Data Structures & Algorithms and MERN Stack Development. I prioritize strong fundamentals, clean code, and building scalable full-stack applications. Currently enhancing my problem-solving skills through Java-based DSA while developing modern, responsive web applications using MongoDB, Express.js, React, and Node.js.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {[
              ["10+ Projects", "Hands-on learning through real builds"],
              ["200+ DSA", "Problems solved across platforms"],
              ["Frontend • Backend", "From UI to APIs"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-gray-700 rounded-xl p-4 text-center hover:-translate-y-1 hover:border-indigo-500 transition"
              >
                <h4 className="font-bold text-sm sm:text-base">{item[0]}</h4>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{item[1]}</p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-slate-900/80 border border-gray-700 rounded-xl p-4 sm:p-6 hover:-translate-y-1 hover:border-indigo-500 transition">

          <h3 className="text-lg sm:text-xl font-bold mb-4">Current Focus</h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">

            {[
              [faLayerGroup, "Java DSA"],
              [faSitemap, "Frontend Architecture"],
              [faServer, "Backend Development"],
              [faUsers, "Collaboration"],
            ].map(([icon, text], i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-700 border border-gray-600 text-xs sm:text-sm font-semibold hover:border-indigo-500 hover:bg-gray-600 transition"
              >
                <FontAwesomeIcon
                  icon={icon}
                  className="text-indigo-400"
                />
                {text}
              </span>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;