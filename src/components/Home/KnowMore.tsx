"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";
import Lenis from "@studio-freight/lenis";
import data from "../Constants/hero.json";
import dynamic from "next/dynamic";
const KnowMoreCard = dynamic(() => import("./Common/KnowMoreCard"));

export default function KnowMore() {
  const container = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null); // Persist Lenis instance

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();
    }

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    const animationFrame = requestAnimationFrame(raf);

    // Cleanup to cancel animation frame when component unmounts
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Memoize data to avoid recalculating on each render
  const knowmoreData = useMemo(() => {
    return data.find((item) => item.category === "knowmoresection")?.data?.knowmore || [];
  }, []);

  // Memoize the rendered cards regardless of knowmoreData's length
  const renderedCards = useMemo(() => {
    return knowmoreData.map((project, i) => {
      const targetScale = i < knowmoreData.length - 1 ? 1 - (knowmoreData.length - i) * 0.1 : 1;
      
      return (
        <KnowMoreCard
          url={""}
          key={`p_${i}`}
          i={i}
          {...project}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
          targetScale={targetScale}
        />
      );
    });
  }, [knowmoreData, scrollYProgress]);

  // Early return can come after hooks are invoked
  if (!knowmoreData.length) {
    return null;
  }

  return <main ref={container} className="h-full cursor-pointer">{renderedCards}</main>;
}