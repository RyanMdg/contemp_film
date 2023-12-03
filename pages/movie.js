import React from "react";
import "../src/app/globals.css";
import Navbar from "@/app/components/navbar";

function movie() {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center flex-col items-center h-screen">
        <h1 class="text-5xl text-[#D70000] font-bold uppercase mb-4">
          COMING SOOOOOOON
        </h1>
        <video
          className="rounded-md shadow-lg border-red-500"
          width="1300"
          height="1000"
          controls
        >
          <source src="/TRAILEsR.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default movie;
