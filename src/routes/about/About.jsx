import React, { useState } from "react";
import "../../css/bootstrap.min.css";
import "./About.css";
import { Link } from "react-router-dom";
import img2 from "../../images/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";
import img from "../../images/man.png";

const About = () => {
   
  const [skills , setSkills] = useState(false)

  
  


const changeWidth = ()=>{

    
    if (window.scrollY >= 800) {
      
        setSkills(true)
      
    } else {
      
        setSkills(false)
      
    }
    


  }


  document.addEventListener("scroll", changeWidth)




  return (
    <>
    
      <section id="About">
        
      <div className="container">
      <div className="row about pt-3">
        
          <div className="col-lg-6 col-md-12 col-sm-12">
            <p className="pt-5">_____Who am i</p>
            <h1 className="text-capitalize">about me</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as.
            </p>
            <p className="pt-3 pb-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English..
            </p>
            <Link
              href="../../images/Black_White_Minimalist_CV_Resume_(1).pdf"
              className="nav-link"
              download="CV"
            >
              download cv
            </Link>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={img} alt="" className="img" />
            </div>
          </div>
        
      </div>
      </div>
      </section>
      

      <section className="about_my_skills">
        
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={img2} alt="" className="w-100 h-100 object-fit-lg-cover" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 my-skills">
            <div className="mt_skills p-4">
              <div className="general_heading">
                <p>___skilled at</p>
                <h1 className="text-capitalize">my professional skills</h1>
              </div>
              <div className="right mt_skill-progress animate move-fadeInUp p-4">
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title  text-uppercase">html</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>95%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "95%": "0"}} data-width="95%"></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">css</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>90%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "90%": "0"}} data-width="90%" ></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">java script</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span className="width">85%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "85%": "0"}} data-width="85%" ></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">react.js</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>80%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "80%": "0"}} data-width="80%" ></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">bootstrap</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>94%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "94%": "0"}} data-width="94%" ></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">sass</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>99%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "99%": "0"}} data-width="99%" ></span>
                  </div>
                </div>
                <div className="mt_skill_bar">
                  <h4 className="progress-title-holder">
                    <span className="progress-title ">pugjs</span>
                    <span className="progress-wrapper">
                      <span className="progress-mark">
                        <span>80%</span>
                      </span>
                    </span>
                  </h4>
                  <div className="progress-outter">
                    <span style={{width : skills === true ? "80%": "0"}} data-width="80%" ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
