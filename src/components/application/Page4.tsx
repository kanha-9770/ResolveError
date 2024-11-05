"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Page4Data } from "../Constants/application/application_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const borderImgRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const title2Refs = useRef<(HTMLHeadingElement | null)[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    img: string;
    title2: string;
  } | null>(null);

  const openModal = (img: string, title2: string) => {
    setSelectedImage({ img, title2 });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "2%" },
        {
          width: "13%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-15% 40%",
            end: "0% 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (borderImgRef.current) {
      gsap.fromTo(
        borderImgRef.current,
        { height: "10%" },
        {
          height: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "25% 70%",
            end: "95% 80%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    imageRefs.current.forEach((imageRef, idx) => {
      const title2Ref = title2Refs.current[idx];
      if (imageRef && title2Ref) {
        gsap.set(title2Ref, { opacity: 0, y: 20 }); // Initially hide title2
        gsap.fromTo(
          imageRef,
          { scale: 1 },
          {
            scale: 1.1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: imageRef,
              start: "-10% 70%",
              end: "bottom 80%",
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.5) {
                  // Reveal title2 after half of the scaling
                  gsap.to(title2Ref, { opacity: 1, y: 0, duration: 0.5 });
                } else {
                  gsap.to(title2Ref, { opacity: 0, y: 20, duration: 0.5 });
                }
              },
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div
        className="lg:mt-[8rem] mt-[6vh] lg:px-[2rem] px-[1rem] font-poppins pb-[8vh]"
        ref={carouselRef}
      >
        <div className="lg:px-[1rem] lg:mb-[22vh] mb-[10vh]">
          <div>
            <h2 className="lg:text-[2.9rem] text-[1.5rem] font-medium">
              <span className="text-[#c6c5c5]">
                {Page4Data.title.trim().replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-[#dc0e2a]">
                {Page4Data.title.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div
            className="border-t-[0.2rem] border-solid border-[#dc0e2a] w-[8rem] mt-[1rem]"
            ref={borderRef}
          ></div>
          <div className="lg:w-[76vw] w-[98%] lg:mt-[2rem] mt-[1rem]">
            <p className="lg:text-[1rem] text-[0.8rem]">
              {Page4Data.paragraph}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="lg:w-[1.7rem] w-[1.2rem] lg:h-[1.7rem] h-[1.2rem] bg-white border-2 border-solid border-[#dc0e2a] absolute lg:right-[5.6vw] right-[6vw] lg:-top-[7vh] -top-[3vh] rounded-full"></div>
          <div
            className="border-solid lg:border-r-[0.2rem] border-r-2 border-[#dc0e2a] absolute lg:-top-[4vh] -top-[2vh] lg:right-[6.5vw] right-[8.2vw] -z-10"
            ref={borderImgRef}
          ></div>
          {Page4Data.container.map((item, idx) => (
            <div key={idx} className="flex lg:my-[8vh] my-[2vh]">
              <div className="lg:w-[65%] w-[60%] pl-[1vw]">
                <h2 className="lg:text-[1.6rem] text-[1rem] text-[#483d73] font-medium lg:mb-[2vh] mb-[0.8vh]">
                  {item.title1}
                </h2>
                <p className="lg:text-[1rem] text-[0.6rem]">
                  {item.description}
                </p>
              </div>
              <div className="lg:w-[35%] w-[40%] flex justify-end items-center">
                <div className="h-full flex items-end">
                  <h3
                    className="bg-[#483d73] text-white lg:text-[1.1rem] text-[0.5rem] lg:py-[0.8vh] lg:px-[2.5vw] px-[1.2vw] rounded-[2rem] whitespace-nowrap"
                    ref={(el) => {
                      title2Refs.current[idx] = el;
                    }}
                  >
                    {item.title2}
                  </h3>
                </div>
                <div
                  className="lg:w-[11rem] w-[4rem] h-[4rem] lg:h-[11rem] border-2 border-solid border-[#483d73] rounded-full overflow-hidden"
                  onClick={() => openModal(item.img, item.title2)} // On click, open the modal
                  ref={(el) => {
                    imageRefs.current[idx] = el;
                  }}
                >
                  <Image
                    className="object-fill h-full w-full"
                    width={300}
                    height={300}
                    src={item.img}
                    alt={item.title1}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 lg:hidden flex items-center justify-center z-50">
          <div className="bg-white p-6 mx-4 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4 text-[#483d73]">
              {selectedImage.title2}
            </h2>
            <div className="relative w-full h-64">
              <Image
                className="object-cover w-full h-full rounded-lg"
                src={selectedImage.img}
                alt={selectedImage.title2}
                layout="fill"
              />
            </div>
            <button
              className="mt-4 py-1 px-2 rounded float-right bg-[#483d73] text-white"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page4;
