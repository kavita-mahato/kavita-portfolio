import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faUniversity,
  faUtensils,
  faUsers,
  faGraduationCap,
  faExternalLinkAlt,
  faCheckCircle,
  faCode,
  faServer,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    icon: faGraduationCap,
    title: "LMS Platform",
    link: "https://lms-platform-inky.vercel.app/",
    date: "Feb '26",
    points: [
      {
        icon: faServer,
        text: "Full-stack LMS with authentication, payments, course CRUD, and educator dashboard.",
      },
      {
        icon: faCode,
        text: "Built using React, Express, MongoDB, Clerk auth, Stripe integration, and REST APIs.",
      },
    ],
  },

  {
    icon: faUsers,
    title: "DevTinder",
    link: "https://dev-tinder-application.vercel.app/",
    date: "Dec '25",
    points: [
      {
        icon: faCheckCircle,
        text: "Developer networking platform to discover, connect, and manage professional profiles.",
      },
      {
        icon: faCode,
        text: "MERN stack with JWT authentication, protected routes, and Redux state management.",
      },
    ],
  },

  {
    icon: faUtensils,
    title: "FOODIE",
    link: "https://foodie-react-app-nine.vercel.app/",
    date: "Nov '25",
    points: [
      {
        icon: faMobileAlt,
        text: "Responsive food delivery interface with search, filtering, and cart management.",
      },
      {
        icon: faCode,
        text: "React + Redux app demonstrating API integration and reusable UI components.",
      },
    ],
  },

  {
    icon: faTasks,
    title: "TaskMate",
    link: "https://kavita-mahato.github.io/Task_Manager/",
    date: "Sept '25",
    points: [
      {
        icon: faCheckCircle,
        text: "Task manager with add/delete/complete features and persistent local storage.",
      },
      {
        icon: faCode,
        text: "Built with HTML, CSS, and JavaScript for DOM logic and interaction handling.",
      },
    ],
  },

  {
    icon: faUniversity,
    title: "Bankist App",
    link: "https://bankistplus.netlify.app/",
    date: "June '25",
    points: [
      {
        icon: faMobileAlt,
        text: "Simulated banking app featuring login, transfers, loans, and transaction history.",
      },
      {
        icon: faCode,
        text: "Dynamic UI powered by JavaScript array manipulation and event-driven updates.",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-gray-200">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, i) => (

            <article
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:-translate-y-2 hover:border-indigo-500 transition duration-300"
            >

              {/* header */}
              <div className="flex items-start gap-4 mb-4">

                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 text-black">
                  <FontAwesomeIcon icon={project.icon} />
                </div>

                <div className="flex-1">

                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-indigo-400 transition"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Live Demo
                    </a>

                    <span>{project.date}</span>

                  </div>

                </div>

              </div>

              {/* description */}
              <ul className="space-y-3 text-sm text-gray-400">

                {project.points.map((point, idx) => (

                  <li key={idx} className="flex gap-3">

                    <FontAwesomeIcon
                      icon={point.icon}
                      className="text-indigo-400 mt-1"
                    />

                    <span>{point.text}</span>

                  </li>

                ))}

              </ul>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;