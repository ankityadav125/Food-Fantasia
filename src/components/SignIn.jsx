import React from "react";

const SignIn = () => {
  return (
    <>
      <div className=" text-gray-900 body-font w-[90%] sm:w-[80%] mx-auto mt-[100px] ">
        <div className=" container px-5 py-24 mx-auto flex flex-wrap items-center ">
          <div className=" lg:3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 ">
            <h1 className=" title-font font-medium text-3xl text-gray-900 ">
              Get Started With Your Account
            </h1>
            <p className=" leading-relaxed mt-4 ">
              Find your favourate food on our platform. Just one step to order
              your Food
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
            <h2 className=" text-gray-900 text-lg font-medium title-font mb-5 ">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                className="leading-7 text-sm text-gray-600 "
                For="full-name"
              >
                Full Name
              </label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className=" w-full bg-white rounded border-gray-300  focus:ring-2 focus:border-indigo-500 focus:ring-indigo-200 text outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out "
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 " For="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className=" w-full bg-white rounded border-gray-300  focus:ring-2 focus:border-indigo-500 focus:ring-indigo-200 text outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out "
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 " For="mobile">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                className=" w-full bg-white rounded border-gray-300  focus:ring-2 focus:border-indigo-500 focus:ring-indigo-200 text outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out "
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600 " For="email">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className=" w-full bg-white rounded border-gray-300  focus:ring-2 focus:border-indigo-500 focus:ring-indigo-200 text outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out "
              />
            </div>

            <button className="text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
