import React from "react";
import { Page3Data } from "../Constants/genuineparts/genuineparts_data.json";
import Image from "next/image";

const Page3 = () => {
  return (
    <>
      <div className="bg-white mt-28 w-full h-full px-8 py-10 font-poppins">
        <div className="grid grid-cols-3 gap-10 rounded-lg">
          {Page3Data.map((item, idx) => (
            <div key={idx} className="bg-[#f5f5f5] rounded-lg p-4 h-[75vh]">
              <div className="w-full">
                <Image
                  src={item.img}
                  alt={""}
                  width={400}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl text-center font-semibold whitespace-nowrap my-2">
                  {item.title}
                </h3>
                <h3 className="text-sm text-center text-[#9e9c9c]">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page3;
