import React, { useState, useEffect, useMemo } from 'react';
import ShivamResume from '../assets/ShivamResume.pdf';
import './Nav.css'; 

const Nav = () => {
  const navLinks = useMemo(() => ["About", "Skills", "Project", "Contact"], []); // Initialize navLinks with useMemo

  const [activePage, setActivePage] = useState(navLinks[0]); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((nav) => document.getElementById(nav));
      const scrollPosition = window.scrollY;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition + 100) {
          setActivePage(navLinks[i]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navLinks]); 

  const handleNavItemClick = (content) => {
    setActivePage(content);
    const sectionId = `${content}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="w-screen fixed m-0 z-10 h-14 bg-[#8b8b8b] font-medium">
        <div className="nav-custom text-white flex items-center justify-between"> {/* Updated class to include justify-between */}
          <div className=" nav-name  font-extrabold cursor-default text-4xl mt-0 md:mt-2 sm:mt-2 sm:mx-4 md:pl-2 lg:pl-10 flex items-center justify-center  ">
            SK
          </div>
          <nav className="flex items-center cursor-pointer space-x-2 md:pl-20 lg:pl-72 lg:mr-0 sm:pr-16 xl:ml-72 sm:space-x-12 text-xl text-blue-50 md:mt-3 sm:mt-0 sm:p-0 sm:flex-none">
            {navLinks.map((nav) => (
              <button
                key={nav}
                onClick={() => handleNavItemClick(nav)}
                className={nav === activePage ? 'active' : ''}
              >
                {nav}
                {nav === activePage && <div className="active-line"></div>} {/* Show the line below the active page */}
              </button>
            ))}
          </nav>
          <div className="res text-white mt-2 text-lg sm:1xl md:lg:text-1xl xl:2xl:text-2xl  sm-ml-0 sm:mr-10">
            <a href={ShivamResume} download="ShivamResume.pdf">
              <i className="fa-solid fa-file-arrow-down px-2"></i>
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 fixed h-1 w-screen flex justify-between items-center bg-black">
        <div className="h-full w-2/5 bg-black"></div> {/* Left black */}
        <div className="h-full w-1/5 bg-white"></div> {/* Middle white */}
        <div className="h-full w-2/5 bg-black"></div> {/* Right black */}
      </div>
    </>
  );
};

export default Nav;
