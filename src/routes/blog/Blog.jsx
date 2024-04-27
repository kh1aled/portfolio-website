import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogStyles.css";
import "../../css/basics.css";
import post1 from "../../images/altumcode-XMFZqrGyV-Q-unsplash.jpg";
import post2 from "../../images/muha-ajjan-sL2BRR1cuvM-unsplash.jpg";
import post3 from "../../images/juanjo-jaramillo-mZnx9429i94-unsplash.jpg";
import "../../css/all.min.css";
import Aos from "aos";
import 'aos/dist/aos.css'
const Blog = () => {

  useEffect(()=>{
    Aos.init({
      duration:1000,
      easing:"linear",
      delay:250
  })
  },[])
  return (
    <section id="Blog" className=" bg-light ">
      <div className="container">
        <div className="heading text-center pt-5">
          <p className="main-subtitle-top">news</p>
          <h2>My Blog</h2>
          <p className="main-subtitle-bottom p-2">
            Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" data-aos="fade-down">
              <div className="card-image">
                <img src={post1} alt="" className="img-fluid" />
              </div>
              <div className="card-body">
                <h4>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, ea?
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <Link className="nav-link float-end">
                  read more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" data-aos="fade-down">
              <div className="card-image">
                <img src={post2} alt="" className="img-fluid" />
              </div>
              <div className="card-body">
                <h5>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, ea?
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <Link className="nav-link float-end">
                  read more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" data-aos="fade-down">
              <div className="card-image">
                <img src={post3} alt="" className="img-fluid" />
              </div>
              <div className="card-body">
                <h5>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, ea?
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <Link className="nav-link float-end">
                  read more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 text-center">
        <Link href="" className="veiw">
          veiw all posts
        </Link>
      </div>
    </section>
  );
};

export default Blog;
