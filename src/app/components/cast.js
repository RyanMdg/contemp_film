import React from "react";

function cast() {
  const imageFilter = {
    filter: "grayscale(100%)",
    width: "50%",
    height: "30%",
    objectFit: "cover",
  };

  return (
    <div className=" bg-[#111111]   text-[#d9d9d9c8]">
      <h1 className=" uppercase font-bold pt-4 text-center ">Cast</h1>
      <div className=" grid sm:grid-cols-2">
        {/* Prod */}
        <div className="flex pb-[10rem] gap-2 flex-col  items-center h-screen">
          <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
            Director
          </p>
          <img src="thea.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Princess Althea Nivera</span>
          <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
            Writers
          </p>
          <img src="kyle.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Kyle DelFonso</span>
          <img src="den.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Denisse cabanela</span>
        </div>
        {/* actors */}
        <div className="flex pb-[10rem] gap-2 max-sm:flex-col  items-center h-screen">
          <div className=" flex flex-col items-center gap-2">
            {" "}
            <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
              Director
            </p>
            <img
              src="thea.jpg"
              alt="Black and White Image"
              style={imageFilter}
            />
            <span>Princess Althea Nivera</span>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <p className=" bg-[#d70000a1] font-bold px-2 mt-4 text-black uppercase bg">
              Writers
            </p>
            <img
              src="kyle.jpg"
              alt="Black and White Image"
              style={imageFilter}
            />
            <span>Kyle DelFonso</span>
          </div>
          <div className=" flex flex-col items-center gap-2"></div>
          <img src="den.jpg" alt="Black and White Image" style={imageFilter} />
          <span>Denisse cabanela</span>
        </div>
      </div>
    </div>
  );
}

export default cast;
