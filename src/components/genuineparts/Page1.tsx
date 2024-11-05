import React from "react";
import Image from "next/image";
import { Page1Data } from "../Constants/genuineparts/genuineparts_data.json";

const Page1 = () => {
  return (
    <>
      <div className="mt-[3rem] font-poppins">
        <div className="w-full bg-white h-[18rem]">
          <div className="float-left">
            <h1 className="font-semibold text-5xl pt-10 pl-10">
              <span className="text-[#9e9c9c] block">
                {Page1Data.title.split(" ").slice(0, -2).join(" ")}
              </span>{" "}
              <span className="text-[#dc0e2a] ">
                {Page1Data.title.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="pl-10 text-[#9e9c9c] text-lg mt-8 w-[80%]">
              {Page1Data.description}
            </p>
          </div>
          <div className="float-right -mt-12">
          <Image
            src={Page1Data.toolBoxImg}
            alt={""}
            width={400}
            height={400}
            className=""
          />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full pb-16">
            <h2 className="text-3xl font-medium mb-8">{Page1Data.diverseMachines}</h2>
            <p className="text-sm w-[60%] text-center">{Page1Data.paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default Page1;
