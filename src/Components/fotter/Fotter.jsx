import React from 'react'
import './FotterStyles.css'
import Social from '../SociaLinks/Social'
const Fotter = () => {
  return (
    
    <section className='fotter'>
      <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 pt-2">
      © khaled. 2024 All Rights Reserved
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 pt-2">

        <Social/>

      </div>
     
        
      </div>
    </section>
  )
}

export default Fotter
