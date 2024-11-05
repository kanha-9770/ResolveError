"use client";
import React, { useState } from "react";
import { Page3Data } from "../Constants/blogs/blogs_data.json";
import { RiNewsLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Modal from "./Modal";

const Page3: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    dialogImg:  Page3Data.featured[0].dialogImg,
    dialogTitle: "",
    dialogDescription: "",
  });

  const openModal = (item: typeof Page3Data.featured[0]) => {
    setModalContent({
      dialogImg: item.dialogImg,
      dialogTitle: item.dialogTitle,
      dialogDescription: item.dialogDescription,
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="lg:mr-[3vw] lg:ml-0 mr-[4vw] ml-[4vw]">
        <div className="bg-white w-full h-max lg:mt-[5.2rem] mt-[2rem] rounded-[1rem] overflow-hidden">
          <div className="pt-[1.4rem] mx-[1rem] text-[1.5rem] font-poppins text-[#3a2a79] flex">
            <h1>{Page3Data.featuredBlogs}</h1>
            <p className="mt-[0.3rem] text-[1.8rem]"><IoIosArrowForward/></p>
          </div>
          {Page3Data.featured.map((item, idx) => (
            <div
              key={idx}
              className="flex mx-[1rem] my-[1.5rem] border-solid border-b-2 border-[#E6E7E6] pb-[0.1rem]"
            >
              <p className="text-black text-[1rem] lg:w-[12vw] mr-[1rem] font-poppins">
                {item.description}
              </p>
              <div className="flex flex-col">
                <video className="w-[6rem] h-[5rem] rounded-[0.5rem] object-cover ">
                  <source src={item.video} type="video/mp4" />
                </video>
                <button
                  className="text-[1rem] mt-[0.4rem] ml-[4.1rem] p-[0.4rem] hover:bg-[#33246e] hover:text-white rounded-[1rem]"
                  onClick={() => openModal(item)}
                ><RiNewsLine/></button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white w-full h-max mt-[1rem] rounded-[1rem] hidden lg:block overflow-hidden">
          <div className="pt-[1.4rem] mx-[1rem] text-[1.5rem] font-poppins text-[#3a2a79] flex">
            <h1>{Page3Data.featuredBlogs}</h1>
            <p className="mt-[0.3rem] text-[1.8rem]"><IoIosArrowForward/></p>
          </div>

          {Page3Data.featured.map((item, idx) => (
            <div
              key={idx}
              className="flex mx-[1rem] my-[1.5rem] border-solid border-b-2 border-[#E6E7E6] pb-[0.1rem]"
            >
              <p className="text-black text-[1rem] lg:w-[12vw] mr-[1rem] font-poppins">
                {item.description}
              </p>
              <div className="flex flex-col">
                <video className="w-[6rem] h-[5rem] rounded-[0.5rem] object-cover ">
                  <source src={item.video} type="video/mp4" />
                </video>
                <button
                  className="text-[1rem] mt-[0.4rem] ml-[4.1rem] p-[0.4rem] hover:bg-[#33246e] hover:text-white rounded-[1rem]"
                  onClick={() => openModal(item)}
                ><RiNewsLine/></button>
              </div>
            </div>
          ))}
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

export default Page3;
