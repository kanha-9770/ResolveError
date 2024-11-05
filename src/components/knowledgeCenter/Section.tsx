import React from "react";
import { IconType } from "react-icons";

interface SectionProps {
  number: number;
  title: string;
  description: string;
  Icon: IconType;
}

const Section: React.FC<SectionProps> = ({
  number,
  title,
  description,
  Icon,
}) => {
  return (
    <div className="flex px-8 justify-between h-64 mt-4 gap-4 bg-black text-white p-4 rounded-md  shadow-md">
      <div className=" w-[80%]">
        <div className="w-[45%] border-b-4 p-2 ">
          <h2 className="text-4xl font-bold  mb-4">
            {number}. {title}
          </h2>
        </div>
        <p className="text-base mt-8 font-regular">{description}</p>
      </div>
      <div className="flex flex-col w-[20%] justify-center items-center space-y-4">
        <Icon className="text-6xl text-purple-500" />
        <a
          href="#"
          className="flex items-center text-purple-500 hover:underline"
        >
          Read More
          <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default Section;
