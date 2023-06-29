import React from "react";
import HeaderBg from "../../assets/HeaderPic.png";
import "./headerFrame.css"; // Import your CSS file

import Navbar from "../../components/navbar/navbar";
import SignUp from "../../components/signup/signup";
import About from "../../components/about/about";

const HeaderFrame = () => {
  return (
    <>
      <article className="article">
        <img className="picture" src={HeaderBg} alt="Paris" />
        <div className="container">
          <Navbar />
          <SignUp />
          <About/>
        </div>
      </article>
    </>
  );
};

export default HeaderFrame;
