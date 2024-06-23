import React, { useState, useEffect, useMemo } from 'react';
import ShivamResume from '../assets/ShivamResume.pdf';
import './Nav.css'; 

const Nav = () => {
  const navLinks = useMemo(() => ["About", "Skills", "Experience", "Project", "Contact"], []); // Initialize navLinks with useMemo

  const [activePage, setActivePage] = useState(navLinks[0]);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false); // State to toggle mobile nav
  const [clickedLink, setClickedLink] = useState(null); // State to track the clicked link

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
    setClickedLink(content); // Set the clicked link state
    const sectionId = `${content}`;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileNavVisible(false); // Hide mobile nav after selection
    
    // Remove the clicked state after a short delay
    setTimeout(() => setClickedLink(null), 200); // 200ms delay
  };

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <>
      <div className="w-screen fixed top-0 m-0 z-10 h-14 bg-[#8b8b8b] font-medium">
        <div className="nav-custom text-white flex items-center justify-between h-full px-4 sm:px-10">
          <div className="nav-name font-extrabold cursor-default text-4xl mt-0 md:mt-2 sm:mt-2 sm:mx-4 md:pl-2 lg:pl-10">
            SK
          </div>
          <div className="hidden sm:flex items-center space-x-2 md:pl-20 lg:pl-72 lg:mr-0 sm:pr-16 xl:ml-72 sm:space-x-12 text-xl text-blue-50 md:mt-3 sm:mt-0 sm:p-0">
            {navLinks.map((nav) => (
              <button
                key={nav}
                onClick={() => handleNavItemClick(nav)}
                className={`relative ${
                  nav === activePage ? 'text-black' : clickedLink === nav ? 'text-black transient' : ''
                }`}
              >
                {nav}
                {nav === activePage && <div className="active-line"></div>}
              </button>
            ))}
          </div>
          <div className="hidden sm:block res text-white mt-2 text-lg sm:1xl md:lg:text-1xl xl:2xl:text-2xl sm-ml-0 sm:mr-10">
            <a href={ShivamResume} download="ShivamResume.pdf" className="flex items-center space-x-2">
              <i className="fa-solid fa-file-arrow-down px-2"></i>
              <span>Download CV</span>
            </a>
          </div>
          <div className="sm:hidden flex items-center pr-4">
            <button onClick={toggleMobileNav} className="text-2xl text-white">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isMobileNavVisible ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
          <div className="flex flex-col items-center justify-center space-y-4 h-full">
            {/* Close Button */}
            <button 
              onClick={toggleMobileNav} 
              className="absolute top-4 right-4 text-2xl text-white"
            >
              <i className="fa fa-times"></i> {/* FontAwesome close icon */}
            </button>

            {navLinks.map((nav) => (
              <button
                key={nav}
                onClick={() => handleNavItemClick(nav)}
                className={`w-full text-center py-4 ${nav === activePage ? 'bg-gray-400 text-black' : clickedLink === nav ? 'text-black transient' : ''}`}
              >
                {nav}
              </button>
            ))}
            <a href={ShivamResume} download="ShivamResume.pdf" className="flex items-center space-x-2 py-4">
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-14 fixed h-1 w-screen flex justify-between items-center bg-black">
        <div className="h-full w-2/5 bg-black"></div>
        <div className="h-full w-1/5 bg-white"></div>
        <div className="h-full w-2/5 bg-black"></div>
      </div>
    </>
  );
};

export default Nav;
