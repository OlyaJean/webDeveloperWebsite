import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroText'>
            <h1>Hello, my name is John Doe</h1>
      <p>Me and my team are high-skilled web developers with more than 10 years experience. We create dynamic and responsive web applications, to meet all your needs.</p>
      <button className='btn dark-btn'>Explore more <img src={arrow}/></button></div>
      
    </div>
  )
}

export default Hero
