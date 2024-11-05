"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { GrAddCircle } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';
import styles from './about.module.css';
import { founders,ourfounderheading } from '../Constants/ourCompany/OurcompanyPage.json'; // Import the dynamic content
import { FaQuoteLeft } from 'react-icons/fa';

interface FounderProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  linkedInUrl: string;
}

interface CardProps {
  handleCloseModal: () => void;
  founderData: FounderProps;
}

const FounderCard: React.FC<FounderProps & { onOpenModal: () => void }> = ({ name, title, imageSrc, linkedInUrl, description, onOpenModal }) => (
  <div className={`${styles.card} lg:w-[35%] w-full mb-8 flex lg:flex-col  `}>
    {/* Image container */}
    <div className={`${styles.imageContainer} w-full h-full lg:h-[36vh] lg:w-[30vw] p-1`}>
      <Image
        className='transform 0.3 ease-in-out lg:w-[79%] lg:rounded-t-lg  rounded-lg lg:rounded-none '
        src={imageSrc}
        alt={name}
        width={400}
        height={400}
      />
    
    </div>

    {/* Content */}
    <div className="relative justify-center pt-[4vh] ">
      <h3 className={`${styles.nameTitle}  lg:mt-20 mt-3  lg:right-0`}>
        {name}
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
        <Image
            src="/assets/about/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="inline-block"
          />
        </a>
      </h3>
      <p className='pb-3   lg:right-0'>{title}</p>
      <FaQuoteLeft className='lg:invisible visible ml-14 '/>
      <p className='lg:invisible visible  '>“The work we do reflect who we are”</p>

      {/* Hidden box for description */}
      <div className={`${styles.descriptionContainer} lg:visible invisible`}>
        <h3 className='font-bold font-montserrat text-lg mt-1'>{name}</h3>
        <p className='font-montserrat '>{title}</p>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="">
        <Image
            src="/assets/about/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            className="inline-block mb-3"
          />
        </a>
        <p className="text-black font-poppins leading-5">{description}</p>
      </div>
    </div>
  </div>
);

const Card: React.FC<CardProps> = ({ handleCloseModal, founderData }) => {
  return (
    <div className="p-1 top-8 bg-white h-[88%] w-[95%] rounded-xl shadow-md relative bottom-5 text-black ">
      
      {/* Display founder data */}
      <div className="p-4 font-poppins">
        <h3 className='text-xl font-bold'>{founderData.name}</h3>
        <p className='text-lg'>{founderData.title}</p>
        <p>{founderData.description}</p>
      </div>
    </div>
  );
};

const Founders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState<FounderProps | null>(null);

  const openModal = (founder: FounderProps) => {
    setSelectedFounder(founder);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFounder(null);
  };

  return (
    <div className="bg-black text-white py-16 min-h-screen">
      <h2 className="text-center text-5xl font-montserrat mb-8 mt-28">
        {ourfounderheading.title}
      </h2>
      <div className="lg:flex justify-center lg:space-x-8 lg:w-5/6 lg:ml-28  w-[90vw] mx-5 lg:mx-0">
        {founders.map((founder, index) => (
          <FounderCard
            key={index}
            {...founder}
            onOpenModal={() => openModal(founder)}
          />
        ))}
      </div>

    
    </div>
  );
};

export default Founders;
