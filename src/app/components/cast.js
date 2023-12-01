import React from "react";

function cast() {
  const imageFilter = {
    filter: "grayscale(100%)",
    width: "50%",
    height: "30%",
    objectFit: "cover",
  };
  return (
    <div className=" bg-[#111111]  text-[#d9d9d9c8]">
      <h1 className=" uppercase font-bold pt-4 text-center ">Cast</h1>
      <div className=" grid sm:grid-cols-2">
        <div className="flex gap-2 flex-col  items-center h-screen">
          <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
            Director
          </p>
          <img src="thea.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Kyle DelFonso</span>
          <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
            Writers
          </p>
          <img src="kyle.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Kyle DelFonso</span>
          <img src="den.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Denis</span>
        </div>
        <div className="flex gap-4 justify-center items-center h-screen">
          {/* <img src="kyle.jpg" alt="Black and White Image" style={imageFilter} />
          <img src="den.jpg" alt="Black and White Image" style={imageFilter} /> */}
        </div>
      </div>
    </div>
  );
}

export default cast;
