import React from 'react';

const ExperienceItem = ({ title, company, duration, responsibilities, isOpen, onClick }) => {
    return (
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 ease-in-out">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-gray-800">
                        {title}
                    </h2>
                    <p className="text-gray-700 mb-1">{company}</p>
                    <p className="text-gray-700 mb-2">{duration}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.53 1.28l-4.25 4.5a.75.75 0 01-1.06 0l-4.25-4.5A.75.75 0 116.47 2.22L10 5.75l3.53-3.53a.75.75 0 111.06 1.06l-4.25 4.5a.75.75 0 01-1.06 0l-4.25-4.5A.75.75 0 013.53 2.22L10 8.75z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className={`mt-4 space-y-2 expand-collapse ${isOpen ? 'expanded' : 'collapsed'}`}>
                {responsibilities.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="mr-2 text-gray-800">•</span>
                        <p className="text-gray-800">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceItem;
