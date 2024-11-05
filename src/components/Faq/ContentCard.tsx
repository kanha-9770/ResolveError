"use client";

import React, { useState } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

interface FAQ {
  que: string;
  ans: string;
}

interface Category {
  name: string;
  faqs: FAQ[];
}

interface ContentCardProps {
  categories: Category[];
}

const ContentCard: React.FC<ContentCardProps> = ({ categories }) => {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpansion = (categoryIndex: number, faqIndex: number) => {
    const index = categoryIndex * 1000 + faqIndex; // uniq index for faq
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col gap-4 px-[1vw] ">
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-10 h-[70vh] ">
          <h1 className="text-2xl text-gray-400">
            Questions Related to{" "}
            <span className="text-[#dc0e2a] font-bold">{category.name}</span>
          </h1>
          <div className="lg:border-t-[0.2rem] border-t-2 border-solid border-[#dc0e2a] lg:w-[8vw] w-[18vw] mt-[0.6rem]"></div>
          <div className="mt-[2vh] ">
            {category.faqs.map((faq, faqIndex) => {
              const index = categoryIndex * 1000 + faqIndex;
              return (
                <div key={faqIndex} className="mb-[1rem]">
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => toggleExpansion(categoryIndex, faqIndex)}
  >
    <h2 className="lg:text-[1.1rem] text-[0.9rem] font-medium font-poppins w-[70%]">
      {faq.que}
    </h2>
    {expandedIndices.has(index) ? (
      <BsDashLg size={30} className="text-[#dc0e2a] font-bold" />
    ) : (
      <BsPlusLg size={30} />
    )}
  </div>
  <div className="lg:border-t-[0.2rem] border-[#d3d2d2] border-t-2 border-solid mt-[0.5vh] lg:w-[70%] w-[80%]"></div>
  
  {/* Expandable Content with Smooth Transition */}
  <div
    className={`overflow-hidden transition-all ease-in-out duration-500 ${
      expandedIndices.has(index) ? 'max-h-[150px] opacity-100 scale-y-10' : 'max-h-0 opacity-0 scale-y-0'
    }`}
    style={{ transitionProperty: 'max-height, opacity, transform' , transformOrigin: 'top',}}
  >
    <div
      className="no-scrollbar ml-[2vw] text-[#9e9c9c] py-[1vh] lg:text-[1rem] text-[0.8rem] w-[90%]"
      style={{ maxHeight: '150px', overflowY: 'auto' }}
    >
      <p>{faq.ans}</p>
    </div>
  </div>
</div>

              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
