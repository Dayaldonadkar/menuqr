import React, { useState } from "react";
import anna from "../assets/images/annapurna.png";
import Starters from "../Components/Starters";
import Buttons from "../Components/Buttons";
import Chinese from "../Components/Chinese";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
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
          onClick={handleClick}
        >
          Starters
        </h1>
        {open && <Starters />}
      </div>

      <div className="">
        <h1 className="flex justify-center text-[#F87171] text-xl uppercase">
          Chinese
        </h1>

        <Chinese />
      </div>
    </>
  );
};

export default Homepage;
