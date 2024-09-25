import React from 'react'
import './About.css'
import img_left from '../../assets/play-pic.jpg'
import play_icon from '../../assets/play.png'

const About = ({setPlayState}) => {
  return (
    <div class="about">
      <div className="about_left">
        <img src={img_left} alt="" className='about_img'/>
        <img src={play_icon} alt="" className='play_icon' onClick={()=>setPlayState(true)}/>
      </div>
      <div className="about_right">
        <h3>ABOUT US</h3>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem optio, doloribus magni porro minima dolorum illum nostrum error, deserunt similique praesentium aliquam fugit provident quas ratione asperiores dicta quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem optio, doloribus magni porro minima dolorum illum nostrum error, deserunt similique praesentium aliquam fugit provident quas ratione asperiores dicta quia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem optio, doloribus magni porro minima dolorum illum nostrum error, deserunt similique praesentium aliquam fugit provident quas ratione asperiores dicta quia.</p>
      </div>
    </div>
  )
}

export default About
