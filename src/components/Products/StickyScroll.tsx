"use client";
import React from "react";
import { StickyScroll } from "../ui/products/sticky-scroll-reveal";
import ProductDescription from "./ProductDescription";
import { SignupFormDemo } from "../Contact/SignupFormDemo";
import FaqSection from "./FaqSection";
import { HomeMachineCarousel } from "../Home/Common/HomeMachineCarousel";
import InfoCard from "./InfoCard";
import OverView from "./OverView";
import Description from "./Description";

const content = [
  {
    left: <ProductDescription />,
    right: <FaqSection />,
  },
  {
    left: <ProductDescription />,
    right: <SignupFormDemo />,
  },
  {
    left: (
      <InfoCard
        sizeRange={""}
        speedRoundShapes={""}
        maxCups={0}
        bmp100Compact={""}
        bmp100Super={""}
      />
    ),
    right: <SignupFormDemo />,
  },
  {
    left: <Description />,
    right: <SignupFormDemo />,
  },
  {
    left: <ProductDescription/>,
    right: "",
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="h-screen overflow-auto">
      <StickyScroll content={content} />
    </div>
  );
}
