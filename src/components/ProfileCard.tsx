// @ts-nocheck
import React from 'react';

interface ProfileCardProps {
    name: string;
    jobTitle: string;
    department: string;
    linkedinUrl: string;
    imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    jobTitle,
    department,
    linkedinUrl,
    imageUrl
}) => {
    return (
<<<<<<< HEAD
        <div className="flex justify-center items-center">
            <div className="relative w-[250px] h-[255px] mb-8">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[255px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 group">
                    {/* Card Image */}
=======
        <div className="flex justify-center items-center" onClick={onClick}>
            <div className="relative w-[250px] h-[255px] mb-8 cursor-pointer">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[255px] rounded-lg overflow-hidden shadow-xl transition-transform duration-500 group">
>>>>>>> be19eaa (dark mode light mode change final)
                    <div className="relative w-full h-full">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-500"
                        />
                    </div>

                    {/* Department and LinkedIn Icons */}
                    <div className="absolute bottom-0 left-0 w-full bg-[#0A4C7B] p-3 flex justify-between items-center z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {/* <div className="flex justify-start items-center bg-yellow-400"> */}
                        <div className="">
                            <h1 className="font-medium text-white font-serif text-sm">{department}</h1>
                            <p className='text-[14px] text-white font-extrabold'>{name}</p>
                        </div>
                        <div className="flex justify-end items-center">
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                            >
                                <i className="fab fa-linkedin text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Name and Job Title */}
                    <div className="absolute bottom-0 left-0 w-full bg-white p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2 className="text-center text-xl font-semibold text-gray-800">
                            {name}
                            <br />
                            <span className="text-sm font-light text-gray-500">{jobTitle}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
