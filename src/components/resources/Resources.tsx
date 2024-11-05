import React from "react";
import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";
import resourceContent from "../Constants/resources/resources.json"; // Adjust the path as necessary

const Resources: React.FC = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col">
        {/* // First Div */}
        <div className="bg-white w-full h-[40vh] flex">
          <div className="w-3/4 pl-10">
            <h1 className="text-[#9e9c9c] font-medium font-poppins relative lg:text-5xl text-3xl top-[10vh]">
              {resourceContent.pageHeader.mainTitle} <span className="text-red-600 block">{resourceContent.pageHeader.highlightTitle}</span>
            </h1>
            <p className="text-[#9e9c9c] font-poppins font-regular relative lg:top-[12vh] lg:w-[30rem] top-[15vh]">
              {resourceContent.pageHeader.description}
            </p>
          </div>
          <div className="w-2/6">
            <Image
              src={resourceContent.pageHeader.image.src}
              alt={resourceContent.pageHeader.image.alt}
              width={resourceContent.pageHeader.image.width}
              height={resourceContent.pageHeader.image.height}
              className="relative lg:bottom-5 top-10 lg:top-0"
            />
          </div>
        </div>

        {/* // Cards Section */}
        <div className=" grid lg:grid-row-1 lg:grid-cols-5 gap-5 flex-col p-9">
          {resourceContent.cards.map((card, index) => (
            <div key={index} className=" lg:h-[52vh] h-[40vh] rounded-xl text-center flex flex-col relative  shadow-lg hover:shadow-2xl hover:scale-80  transform transition-transform duration-300 group bg-gradient-to-t from-[#f2f2f2] to-white ">
              <h1 className="font-poppins font-semibold text-3xl relative top-10 text-[#636363] group-hover:text-red-600">{card.title}</h1>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={150}
                height={150}
                className="absolute top-36 lg:left-10 left-20"
              />
              <RxExternalLink size={25} className="absolute bottom-4 right-2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
