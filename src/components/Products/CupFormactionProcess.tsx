import React from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Import CSS for styling
import AboutUs from '../../../public/assets/AboutUs.png';

const CupFormactionProcess = () => {
  return (
    <div className="h-auto ">
      <div className="h-[80vh] p-4 flex rounded-xl flex-col bg-white shadow-lg w-full">
        <div className="z-20 text-3xl font-poppins">
          <span className="z-20">Process of</span>{' '}
          <span className="text-red-500 font-semibold">Cup Formation</span>
        </div>

        <div className="relative w-full h-full -mt-12 rounded-2xl overflow-hidden">
          <Zoom>
            <Image
              className="w-full h-full rounded-2xl"
              height={800}
              width={800}
              src={AboutUs}
              alt="Cup Formation"
              layout="responsive"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default CupFormactionProcess;
