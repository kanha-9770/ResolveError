"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Page1Data } from "../Constants/application/applicationLayout_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter, usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  image: string;
  title: string;
  img: string;
};

type Page1Props = {
  page1product?: Product;
};

const Page1: React.FC<Page1Props> = ({ page1product }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    page1product
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  // Update selected product when the route changes
  useEffect(() => {
    if (pathname) {
      const matchedProduct = Page1Data.icons.find(
        (item) =>
          encodeURIComponent(item.title).toLowerCase() ===
          pathname.split("/").pop()?.toLowerCase()
      );
      if (matchedProduct) {
        setSelectedProduct(matchedProduct);
      } else {
        setSelectedProduct(page1product);
      }
    }
  }, [pathname, page1product]);

  // Scroll left and right in the carousel
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Handle product click: update state and change route
  const handleProductClick = (item: Product) => {
    setSelectedProduct(item);
    router.push(`/in/application/${encodeURIComponent(item.title)}`);
  };

  // Title resize on scroll
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)"); // Adjust the breakpoint as needed

    const animateTitleAndImage = () => {
      if (mediaQuery.matches && titleRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "40% 10%",
            end: "140% 20%",
            scrub: true,
          },
        });

        tl.fromTo(
          titleRef.current,
          { height: "5rem", fontSize: "2.8rem", paddingTop: "0.6rem", boxShadow: "xl #f2f2f2", background: "white" },
          { height: "2.8rem", fontSize: "1.6rem", paddingTop: "0.2rem", background: "transparent", backdropFilter: "blur(30px)" }
        )
          .to(
            titleRef.current.querySelectorAll("span"),
            { color: "#424242", fontWeight: "500" },
            "<"
          )
          .to(titleRef.current, { boxShadow: "none" }, "<");

        // Decrease image width on scroll
        if (selectedProduct?.image) {
          tl.fromTo(
            titleRef.current.querySelector("img"),
            { width: "4vw", top: "2"},
            { width: "2.5vw", top: "0" },
            "<"
          );
        }
      }
    };

    // Initial check when the component mounts
    animateTitleAndImage();

    // Listen for viewport changes and reapply the animation if necessary
    mediaQuery.addEventListener("change", animateTitleAndImage);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", animateTitleAndImage);
    };
  }, [selectedProduct]);

  return (
    <>
      <div className="w-full">
        <div className="w-full bg-white relative top-[3.5rem] flex flex-col items-center">
          <div
            className="lg:h-[5rem] h-[6vh] w-full bg-white lg:fixed lg:text-[2.8rem] text-[1.8rem] z-20 shadow-xl shadow-[#f2f2f2] relative flex"
            ref={titleRef}
          >
            <h1 className="lg:ml-[0.8vw] ml-[2vw] font-bold whitespace-nowrap">
              <span className="text-[#9e9c9c]">
                {selectedProduct?.title.trim().replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-[#dc0e2a]">
                {selectedProduct?.title.trim().match(/\S+$/)}
              </span>
            </h1>

            {selectedProduct?.image && (
              <Image
                className="h-full lg:w-[4vw] w-[10vw] absolute right-2 lg:top-2"
                width={100}
                height={100}
                src={selectedProduct.img}
                alt={selectedProduct?.title || "No title available"}
              />
            )}
          </div>

          <div className="lg:w-[82vw] w-[95vw] lg:mt-[4rem] overflow-hidden">
            <button
              className="text-[#3a2a79] lg:text-[2.5rem] text-[1.2rem] absolute lg:bottom-[7vh] -bottom-[4vh] lg:left-4 right-14 lg:hover:text-[#9e9c9c] lg:bg-transparent rounded-full p-1 bg-white"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="text-[#3a2a79] lg:text-[2.5rem] text-[1.2rem] absolute lg:bottom-[7vh] -bottom-[4vh] right-4 lg:hover:text-[#9e9c9c] lg:bg-transparent rounded-full p-1 bg-white"
              onClick={scrollRight}
            >
              <IoIosArrowForward />
            </button>
            <div
              className="flex justify-center items-center overflow-auto w-full scrollbar-hide"
              ref={carouselRef}
            >
              <div className="w-max lg:mt-[4vh] mt-[1vh] flex justify-center lg:pl-[60vw] pl-[192vw]">
                {Page1Data.icons.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col mx-[2vw] lg:w-[8vw] w-[20vw] items-center"
                    onClick={() => handleProductClick(item)}
                  >
                    <Image
                      className="lg:h-[11vh] h-[8vh] z-10"
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.title}
                    />

                    <p
                      className={`text-center hover:text-[#483d73] hover:font-semibold font-poppins lg:text-[1rem] text-[0.7rem] cursor-pointer ${
                        selectedProduct?.title === item.title
                          ? "text-[#483d73] font-semibold"
                          : "text-[#9e9c9c]"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
