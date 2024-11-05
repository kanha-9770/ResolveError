"use client";
import { GrSearch } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { searchbox } from "../Constants/faq/faq.json";
import { VscSettings } from "react-icons/vsc";

interface SearchBoxProps {
  onCategorySelect: (categories: string[]) => void;
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onCategorySelect, onSearch }) => {
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  const filterCategories = (categories: string[], searchTerm: string) => {
    if (!searchTerm) return categories;
    return categories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const displayCategories = showCategories
    ? searchbox.categories.map((cat) => cat.name)
    : searchbox.categories.map((cat) => cat.name).slice(0, 6);

  
  useEffect(() => {
    onCategorySelect(selectedCategories);
  }, [selectedCategories]);

  return (
    <div className=" bg-white rounded-lg p-3 mt-3 sticky ">
      <div className="lg:w-full lg:h-[66vh] lg:pr-3 lg:px-0 px-[6vw] border-[#E6E7E6] overflow-auto sticky lg:rounded-none rounded-[0.5rem]">
        <div className="flex justify-between">
          <p className="mb-2 font-poppins invisible lg:visible text-gray-500">
            {searchbox.filter}
          </p>
          <VscSettings size={25} className="text-gray-500" />
        </div>

        {/* Search Field */}
        <div className="flex rounded-[2rem] bg-white overflow-hidden border-2 border-gray-300">
          <button className="relative text-black left-2">
            <GrSearch size={20} className="text-gray-500" />
          </button>
          <input
            type="search"
            placeholder={searchbox.placeholder}
            className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black font-poppins"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="border relative top-4 border-gray-300"></div>

        {/* By Category */}
        <div className="mt-6">
          {displayCategories.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <label className="font-poppins text-[#575555] my-[0.2rem]" htmlFor={item}>
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
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
