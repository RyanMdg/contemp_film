import "../src/app/globals.css";
import React from "react";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import Trailler from "../src/app/components/traillervid";
import Footer from "../src/app/components/footer";
// import Cast from "../src/app/components/cast";

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trailler />
      {/* <Cast /> */}
      <Footer />
    </div>
  );
}

export default index;
