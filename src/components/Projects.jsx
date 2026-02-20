import React, { useState, useEffect } from "react";
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
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { lmsImg1, lmsImg2, lmsImg3, devtinderImg1, devtinderImg2, devtinderImg3, foodieImg1, foodieImg2, foodieImg3, taskmateImg1, taskmateImg2 } from "../assets/projects/projects";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const projects = [
  {
    images: [
      lmsImg1,
      lmsImg2,
      lmsImg3
    ],
    icon: faGraduationCap,
    title: "Edemy (Learning Management System)",
    link: "https://lms-platform-inky.vercel.app",
    github: "https://github.com/kavita-mahato/lms-platform.git",
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
    images: [
      devtinderImg1,
      devtinderImg2,
      devtinderImg3
    ],
    icon: faUsers,
    title: "DevTinder",
    link: "https://dev-tinder-application.vercel.app",
    github: "https://github.com/kavita-mahato/dev-tinder.git",
    date: "Jan '26",
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
    images: [
      foodieImg1,
      foodieImg2,
      foodieImg3
    ],
    icon: faUtensils,
    title: "FOODIE",
    link: "https://foodie-react-app-nine.vercel.app",
    github: "https://github.com/kavita-mahato/foodie-react-app.git",
    date: "Dec '25",
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
    images: [
      taskmateImg1,
      taskmateImg2,
      "https://placehold.co/600x400/1f2937/a5b4fc?text=TaskMate"
    ],
    icon: faTasks,
    title: "TaskMate",
    link: "https://kavita-mahato.github.io/task-manager/",
    github: "https://github.com/kavita-mahato/task-manager.git",
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
];

const ProjectCard = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextImage = () => {
    setCurrentImg((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (project.images.length <= 1 || isPaused) return;
    const intervalId = setInterval(nextImage, 1500);
    return () => clearInterval(intervalId);
  }, [project.images.length, isPaused]);

  return (
    <article className="bg-slate-900/80 border border-gray-800 rounded-xl p-6 hover:-translate-y-2 hover:border-indigo-500 transition duration-300 group overflow-hidden flex flex-col">

      {/* Outer Carousel Wrapper */}
      <div
        className="relative w-[calc(100%+3rem)] h-60 mb-6 -mx-6 -mt-6 overflow-hidden border-b border-gray-800 shrink-0 group/carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* The Sliding Track */}
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImg * 100}%)` }}
        >
          {project.images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="object-cover w-full h-full shrink-0 transition-transform duration-500 group-hover:scale-105"
            />
          ))}
        </div>

        {/* Gradient overlay (placed outside the sliding track so it stays still) */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-90 pointer-events-none z-0"></div>

        {/* Carousel Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-indigo-600 transition-all z-10"
              aria-label="Previous image"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover/carousel:opacity-100 hover:bg-indigo-600 transition-all z-10"
              aria-label="Next image"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentImg === idx ? "bg-indigo-400 w-4" : "bg-white/50 hover:bg-white"
                    }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 text-black shrink-0">
          <FontAwesomeIcon icon={project.icon} />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-gray-400">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-indigo-400 transition text-[14px] font-semibold text-indigo-600 bg-indigo-600/10 px-2 py-1 rounded-md border border-indigo-600/20"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              Live Demo
            </a>
            <a href={project.github} className="text-[14px] font-semibold text-violet-600 bg-violet-600/10 px-2 py-1 rounded-md border border-violet-600/20"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <span>{project.date}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-3 text-sm text-gray-400 mt-2">
        {project.points.map((point, idx) => (
          <li key={idx} className="flex gap-3">
            <FontAwesomeIcon icon={point.icon} className="text-indigo-400 mt-1 shrink-0" />
            <span>{point.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-14">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;