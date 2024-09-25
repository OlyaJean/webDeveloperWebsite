import React from 'react'
import './Contact.css'

import mail_icon from '../../assets/min.png'
import phone_icon from '../../assets/min.png'
import loc_icon from '../../assets/min.png'
import arrow_icon from '../../assets/arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5101efe0-2225-4b4e-82fd-14e14c112c8d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius velit aliquid dolorem nesciunt inventore blanditiis itaque, necessitatibus deserunt numquam at ipsam nulla omnis autem asperiores deleniti vitae fugit laborum sunt!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@JohnDoe.dev</li>
                <li><img src={phone_icon} alt="" />+1-223-3445678</li>
                <li><img src={loc_icon} alt="" />123 4th Ave, New York City <br/> NY,USA 22897</li>
            </ul>
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' requiered />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={arrow_icon} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
