import React from "react";

const About = () => {
  return (
    <>
      <div className=" text-gray-600 body-font w-[80%] mx-auto mt-[100px]">
        <div className="px-[16px]">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Driveing the force of{" "}
            <span className="text-[#fbc531]">assortment</span>
          </h2>
          <p className=" mb-8 leading-relaxed text-[20px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut dolor
            eligendi iste neque repellendus ipsa cum veritatis porro iure
            consequatur quisquam voluptatibus illum temporibus explicabo, sequi
            laboriosam, veniam placeat! Omnis.
          </p>
        </div>

        <div className=" container mx-auto flex px-5 md:flex-row flex-col items-center  ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  ">
            <h2 className="title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              Who Are We?
            </h2>
            <p className="mb-8 leading-relaxed ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Distinctio temporibus dicta laudantium. Iusto hic iste dicta?
              Doloremque sunt in debitis, reprehenderit et officiis voluptates
              sint tempore possimus suscipit! Possimus illum provident, deleniti
              architecto repudiandae quam tenetur, optio, pariatur repellendus
              repellat aut laboriosam nobis ducimus veritatis quaerat rem a
              vitae eaque. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odit, quasi. debitis, reprehenderit et officiis voluptates
              sint tempore possimus suscipit! Possimus illum provident, deleniti
              architecto repudiandae quam tenetur, optio, pariatur repellendus
              repellat aut laboriosam nobis ducimus veritatis quaerat rem a
              vitae eaque. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odit, quasi. debitis, reprehenderit et officiis voluptates
              sint tempore possimus suscipit! Possimus illum provident, deleniti
              architecto repudia
            </p>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-5/6 mb-4">
            <img
              className="object-cover object-center rounded-md"
              src="https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
