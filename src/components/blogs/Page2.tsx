"use client";
import React, { useState } from "react";
import { Page1Data, Page2Data } from "../Constants/blogs/blogs_data.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiNewsLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Page1 from "./Page1";
import Modal from "./Modal";
import { VscSettings } from "react-icons/vsc";

interface Page2Props {
  selectedCategories: string[];
}

interface BlogType {
  video: string;
  title: string;
  description: string;
  fullCoverage: string;
  dialogImg: string;
  dialogTitle: string;
  dialogDescription: string;
}

const Page2: React.FC<Page2Props> = ({ selectedCategories }) => {
  const [isPage1Visible, setPage1Visible] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    dialogImg: Page2Data.blogs.subBlogs[0].dialogImg,
    dialogTitle: "",
    dialogDescription: "",
  });

  const togglePage1Visibility = () => {
    if (window.innerWidth < 1024) {
      // Check if the viewport is mobile
      setPage1Visible(!isPage1Visible);
    }
  };

  const openModal = (content: {
    dialogImg: string;
    dialogTitle: string;
    dialogDescription: string;
  }) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Get the heading data based on selectedCategories
  const getHeadingData = () => {
    if (selectedCategories.length === 1) {
      switch (selectedCategories[0]) {
        case "Bowls":
          return Page2Data.bowls.headBowls;
        default:
          return Page2Data.blogs.headBlogs;
      }
    }
    return Page2Data.blogs.headBlogs; // default if multiple categories or none are selected
  };

  // Filter data based on selectedCategories
  const getFilteredData = (): BlogType[] => {
    let filteredData: BlogType[] = [];

    if (
      selectedCategories.length === 0 ||
      selectedCategories.includes("All Categories")
    ) {
      return Page2Data.blogs.subBlogs;
    }

    selectedCategories.forEach((category) => {
      switch (category) {
        case "Bowls":
          filteredData = [...filteredData, ...Page2Data.bowls.subBowls];
          break;
        default:
          filteredData = [...filteredData, ...Page2Data.blogs.subBlogs];
          break;
      }
    });

    return filteredData;
  };

  const headingData = getHeadingData();

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:mx-0 mx-[4vw] lg:mt-0 mt-[2vh]">
        <div className="bg-white w-full lg:h-max lg:mt-[5.2rem] mt-[2vh] rounded-[1rem] lg:ml-0 lg:mr-[1.5vw] overflow-hidden">
          {/* Filters */}
          <div
            className="w-[86vw] mx-[3vw] mb-[5vh] h-[6vh] relative flex items-center justify-center lg:hidden border-solid border-b-2 border-[#E6E7E6] text-[#483d73] cursor-pointer"
            onClick={togglePage1Visibility}
          >
            <p className="font-poppins text-[1.3rem] absolute left-[2vw]">
              {Page1Data.filter}
            </p>
            <VscSettings className="text-[1.8rem] absolute right-[2vw]" />
          </div>

          {/* Render Page1 component as a modal only if isPage1Visible is true and only on mobile */}
          {isPage1Visible && (
            <div className="fixed inset-0 bg-[#f2f2f2] bg-opacity-50 backdrop-blur z-50 flex items-center justify-center lg:hidden">
              <div className="bg-white w-full mx-[4vw] py-[2vh]  px-[4vw] rounded-lg shadow-lg">
                <div className="w-full h-[6vh] flex items-center border-b-2 border-solid border-[#E6E7E6]">
                  <div className="flex justify-center items-center h-full w-[50%] border-r-2 border-solid border-[#E6E7E6] mb-[1vh] font-poppins font-medium">
                    <button
                      onClick={() => setPage1Visible(false)}
                      className="text-[#838282]"
                    >
                      {Page2Data.cancel}
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-[50%] mb-[1vh] font-poppins font-medium">
                    <button className="text-[#dc0e2a]">
                      {Page2Data.apply}
                    </button>
                  </div>
                </div>
                <Page1
                  onCategorySelect={(categories) => console.log(categories)}
                />
              </div>
            </div>
          )}

          <div className="my-[1.4rem] mx-[1.2rem] text-[1.5rem] font-poppins text-[#3a2a79] flex">
            <h1>{headingData.allBlogs}</h1>
            <p className="mt-[0.3rem] text-[1.8rem]">
              <IoIosArrowForward />
            </p>
          </div>
          <div className="overflow-auto scrollbar-hide h-full">
            <div className="mx-[1rem] relative flex lg:flex-row flex-col border-solid border-b-2 border-[#E6E7E6] mb-[0.8rem]">
              <video className="w-[22rem] h-[13.5rem] lg:mb-0 mb-[1vh] rounded-[0.5rem] object-cover">
                <source src={headingData.machineBg} type="video/mp4" />
              </video>
              <Image
                src={headingData.machineImg}
                alt={"MachineImg"}
                width={200}
                height={200}
                className="w-[20.5rem] absolute top-1 left-4"
              />

              <div className="font-poppins text-[0.9rem]">
                <div className="flex flex-col items-start">
                  <p className="text-black text-[1.1rem] ml-[1rem] mr-[1rem] font-poppins font-bold">
                    {headingData.imgTitle}
                  </p>
                  <p className="mb-[0.5rem] ml-[1rem] mr-[1.5rem]">
                    {headingData.imgParagraph}
                  </p>
                  <button className="text-[1.4rem] absolute right-1">
                    <BsThreeDotsVertical />
                  </button>
                </div>
                {headingData.paragraphList?.map((item, index) => (
                  <ul
                    key={index}
                    className="list-disc ml-[3rem] mr-[1rem] hidden lg:block"
                  >
                    <li className="text-black">{item}</li>
                  </ul>
                ))}
                <div className="flex justify-end">
                  <div className="flex items-center justify-center lg:mt-[1rem] bg-[#E6E7E6] w-[8.2rem] rounded-[1rem] mb-[1vh] py-[0.3rem] hover:bg-[#33246e] hover:text-white">
                    <button
                      onClick={() =>
                        openModal({
                          dialogImg:
                            headingData.dialogImg ||
                            Page2Data.blogs.subBlogs[0].dialogImg,
                          dialogTitle: headingData.dialogTitle,
                          dialogDescription: headingData.dialogDescription,
                        })
                      }
                      className="text-[1rem]"
                    >
                      <RiNewsLine />
                    </button>
                    <button
                      onClick={() =>
                        openModal({
                          dialogImg:
                            headingData.dialogImg ||
                            Page2Data.blogs.subBlogs[0].dialogImg,
                          dialogTitle: headingData.dialogTitle,
                          dialogDescription: headingData.dialogDescription,
                        })
                      }
                      className="text-[0.7rem] ml-2"
                    >
                      {headingData.fullCoverage}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:overflow-auto overflow-x-auto scrollbar-hide">
              <div className="lg:w-full w-max flex lg:flex-col flex-row overflow-x-hidden">
                {getFilteredData().map((item, idx) => (
                  <div
                    key={idx}
                    className="flex mx-[1rem] lg:w-[95.4%] my-[1.5vh] border-solid border-b-2 border-[#E6E7E6] pb-[0.5rem]"
                  >
                    <video className="lg:w-[7.5rem] lg:h-[6rem] w-[6rem] h-[5rem] rounded-[0.5rem] object-cover">
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <div className="flex lg:w-full w-[60vw] flex-col justify-end">
                      <div className="flex flex-col lg:my-[0.5rem] ml-[1rem] lg:mr-[0.5rem]">
                        <h2 className="text-black lg:mb-[0.5rem] lg:font-bold font-semibold lg:text-[1.2rem] text-[1rem] font-poppins">
                          {item.title}
                        </h2>
                        <p className="text-black lg:text-[0.9rem] text-[0.8rem] lg:mb-0 mb-[0.5rem] font-poppins">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <div className="flex items-center justify-center bg-[#E6E7E6] w-[8.2rem] rounded-[1rem] py-[0.3rem] hover:bg-[#33246e] hover:text-white">
                          <button
                            onClick={() => openModal(item)}
                            className="text-[1rem]"
                          >
                            <RiNewsLine />
                          </button>
                          <button
                            onClick={() => openModal(item)}
                            className="text-[0.7rem] ml-2"
                          >
                            {item.fullCoverage}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex lg:flex-row flex-col items-start justify-center">
          <Image
            className="lg:w-[32vw] rounded-[1rem]"
            width={100}
            height={100}
            src={modalContent.dialogImg}
            alt={modalContent.dialogTitle}
          />
          <div className="lg:w-[32vw] w-full  lg:ml-[2rem]">
            <h2 className="text-[1.4rem] lg:text-left text-center lg:mt-0 mt-[1vh] mb-[1vh] text-[#33246e] font-medium font-poppins">
              {modalContent.dialogTitle}
            </h2>
            <div className="overflow-hidden lg:h-[45vh] lg:w-[26vw] w-full h-[26vh]">
              <div className="overflow-auto h-full scrollbar-hide">
                <p className="font-poppins lg:text-left text-center">
                  {modalContent.dialogDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Page2;
