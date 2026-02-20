import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faGraduationCap,
  faMapMarkerAlt,
  faCheck,
  faCode,
  faSquareRootAlt,
  faAtom,
  faVial,
} from "@fortawesome/free-solid-svg-icons";
import { faJava, faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

const Education = () => {
  return (
    <section id="education" className="py-12 md:py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {/* ---------- BTECH ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-6 hover:scale-[1.02] transition">

            <div className="flex gap-4 mb-4">

              <FontAwesomeIcon icon={faUniversity} className="text-indigo-400 text-xl mt-1" />

              <div>
                <h3 className="text-xl font-semibold">
                  B.Tech. in Information Technology
                </h3>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-sm text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20">
                    UCET, Vinoba Bhave University
                  </span>

                  <span className="text-sm text-gray-500">
                    CGPA: 7.83 • Sep ’24 – Present
                  </span>
                </div>
              </div>

            </div>

            <p className="text-gray-400 mb-4 flex gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-indigo-400" />
              Hazaribagh, Jharkhand
            </p>

            <ul className="space-y-2 text-gray-400 mb-4">

              <li className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-indigo-400 mt-1" />
                Core focus on DSA and web technologies
              </li>

              <li className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-indigo-400 mt-1" />
                Built responsive projects with JS stack
              </li>

            </ul>

            <div className="flex flex-wrap gap-2">

              {[
                { icon: faCode, label: "DSA" },
                { icon: faJava, label: "Java" },
                { icon: faHtml5, label: "HTML5" },
                { icon: faCss3Alt, label: "CSS3" },
                { icon: faJs, label: "JavaScript" },
              ].map((tag, i) => (

                <span
                  key={i}
                  className="flex items-center gap-2 bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                >
                  <FontAwesomeIcon icon={tag.icon} />
                  {tag.label}
                </span>

              ))}

            </div>

          </div>

          {/* ---------- 12TH ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition">

            <div className="flex gap-3 sm:gap-4 mb-4">

              <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400 text-lg sm:text-xl mt-1 shrink-0" />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  12th (Intermediate) – CBSE
                </h3>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3">
                  <p className="text-xs sm:text-sm font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20 inline-block w-fit">
                    Jawahar Navodaya Vidyalaya
                  </p>

                  <p className="text-xs sm:text-sm text-gray-500">
                    82.2% • 2016 – 2023
                  </p>
                </div>
              </div>

            </div>

            <p className="text-gray-400 mb-4 flex gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-indigo-400" />
              Purulia, West Bengal
            </p>

            <ul className="space-y-2 text-gray-400 mb-4">

              <li className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-indigo-400 mt-1" />
                Strong mathematics & science foundation
              </li>

              <li className="flex gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-indigo-400 mt-1" />
                Leadership participation (NCC)
              </li>

            </ul>

            <div className="flex flex-wrap gap-2">

              {[
                { icon: faSquareRootAlt, label: "Math" },
                { icon: faAtom, label: "Physics" },
                { icon: faVial, label: "Chemistry" },
              ].map((tag, i) => (

                <span
                  key={i}
                  className="flex items-center gap-2 bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                >
                  <FontAwesomeIcon icon={tag.icon} />
                  {tag.label}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
