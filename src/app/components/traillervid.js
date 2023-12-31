import React from "react";
import "../globals.css";

function Traillervid() {
  return (
    <div id="traillerSection" className="flex items-center  flex-col my-5">
      <h1 className="glitch-text text-[#000] px-6 text-2xl uppercase bg-[#D70000] font-semibold mb-4">
        the INSURRECTION Official-trailer
      </h1>
      <video
        className="rounded-md shadow-lg border-red-500"
        width="800"
        height="360"
        controls
      >
        <source src="/TRAILER.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <article className=" text-[1.2rem] grid gap-5 sm:grid-cols-2 lg:mx-[10rem] ">
        <p className="text-[#d9d9d9c8] mt-5 ps-10">
          News outlets report the collapse of a structure in a construction
          site. Many workers are found dead and injured on the scene. Andres,
          one of the construction workers of the project seems to know
          something. With the help of his friend and an unexpected ally, they
          set out to turn the tables against the big corporation that caused
          this incident. But as they set out for retribution, they face many
          dangers and threats along the way.
        </p>
        <p className="text-[#d9d9d9c8] flex flex-col  mt-5 ps-10">
          <span>
            <span className="text-[#616161]">Cast:</span> Aven Mijares,Ryan De
            guia,Princess althea{" "}
          </span>
          <span>
            <span className="text-[#616161]">Genres:</span>{" "}
            Filipino,Comedy,Actions
          </span>
          <span>
            <span className="text-[#616161]">The Movie is:</span>{" "}
            tawa,seryoso,kawawa
          </span>
        </p>
      </article>
      <a
        to="traillerSection"
        smooth={true}
        className="text-center my-6 hover:cursor-pointer hover:bg-[#D70000] hover:text-[#000] hover:font-bold uppercase text-[#D70000] border border-[#D70000] text-[2rem] max-sm:text-[1rem] px-6 py-1 rounded-xl"
        href="/movie"
      >
        Watch now!
      </a>
    </div>
  );
}

export default Traillervid;
