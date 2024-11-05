import Image from "next/image";
import data from "../Constants/hero.json"
export default function FeatureNews() {
  const newsfData=data.find((item)=>item.category==="newsFeature")?.data;
  if(!newsfData || !newsfData.newsData){
    return null;
  }
  return (
    <div className="h-full lg:px-10 max-w-screen-2xl mx-auto p-4 mb-[20vh] font-poppins font-regular">
      <div className="flex justify-center">
        <h2 className="text-3xl mb-8 bg-gradient-to-r from-[#483d73] to-red-700  bg-clip-text text-transparent ">
          <span className="font-medium">{newsfData?.heading}</span>{" "}
          <span className="font-semibold">{newsfData?.subheading}</span>
        </h2>
      </div>
      <div className="h-[20rem] grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Left side big article */}
        <div className="md:col-span-1">
          <article className="bg-white h-[20rem] p-2 shadow-lg rounded-2xl">
            <div className="p-2 relative h-[20%]">
              <h2 className="text-base lg:text-lg lg:font-medium">
                {newsfData?.newsData[0].title}
              </h2>
              <p className="text-xs hidden lg:flex font-regular text-gray-600 w-[90%]">
                {newsfData?.newsData[0].description}
              </p>
            </div>
            {/* Icon positioned absolutely over the image */}
            <div className="relative h-[80%] lg:h-[80%]">
              <div className="float-right h-[15%] flex items-center">
              </div>
              <Image
                src={newsfData?.newsData[0].image}
                alt={newsfData?.newsData[0].alt}
                width={600}
                height={200}
                className="w-full h-[85%] rounded-xl object-cover"
              />
            </div>
          </article>
        </div>

        {/* Right side smaller articles */}
        <div className="md:col-span-1 space-y-2 h-[20rem]">
          {newsfData?.newsData.slice(1).map((news, index) => (
            <article
              key={index}
              className="bg-white p-2 shadow-lg h-[31.6%] rounded-2xl flex relative"
            >
              <div className="p-2 w-2/3">
                <h3 className="text-md font-medium mb-1">{news.title}</h3>
                <p className="text-xs w-[90%] text-gray-600">
                  {news.description}
                </p>
              </div>
              <div className="absolute bottom-2 right-1/3 mr-4">
              </div>
              <Image
                src={news.image}
                alt={news.alt}
                width={150}
                height={150}
                className="w-1/3 object-cover rounded-xl"
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
