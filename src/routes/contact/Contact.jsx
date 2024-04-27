import React from 'react'
import './ContactStyles.css'
import Fotter from '../../Components/fotter/Fotter'
import '../../css/basics.css'
const Contact = () => {
  return (
    <>
    <section id='Contact' className=' pt-5 pb-5'>
        
        <div className="container">
        <div className="heading text-center">
            <p className='main-subtitle-top'>GET IN TOUCH</p>
            <h4>CONTACT US</h4>
            <p className='main-subtitle-bottom'>Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
        </div>
        <div className="row mt-5">
            <div className="col-12 col-lg-6">
                <div className="info">
                    <p>____Get in Touch</p>
                    <h2>Contact info</h2>
                    <div className="row mt-5">
                        <div className="col-6">
                        <i className="fa-solid fa-map-location-dot"></i>
                            <h4>Location</h4>
                            <p>Bani mazar, Minya,Egypt</p>
                        </div>
                        <div className="col-6">
                        <i className="fa-regular fa-clock"></i>
                            <h4>Available Time</h4>
                            <p>Monday - Saturday</p>
                            <p>9:00am - 8:00pm</p>
                        </div>
                        <div className="col-6">
                        <i className="fa-solid fa-mobile-screen"></i>
                            <h4>Phone</h4>
                            <p>01159107545</p>
                        </div>
                        <div className="col-6">
                        <i className="fa-solid fa-envelope"></i>
                            <h4>Email</h4>
                            <p>khaledhamdy825@gmail.com</p>
                        </div>
                    </div>
                    
                </div>
               
            </div>
            <div className="col-12 col-lg-6">
                <div className="chat">
                    <h3>Stay in Touch</h3>

                    <form action="" method="get" className='form-action mt-5'>
                       <input type="text" name="username" id="" placeholder='your name'/>
                       <input type="email" name="email" id="" placeholder='your email'/>
                       <textarea name="" id="" cols="30" rows="5" placeholder='your message'></textarea>
                       <button type='submit' href=""  className="nav-link">send message</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>
    <Fotter/>
    </>
    
  )
}

export default Contact
