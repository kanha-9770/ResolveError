import React from "react";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* top page */}
      <div className="h-1/2 flex flex-row w-full">
        {/* fixed content */}
        <div className="1/3 h-full">
        <h1 className="text-red-500 font-poppins text-5xl ">
            <div className="text-gray-700">Our</div>
             Products
        </h1>
        <p></p>
        </div>
        {/* carousel */}
        <div className="2/3 h-full">

        </div>
      </div>
      {/* accordian */}
      <div className="h-1/2"></div>
    </div>
  );
};

export default Home;
