import React from "react";
import { Page3Data } from "../Constants/blogs/blogsOld_data";

const Page3 = () => {
  return (
    <>
      <div className="bg-white w-[75%] h-[30.5rem] rounded-[0.8rem] ml-[1rem] mr-[0.7rem] overflow-hidden">
        <div className="mx-[1rem] my-[0.8rem]">
          <button className="border-[#76469d] border-[0.2rem] border-solid rounded-[2rem] text-[0.9rem] mr-[1rem] py-[0.3rem] px-[1.2rem] font-poppins hover:bg-[#76469d] hover:text-white focus:bg-[#76469d] focus:text-white">
            {Page3Data.popularComparisions}
          </button>
          <button className="border-[#76469d] border-[0.2rem] border-solid rounded-[2rem] text-[0.9rem] mr-[1rem] py-[0.3rem] px-[1.2rem] font-poppins hover:bg-[#76469d] hover:text-white focus:bg-[#76469d] focus:text-white">
            {Page3Data.latestNews}
          </button>
          <button className="border-[#76469d] border-[0.2rem] border-solid rounded-[2rem] text-[0.9rem] mr-[1rem] py-[0.3rem] px-[1.2rem] font-poppins hover:bg-[#76469d] hover:text-white focus:bg-[#76469d] focus:text-white">
            {Page3Data.top10daily}
          </button>
          <button className="border-[#76469d] border-[0.2rem] border-solid rounded-[2rem] text-[0.9rem] mr-[1rem] py-[0.3rem] px-[1.2rem] font-poppins hover:bg-[#76469d] hover:text-white focus:bg-[#76469d] focus:text-white">
            {Page3Data.announcements}
          </button>
          <button className="border-[#76469d] border-[0.2rem] border-solid rounded-[2rem] text-[0.9rem] mr-[1rem] py-[0.3rem] px-[1.2rem] font-poppins hover:bg-[#76469d] hover:text-white focus:bg-[#76469d] focus:text-white">
            {Page3Data.popularNow}
          </button>
        </div>

        <div className="h-full overflow-auto scrollbar-hide">
          <div className="mx-[1.5rem] mb-[1.5rem] flex">
            <div className="w-[40%] h-[12rem]">
              <video
                controls
                className="w-full h-full rounded-[1rem] object-cover"
              >
                <source src={Page3Data.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-[53%] mx-[2rem] mt-[2rem] font-montserrat">
              <h2 className="text-[1.5rem] border-b-[0.2rem] font-bold border-solid border-[#d7d7d7]">
                {Page3Data.videoTitle}
              </h2>
              <p className="font-semibold">{Page3Data.videoDescription}</p>
              <div className="flex items-center justify-end mt-[0.8rem]">
                <button className="mr-[0.5rem]">
                  {Page3Data.bookmarkedIcon}
                </button>
                <p className="text-[0.7rem]">
                  {Page3Data.bookmarked}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-[1.5rem] mb-[1.5rem] flex">
            <div className="w-[40%] h-[12rem]">
              <video
                controls
                className="w-full h-full rounded-[1rem] object-cover"
              >
                <source src={Page3Data.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-[53%] mx-[2rem] mt-[2rem] font-montserrat">
              <h2 className="text-[1.5rem] border-b-[0.2rem] font-bold border-solid border-[#d7d7d7]">
                {Page3Data.videoTitle}
              </h2>
              <p className="font-semibold">{Page3Data.videoDescription}</p>
              <div className="flex items-center justify-end mt-[0.8rem]">
                <button className="mr-[0.5rem]">
                  {Page3Data.bookmarkedIcon}
                </button>
                <p className="text-[0.7rem]">
                  {Page3Data.bookmarked}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-[1.5rem] mb-[1.5rem] flex">
            <div className="w-[40%] h-[12rem]">
              <video
                controls
                className="w-full h-full rounded-[1rem] object-cover"
              >
                <source src={Page3Data.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-[53%] mx-[2rem] mt-[2rem] font-montserrat">
              <h2 className="text-[1.5rem] border-b-[0.2rem] font-bold border-solid border-[#d7d7d7]">
                {Page3Data.videoTitle}
              </h2>
              <p className="font-semibold">{Page3Data.videoDescription}</p>
              <div className="flex items-center justify-end mt-[0.8rem]">
                <button className="mr-[0.5rem]">
                  {Page3Data.bookmarkedIcon}
                </button>
                <p className="text-[0.7rem]">
                  {Page3Data.bookmarked}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-[1.5rem] mb-[1.5rem] flex">
            <div className="w-[40%] h-[12rem] mb-[3.2rem]">
              <video
                controls
                className="w-full h-full rounded-[1rem] object-cover"
              >
                <source src={Page3Data.video} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-[53%] m-[2rem] font-montserrat">
              <h2 className="text-[1.5rem] border-b-[0.2rem] font-bold border-solid border-[#d7d7d7]">
                {Page3Data.videoTitle}
              </h2>
              <p className="font-semibold">{Page3Data.videoDescription}</p>
              <div className="flex items-center justify-end mt-[0.8rem]">
                <button className="mr-[0.5rem]">
                  {Page3Data.bookmarkedIcon}
                </button>
                <p className="text-[0.7rem]">
                  {Page3Data.bookmarked}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
