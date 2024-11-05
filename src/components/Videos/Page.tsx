"use client";
import React, { useState } from "react";
import "./YouTubeEmbed.css";
import { FilterSection, VideosRef } from "../Constants/Videos/Videos-Data";

const Page = () => {
  const [showApplications, setShowApplications] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([
    "All Categories",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const displayApplications = showApplications
    ? FilterSection.applications
    : FilterSection.applications.slice(0, 3);

  const displayCategories = showCategories
    ? FilterSection.categories
    : FilterSection.categories.slice(0, 3);

  const filteredVideos = (
    selectedCategories.includes("All Categories") ||
    selectedCategories.length === 0
      ? VideosRef
      : VideosRef.filter((video) => selectedCategories.includes(video.tag))
  ).filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  // Handle category checkbox changes
  const handleCategoryChange = (event: {
    target: { name: any; checked: any };
  }) => {
    const { name, checked } = event.target;

    if (name === "All Categories") {
      setSelectedCategories(["All Categories"]);
    } else {
      setSelectedCategories((prev) => {
        if (checked) {
          return prev
            .filter((category) => category !== "All Categories")
            .concat(name);
        } else {
          const newCategories = prev.filter((category) => category !== name);
          return newCategories.length === 0
            ? ["All Categories"]
            : newCategories;
        }
      });
    }
  };

  const handleSearchChange = (event: { target: { value: string } }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mt-[5.2rem] mx-12">
      <div className="grid grid-flow-col gap-9">
        {/* Filter Section */}
        <div className="w-[13.3rem] h-[82vh] pr-5 border-r-2 border-[#E6E7E6] overflow-auto sticky top-[5.2rem] scrollbar-hide">
          <p className="mb-2">{FilterSection.filter}</p>
          <p className="font-medium mb-2">{FilterSection.byCategory}</p>

          {/* Search Field */}
          <div className="flex rounded-[1rem]  bg-white overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black "
            />
            <button className="mr-[0.8rem] text-[#9CA3AF]">
              {FilterSection.searchIcon}
            </button>
          </div>
          {/* By Category */}
          <div className="mt-5 ">
            <div className="mt-5">
              {displayCategories.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <label className="font-montserrat my-[0.2rem]" htmlFor={item}>
                    {item}
                  </label>
                  <input
                    type="checkbox"
                    id={item}
                    name={item}
                    value={item}
                    checked={selectedCategories.includes(item)}
                    onChange={handleCategoryChange}
                    className="ml-2"
                  />
                </div>
              ))}
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="text-red-600 font-montserrat mt-1"
              >
                {showCategories ? "Less" : "Expand"}
              </button>
            </div>
          </div>
          <p className="font-medium mb-2 mt-9">
            {FilterSection.byApplications}
          </p>

          {/* Search Field */}
          <div className="flex rounded-[1rem]  bg-white overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black "
            />
            <button className="mr-[0.8rem] text-[#9CA3AF]">
              {FilterSection.searchIcon}
            </button>
          </div>
          {/* By Application */}
          <div className="mt-5">
            {displayApplications.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <label className="font-montserrat my-[0.2rem]" htmlFor={item}>
                  {item}
                </label>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  value={item}
                  className="ml-2"
                />
              </div>
            ))}
            <button
              onClick={() => setShowApplications(!showApplications)}
              className="text-red-600 font-montserrat mt-1"
            >
              {showApplications ? "Less" : "Expand"}
            </button>
          </div>
        </div>

        {/* Videos Section */}
        <div className="mx-auto w-full min-h-[33.5rem] mb-8 bg-white rounded-[1rem] p-5 overflow-auto scrollbar-hide">
          <h1 className="text-[#423678] text-2xl font-montserrat font-medium ml-3">
            All Videos &gt;
          </h1>
          <div className="grid grid-cols-3 mx-[1.8rem] my-[0.5rem] gap-6 mt-3">
            {filteredVideos.map((item, index) => (
              <div className="relative overflow-hidden w-[21.3rem] h-[11.9rem]">
                <iframe
                  className=" w-full h-full rounded-lg shadow-lg transform scale-[80%]  origin-top-left "
                  src={item.url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
