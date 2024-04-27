import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './PricingStyles.css'
import '../../css/basics.css';
import 'aos/dist/aos.css'
import Aos from "aos";
// import anime from 'animejs/lib/anime.es.js';
const Pricing = () => {
  
  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"linear",
      delay:250
  })
  },[])



//   window.addEventListener("scroll",function () {
    
    

//     if (this.scrollY >= pricing.current.offsetTop) {

//       card1.current.style.cssText = "transform:translateX(0%)"
//       card2.current.style.cssText = "transform:translateY(-20px)"
//       card3.current.style.cssText = "transform:translateX(0%)"
//     }
//   }
// )


  


  return (
    <section id="Pricing" >
      
      <div className="heading text-center">
        <p className="main-subtitle-top">____PRICINGS</p>
        <h2>Plan And Pricing</h2>
        <p className="main-subtitle-bottom">
          Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text.
        </p>
      </div>
      <div className="container">
      <div className="row pt-4">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" data-aos="fade-right"  data-aos-delay="100">
            <div className="card-body text-center">
              <i className=" fa-solid fa-wallet"></i>
              <h2>standard</h2>
              <h1>$0 <span>/month</span></h1>
              <div className="price_listing">
                        <ul className=" list-unstyled">
                            <li>Latin words, consectetur.</li>
                            <li>All the Lorem Ipsum.</li>
                            <li>It has survived not only</li>
                            <li>Labore et dolore magna ali.</li>
                            <li>Nor again is there anyone.</li>
                        </ul>
                    </div>
              <Link href="" className="nav-link">choose plan</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card  card2" data-aos="fade-up"  data-aos-delay="200">
            <div className="card-body  text-center">
            <i className="fa-solid fa-briefcase"></i>
              <h2>Bussiness</h2>
              <h1>$90  <span>/month</span></h1>
             
              <div className="price_listing">
                        <ul className=" list-unstyled">
                            <li>Latin words, consectetur.</li>
                            <li>All the Lorem Ipsum.</li>
                            <li>It has survived not only</li>
                            <li>Labore et dolore magna ali.</li>
                            <li>Nor again is there anyone.</li>
                        </ul>
                    </div>
              <Link href=""  className="nav-link">choose plan</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card" data-aos="fade-left"  data-aos-delay="100">
            <div className="card-body  text-center">
            <i className="fa-brands fa-react"></i>
              <h2>Enterprise</h2>
              <h1>$120  <span>/month</span></h1>
         
              <div className="price_listing">
                        <ul className=" list-unstyled">
                            <li>Latin words, consectetur.</li>
                            <li>All the Lorem Ipsum.</li>
                            <li>It has survived not only</li>
                            <li>Labore et dolore magna ali.</li>
                            <li>Nor again is there anyone.</li>
                        </ul>
                    </div>
              <Link href=""  className="nav-link">choose plan</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </section>
  );
};

export default Pricing;
