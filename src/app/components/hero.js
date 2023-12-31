import React from "react";
import "../globals.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function hero() {
  const scrollToTrailler = () => {
    scroll.scrollTo("traillerSection", {
      smooth: true,
      offset: -50, // Adjust the offset based on your layout
    });
  };
  return (
    <div className=" flex justify-center  max-sm:gap-[2rem] mt-[5rem] lg:mx-[8rem] mb-[5rem] ">
      <div className=" ps-2  flex flex-col gap-5  justify-center">
        <h1 className=" uppercase text-[#D70000] max-sm:text-[2rem] max-lg:text-[3rem] max-xl:text-[5rem] text-[5rem]  font-extrabold text-center">
          The INSURRECTION
        </h1>

        <p className=" uppercase text-[#d9d9d9]">
          A lower class revolution turns the world equality upside down against
          the higher class corporates in any way he could.
        </p>
        <div className=" flex justify-center gap-5">
          <a
            to="traillerSection"
            smooth={true}
            className="text-center hover:cursor-pointer hover:bg-[#D70000] hover:text-[#000] hover:font-bold uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
            href="/movie"
          >
            Watch
          </a>

          <ScrollLink
            to="traillerSection"
            smooth={true}
            className="text-center hover:cursor-pointer hover:bg-[#D70000] hover:text-[#000] hover:font-bold uppercase text-[#D70000] border border-[#D70000] px-6 py-1 rounded-xl"
            onClick={scrollToTrailler}
          >
            Trailer
          </ScrollLink>
        </div>
      </div>
      {/* <div className=" flex justify-center">
        <img src="/try 1.png" alt="" />
      </div> */}
    </div>
  );
}

export default hero;
