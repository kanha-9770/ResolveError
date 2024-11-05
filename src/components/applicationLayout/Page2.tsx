"use client";
import React from "react";
import Image from "next/image";

interface Page2Props {
  page2product: {
    title: string;
    description: string;
    image: string;
  };
}

const Page2: React.FC<Page2Props> = ({ page2product }) => {
  return (
    <>
      <div className="w-full lg:mt-[8vh] mt-[12vh] mb-[1rem] px-[4vw] py-[4vh] flex lg:flex-row flex-col-reverse">
        <div className="lg:w-[50%] w-full bg-white mr-[3vw] lg:rounded-[0.5rem] rounded-[0.5rem] flex items-center justify-center top:py-[2rem]">
          <div className="lg:h-[18rem] h-[25vh] lg:my-0 my-[3vh] relative lg:w-[36vw] w-[80vw] overflow-auto scroll-wrapper style-1 ">
            <p className="font-poppins lg:text-[1rem] text-left text-[0.8rem] lg:ml-[1.5vw] ml-[3vw]">
              {page2product.description}
            </p>
          </div>
        </div>

        <Image
          className="lg:w-[50%] w-full mb-[2vh] lg:mb-0 lg:rounded-[0.5rem] rounded-[0.5rem]"
          width={600}
          height={600}
          src={page2product.image}
          alt=""
        />
      </div>
    </>
  );
};

export default Page2;
