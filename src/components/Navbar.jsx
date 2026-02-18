import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className='sticky top-0 z-1000 bg-[rgba(11,13,16,0.7)] backdrop-blur-md border-b border-white/10'>
          <div className="w-[95%] max-w-300 mx-auto flex items-center justify-between py-3.5">
              <a href="#top" aria-label="Kavita Mahato Home" className="inline-flex items-center gap-2.5 no-underline text-(--text)">
                <span className="w-9 h-9 grid place-items-center rounded-full bg-linear-to-br from-(--brand) to-(--brand-2) font-bold text-lg text-[#0b0d10]"> K </span>
                <span className="font-bold tracking-[0.2px]">PORTFOLIO</span>
              </a>

              <button
                aria-expanded="false"
                aria-controls="primaryNav"
                aria-label="Toggle navigation"
                className="hidden bg-transparent border-0 p-2 cursor-pointer"
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
                          href={`#${item}`}
                          className="font-medium text-(--muted) no-underline hover:text-(--text) transition-colors"
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