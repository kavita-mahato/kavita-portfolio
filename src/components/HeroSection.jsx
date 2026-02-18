import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import kavitaImg from "../assets/kavita.jpg";
import leetcodeIcon from "../assets/leetcode-custom.svg";
import gfgIcon from "../assets/icons8-geeksforgeeks.svg";

const HeroSection = () => {
  return (
    <section className="py-20 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Hi, I'm Kavita Mahato
            <span className="ml-1 text-indigo-500 animate-pulse">|</span>
          </h1>

          <p className="text-indigo-400 font-semibold mb-2">
            MERN Stack Developer & IT Student
          </p>

          <p className="text-gray-400 mb-6 max-w-xl">
            Passionate about developing efficient and scalable web solutions
            using modern technologies. Currently pursuing B.Tech in IT while
            enhancing my skills in DSA and MERN development.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-4">

            <a
              href="#contact"
              className="bg-linear-to-r from-indigo-600 to-cyan-400 text-black font-bold px-5 py-2 rounded-lg shadow hover:brightness-110 transition"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1JKkU89Zj_yDXYY7dGEL5Wl-zDzZFdBnp/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-5 py-2 rounded-lg hover:bg-gray-800 transition flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-3">

            {[
              {
                link: "https://www.linkedin.com/in/kavita-mahato",
                icon: <FontAwesomeIcon icon={faLinkedinIn} />,
              },
              {
                link: "https://github.com/kavita-mahato",
                icon: <FontAwesomeIcon icon={faGithub} />,
              },
              {
                link: "https://leetcode.com/u/kavita-mahato/",
                icon: <img src={leetcodeIcon} alt="leetcode" className="w-5 h-5" />,
              },
              {
                link: "https://www.geeksforgeeks.org/user/kavita_mahato/",
                icon: <img src={gfgIcon} alt="gfg" className="w-5 h-5" />,
              },
              {
                link: "mailto:kavitamahato0835@gmail.com",
                icon: <FontAwesomeIcon icon={faEnvelope} />,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 hover:border-indigo-500 hover:-translate-y-1 transition"
              >
                {item.icon}
              </a>
            ))}

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full border-4 border-indigo-600 overflow-hidden shadow-xl hover:scale-105 transition">
            <img
              src={kavitaImg}
              alt="Kavita Mahato"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;