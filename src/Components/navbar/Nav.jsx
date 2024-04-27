import React, { useRef } from "react";
import { Link } from "react-scroll";
import logo from "../../images/letter-c.png";
import { useState } from "react";
import "./NavStyles.css";
import "../../css/bootstrap.min.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar , setNavbar] = useState(false);
  const nav = useRef();

  const changebox = ()=>{
    if(window.scrollY >= 40){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changebox)

  return (
    <>
      <nav
        ref={nav}
        className={navbar === true ? "navbar active navbar-expand-lg navbar-light bg-light sticky-top" : "navbar navbar-expand-lg navbar-light bg-light sticky-top"}
      >
        <div className="container flex-row-reverse flex-lg-row text-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="main"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand d-flex justify-content-center align-items-center"
            href="#"
          >
            <img src={logo} alt="" />
            maestro
          </Link>

          <div
            id="main"
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                 
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav-link p-2 p-lg-3 border-bottom-0"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3 "
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav-link p-2 p-lg-3 "
                  to="Services"
                >
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                 spy={true} 
                 smooth={true} 
                 offset={50} 
                 duration={500} 
                  className="nav-link p-2 p-lg-3 "
                  rel="stylesheet"
                  to="Portfolio"
                >
                  portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 p-lg-3 "
                  to="Blog"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav-link p-2 p-lg-3 "
                  to="Pricing"
                >
                  pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="nav-link p-2 p-lg-3 "
                  to="Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
