"use client";
import React, { useState } from "react";
import cardsData from "../Constants/hero.json"; // Assuming you have your product data in this JSON
import dynamic from "next/dynamic";
const HomeMachineCarousel = dynamic(
  () => import("./Common/HomeMachineCarousel")
);
// Define the type for each card item
type CardItem = {
  category: string;
  firstname: string;
  secondname: string;
  description: string;
  image: string;
  title: string;
  speed: number;
  unit: string;
  icon: string;
  items: { className: string; text: string }[];
};

const HomeMachine: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const categories = ["all", "cup", "bowl", "bag", "plate", "straw"];

  // Access the product data from the 'ProductSection'
  const productData = cardsData.find(
    (item) => item.category === "ProductSection"
  )?.data?.products;

  if (!productData) {
    return <div>No products available</div>;
  }

  // Filter products based on the active step (category)
  const filteredCardsData: CardItem[] =
    categories[activeStep] === "all"
      ? productData
      : productData.filter(
          (card: CardItem) => card.category === categories[activeStep]
        );

  return (
    <div className="h-full w-screen max-w-screen-2xl mx-auto">
      {/* Stepper to switch between categories */}

      {/* Carousel displaying the filtered products */}
      <div className="h-[90%] mt-4 lg:ml-0">
        <HomeMachineCarousel filteredCardsData={filteredCardsData} />
      </div>
    </div>
  );
};

export default HomeMachine;
