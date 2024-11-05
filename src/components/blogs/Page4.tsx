"use client";
import React, { useState } from "react";
import { Page4Data } from "../Constants/blogs/blogs_data.json";
import Image from "next/image";
import { RiNewsLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Modal from "./Modal";

const Page4 = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    dialogImg: Page4Data.for[0].dialogImg,
    dialogTitle: "",
    dialogDescription: "",
  });

  const openModal = (item: (typeof Page4Data.for)[0]) => {
    setModalContent({
      dialogImg: item.dialogImg,
      dialogTitle: item.dialogTitle || "",
      dialogDescription: item.dialogDescription || "",
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="lg:mr-[3vw] lg:ml-0 mr-[4vw] ml-[4vw]">
        <div className="bg-white w-full lg:h-[76vh] h-[26.5vh] mt-[2rem] rounded-[1rem] overflow-hidden">
          <div className="mt-[1.4rem] mb-[0.5rem] mx-[1.2rem] text-[1.5rem] font-poppins text-[#3a2a79] flex">
            <h1>{Page4Data.forYou}</h1>
            <p className="mt-[0.3rem] text-[1.8rem]">< IoIosArrowForward/></p>
          </div>
          <div className="lg:h-[63vh] w-[92vw] lg:pb-0 pb-[10vh] lg:w-full overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-[auto] flex h-full w-full lg:overflow-y-auto overflow-x-auto scrollbar-hide">
              {Page4Data.for.map((item, idx) => (
                <div
                  key={idx}
                  className="flex mx-[1rem] mt-[1rem] h-max border-solid border-b-2 border-[#E6E7E6] pb-[0.1rem]"
                >
                  <div className="flex flex-col lg:w-full w-[55vw] mr-[0.8rem]">
                    <h2 className="text-black mb-[0.5rem]  lg:font-bold font-semibold lg:text-[1.2rem] text-[1rem] font-poppins">
                      {item.title}
                    </h2>
                    <p className="text-black lg:text-[0.9rem] text-[0.8rem] font-poppins">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <video className="w-[6rem] h-[5rem] rounded-[0.5rem] object-cover ">
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <button
                      className="text-[1rem] mt-[0.4rem] ml-[4.2rem] p-[0.4rem] hover:bg-[#33246e] hover:text-white rounded-[1rem]"
                      onClick={() => openModal(item)}
                    >
                      <RiNewsLine/>
                    </button>
                  </div>
                </div>
              ))}
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

export default Page4;
