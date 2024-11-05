"use client";
import React, { useState } from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import { policyContent } from '../Constants/footer/ourpolicies'; // Import dynamic content

const PolicyHeader: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-[#f7f7f7] w-full">
            <div 
                className="flex justify-between items-center h-[5rem] cursor-pointer" 
                onClick={toggleExpansion}
            >
                <h2 className="text-xl font-poppins p-6 text-[#6f6f6f] ml-[4.5rem]">
                    {policyContent.title}
                </h2>
                {isExpanded ? (
                    <BsDashLg className="text-2xl mr-7 text-[#6f6f6f]" />
                ) : (
                    <BsPlusLg className="text-2xl mr-7 text-[#6f6f6f]" />
                )}
            </div>
            <div className="border border-gray-400 w-full"></div>

            {isExpanded && (
                <div className="mt-4 ml-[4.5rem] mr-7 p-4 bg-[#f7f7f7] max-h-[300px] overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="text-[#6f6f6f] max-h-[200px] overflow-y-auto pr-2">
                        {policyContent.paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PolicyHeader;