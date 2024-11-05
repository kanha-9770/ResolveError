import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../ui/Modal";
import { Item } from "../../type"; // Adjust the path according to your file structure

interface CardProps {
  firstname: string;
  secondname: string;
  image: StaticImageData;
  title: string;
  speed: number;
  unit: string;
  description: string;
  icon: StaticImageData;
  items: Item[];
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  speed,
  unit,
  icon,
  firstname,
  secondname,
  description,
  items,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isModalOpen]);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-1 top-24 px-4 pb-4 rounded-3xl relative">
      <div className="flex items-center justify-between mb-0">
        <div className="flex items-center">
          <div className="h-20 w-16 flex items-center justify-center">
            <Image src={icon} alt="icon" height={50} width={50} />
          </div>
          <div className="ml-2">
            <div className="relative h-14 w-14 flex items-center justify-center border-2 border-[#483d78] rounded-full bg-white">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-base font-bold text-red-500">{speed}</div>
                <div className="text-txs mt-1 text-gray-500">{unit}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={handleModalToggle}
          className="absolute text-3xl top-2 right-2 bg-[#483d78] text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <div className="-mt-1">+</div>
        </button>
      </div>
      <div className="h-40 relative rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-gray-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <span className="mr-0">{title}</span>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal
            image={image}
            title={title}
            firstname={firstname}
            secondname={secondname}
            description={description}
            items={items}
            onClose={handleModalToggle}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
