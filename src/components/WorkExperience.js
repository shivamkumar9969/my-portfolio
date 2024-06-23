import React, { useState } from 'react';
import bgpic from '../assets/project-bg2.jpg';
import we from '../assets/we.jpg';
import ExperienceItem from './ExperienceItem';

const WorkExperience = () => {
    const [openItem, setOpenItem] = useState(null);

    const experiences = [
        {
            title: 'Full Stack Developer at Rackron Technology Pvt Ltd',
            company: 'Rackron Technology Pvt Ltd',
            duration: 'June 2024 – Present',
            responsibilities: [
                'Developed scalable and secure full-stack applications using HTML, CSS, Tailwind CSS, and React.js.',
                'Integrated MongoDB and SQL databases for efficient data storage and retrieval.',
                'Designed and implemented RESTful APIs to facilitate communication between front-end and back-end systems.',
                'Utilized PHP and Laravel framework for server-side scripting and web application development.',
                'Optimized application performance and improved user experience through responsive UI design and client-side scripting.',
            ],
        },
        {
            title: 'Full-Stack Developer Intern at DevTown',
            company: 'DevTown',
            duration: 'Sep 2023 – Nov 2023, 3 Months',
            responsibilities: [
                'Immersed in full-stack development, gaining hands-on experience and insights into the software development life cycle.',
                'Collaborated with team members to build and improve web applications using modern technologies.',
                'Participated in code reviews and learned best practices for coding standards and efficient programming.',
            ],
        },
    ];

    const handleToggle = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div
                id="Experience"
                className="flex-1 bg-cover bg-no-repeat bg-center py-20"
                style={{
                    backgroundImage: `url(${bgpic})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                }}
            >
                <div className="max-w-4xl mx-auto bg-gray-100 bg-opacity-80 rounded-lg shadow-xl p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                        Work Experience
                    </h1>
                    {experiences.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            title={exp.title}
                            company={exp.company}
                            duration={exp.duration}
                            responsibilities={exp.responsibilities}
                            isOpen={openItem === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="mb-0">
                <img src={we} className="h-32 md:h-60 w-full object-cover mb-0" alt="Work Experience" />
            </div>
        </div>
    );
};

export default WorkExperience;
