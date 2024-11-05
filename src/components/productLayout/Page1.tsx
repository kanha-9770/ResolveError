import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type Page1Props = {
  page1machine: { image: string; description: string; title: string };
};

const Page1: React.FC<Page1Props> = ({ page1machine }) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        gsap.to(h1Ref.current, {
          position: "fixed",
          backdropFilter: "blur(30px)",
          width: "100%",
          paddingTop: "3.2rem",
          paddingLeft: "1rem",
          fontSize: "1.5rem",
          top: 0,
          left: 0,
          zIndex: "10",
          height: "6rem",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(span1Ref.current, {
          color: "#424242", 
          display: "inline-block",
          fontWeight: "500",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(span2Ref.current, {
          color: "#424242", 
          display: "inline-block",
          fontWeight: "500",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(h1Ref.current, {
          position: "static",
          paddingTop: 0,
          fontSize: "2.8rem",
          paddingLeft: 0,
          height: "auto",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(span1Ref.current, {
          color: "#9e9c9c", 
          display: "block",
          fontWeight: "500",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(span2Ref.current, {
          color: "#dc0e2a", 
          display: "block",
          fontWeight: "700",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const checkAndAddScroll = () => {
      if (mediaQuery.matches) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Check and apply the correct listener initially
    checkAndAddScroll();

    // Re-run the check if the screen size changes
    mediaQuery.addEventListener("change", checkAndAddScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", checkAndAddScroll);
    };
  }, []);

  return (
    <div className="w-full mt-[2rem] lg:px-[2vw] px-[1rem] pt-[2rem] pb-[1rem] border-solid border-b-2 border-[#d6d6d6] bg-white flex">
      <div>
        <h1 ref={h1Ref} className="lg:text-[2.8rem] text-[1.5rem] lg:mb-[1rem] mb-[0.5rem] leading-[3rem]">
          <span ref={span1Ref} className="text-[#9e9c9c] font-medium lg:block">
            {page1machine.title.split(" ").slice(0, -2).join(" ")}
          </span>{" "}
          <span ref={span2Ref} className="text-[#dc0e2a] font-bold lg:block">
            {page1machine.title.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p className="lg:w-[70%] w-[90%] lg:text-[0.9rem] text-[0.7rem] text-[#9e9c9c]">
          {page1machine?.description}
        </p>
      </div>
      <div>
        <Image
          className="h-full lg:w-[15vw]"
          width={400}
          height={400}
          src={page1machine.image}
          alt={page1machine?.title || "No title available"}
        />
      </div>
    </div>
  );
};

export default Page1;
