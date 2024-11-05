"use client";
import { GrSearch } from "react-icons/gr";
import React, { useState } from "react";
import { Page1Data } from "../Constants/blogs/blogs_data.json";

interface Page1Props {
  onCategorySelect: (categories: string[]) => void;
}

const Page1: React.FC<Page1Props> = ({ onCategorySelect }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  const filterCategories = (categories: string[], searchTerm: string) => {
    if (!searchTerm) return categories;
    const filteredCategories = categories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return [
      ...filteredCategories,
      ...categories.filter(
        (category) => !category.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    ];
  };

  const displayCategories = showCategories
    ? filterCategories(Page1Data.categories, searchTerm)
    : filterCategories(Page1Data.categories, searchTerm).slice(0, 6);

  // Call onCategorySelect when selectedCategories change
  React.useEffect(() => {
    onCategorySelect(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className="lg:mt-[5.2rem]  mt-[2vh] lg:ml-[3vw] lg:mr-[3vw]">
      <div className="lg:w-full lg:h-[82vh] lg:pr-8 lg:pb-0 pb-[2vh] lg:px-0 px-[6vw] lg:border-r-2 border-[#E6E7E6] overflow-auto sticky lg:top-[5.2rem] lg:bg-transparent bg-[#f2f2f2] lg:rounded-none  rounded-[0.5rem]">
        <p className="mb-2 font-poppins invisible lg:visible">
          {Page1Data.filter}
        </p>
        <p className="mb-2 font-poppins">{Page1Data.byCategory}</p>

        {/* Search Field */}
        <div className="flex rounded-[1rem]  bg-white overflow-hidden">
          <input
            type="search"
            placeholder={Page1Data.placeholder}
            className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black font-poppins"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="mr-[0.8rem] text-black">
            <GrSearch />
          </button>
        </div>

        {/* By Category */}
        <div className="mt-3">
          {displayCategories.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <label className="font-poppins my-[0.2rem]" htmlFor={item}>
                {item}
              </label>
              <input
                type="checkbox"
                id={item}
                name={item}
                value={item}
                checked={selectedCategories.includes(item)}
                onChange={() => handleCategoryChange(item)}
              />
            </div>
          ))}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="text-[#dc0e2a] font-poppins mt-1"
          >
            {showCategories ? "Less" : "Expand"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
