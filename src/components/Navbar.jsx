import React, { useState, useEffect } from 'react';
// Assuming you are using react-icons/fa
import { 
  FaUser, FaCode, FaBriefcase, 
  FaLaptopCode, FaGraduationCap, 
  FaAward, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  
  const toggleNav = () => setOpen(!open);
  const closeNav = () => setOpen(false);

  // Handle smooth scroll navigation
  const handleNavClick = (e, itemId) => {
    e.preventDefault();
    const element = document.getElementById(itemId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    closeNav();
  };

  // Mapping sections to their respective icons
  const navItems = [
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaLaptopCode /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "experience", label: "Experience", icon: <FaBriefcase /> },
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('header')) {
        closeNav();
      }
    };

    if (open) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <header className='sticky top-0 z-1000 bg-[rgba(11,13,16,0.7)] backdrop-blur-md border-b border-white/10'>
        <div className="w-[95%] max-w-350 mx-auto flex items-center justify-between py-3.5 px-4">
          <a 
            href="#top" 
            onClick={(e) => handleNavClick(e, 'top')}
            className="inline-flex items-center gap-2.5 no-underline text-white hover:opacity-80 transition-opacity z-1001 relative"
          >
            <span className="w-9 h-9 grid place-items-center rounded-full bg-linear-to-br from-blue-500 to-purple-600 font-bold text-lg text-[#0b0d10]"> K </span>
            <span className="font-bold tracking-[0.2px] text-lg">PORTFOLIO</span>
          </a>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleNav();
            }}
            className="lg:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded p-2 transition-colors hover:bg-white/10 z-1001 relative flex items-center justify-center min-w-10 min-h-10"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            type="button"
          >
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav id="primaryNav" className="hidden lg:block">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
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

      {/* Mobile Navigation Menu - Outside header for proper z-index */}
      {open && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-999 top-15"
          onClick={closeNav}
          style={{ pointerEvents: 'auto' }}
        />
      )}
      <nav 
        className={`lg:hidden fixed top-15 left-0 right-0 bg-[rgba(11,13,16,0.98)] backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-in-out z-1001 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ 
          height: open ? 'calc(100vh - 60px)' : '0', 
          overflow: 'auto',
          visibility: open ? 'visible' : 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col list-none m-0 p-4">
          {navItems.map((item) => (
            <li key={item.id} className="border-b border-white/10 last:border-b-0">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-3 py-4 px-2 no-underline font-medium transition-colors duration-300
                  ${active === item.id ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;