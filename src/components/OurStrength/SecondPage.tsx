import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  OurStrengthFeature,
  HollowCircle,
  AddIcon,
  leftIcon,
  rightIcon,
} from "../Constants/OurStrength/OurStrength-Data";
import "./OurStrength.css";
import Modal from "./Modal";
import Line from "../../../public/assets/ourStrength/Line.svg";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

const baseTop = 15;
const spacing = 11;

const SecondPage = () => {
  const containerRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [componentData, setComponentData] = useState(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const secondPageStart = windowHeight; // The second page starts after the first viewport height
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollableHeight = documentHeight - secondPageStart;

      // Only start filling after reaching the second page
      if (scrollTop > secondPageStart) {
        const scrolledFromSecondPage = scrollTop - secondPageStart;
        const scrolled = (scrolledFromSecondPage / scrollableHeight) * 70;
        setScrollPercent(scrolled);
      } else {
        setScrollPercent(0); // No fill before reaching the second page
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = (content) => {
    setComponentData(content);
    setIsModalOpen(true);
    console.log(content.modalContent);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setComponentData(null);
    console.log(componentData.modalContent);
  };

  useEffect(() => {
    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px", // No margin offsets
      threshold: 1, // 50% of the element needs to be visible
    };

    const observer = new IntersectionObserver((entries) => {
      let newActiveIndex = null; // Track the index of the currently visible element

      entries.forEach((entry) => {
        const index = entry.target.dataset.index;

        if (entry.isIntersecting) {
          newActiveIndex = index;
        }
      });

      setActiveIndex(newActiveIndex);
    }, options);

    containerRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      containerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div>
      <div className="relative h-screen items-center min-h-[600vh] mb-[38rem]">
        <div className="Feature sticky top-0 flex flex-col items-center">
          <div className="absolute -top-[38vh]  text-white text-3xl">
            <img src="/assets/ourStrength/Line.svg" width={850} alt="img" />
          </div>
          {/* <div className="absolute -top-[26vh] h-[130vh] w-[0.15rem] bg-white"></div> */}
          <div
            className="absolute top-[10vh] h-[124vh] w-[0.15rem]"
            style={{
              background: `linear-gradient(to bottom, #76479C ${scrollPercent}%, white ${scrollPercent}%)`,
            }}
          ></div>
          {OurStrengthFeature.strengthItems.map((item, index) => (
            <div
              key={index}
              className="absolute scale-75 font-poppins"
              style={{ top: `${baseTop + index * spacing}vh` }}
            >
              <div className=" flex items-center justify-center">
                {index % 2 === 0 && (
                  <h1
                    className={`absolute left-[2rem] text-black  text-center italic text-[1rem] transition-all duration-500 ${
                      activeIndex == index ? "font-black text-[2vw]" : ""
                    }`}
                  >
                    {item}
                  </h1>
                )}
                <div
                  className={`bg-white w-5 h-5 rounded-full border-[#76479C] border-[0.3rem] transition-all duration-500 
                  ${activeIndex == index ? "border-[0.62rem]" : ""}
                  `}
                ></div>
                {index % 2 !== 0 && (
                  <span
                    className={`absolute right-[2rem] text-black  text-center italic text-[1rem] transition-all duration-500 ${
                      activeIndex == index ? "font-black text-[2vw]" : ""
                    }`}
                  >
                    {item}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {OurStrengthFeature.StrengthComponent.map((item, index) => (
          <div
            key={index}
            ref={(el) => (containerRefs.current[index] = el)}
            data-index={index}
            className={`absolute  ${
              index % 2 === 0 ? "left-[2rem]" : "right-[2rem]"
            } w-[30rem] h-[30rem] bg-white rounded-3xl transition-all duration-500`}
            style={{ top: `${50 + index * 80}vh` }}
          >
            <div className="grid grid-cols-2 gap-4 mx-8 mt-5">
              <div className="grid justify-items-center">
                <h1 className="text-2xl mt-6 font-poppins font-black text-center">
                  {item.title1}
                </h1>
                <h1 className="font-poppins font-semibold text-center text-[#76479C]">
                  {item.title2}
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
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
            <p className="mx-8 mt-10 text-14">{item.description}</p>
            <div className="absolute bottom-2 right-2 text-[3rem]">
              <button onClick={() => openModal(item)}>{AddIcon}</button>
            </div>
          </div>
        ))}

        <Modal isVisible={isModalOpen} onClose={closeModal}>
          {isModalOpen && componentData && (
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-[60rem] flex justify-center items-center">
                <div className="overflow-hidden w-[30rem]">
                  <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.5}
                    loop={true}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 100,
                      depth: 50,
                      modifier: 2,
                      slideShadows: true,
                    }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    modules={[EffectCoverflow, Navigation]}
                    className="mySwiper"
                  >
                    {componentData.modalContent.images.map((img, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <img src={img} alt={`Image ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Navigation Buttons */}
                    <button ref={prevRef} className="absolute left-[10rem] inset-y-1/2 justify-between items-center z-90 text-[2.5rem]">
                      {leftIcon}
                    </button>
                    <button ref={nextRef} className="absolute right-[10rem] inset-y-1/2 justify-between items-center z-90 text-[2.5rem]">
                      {rightIcon}
                    </button>
                </div>
              </div>
              <div className="absolute top-10 left-[20rem]  bg-gradient-to-r from-white to-transparent w-[5rem] h-96 z-10"></div>
              <div className="absolute top-10 right-[20rem]  bg-gradient-to-l from-white to-transparent w-[5rem] h-96 z-10"></div>
              <h2 className="text-2xl font-bold font-poppins py-10">
                {componentData.modalContent.title}
              </h2>
              <p className="w-[60rem] font-poppins">
                {componentData.modalContent.description}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default SecondPage;
