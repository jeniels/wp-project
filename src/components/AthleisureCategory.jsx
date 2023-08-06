import React from "react";

const AthleisureCategory = () => {
  return (
    <div className="h-[45rem] w-[24rem] relative mobile-category-formal">
      <img
        src="https://i.pinimg.com/736x/aa/30/58/aa3058c59b66a788b6b2bfe4d3ecb656.jpg"
        alt="formal-logo"
        className="absolute inset-0 bg-cover bg-center z-0 h-[45rem] w-[24rem] object-cover rounded-2xl mobile-category-formal"
      />
      <h1 className="opacity-0 hover:opacity-70 bg-black rounded-2xl duration-300 absolute inset-0 z-10 flex justify-center  border  items-center text-6xl text-white font-semibold font-bebas tracking-wider mobile-category-font">
        Boots
      </h1>
    </div>
  );
};

export default AthleisureCategory;
