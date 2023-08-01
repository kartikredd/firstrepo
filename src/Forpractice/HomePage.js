import React from "react";
import ReactLogo from "./BG.jpg";
import Navbar from "./Navbar";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <br />
      <center>
        <img src={ReactLogo} height={"500px"} alt="" />
      </center>
    </>
  );
};
export default Homepage;
