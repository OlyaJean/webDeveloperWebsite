import React from 'react'
import './Portfolio.css'
import gall1 from '../../assets/pic1.jpg'
import gall2 from '../../assets/pic2.jpg'
import gall3 from '../../assets/pic3.jpg'
import gall4 from '../../assets/play-pic.jpg'
import arrow from '../../assets/arrow.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="gallery">
        <img src={gall1} alt="" />
        <img src={gall2} alt="" />
        <img src={gall3} alt="" />
        <img src={gall4} alt="" />
      </div>
      <button class="btn dark-btn">See more here <img src={arrow} alt="" /></button>
    </div>
  )
}

export default Portfolio
