import React, { useState, useEffect } from 'react'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  
  const toggleNav = () => setOpen(!open);
  const closeNav = () => setOpen(false);
  const sectionIds = [
    "about","skills","experience","projects",
    "education","activities","contact"
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
  
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);

  return (
    <div>
        <header className='sticky top-0 z-1000 bg-[rgba(11,13,16,0.7)] backdrop-blur-md border-b border-white/10'>
          <div className="w-[95%] max-w-300 mx-auto flex items-center justify-between py-3.5">
              <a href="#top" aria-label="Kavita Mahato Home" className="inline-flex items-center gap-2.5 no-underline text-(--text)">
                <span className="w-9 h-9 grid place-items-center rounded-full bg-linear-to-br from-(--brand) to-(--brand-2) font-bold text-lg text-[#0b0d10]"> K </span>
                <span className="font-bold tracking-[0.2px]">PORTFOLIO</span>
              </a>

              <button
                onClick={toggleNav}
                aria-expanded={open}
                className="md:hidden"
              >
                <span className="block w-6 h-0.5 bg-(--text) my-1.25" />
                <span className="block w-6 h-0.5 bg-(--text) my-1.25" />
                <span className="block w-6 h-0.5 bg-(--text) my-1.25" />
              </button>

              <nav id="primaryNav">
                <ul className="flex items-center gap-4.5 list-none m-0 p-0">
                    {[
                      "about",
                      "skills",
                      "experience",
                      "projects",
                      "education",
                      "activities",
                      "contact"
                    ].map((item) => (
                      <li key={item}>
                        <a
                          key={item}
                          href={`#${item}`}
                          onClick={closeNav}
                          className="block py-2"
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
          </div>
        </header>
    </div>
  )
}

export default Navbar;