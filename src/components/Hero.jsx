import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const imgData = [
    {
      url: "https://images.unsplash.com/photo-1628191081698-44f573462a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?q=80&w=1868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    

    {
      url: "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      url: "https://images.unsplash.com/photo-1504693390394-c24671c3e8bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      url: "https://images.unsplash.com/photo-1469053713174-e64e64779a7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const sliderClear = setInterval(() => {
      handleMinus();
    }, 1000);
    return () => {
      clearInterval(sliderClear);
    };
  }, [slider]);

  return (
    <>
      <div className="mt-[150px]">
        <div className=" w-[90%] mx-auto h-[80vh] my-5 relative ">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img src={item.url} alt="" className="w-full h-[80vh]  rounded-2xl object-cover " />
            </div>
          ))}
      <div className=" w-full rounded-2xl mx-auto h-[80vh] bg-black absolute top-0 left-0 opacity-50"></div>
      <div className=" mx-auto  text-[50px] absolute top-[50%]  font-semibold text-2xl left-[20%] text-white  ">
      <p className="">
        Welcome to the world of tasty & <span className="text-[#fbc531]">Fresh food</span>
      </p>
      </div>
        </div>
      </div>
      <div className="flex justify-between w-full px-5 absolute top-[50%] ">
        <FaChevronLeft
          size={35}
          className="cursor-pointer"
          onClick={handleMinus}
        />
        <FaChevronRight
          size={35}
          className="cursor-pointer"
          onClick={handlePlus}
        />
      </div>
    </>
  );
};

export default Hero;
