import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./Carousel.css"; // Optional: Add custom CSS for any additional styling

interface CarouselProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        handleNext();
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoSlide, autoSlideInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <div className="flex transition-transform duration-500">
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames(
              "min-w-full transition-opacity duration-500",
              {
                "opacity-100": index === currentIndex,
                "opacity-0": index !== currentIndex,
              }
            )}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={handleNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
