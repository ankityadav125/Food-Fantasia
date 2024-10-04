import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({ count }) => {
  const [sideNav, setSideNav] = useState(false);
  //   console.log(sideNav);

  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-white ">
      <div className=" flex justify-between py-[20px] px-[25px] text-[20px] font-semibold border border-b relative ">
        <div>
          <Link to="/">
            <p>
              Food
              <span className="text-[#fbc531]  ">
                Fantasia
              </span>
            </p>
          </Link>
        </div>

        <div>
          <ul className="sm:flex gap-4 hidden  cursor-pointer   ">
            <Link to="/">
              <li className="hover:text-[#fbc531]">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[#fbc531]">About Us</li>
            </Link>
            <Link to="/ourfood">
              <li className="hover:text-[#fbc531]">Our Food</li>
            </Link>
            <Link to="/signin">
              <li className="hover:text-[#fbc531]">Sign In</li>
            </Link>
          </ul>
        </div>
        {sideNav ? (
          <div className="bg-[#f5f6fa] w-[300px] absolute top-[0px] right-0 text-center h-[100vh] flex justify-center items-center z-10  ">
            <RxCross2
              onClick={() => setSideNav(!sideNav)}
              className=" absolute top-3 right-3  cursor-pointer "
              size={30}
            />

            <ul className="flex gap-12  cursor-pointer flex-col">
              <Link to="/">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  About Us
                </li>
              </Link>
              <Link to="/ourfood">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Our Food
                </li>
              </Link>
              <Link to="/signin">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Sign In
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}
        <div className="flex gap-5">
          <p>
            <GiHamburgerMenu
              size={30}
              onClick={() => setSideNav(!sideNav)}
              className=" cursor-pointer block sm:hidden"
            />
          </p>
          <p>
            {count}
            <FaCartShopping size={30} className=" cursor-pointer " />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
