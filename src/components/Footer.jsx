import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black text-white ">
        <div className="grid  grid-cols-2 md:grid-cols-4 py-10 pl-28 ">
          <div>
            <h2 className="font-bold mb-3  text-[20px] md:text-[25px] ">
              Food<span className="text-[#fbc531] ">Fantasia</span>
            </h2>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              Bhopal,Madhya Pradesh
            </p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              808509XXXX
            </p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              ankityadav12502@gmail.com
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-3 text-[20px] md:text-[25px] ">
              Company
            </h2>
            <p className="text-[15px] md:text-[20px] text-[gray] ">About</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Careers</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Team</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              Swiggy one
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-3  text-[20px] md:text-[25px] ">
              Help & Support
            </h2>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Company</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              Partner with us
            </p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">
              Ride with us
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-3  text-[20px] md:text-[25px] ">
              We deliver to:
            </h2>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Banglore</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Bhopal</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Indore</p>
            <p className="text-[15px] md:text-[20px] text-[gray] ">Jabalpur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
