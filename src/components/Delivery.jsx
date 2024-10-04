import React from "react";

const Delivery = () => {
  return (
    <>
      <div className="w-full">
        <h3 className="text-[#fbc531] font-bold text-2xl text-center ">
          Quick Delivery App
        </h3>
        <div className="grid grid-cols-2 w-[70%] mx-auto my-10">
          <img
            src="https://eattoss.com/landing/assets/eattoss.png"
            alt=""
            className="w-[550px]"
          />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-[green] md:text-[30px] text-[20px] ">
              Get The App
            </p>
            <h2 className="lg:text-5xl md:text-3xl sm:text-2xl py-2 font-bold">
              The Fastest Delivery In India
            </h2>
            <button className="sm:w-[100px] bg-black md:w-[150px] text-white rounded-md my-6 py-[15px] md:text-[20px] sm:text-[10px] hover:text-[#fbc531] font-semibold  ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
