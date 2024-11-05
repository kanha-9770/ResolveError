"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Home";
const NavLinksDemo=dynamic(()=>import("@/components/Home/NavLinks"),{ssr:false})
const FeatureNews=dynamic(()=>import("@/components/Home/FeatureNews"),{ssr:true})
import data from "../Constants/hero.json";
const AnnouncementSection=dynamic(()=>import("@/components/Home/AnnouncementSection"))
const ContactIcons=dynamic(()=>import("@/components/Contact/ContactIcon"))
const MarqueeSection = dynamic(
  () => import("@/components/Home/MarqueeSection"),
  { ssr: true }
);
const KnowMore = dynamic(() => import("@/components/Home/KnowMore"), {
  ssr: true,
});
const HomeMachine = dynamic(() => import("@/components/Home/HomeMachine"), {
  ssr: true,
});
const HomeTestimonial = dynamic(
  () => import("@/components/Home/TestimonialsSection"),
  { ssr: true }
);

export default function MainLayout() {
  const sectionRefs = {
    aboutUsRef: useRef<HTMLDivElement>(null),
    infiniteCardsRef: useRef<HTMLDivElement>(null),
    knowMoreRef: useRef<HTMLDivElement>(null),
    homeMachineRef: useRef<HTMLDivElement>(null),
    newsFeatureRef: useRef<HTMLDivElement>(null),
    homeTestimonialRef: useRef<HTMLDivElement>(null),
  };

  const [visibleSections, setVisibleSections] = useState({
    aboutUs: false,
    marquee: false,
    knowMore: false,
    homeMachine: false,
    testimonials: false,
  });

  const loadNextComponents = (currentSection: string) => {
    switch (currentSection) {
      case "aboutUs":
        setVisibleSections((prev) => ({
          ...prev,
          aboutUs: true,
          marquee: true,
          knowMore: true,
        }));
        break;
      case "clientele":
        setVisibleSections((prev) => ({
          ...prev,
          marquee: true,
          knowMore: true,
          homeMachine: true,
        }));
        break;
      case "knowMore":
        setVisibleSections((prev) => ({
          ...prev,
          knowMore: true,
          homeMachine: true,
          testimonials: true,
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }; // Trigger when 10% of the section is visible
    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          loadNextComponents(id);
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      });
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    // Start observing sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { text: "Machines", ref: sectionRefs.homeMachineRef },
    { text: "About Us", ref: sectionRefs.aboutUsRef },
    { text: "Clientele", ref: sectionRefs.infiniteCardsRef },
    { text: "KnowMore", ref: sectionRefs.knowMoreRef },
    { text: "News", ref: sectionRefs.newsFeatureRef },
    { text: "Testimonials", ref: sectionRefs.homeTestimonialRef },
  ];

  return (
    <main className="relative bg-[#f2f2f2] top-14 gap-2 h-full">
      <div className="top-2 relative">
        <Hero />
      </div>
      <ContactIcons />
      <NavLinksDemo navItems={navItems} />
      <div className="h-full font-poppins py-20">
        <div
          id="machines"
          className="flex space-y-6 flex-col"
          ref={sectionRefs.homeMachineRef}
        >
          <div className="flex justify-center text-3xl items-center space-x-2">
            <h2 className="bg-gradient-to-r text-3xl from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
              {data[0].homeMachineSection?.title.trim().replace(/\s+\S+$/, "")}
              <span className="font-semibold ml-1">
                {data[0].homeMachineSection?.title.trim().match(/\S+$/)}
              </span>
            </h2>
          </div>
          <div className="text-sm w-full lg:w-full flex items-center justify-center">
            <p className="lg:w-[50%] text-sm lg:px-0 px-2 lg:text-base font-regular text-center">
              {data[0].homeMachineSection?.subheading}
            </p>
          </div>
          <HomeMachine />
        </div>
        <div className="h-auto max-w-screen-2xl mx-auto lg:py-8">
          <AnnouncementSection />
        </div>
        
        <div
          id="clientele"
          className="max-w-screen-2xl mx-auto"
          ref={sectionRefs.infiniteCardsRef}
        >
          {<MarqueeSection />}
        </div>
        <div id="knowMore" className="h-auto" ref={sectionRefs.knowMoreRef}>
          {visibleSections.knowMore && <KnowMore />}
        </div>
        <div id="news" ref={sectionRefs.newsFeatureRef}>
          <FeatureNews />
        </div>
        <div
          id="testimonials"
          className="relative bg-gradient-to-l via-purple-200 to-transparent h-screen overflow-hidden"
          ref={sectionRefs.homeTestimonialRef}
        >
          {<HomeTestimonial />}
        </div>
      </div>
    </main>
  );
}
