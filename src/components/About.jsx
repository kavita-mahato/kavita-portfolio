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
    <section id="about" className="py-16 text-gray-200">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_0.8fr] gap-8">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            First-year B.Tech student in Information Technology. I focus on
            strong fundamentals, clean code, and practical projects. Currently
            sharpening Java DSA while building modern, responsive UIs with
            HTML, CSS, and JavaScript.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">

            {[
              ["10+ Projects", "Hands-on learning through real builds"],
              ["200+ DSA", "Problems solved across platforms"],
              ["Frontend • Backend", "From UI to APIs"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-gray-700 rounded-xl p-4 text-center hover:-translate-y-1 hover:border-indigo-500 transition"
              >
                <h4 className="font-bold">{item[0]}</h4>
                <p className="text-sm text-gray-400 mt-1">{item[1]}</p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-slate-900/80 border border-gray-700 rounded-xl p-6 hover:-translate-y-1 hover:border-indigo-500 transition">

          <h3 className="text-xl font-bold mb-4">Current Focus</h3>

          <div className="flex flex-wrap gap-3">

            {[
              [faLayerGroup, "Java DSA"],
              [faSitemap, "Frontend Architecture"],
              [faServer, "Backend Development"],
              [faUsers, "Collaboration"],
            ].map(([icon, text], i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 border border-gray-600 text-sm font-semibold hover:border-indigo-500 hover:bg-gray-600 transition"
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