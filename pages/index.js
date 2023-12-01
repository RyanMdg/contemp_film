import "../src/app/globals.css";
import React from "react";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";
import Trailler from "../src/app/components/traillervid";
import Footer from "../src/app/components/footer";

function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trailler />
      <Footer />
    </div>
  );
}

export default index;
