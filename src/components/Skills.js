import React, { forwardRef } from "react";
import Pic1 from "../images/images.jpg";
import Pic2 from "../images/CSS3_logo.svg.png";
import Pic3 from "../images/JavaScript-logo.png";
import Pic4 from "../images/react-1-logo-png-transparent-removebg-preview.png";
import Pic5 from "../images/C.png";
import Pic6 from "../images/java.webp";
import Pic7 from "../images/python.png";
import Pic8 from "../images/sql-img-removebg.png";
import Pic9 from "../images/monogo.png";
import Pic10 from "../images/—Pngtree—php file document icon_4175828.png";
import Pic11 from "../images/linux.png";
import Pic12 from "../images/git.png";
import Pic13 from "../images/cc-removebg-preview.png";
import Pic14 from "../images/devops.svg";
import Pic15 from "../images/express-js.png";
import Pic16 from "../images/node.png";
import './Skills.css'
import bgpic from "../assets/skill-bg2.jpg";


const Skills = forwardRef((props, ref) => {
  return (
    <>
      <div id="Skills" style={{ backgroundImage: `url(${bgpic})` }} className="w-screen h-screen bg-cover bg-no-repeat bg-center ">

        <div className="w-screen h-16 bg-[#141810 "></div>
        <div className=" flex justify-center mt-6 text-xl sm:md:lg:xl:text-3xl sm:md:lg:xl:xl:mt-10 ">Skills And Technology</div>


        <div className="text-slate-500  text-sm md:lg:text-lg xl:2xl:text-lg flex flex-wrap items-center justify-center mt-4 sm:md:mr-24 sm:md:ml-24 lg:xl:mr-64 lg:xl:ml-64 ">

          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover  "
                src={Pic1}
                alt="HTML"
              />
              <div>
                <p>HTML</p>
              </div>
            </div>


          </div>


          <div className="  skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic2}
                alt="CSS"
              />
              <div>
                <p>css</p>
              </div>
            </div>
          </div>


          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28 flex flex-col items-center justify-center rounded text-center  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic3}
                alt="Java Script"
              />
            </div>
            <div>
              <p>Java Script</p>
            </div>

          </div>


          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover  "
                src={Pic4}
                alt="React JS"
              />
              <div>
                <p>React JS</p>
              </div>
            </div>
          </div>

          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic16}
                alt="Node JS"
              />
              <div>
                <p>Node JS</p>
              </div>
            </div>
          </div>
          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex flex-col items-center justify-center shadow-lg  m-4">

            <img
              className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
              src={Pic9}
              alt="MongoDB"
            />
            <div>
              <p>MongoDB</p>
            </div>

          </div>
          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex flex-col items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic15}
                alt="Node JS"
              />
              <div>
                <p>Express JS</p>
              </div>
            </div>
          </div>

          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover  "
                src={Pic5}
                alt="C++"
              />
              <div>
                <p>C++</p>
              </div>
            </div>
          </div>

          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover  "
                src={Pic7}
                alt="PYTHON"
              />
              <div>
                <p>Python</p>
              </div>
            </div>
          </div>



          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic6}
                alt="JAVA"
              />
              <div>
                <p>JAVA</p>
              </div>
            </div>
          </div>






          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover"
                src={Pic8}
                alt="SQL"
              />
              <div>
                <p>SQL</p>
              </div>
            </div>
          </div>




          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic10}
                alt="PHP"
              />
              <div>
                <p>PHP</p>
              </div>
            </div>
          </div>
          <div className="skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover"
                src={Pic11}
                alt="Linux"
              />
              <div>
                <p>Linux</p>
              </div>
            </div>
          </div>

          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover "
                src={Pic12}
                alt="Git"
              />
              <div>
                <p>Git</p>
              </div>
            </div>
          </div>

          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex flex-col items-center justify-center shadow-lg  m-4">

            <img
              className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover"
              src={Pic13}
              alt="Cloud Computing"
            />
            <div>
              <p>Cloud Computing</p>
            </div>

          </div>
          <div className=" skill h-16 w-16 sm:md:h-20 sm:md:w-20 lg:xl:h-28  lg:xl:w-28   rounded text-center flex items-center justify-center shadow-lg  m-4">
            <div>
              <img
                className="h-6 w-6 sm:md:h-10 sm:md:w-10 bg-cover"
                src={Pic14}
                alt="DevOps"
              />
              <div>
                <p>DevOps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Skills;
