import React, { useRef } from 'react'
import './Testimonials.css'
import nextBtn from '../../assets/next-arr.png'
import prevBtn from '../../assets/back-arr.png'
import user1 from '../../assets/user2.jpg'
import user2 from '../../assets/user1.jpg'
import user3 from '../../assets/user4.jpg'
import user4 from '../../assets/user3.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (

    <div className='testimonials'>
      <img src={nextBtn} alt="" className='next-btn' onClick={slideForward}/>
      <img src={prevBtn} alt="" className='prev-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>KY, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi ipsum vel numquam sapiente id tempora quam rem. Omnis fugiat sapiente similique labore inventore consequuntur amet voluptas ad pariatur aperiam!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3>Hellen Smith</h3>
                            <span>NY, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi ipsum vel numquam sapiente id tempora quam rem. Omnis fugiat sapiente similique labore inventore consequuntur amet voluptas ad pariatur aperiam!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3>Karen Harllow</h3>
                            <span>NC, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi ipsum vel numquam sapiente id tempora quam rem. Omnis fugiat sapiente similique labore inventore consequuntur amet voluptas ad pariatur aperiam!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3>Daniel Lopez</h3>
                            <span>TX, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi ipsum vel numquam sapiente id tempora quam rem. Omnis fugiat sapiente similique labore inventore consequuntur amet voluptas ad pariatur aperiam!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
