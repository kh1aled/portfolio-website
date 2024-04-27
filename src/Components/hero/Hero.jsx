import React from "react";
import img from "../../images/man.png";
import "../../css/all.min.css";
import "./HeroStyles.css";
import "../../css/bootstrap.min.css";
import Social from "../SociaLinks/Social";

const Hero = () => {
  return (
    <div className="container bg-light">
      <div className="row hero pt-5 ">
        <div className="col-md-6 col-sm-12 col-lg-6  ">
          <div className="caption mt-5">
            
            
            <h1 className="nickname">i am frontend developer</h1>
            
         
            <p className="pt-3">
              Committed and enthusiastic front-end developer, i have 2 years of
              experience in web development and design. Always striving to
              achieve an excellent user experience by applying best practices in
              front-end design.
            </p>
            <Social/>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6">
          <div className="caption-image text-center">
            <img src={img} className="img-fluid z-2" alt="" />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
