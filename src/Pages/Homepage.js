import React, { useState } from "react";
import anna from "../assets/images/annapurna.png";
import Starters from "../Components/Starters";
import Buttons from "../Components/Buttons";
import Chinese from "../Components/Chinese";
import Soups from "../Components/Soups";

const Homepage = () => {
  const [openStarters, setOpenStarters] = useState(false);
  const [openChinese, setOpenChinese] = useState(false);
  const handleStarter = () => {
    setOpenStarters(!openStarters);
  };
  const handleChinese = () => {
    setOpenChinese(!openChinese);
  };
  return (
    <>
      <div>
        <img src={anna} alt="Annapurna Best Hotel in Bramhapuri" />
        {/* <Buttons /> */}
      </div>

      <div className="py-7">
        <h1
          className="flex justify-center text-[#F87171] text-xl uppercase"
          onClick={handleStarter}
        >
          Starters
        </h1>
        {openStarters && <Starters />}
      </div>

      <div className="">
        <h1
          className="flex justify-center text-[#F87171] text-xl uppercase"
          onClick={handleChinese}
        >
          Chinese
        </h1>
        {openChinese && <Chinese />}
      </div>

      <div className="py-7">
        <h1 className="flex justify-center text-[#F87171] text-xl uppercase">
          Soups
        </h1>

        <Soups />
      </div>
    </>
  );
};

export default Homepage;
