"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface PageData {
  title1: string;
  title2: string;
  description: string;
  img: string;
}

export interface Page4Data {
  title: string;
  paragraph: string;
  container: PageData[];
}

export interface ProcessFlowProps {
  page4Data: Page4Data;
}

// ProcessFlow component
const ProcessFlow: React.FC<ProcessFlowProps> = ({ page4Data }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
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
        gsap.set(title2Ref, { opacity: 0, y: 20 });
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
    <div className="h-auto w-full">
      <div
        className="rounded-xl h-ful bg-white mt-[6vh] p-6 font-poppins"
        ref={carouselRef}
      >
        <div className="lg:px-[1rem]">
          <div className="border-t-[0.2rem] border-solid border-white w-[8rem] mt-[1rem]"></div>
        </div>

        <div className="relative">
          <div className="lg:w-[1.7rem] w-[1.2rem] lg:h-[1.7rem] z-20 h-[1.2rem] bg-white border-2 border-solid border-[#dc0e2a] absolute left-[5.7rem] lg:-top-[7vh] -top-[3vh] rounded-full"></div>
          <div
            className="border-solid lg:border-r-[0.2rem] border-r-2 border-[#dc0e2a] absolute lg:-top-[4vh] -top-[2vh] left-[6.5rem] z-10"
            ref={borderImgRef}
          ></div>

          {page4Data.container.map((item, idx) => (
            <div key={idx} className="flex lg:my-[8vh] my-[2vh] items-center">
              <div className="lg:w-[25%] w-[40%] relative flex justify-center">
                <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-center">
                  <h3
                    className="text-black text-xs font-semibold bg-white p-2 rounded-xl"
                    ref={(el) => {
                      title2Refs.current[idx] = el;
                    }}
                  >
                    {item.title2}
                  </h3>
                </div>
                <div
                  className="lg:w-[7rem] w-[4rem] bg-[#f5f5f5] rounded-xl z-20 h-[4rem] lg:h-[9rem] border-[1px] overflow-hidden cursor-pointer"
                  onClick={() => openModal(item.img, item.title2)}
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

              <div className="lg:w-[70%] w-[60%] pl-[1vw]">
                <h2 className="lg:text-base font-semibold text-[#483d73] lg:mb-[2vh] mb-[0.8vh]">
                  {item.title1}
                </h2>
                <p className="lg:text-sm text-sm font-regular">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                fill
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
    </div>
  );
};

export default ProcessFlow;
