import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Pages = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Page1 />
        <Page2 />
      </div>
    </>
  );
};

export default Pages;
