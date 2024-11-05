import React from "react";
import { Page1Data } from "../Constants/blogs/blogsOld_data";
import { Marque } from "./Marque";

const Page1 = () => {
  return (
    <>
      <div className="flex items-start mt-[3.6rem] justify-center overflow-hidden">
        <div className="flex bg-[#ffffff] w-full h-32 mx-[1rem] rounded-[1rem] ">
          <div className="h-24 w-[26rem] ml-[0.8rem] my-[1rem] rounded-[0.6rem] flex items-center justify-start bg-gradient-to-r from-[#E1DBEA] to-transparent z-10">
            <h5 className="text-black font-poppins font-bold mx-[2rem] w-[4rem] text-[1.3rem]">
              {Page1Data.title}
            </h5>
          </div>
          <div className="flex items-center justify-center -ml-[15rem] overflow-auto scrollbar-hide z-0 ">
            <div className="flex space-x-4 mt-0 pt-0 mass-gradient-blogs">
              <div className="flex-grow">
                <Marque
                  direction="right"
                  speed="slow"
                  className="w-full"
                  items={[]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
