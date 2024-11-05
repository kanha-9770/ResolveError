import React from 'react'
import { OurStrengthFeature } from "../Constants/OurStrength/OurStrength-Data";

const Facility = () => {
  return (
    <div className="absolute top-[111vh] left-[2rem] w-[30rem] h-[76vh] bg-white rounded-3xl">
        <div className="grid grid-cols-2 gap-4 mx-8 mt-5">
          <div className="grid justify-items-center">
            <h1 className="text-3xl mt-6 font-poppins font-black">
              {OurStrengthFeature.facility.title1}
            </h1>
            <h1 className="  font-poppins font-semibold text-center text-[#76479C]">
              {OurStrengthFeature.facility.title2}
            </h1>
          </div>
          <video
            id="background-video"
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={OurStrengthFeature.facility.video} type="video/mp4" />
          </video>
        </div>
        <p className="mx-8 mt-10 text-14 ">
          {OurStrengthFeature.facility.description}
        </p>
        <button>{OurStrengthFeature.addIcon}</button>
      </div>
  )
}

export default Facility