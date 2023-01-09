import React from "react";

const Leftchild = ({ data }) => {
  return (
    <li className="mb-24 grid grid-cols-12 gap-3 text-white relative">
      <div className="z-10 col-start-1 col-end-7 absolute">
        <p className="text-[#388F87]">Featured Project</p>
        <h3 className="text-2xl mb-5">
          <a
            href="https://www.chowbus.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {data.title}
          </a>
        </h3>
        <div className="bg-[#051020] p-6 w-[400px] h-44 rounded grid justify-items-end z-50">
          <p>{data.description}</p>
        </div>
        <ul className="flex justify-start mt-5">
          <li>Next.js</li>
          <li className="ml-4">React.js</li>
        </ul>
      </div>
      <div className="col-start-5 col-end-12 flex before:content-[''] before:block before:w-[580px] before:h-[312px] before:bg-[#63FDD8] before:opacity-75 before:absolute before:rounded before:hover:opacity-0 cursor-pointer">
        <img
          className="w-[579px] h-[312px] rounded -z-10"
          src={data.img}
          alt=""
          // https://wholespace.netlify.app/static/131e91be1a89a0e27b48b81ba91f12f9/d9e63/demo.avif
        ></img>
      </div>
    </li>
  );
};

export default Leftchild;
