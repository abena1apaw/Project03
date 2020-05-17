import React from "react";
import Header from "./layout/MemeHeader";
import MemeGenerator from "./MemeGenerator";
import Footer from "./layout/Footer";

const MemeApp = () => {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
};

export default MemeApp;
