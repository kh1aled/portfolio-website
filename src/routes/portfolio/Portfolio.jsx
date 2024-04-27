import React from "react";
import "./Portfolio.css";
import "../../css/bootstrap.min.css";
import '../../css/basics.css'
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.png";
import Logos from "../../Components/loge-section/Logos";

const Portfolio = () => {
  return (
  
  
    <section id="Portfolio" className=" text-center">
       
      <div className="container">
        <p className="main-subtitle-top">My Portfolio</p>
        <h3>Checkout My Work</h3>
        <p className="main-subtitle-bottom">
          Content here, content here, making it look like readable English. Many
          desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text.
        </p>
      </div>

      <div className="row  mt-5">
      <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img1} alt="" />
          <div className="overlay"></div>
          <h5>gym system</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img2} alt="" />
          <div className="overlay"></div>
          <h5>crud system</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img3} alt="" />
          <div className="overlay"></div>
          <h5>blog website</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="row">
        <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img4} alt="" />
          <div className="overlay"></div>
          <h5>landing page</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img5} alt="" />
          <div className="overlay"></div>
          <h5>login form</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="column col-lg-4 col-md-6 col-sm-12 ps-0 pe-0">
          <img src={img6} alt="" />
          <div className="overlay"></div>
          <h5>nouvil website</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <Logos />
    </section>
  );
};

export default Portfolio;
