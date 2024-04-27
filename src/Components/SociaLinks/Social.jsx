import React from 'react'
import { Link } from 'react-router-dom'
import './Social.css'
const Social = () => {
  return (
    <div className="social">
  <ul className="navbar d-flex justify-content-start align-items-center list-unstyled">
    <li className="me-4" >
      <a className="nav-link" href='https://www.facebook.com/profile.php?id=61554110842664&mibextid=ZbWKwL' target='-blank'>
        <i className="icon fa-brands fa-facebook-f"></i>
      </a>
    </li>
    <li className=" me-4">
      <a className="nav-link" href='https://www.linkedin.com/public-profile/settings' >
        <i className="icon fa-brands fa-linkedin-in"></i>
      </a>
    </li>
    <li className=" me-4" >
      <a className="nav-link" href='https://github.com/kh1aled'>
        <i className="icon fa-brands fa-github"></i>
      </a>
    </li>
    <li className=" me-4" >
      <Link className="nav-link  ">
        <i className="icon fa-brands fa-twitter"></i>
      </Link>
    </li>
  </ul>
    </div>
  
  )
}

export default Social
