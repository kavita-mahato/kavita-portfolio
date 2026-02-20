import React, { useState, useEffect } from 'react';
// Assuming you are using react-icons/fa
import { 
  FaUser, FaCode, FaBriefcase, 
  FaLaptopCode, FaGraduationCap, 
  FaAward, FaEnvelope 
} from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  
  const toggleNav = () => setOpen(!open);
  const closeNav = () => setOpen(false);

  // Mapping sections to their respective icons
  const navItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
    { id: "projects", label: "Projects", icon: <FaLaptopCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "activities", label: "Activities", icon: <FaAward /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className='sticky top-0 z-1000 bg-[rgba(11,13,16,0.7)] backdrop-blur-md border-b border-white/10'>
      <div className="w-[95%] max-w-300 mx-auto flex items-center justify-between py-3.5">
        <a href="#top" className="inline-flex items-center gap-2.5 no-underline text-white">
          <span className="w-9 h-9 grid place-items-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 font-bold text-lg text-[#0b0d10]"> K </span>
          <span className="font-bold tracking-[0.2px] text-lg">PORTFOLIO</span>
        </a>

        <nav id="primaryNav">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeNav}
                  className={`flex items-center gap-2 py-2 no-underline font-medium transition-colors duration-300
                    ${active === item.id ? 'text-white' : 'text-gray-500 hover:text-white/90'}`}
                >
                  <span className="text-sm">{item.icon}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;