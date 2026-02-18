import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-gray-200">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-8">
          Get In Touch
        </h2>

        <div className="bg-[#0b1220] border border-gray-800 rounded-xl p-8 hover:scale-[1.02] transition">

          <p className="text-gray-400 mb-8 leading-relaxed">
            I’m always open to discussing new opportunities, collaborations,
            or just having a chat about technology and development!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Email Button */}
            <a
              href="mailto:kavitamahato0835@gmail.com"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Email Me
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/kavita-mahato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;