import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1013] border-t border-gray-800 text-gray-400">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-4">

        {/* Copyright */}
        <div className="text-center md:text-center">
          <p>© {year} Kavita Mahato. All rights reserved.</p>
          <p className="text-sm mt-1">
            Built with passion and modern web technologies.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;