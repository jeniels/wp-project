import React from "react";

const SportsCategory = () => {
  return (
    <div className="h-[22rem] w-[30rem] relative mobile-category">
      <img
        src="https://images.hindustantimes.com/img/2022/07/07/1600x900/sports_shoes_for_men_1657191786436_1657191816166.jpg"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[22rem] w-[30rem] rounded-2xl mobile-category"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider mobile-category-font">
        Sports
      </h1>
    </div>
  );
};

export default SportsCategory;
