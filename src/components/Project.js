import "./Project.css";


import React from 'react';
import projectBg from "../assets/project-bg2.jpg";

const Project = React.forwardRef((props, ref) => {
  return (
    <div id="Project" className="bg-cover bg-no-repeat bg-center min-h-screen w-screen" style={{ backgroundImage: `url(${projectBg})` }}>
      <div className="w-screen h-16 bg-[#090909] lg:bg-[#131313]"></div>
      <div className="text-white text-2xl lg:xl:2xl:text-4xl flex items-center justify-center mt-3">
        <h1>Project</h1>
      </div>

      <div className="container   ">
        <div className="min-h-screen flex justify-center items-center">

          <div className="h-screen w-screen flex flex-wrap justify-evenly items-center max-w-screen-xl">
            <div className="project-box w-full sm:w-90 h-90 flex flex-col justify-center items-center overflow-auto m-1 ">
              <div className="text-slate-400 text-2xl">E-Commerce</div>
              <div className="m-3 text-sm text-justify">
                <p>Our e-commerce project is a comprehensive online shopping platform developed using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for database management. It offers users a seamless shopping experience with a user-friendly interface, efficient product browsing, and secure payment processing. Leveraging scalable solutions and robust technologies, our project aims to provide customers with an optimal shopping experience while facilitating easy product management for administrators.</p>
              </div>
              <a className="text-xs text-blue-700" href="https://github.com/shivamkumar9969/MernStackProject">https://github.com/shivamkumar9969/MernStackProject</a>
            </div>

            <div className="project-box w-full sm:w-90 h-90 flex flex-col justify-center items-center  overflow-auto m-1">
              <div className="text-2xl text-slate-400 ">Drive Body</div>
              <div className="m-3 text-sm text-justify">
                <p>Drive Buddy is a cutting-edge safety system designed to prevent accidents and safeguard lives. It operates in two key functions: Firstly, it detects signs of driver drowsiness, issuing timely warnings and even activating cruise control for added safety. Secondly, in the event of an accident, it promptly notifies nearby medical facilities, law enforcement, and the driver's emergency contacts, ensuring swift assistance and potentially saving lives. This innovative solution integrates IoT, Arduino, GPS, GSM, and various sensors for its efficient operation.</p>
              </div>
            </div>

            <div className="project-box w-full sm:w-90 h-90 flex flex-col justify-center items-center  overflow-auto m-1">
              <div className="text-2xl text-slate-400">Difference System</div>
              <div className="m-3 text-sm text-justify">
                <p>The "Defiance System" is a high-security solution designed for protecting military bases and other critical installations. It employs advanced technology like surveillance cameras, motion sensors, and access controls to monitor and secure the area. With real-time monitoring and alarm systems, it swiftly detects and responds to unauthorized activities, ensuring the safety of the premises.</p>
              </div>
            </div>

            <div className="project-box w-full sm:w-90 h-90 flex flex-col justify-center items-center  overflow-auto m-1">
              <div className="text-2xl text-slate-500">Education Administration</div>
              <div className="text-2xl text-slate-500">Management</div>
              <div className="m-3 text-sm text-justify">
                <p>The Education Administration Management System simplifies school operations, managing teachers, students, and curricula efficiently. It handles tasks like attendance, grading, and scheduling, while offering online access to grades and coursework for students and parents.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Project;
