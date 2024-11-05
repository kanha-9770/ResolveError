import React from "react";
import { Page2Data } from "../Constants/blogs/blogsOld_data";

const Page2 = () => {
  return (
    <>
      <div className="flex items-center justify-start overflow-hidden">
        <div className="bg-[#483D73] w-full h-[2.8rem] mx-[1rem] px-[1.5rem] my-[0.5rem] rounded-[0.4rem] flex items-center justify-start">
          <a href="#" className="text-white mx-2 font-medium font-poppins">
            {Page2Data.bussiness}
          </a>
          <p className="text-white  mx-1">/</p>
          <a href="#" className="text-white mx-2 font-medium font-poppins">
            {Page2Data.environment}
          </a>
          <p className="text-white  mx-1">/</p>
          <a href="#" className="text-white mx-2 font-medium font-poppins">
            {Page2Data.popular}
          </a>
          <p className="text-white  mx-1">/</p>
          <a href="#" className="text-white mx-2 font-medium font-poppins">
            {Page2Data.announcements}
          </a>
          <p className="text-white mx-1">/</p>
          <a href="#" className="text-white ml-2 mr-[36rem] font-medium font-poppins">
            {Page2Data.latest}
          </a>

          <div className="flex items-center justify-end">
            <button className="text-white">{Page2Data.bookmarksIcon}</button>
            <a href="#" className="text-white ml-3 font-medium font-poppins">
              {Page2Data.bookmarks}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
