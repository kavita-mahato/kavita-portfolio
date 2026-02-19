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
    <section id="education" className="py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ---------- BTECH ---------- */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-[1.02] transition">

            <div className="flex gap-4 mb-4">

              <FontAwesomeIcon icon={faUniversity} className="text-indigo-400 text-xl mt-1" />

              <div>
                <h3 className="text-xl font-semibold">
                  B.Tech. in Information Technology
                </h3>
                
                <p className="text-sm text-gray-400">
                  UCET, Vinoba Bhave University
                </p>

                <p className="text-sm text-gray-500">
                  CGPA: 7.83 • Sep ’24 – Present
                </p>
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
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:scale-[1.02] transition">

            <div className="flex gap-4 mb-4">

              <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-400 text-xl mt-1" />

              <div>
                <h3 className="text-xl font-semibold">
                  12th (Intermediate) – CBSE
                </h3>

                <p className="text-sm text-gray-400">
                  Jawahar Navodaya Vidyalaya
                </p>

                <p className="text-sm text-gray-500">
                  82.2% • 2016 – 2023
                </p>
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
