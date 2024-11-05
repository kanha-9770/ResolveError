import React from "react";
import { Page4Data } from "../Constants/blogs/blogsOld_data";

const Page4 = () => {
  return (
    <>
      <div className="bg-white w-[22%] h-[30.5rem] rounded-[1rem] mr-[1rem] overflow-hidden">
        <div className="border-b-[0.2rem] border-solid border-[#d7d7d7] mx-[0.1rem]">
          <div className="flex rounded-[1rem] m-[0.8rem] bg-[#f5f5f5] overflow-hidden">
            <input
              type="search"
              placeholder={Page4Data.search}
              className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black "
            />
            <button className="mr-[0.8rem]">{Page4Data.searchIcon}</button>
          </div>
        </div>
        <div className="h-full overflow-auto scrollbar-hide font-poppins text-[1.1rem]">
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.tech}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.reviews}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.science}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">
              {Page4Data.entertainment}
            </button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.ai}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.machines}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.videos}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">
              {Page4Data.entertainment}
            </button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.ai}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.machines}</button>
          </div>
          <div className="border-b-[0.2rem] border-solid border-[#ededed] mx-[0.1rem]">
            <button className="m-[1rem] pl-[1rem]">{Page4Data.videos}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;