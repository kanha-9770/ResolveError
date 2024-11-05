"use client";
import React, { useState, useRef } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page4 from "./Page4";
import Page5 from "./Page5";
import NavLinksDemo from "./navLinks";
import Page3 from "./Page3";

const Pages = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const Page1Ref = useRef<HTMLDivElement>(null);
  const Page2Ref = useRef<HTMLDivElement>(null);
  const Page3Ref = useRef<HTMLDivElement>(null);
  const Page4Ref = useRef<HTMLDivElement>(null);
  const Page5Ref = useRef<HTMLDivElement>(null);

  const navItems = [
    { text: "All Blogs", ref: Page2Ref },
    { text: "Fearured Blogs", ref: Page3Ref },
    { text: "For You", ref: Page4Ref },
    { text: "Sources", ref: Page5Ref },
  ];

  return (
    <>
      <main>
        <div className="flex lg:flex-row flex-col lg:mt-0 mt-[10vh]">
          <div className="w-full sticky top-0 lg:h-[82vh] hidden  lg:block">
            <Page1 onCategorySelect={setSelectedCategory} />
          </div>
          <div className="lg:hidden ">
            <NavLinksDemo navItems={navItems} />
          </div>
          <div className="flex flex-col">
            <div className="flex lg:flex-row flex-col">
              <div id="Featured Blogs" className="" ref={Page2Ref}>
                <Page2 selectedCategories={[]} />
              </div>
              <div id="Featured Blogs" className="" ref={Page3Ref}>
                <Page3 />
              </div>
            </div>
            <div id="For You" className="" ref={Page4Ref}>
              <Page4 />
            </div>
            <div id="Sources" ref={Page5Ref} className="">
              <Page5 />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pages;
