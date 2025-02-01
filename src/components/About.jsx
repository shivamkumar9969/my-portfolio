import React, { useState, useEffect } from "react";
import aboutBg from "../assets/about-bg.png";

const About = React.forwardRef((props, ref) => {
  const [activeLink, setActiveLink] = useState(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveLink((prevActiveLink) => (prevActiveLink + 1) % 5);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const getActiveClasses = (index) => {
    // Return additional classes if the link is currently active
    if (index === activeLink) {
      switch (index) {
        case 0:
          return "text-white border-white bg-black opacity-[0.8]";
        case 1:
          return "text-white border-white bg-[#0077b5] opacity-[0.8]";
        case 2:
          return "text-white border-white bg-gradient-to-br from-red-500 to-blue-500";
        case 3:
          return "text-white border-white bg-[#4267B2] opacity-[.8]";
        case 4:
          return "text-white border-2 border-white bg-[#1DA1F2] opacity-[.8]";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <div
      id="About"
      style={{ backgroundImage: `url(${aboutBg})` }}
      className="mt-0 bg-cover bg-no-repeat bg-center h-screen w-screen flex items-center justify-center"
    >
      <div className="">
        <div className="details mx-14 bg-transparent text-gray">
          <h1 className="text-4xl from-neutral-900">Welcome to My Portfolio</h1>
          <h2 className="text-6xl from-neutral-900">I'm Shivam Kumar</h2>
          <p className="text-2xl mt-4 font-semibold">About Me</p>

          <p className="whitespace-normal md:whitespace-pre-line text-base font-medium  from-neutral-900 mt-3">
            A passionate Full-Stack and Software Developer completed a Master{"\n"} of Computer Applications with a specialization in Cloud Computing{"\n"} and DevOps. With a dynamic skill set and an insatiable curiosity, I'm{"\n"} committed to pushing the boundaries of technology.
          </p>
          <div className="social-account">
            <ul className="flex mt-3 text-4xl">
              {[
                {
                  href: "https://github.com/shivamkumar9969",
                  icon: "fa-github",
                },
                {
                  href: "https://www.linkedin.com/in/shivam-kumar-7b896a254/",
                  icon: "fa-linkedin-in",
                },
                {
                  href: "https://www.instagram.com/mainshivhoon_/",
                  icon: "fa-instagram",
                },
                {
                  href: "https://www.facebook.com/profile.php?id=100011586043603",
                  icon: "fa-facebook",
                },
                {
                  href: "https://twitter.com/shivamkumar9969",
                  icon: "fa-twitter",
                },
              ].map((link, index) => (
                <li key={index} className="m-2">
                  <a
                    className={` border-black block rounded-full relative overflow-hidden p-1
                      hover:text-white hover:border-white
                      ${index === 0 ? "hover:bg-black hover:opacity-[0.8]" : ""}
                      ${index === 1 ? "hover:bg-[#0077b5] hover:opacity-[0.8]" : ""}
                      ${index === 2 ? "hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-500" : ""}
                      ${index === 3 ? "hover:bg-[#4267B2] hover:opacity-[.8]" : ""}
                      ${index === 4 ? "broder-2 hover:bg-[#1DA1F2] hover:opacity-[.8]" : ""}
                      ${getActiveClasses(index)}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa-brands ${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
