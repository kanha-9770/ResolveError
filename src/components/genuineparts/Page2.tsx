"use client";
import React, { useState } from "react";
import { Page2Data } from "../Constants/genuineparts/genuineparts_data.json";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { IoMdAddCircle, IoMdInformationCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Page2 = () => {
  // Use an array of boolean values to track the enquiry state for each part
  const [enquiryState, setEnquiryState] = useState(
    Array(Page2Data.parts.length).fill(false)
  );

  const handleButtonClick = (idx: number) => {
    const updatedEnquiryState = [...enquiryState];
    updatedEnquiryState[idx] = true; // Set the specific index to true
    setEnquiryState(updatedEnquiryState);
  };

  return (
    <>
      <div className="px-3 font-poppins flex">
        {/* Left Filter Section */}
        <div className="w-[18%] bg-white p-2 rounded-lg mr-2">
          <div className="flex items-center border border-black rounded-lg mb-4 py-1">
            <VscSettings className="text-xl ml-1" />
            <input
              type="search"
              placeholder={Page2Data.searchFilter}
              className="w-full px-2 outline-none bg-transparent text-black font-poppins text-xs"
            />
          </div>
          {Page2Data.machineFilter.map((item, idx) => (
            <div key={idx} className="mb-4 flex items-center relative">
              <label htmlFor={`item-${idx}`} className="text-sm">
                {item.title}
              </label>
              <input
                type="checkbox"
                id={`item-${idx}`}
                className="absolute right-0"
              />
            </div>
          ))}
        </div>

        {/* Right Filter Section */}
        <div className="w-[82%]">
          <div className="bg-white w-full rounded-lg p-2 flex items-center mb-2">
            <div className="flex items-center border border-black rounded-lg py-1 px-2 ">
              <IoSearch className="text-xl" />
              <input
                type="search"
                placeholder={Page2Data.searchParts}
                className="w-full px-2 outline-none bg-transparent text-black font-poppins text-xs"
              />
            </div>
            <VscSettings className="text-2xl ml-[1.5vw] mr-[0.5vw]" />
            {Page2Data.partsFilter.map((item, idx) => (
              <div
                key={idx}
                className="border border-black rounded-lg mx-1 hover:bg-black hover:text-white cursor-pointer"
              >
                <h3 className="px-[1.5vw] text-sm py-1">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="flex">
            <div className="bg-white w-[85%] rounded-lg px-4 py-2 mr-2">
              <h2 className="text-sm font-medium float-left">{Page2Data.inventory}</h2>
              <IoMdAddCircle className="float-right text-xl"/>
              <div className="w-full overflow-hidden py-1">
                <div className="w-full overflow-auto flex space-x-4 scrollbar-hide">
                  {Page2Data.inventoryParts.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f5f5f5] rounded-lg p-2 flex space-x-8"
                    >
                      <div>
                        <h3 className="text-xs font-medium whitespace-nowrap">
                          {item.title}
                        </h3>
                        <h3 className="text-xs font-medium whitespace-nowrap">
                          {item.description}
                        </h3>
                        <h3 className="text-xs whitespace-nowrap">
                          {item.code}
                        </h3>
                      </div>
                      <div className="w-16 h-12">
                        <Image
                          src={item.img}
                          alt={""}
                          width={400}
                          height={400}
                          className="w-full h-full rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white w-[15%] rounded-lg px-2 justify-center flex flex-col items-center">
              <h2 className="text-sm font-medium w-[80%] text-center mb-2">
                {Page2Data.productNotFound}
              </h2>
              <button className="text-sm font-medium text-white bg-black rounded-lg py-[1.4vh] px-[1vw] whitespace-nowrap">
                {Page2Data.requestSpare}
              </button>
            </div>
          </div>

          <div className="w-full mt-2 grid grid-cols-3 gap-2">
            {Page2Data.parts.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-2">
                <div className="flex relative px-1">
                  <div>
                    <h3 className="text-md font-medium whitespace-nowrap">
                      {item.title}
                    </h3>
                    <h3 className="text-md font-medium whitespace-nowrap">
                      {item.description}
                    </h3>
                    <h3 className="text-sm whitespace-nowrap">{item.code}</h3>
                  </div>
                  <BsFillLightningChargeFill  className="absolute right-6"/>
                  <div className="cursor-pointer group absolute right-0 flex">
                    <IoMdInformationCircleOutline className="text-xl"/>
                    <div className="hidden group-hover:flex absolute bottom-7 right-0 bg-white border border-gray-300 rounded-md shadow-md px-2 py-1 h-max w-max z-20">
                      <p className="lg:text-[0.8rem] text-[0.7rem] text-black">
                        {item.information}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full my-2">
                  <Image
                    src={item.img}
                    alt={""}
                    width={400}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
                {!enquiryState[idx] ? (
                  <button
                    className="text-white bg-black py-1 w-full rounded-lg border border-black"
                    onClick={() => handleButtonClick(idx)}
                  >
                    {Page2Data.addEnquiry}
                  </button>
                ) : (
                  <label className="flex items-center py-1 px-2 border border-black rounded-lg">
                    <input
                      type="checkbox"
                      checked
                      className="form-checkbox text-black"
                    />
                    <span className="text-black text-center w-full font-medium">
                      {Page2Data.addEnquiry}
                    </span>
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
