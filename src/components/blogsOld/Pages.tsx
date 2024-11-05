import React from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const Pages = () => {
  return (
    <>
      <Page1/>
      <Page2/>
      <div className="flex">
        <Page3/>
        <Page4/>
      </div>
    </>
  );
};

export default Pages;
