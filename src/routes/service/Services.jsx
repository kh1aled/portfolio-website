import React, { useEffect } from "react";
import '../../css/basics.css'
import "./ServicesStyles.css";

import 'aos/dist/aos.css'
import Aos from "aos";
const Services = () => {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"ease-in-out",
      delay:250
  })
  },[])
  return (
    <section id="Services">
      <div className="heading text-center p-5">
        <p  className="main-subtitle-top">WHAT WE OFFER</p>
        <h2>Affordable Services</h2>
        <p className="main-subtitle-bottom">Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
      </div>
      <div className="myWork">


        <div className="container">

          <div className="row row-gap-2 mt-4 mb-4">
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center" data-aos="fade-down">
              <div className="card-body">
                <i className="fa-solid fa-chess-knight"></i>
                <h5 className="card-title">web design</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-cente" data-aos="fade-down">
              <div className="card-body">
                <i className="fa-solid fa-code"></i>
                <h5 className="card-title">web development</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center" data-aos="fade-down">
              <div className="card-body">
                <i className="fa-solid fa-laptop-code"></i>
                <h5 className="card-title">frontend developer</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center" data-aos="fade-down">
              <div className="card-body">
              <i className="fa-brands fa-react"></i>
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center" data-aos="fade-down">
              <div className="card-body">
              <i className="fa-solid fa-bullhorn"></i>
                <h5 className="card-title">Seo Marketing</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card text-center" data-aos="fade-down">
              <div className="card-body">
                <i className="fa-regular fa-envelope"></i>
                <h5 className="card-title">Email Marketing</h5>
                <p className="card-text">
                  Above all good design must primarily serve people.Various
                  versions have evolved over the years, sometimes by accident.
                </p>
              </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
