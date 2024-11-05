import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "1998",
      description:"Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market",
      image:"/assets/about/nessco-team.webp"
      
    },
    {
      title: "1999",
      description:"Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market",
      image:"/assets/about/nessco-team.webp"
    },
    {
      title: "2000",
       description:"Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market",
      image:"/assets/about/nessco-team.webp"
    },
    {
      title: "2001",
       description:"Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market",
      image:"/assets/about/nessco-team.webp"
    },
    {
      title: "2002",
      description:"Nessco India, founded in 1980, has evolved into a prominent leader in the manufacturing industry. Starting as a small enterprise, the company focused on producing high-quality packaging machinery and equipment. Over the decades, Nessco India has expanded its operations, embracing technological advancements and diversifying its product portfolio to meet the changing needs of the market",
      image:"/assets/about/nessco-team.webp"
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
