"use client";
import React, { useState, useRef } from "react";
import { Page5Data } from "../Constants/blogs/blogs_data.json";
import { RiNewsLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Modal from "./Modal";

const Page5 = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    dialogImg: Page5Data.allCard[0]["card"][0].dialogImg,
    dialogTitle: "",
    dialogDescription: "",
  });

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const openModal = (cardItem: (typeof Page5Data.allCard)[0]["card"][0]) => {
    setModalContent({
      dialogImg: cardItem.dialogImg,
      dialogTitle: cardItem.dialogTitle,
      dialogDescription: cardItem.dialogDescription,
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="lg:mr-[3vw] lg:ml-0 mr-[4vw] ml-[4vw] relative">
        <div className="bg-white w-full h-[38rem] mt-[2rem] rounded-[1rem] overflow-hidden mb-[2rem] pb-[1.5rem]">
          <div className="my-[1.4rem] mx-[1.2rem] text-[1.5rem] font-poppins text-[#3a2a79] flex z-0">
            <h1>{Page5Data.sources}</h1>
            <p className="mt-[0.3rem] text-[1.8rem]"><IoIosArrowForward/></p>
          </div>
          <button
            className="bg-white p-[1rem] top-[20rem] -left-4 rounded-[2rem] drop-shadow absolute"
            onClick={scrollLeft}
          ><IoIosArrowBack/></button>
          <button
            className="bg-white p-[1rem] top-[20rem] -right-4 rounded-[2rem] drop-shadow absolute"
            onClick={scrollRight}
          ><IoIosArrowForward/></button>

          <div
            className="lg:w-[74vw] h-[31.9rem] overflow-auto scrollbar-hide"
            ref={carouselRef}
          >
            <div className="flex w-max px-[0.5rem]">
              <div className="flex flex-col items-center justify-center h-[31.9rem] w-[18.8rem] mx-[0.5rem] overflow-hidden">
                <h1 className="text-[2rem] text-[#3a2a79]">
                  {Page5Data.mainHeading}
                </h1>
                <p className="w-[12rem] text-center">
                  {Page5Data.mainDescription}
                </p>
              </div>
              {Page5Data.allCard.map((item, idx) => (
                <div
                  key={idx}
                  className="border-solid border-[0.1rem] border-[#a5a5a5] rounded-[1rem] mx-[0.5rem] w-[18.8rem] overflow-hidden h-[31.9rem]"
                >
                  <h1 className="pt-[1.2rem] pb-2 mx-[1rem] text-[1.5rem] font-poppins text-[#3a2a79]">
                    {item.topHeadings}
                  </h1>
                  <div className="overflow-auto scrollbar-hide h-[28.1rem]">
                    {item.card &&
                      item.card.map((cardItem, cardIdx) => (
                        <div
                          key={cardIdx}
                          className="flex justify-between mx-[1rem] my-[1.5rem] border-solid border-b-[0.1rem] border-[#E6E7E6] pb-[0.1rem]"
                        >
                          <p className="text-black text-[1rem] font-poppins w-[10rem]">
                            {cardItem.description}
                          </p>
                          <div className="flex flex-col">
                            <video className="w-[6rem] h-[5rem] rounded-[0.5rem] object-cover">
                              <source src={cardItem.video} type="video/mp4" />
                            </video>
                            <button
                              className="text-[1rem] mt-[0.4rem] p-[0.4rem] ml-[4.2rem] hover:bg-[#33246e] hover:text-white rounded-[1rem]"
                              onClick={() => openModal(cardItem)}
                            ><RiNewsLine/></button>
                          </div>
                        </div>
                      ))}
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

export default Page5;
