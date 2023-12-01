import React from "react";

function footer() {
  return (
    <div className=" bg-[#d70000b6] max-sm:flex  flex-col items-center pt-5 mt-10">
      <div className=" grid gap-4 sm:grid-cols-3 mx-4 py-3 text-center">
        <div className=" flex items-center justify-center">
          {" "}
          <i> A Performance task for contemporary world</i>
        </div>
        <div className=" flex justify-center uppercase  font-bold">
          <p className="  w-[40%] my-2 max-sm:w-[50%] p-2 border-black border-2">
            <span className=" animate-pulse bg-black text-[#d9d9d9c8] px-2 py-1">
              the
            </span>{" "}
            Insurrection
          </p>
        </div>
        <div>
          <p className=" mb-2">Sponsored by:</p>
          <span className=" m-2 uppercase font-semibold bg-black text-[#d9d9d9c8] px-2 py-1">
            Shift
          </span>{" "}
          <span className="m-2 uppercase font-semibold bg-black text-[#d9d9d9c8] px-2 py-1">
            Geekbar
          </span>{" "}
          <span className="m-2 uppercase font-semibold bg-black text-[#d9d9d9c8] px-2 py-1">
            pastry vapor
          </span>{" "}
          <span className="m-2 uppercase font-semibold bg-black text-[#d9d9d9c8] px-2 py-1">
            relx
          </span>{" "}
        </div>
      </div>
      <h1 className=" text-center pb-2 font-bold text-[.8rem] text-[#0000006b]">
        © 2023 Develop by Group1. All Rights Reserved
      </h1>
    </div>
  );
}

export default footer;
