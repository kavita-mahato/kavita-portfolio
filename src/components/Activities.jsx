import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandsHelping,
  faMedal,
  faExternalLinkAlt,
  faHeart,
  faUsers,
  faPeopleCarry,
  faComments,
  faHands,
  faUserShield,
  faUsersCog,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";

const Activities = () => {
  return (
    <section id="activities" className="py-12 md:py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Extracurricular
        </h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

          {/* ---------- NSS ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition">

            <div className="flex gap-3 sm:gap-4 mb-4">

              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-indigo-400 text-lg sm:text-xl mt-1 shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  NSS Volunteer
                </h3>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">

                  <a
                    href="https://nss.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400 transition text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    National Service Scheme
                  </a>

                  <span className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs">
                    Present
                  </span>

                </div>
              </div>

            </div>

            <p className="flex gap-3 text-gray-400 mb-4">
              <FontAwesomeIcon icon={faHeart} className="text-indigo-400 mt-1" />
              Contributing to cleanliness drives, awareness campaigns, and volunteering for social causes.
            </p>

            <div className="flex flex-wrap gap-2">

              {[
                { icon: faPeopleCarry, label: "Teamwork" },
                { icon: faComments, label: "Communication" },
                { icon: faHands, label: "Community Impact" },
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

          {/* ---------- NCC ---------- */}
          <div className="bg-slate-900/80 border border-gray-800 rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition">

            <div className="flex gap-3 sm:gap-4 mb-4">

              <FontAwesomeIcon
                icon={faMedal}
                className="text-indigo-400 text-lg sm:text-xl mt-1 shrink-0"
              />

              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  NCC Cadet — “A” Certificate Holder
                </h3>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">

                  <a
                    href="https://nccindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400 transition text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                    National Cadet Corps
                  </a>

                  <span>2018 – 2020</span>

                </div>
              </div>

            </div>

            <p className="flex gap-3 text-gray-400 mb-4">
              <FontAwesomeIcon icon={faUsers} className="text-indigo-400 mt-1" />
              Participated in training camps, drills, and leadership activities — building discipline, teamwork, and resilience.
            </p>

            <div className="flex flex-wrap gap-2">

              {[
                { icon: faUserShield, label: "Discipline" },
                { icon: faUsersCog, label: "Leadership" },
                { icon: faRunning, label: "Physical Fitness" },
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

export default Activities;