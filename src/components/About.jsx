import React from "react";

import aboutBg from "../assets/about-bg.png"

const About = React.forwardRef((props, ref) => {
  return (
    < >
      <div id="About" style={{ backgroundImage: `url(${aboutBg})` }} className="mt-0 bg-cover bg-no-repeat bg-center h-screen w-screen flex items-center justify-center ">
        <div className="">
        <div className="details mx-14 bg-transparent text-gray">
        <h1 className="text-4xl from-neutral-900">Hello,I'm</h1>
          <h1 className="text-6xl from-neutral-900">Shivam Kumar</h1>
          <p className="text-2xl mt-4 font-semibold">A Bit About Me</p>
          <p className="whitespace-pre-line text-base font-medium  from-neutral-900 mt-3">
            A passionate Fullstack and Software Developer currently pursuing
            {"\n"} a Master of Computer Applications with a specialization in
            Cloud {"\n"}Computing and DevOps. With a dynamic skill set and an
            insatiable{"\n"} curiosity, I'm committed to pushing the boundaries
            of technology.
          </p>
          

          <div className="social-account ">
            <ul className="flex mt-3 text-3xl" >
              <li className="m-2">
                <a className="border-2 border-black block rounded-full relative overflow-hidden  hover:text-white hover:border-white hover:bg-black hover:opacity-[0.8]" href="https://github.com/shivamkumar9969">
                  <i className="fa-brands fa-github p-1 "></i>
                </a>
              </li>

              <li className="m-2">
                <a className="border-2 border-solid border-black block rounded-full relative overflow-hidden hover:border-white hover:text-white hover:bg-[#0077b5] hover:opacity-[0.8]" href="https://www.linkedin.com/in/shivam-kumar-7b896a254/">
                  <i className="fa-brands fa-linkedin p-1"></i>
                </a>
              </li>
              <li className="m-2">
                <a className="border-2 border-solid border-black block rounded-full relative overflow-hidden hover:border-white hover:text-white hover:bg-gradient-to-br hover:from-red-500 hover:to-blue-500 " href="https://www.instagram.com/itz_shiv___/">
                  <i className="fa-brands fa-instagram p-1"></i>
                </a>
              </li >

              <li className="m-2">
                <a className="border-2 border-solid border-black block rounded-full relative overflow-hidden hover:border-white hover:text-white hover:bg-[#4267B2] hover:opacity-[.8] " href="https://www.facebook.com/profile.php?id=100011586043603">
                  <i className="fa-brands fa-facebook p-1"></i>
                </a>
              </li>

              <li className="m-2">
                <a className="border-2 border-solid border-black block rounded-full relative overflow-hidden hover:border-white  hover:text-white hover:bg-[#1DA1F2] hover:opacity-[.8]" href="https://twitter.com/shivamkumar9969">
                  <i className="fa-brands fa-twitter p-1"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="animated-container sm:animate-none">
          <img
            className=" animated-image h-96 w-96 bg-cover"
            src={Pic5}
            alt="Profile"
          />
        </div> */}
        </div>
      </div>

    </>
  );
})

export default About;
