import React from 'react'
import './Programs.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'


const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={pic1} alt="" />
            <div className="caption">
             
              <p>Mobile Applications</p>
            </div>
        </div>
        <div className='program'>
            <img src={pic2} alt="" />
            <div className="caption">
            
              <p>Top-Skilled Team</p>
            </div>
        </div>
        <div className='program'>
            <img src={pic3} alt="" />
            <div className="caption">
             
              <p>Multiple Design Options</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
