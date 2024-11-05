import React from "react";
import PaperCup from "./PaperCup";
import LunchBox from "./LunchBox";
import PaperCupWithLid from "./PaperCupWithLid";
import PaperStraw from "./PaperStraw";
import PaperRoll from "./PaperRoll";
import PaperCupWithSleeve from "./PaperCupWithSleeve";
import PaperPlate from "./PaperPlate";
import PaperBowl from "./PaperBowl";
import PaperBlank from "./PaperBlank";
import PaperCutlery from "./PaperCutlery";
import HandBurgerBox from "./HandBurgerBox";
import PopcornTub from "./PopcornTub";

const Applications = () => {
  return (
    <div className="relative items-center justify-center mt-20">
      <div className=" grid grid-cols-12 items-end">
        <PaperCutlery/>
        <PaperCupWithSleeve/>
        <PaperCupWithLid/>
        <PaperCup />
        <PopcornTub/>
        <LunchBox/>
        <PaperStraw/>
        <PaperRoll/>
        <PaperPlate/>
        <PaperBowl/>
        <PaperBlank/>
        <HandBurgerBox/>
      </div>
    </div>
  );
};

export default Applications;
