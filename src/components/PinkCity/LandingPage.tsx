
import Image from 'next/image';
import { landingPageContent } from '../Constants/pinkcity/PinkcityPage.json'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col p-5  min-h-screen lg:p-6 lg:h-screen ">
      {/* Background Image Container */}
      <div className="relative w-full lg:h-[70vh]  lg:mt-10 mt-16 lg:left-0 h-[70vh] ">
        <Image
          src={landingPageContent.backgroundImg}
          alt="Jaipur"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
          className="rounded-lg lg:rounded-2xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[30rem] bg-gradient-to-t from-black to-transparent rounded-b-lg lg:invisible"></div>
      </div>

      {/* Title */}
      <div className='w-full absolute top-[45vh] justify-center text-center right-0 lg:relative lg:-top-16 lg:w-0  lg:-mt-52 lg:left-12'>
      <h2 className="    font-poppins text-white text-8xl lg:text-9xl ">
        Jaipur
      </h2>
      </div>

      {/* Content Section */}
      <div className="w-full lg:max-w-screen-xl flex flex-col items-center mt-20 lg:mt-7 relative">
        {/* Corner Image */}
        <div className="absolute lg:left-0 lg:bottom-0 lg:visible invisible -ml-56 lg:-ml-20 lg:-mb-7 lg:top-12 -mt-20">
          <Image
            src={landingPageContent.cornerLayerImg}
            alt="Stroke"
            width={300}
            height={300}
          />
        </div>

        {/* Description and Sticker Section */}
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-full relative justify-center">
          {/* Description */}
          <div className="flex-1 text-center left-5 lg:left-6 absolute -top-[30vh]  lg:top-24 ">
            <p className="text-white lg:text-black font-poppins lg:text-sm text-xs font-regular lg:w-[29vw] w-[80vw] ">
              {landingPageContent.description}
            </p>
          </div>

          {/* Sticker Image */}
          <div className=" absolute flex-shrink-0 lg:-mt-24 lg:top-0 -bottom-20 lg:bottom-0 p-32 lg:p-0">
            <div className="lg:w-full lg:h-full h-full w-full lg:ml-0 lg:mt-0">
              <Image
                src={landingPageContent.stickerImg}
                alt="The Pink City"
                width={420}
                height={180}
              />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 flex-row lg:right-72 mt-44 lg:-top-28 top-0 lg:w-[10vw] lg:h-0 h-10 w-full absolute">
            <h2 className="font-poppins font-regular text-xl lg:text-5xl lg:mt-0 -mt-64  h-[6vh] w-full flex justify-between lg:text-center text-left lg:flex-col lg:w-[30vw] ">
              {landingPageContent.title}{' '}
              <span className="font-poppins font-regular  text-red-800 text-2xl lg:text-6xl lg:ml-0  relative lg:left-0 text-right  ">
                {landingPageContent.subtitle}
              </span>
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
























