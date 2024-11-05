"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Page1Data } from "../Constants/blogs/blogsOld_data";

export const Marque = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    alt: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller bg-white relative max-w-[66.3rem] overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex bg-white shrink-0 gap-4 py-0 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {Page1Data.products.map((item, idx) => (
        <div
          key={idx}
          className="h-24 w-[17rem] ml-[0.5rem] my-[1rem] rounded-[0.6rem] flex items-center justify-start"
        >
          <Image
            src={item.image}
            alt={`paperCup-${idx}`}
            className="w-[6rem] rounded-[0.5rem] ml-[0.5rem]"
          />
          <p className="text-black font-medium font-montserrat mx-[1rem] text-[0.9rem]">
            {item.description}
          </p>
        </div>
      ))}
      </ul>
    </div>
  );
};
