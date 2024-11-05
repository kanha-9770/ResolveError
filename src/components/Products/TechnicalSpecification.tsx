import React from "react";
import SpecificationTable from "./SpecificationTable";
import Image from "next/image";
import SpeciGlass from "../../../public/assets/product/Specificationglass.png";
import { BiSolidFilePdf } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const categories = [
  "Paper Cup Machines",
  "Paper Bowl Machines",
  "Paper Bag Machines",
  "Paper Straw Machines",
  "Flexo Printing Machines",
  "Die Cutting Machines",
];

export function TechnicalSpecifications() {
  return (
    <div className="w-full h-full flex flex-row ">
      {/* Left Side: Specification and Image */}
      <div className="flex-grow bg-white p-4 rounded-2xl flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="font-poppins text-3xl font-semibold">
            Technical{" "}
            <span className="text-red-600 font-extrabold ml-2">
              Specifications
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start">
           <SpecificationTable />
          <div className="w-[40%]">
            <Image
              src={SpeciGlass}
              width={400}
              height={400}
              alt="Specification Glass"
              className="w-full  h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
