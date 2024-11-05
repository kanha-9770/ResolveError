import { useEffect, useState, useRef } from "react";
import { FaQuestionCircle, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { Page5Data } from "../Constants/applicationOld/applicationOld_data";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is it possible to use renewable paper?",
    answer: "Yes, renewable paper can be used for the cups.",
  },
  {
    question: "Can the surface be printed and embossed?",
    answer: "Yes, the surface can be both printed and embossed.",
  },
  {
    question: "What is the main paper material for the cup?",
    answer: "The main paper material used is high-quality cardboard.",
  },
  {
    question: "Is it possible to use renewable paper?",
    answer: "Yes, renewable paper can be used for the cups.",
  },
  {
    question: "Can the surface be printed and embossed?",
    answer: "Yes, the surface can be both printed and embossed.",
  },
  {
    question: "What is the main paper material for the cup?",
    answer: "The main paper material used is high-quality cardboard.",
  },
  // Add more FAQs as needed
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (faqListRef.current) {
      gsap.to(faqListRef.current, {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: faqListRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  const handleFaqClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex overflow-hidden h-max flex-col lg:flex-row lg:space-x-8 p-6 w-full mx-auto bg-white rounded-xl ">
      <div className="w-[70%] bg-white mx-[1rem] border-4 border-solid border-[#e8e5e5] h-full rounded-[2rem] flex items-center justify-center py-[0.5rem]">
        <div className="w-[60%] h-[27rem] mr-[0.5rem] overflow-hidden rounded-[1.5rem] ">
          <div className="overflow-auto h-full scrollbar-hide">
            {Page5Data.questions.map((item, idx) => (
              <div
                key={idx}
                className="h-max py-[1rem] border-b-2 border-solid border-[#e8e5e5] flex items-center hover:text-[#e12d2c] hover:font-semibold active:text-[#e12d2c] active:font-semibold text-[#575555]"
              >
                <p className="text-[1.2rem] font-poppins w-[75%] mx-[1.5rem] ">
                  {item.title}
                </p>
                <p className="text-[2rem] font-poppins  ml-[3rem] mr-[1rem]">
                  {item.questionIcon}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40%] h-[27rem] mx-[0.5rem] rounded-[1.5rem] border-2 border-solid border-[#e8e5e5] overflow-hidden">
          <div className="overflow-auto h-full scrollbar-hide">
            {Page5Data.answers.map((item, idx) => (
              <div key={idx} className="flex justify-center">
                <p className="my-[2.5rem] w-[16vw] text-[1.2rem] text-center text-[#575555]">
                  {item.ans}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
