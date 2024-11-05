"use client";

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ContentCard from "./ContentCard";
import { searchbox } from "../Constants/faq/faq.json";

const FAQ: React.FC = () => {
  const [filteredQuestions, setFilteredQuestions] = useState(searchbox.categories);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0 && searchTerm === "") {
      setFilteredQuestions(searchbox.categories);
    } else {
      const filtered = searchbox.categories
        .filter((category) =>
          selectedCategories.length === 0 || selectedCategories.includes(category.name)
        )
        .map((category) => {
          return {
            ...category,
            faqs: category.faqs.filter((faq) =>
              faq.que.toLowerCase().includes(searchTerm.toLowerCase())
            )
          };
        });
      setFilteredQuestions(filtered);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    handleCategorySelect([]);
  };

  return (
    <div className=" h-[100vh] w-full overflow-hidden">
        <h1 className="text-5xl font-poppins text-[#dc0e2a] relative mt-20 left-7 font-extrabold ">FAQ'<span className="text-gray-400">s</span></h1>
        <div className="lg:flex lg:flex-row flex flex-col   lg:top-10 relative lg:-space-x-4 ">
      <div className="sticky lg:top-[24vh] lg:w-1/5  px-4 p-1 lg:overflow-auto h-[73vh] no-scrollbar ">
        <SearchBox onCategorySelect={handleCategorySelect} onSearch={handleSearch} />
      </div>
      <div className="lg:w-[80%] w-full lg:h-[72vh] overflow-auto relative lg:top-4 no-scrollbar -top-[60vh]">
        <ContentCard categories={filteredQuestions} />
      </div>
      </div>
    </div>
  );
};

export default FAQ;
