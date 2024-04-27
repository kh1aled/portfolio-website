import React from "react";
import './LogosStyles.css'
const Logos = () => {
  return (
    <div className="logo-section mt-5">
      <ul className="nav justify-content-around align-items-center w-100 h-100 gap-5">
        <li className="nav-item  fa-4x text-white">
        <i className="fa-brands fa-html5"></i>
        </li>
        <li className="nav-item fa-4x text-white">
        <i className="fa-brands fa-css3"></i>
        </li>
        <li className="nav-item fa-4x text-white">
        <i className="fa-brands fa-js"></i>
        </li>
        <li className="nav-item fa-4x text-white">
        <i className="fa-brands fa-react"></i>
        </li>
        <li className="nav-item fa-4x text-white">
        <i className="fa-brands fa-sass"></i>
        </li>
        
        
      </ul>
    </div>
  );
};

export default Logos;
