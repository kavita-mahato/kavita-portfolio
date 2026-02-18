import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1013] border-t border-gray-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p>© {year} Kavita Mahato. All rights reserved.</p>
          <p className="text-sm mt-1">
            Built with passion and modern web technologies.
          </p>
        </div>

        {/* Back to top */}
        <a
          href="#top"
          className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition font-medium"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
          Back to top
        </a>

      </div>

    </footer>
  );
};

export default Footer;