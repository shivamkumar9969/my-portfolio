import React from 'react';
import projectBg from "../assets/project-bg2.jpg";
import eCommerceImg from "../assets/ecommerce.jpeg"; // Replace with actual image paths
import driveBuddyImg from "../assets/drivebuddy.jpeg"; // Replace with actual image paths
import defianceSystemImg from "../assets/defiancesystem.jpeg"; // Replace with actual image paths
import educationManagementImg from "../assets/educationmanagement.jpeg"; // Replace with actual image paths
import easyPeasyImg from "../assets/easypeasy.jpeg"; // Replace with actual image paths
import invoice from "../assets/invoice.png"
const projects = [
  {
    title: "EasyPeasy",
    description: "An intuitive online rental platform for seamless property listing by owners and streamlined search for tenants. Built with React.js, Node.js, Tailwind CSS, Express.js, and MongoDB.",
    link: "https://github.com/shivamkumar9969/EasyPesy",
    image: easyPeasyImg
  },
  {
    title: "Invoice Generator",
    description: "An efficient tool for creating and managing professional invoices. The system simplifies invoice creation, tracks payments, and generates detailed reports. Built with React.js, Node.js, and MongoDB.",
    link: "https://github.com/shivamkumar9969/invoice-generator/tree/master",
    image: invoice
  },
  {
    title: "E-Commerce",
    description: "A comprehensive online shopping platform with React.js, Node.js, Express.js, and MongoDB. Features a user-friendly interface, efficient browsing, and secure payments.",
    link: "https://github.com/shivamkumar9969/MernStackProject",
    image: eCommerceImg
  },
  {
    title: "Drive Buddy",
    description: "A safety system that detects driver drowsiness and notifies emergency contacts during accidents using IoT, Arduino, GPS, GSM, and sensors.",
    image: driveBuddyImg
  },
  {
    title: "Defiance System",
    description: "High-security solution for protecting military bases with surveillance, motion sensors, and access controls for real-time monitoring and response.",
    image: defianceSystemImg
  },
  {
    title: "Education Administration Management",
    description: "System to simplify school operations, managing teachers, students, and curricula. Handles attendance, grading, scheduling, and online access to grades.",
    image: educationManagementImg
  },

];

const Project = React.forwardRef((props, ref) => {
  return (
    <div id="Project" className="bg-cover bg-no-repeat bg-center min-h-screen w-screen" style={{ backgroundImage: `url(${projectBg})` }}>
      <div className="w-screen h-16 bg-[#090909] lg:bg-[#131313]"></div>
      <div className="text-white text-2xl lg:text-4xl flex items-center justify-center mt-3">
        <h1>Projects</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-evenly items-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg m-4 p-6 max-w-xs md:max-w-sm transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="text-blue-500 mt-4 inline-block" target="_blank" rel="noopener noreferrer">Learn More</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Project;
