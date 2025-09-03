import React, { useState } from 'react'
import'./Contact.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import mail_icon from'../../assets/mail_icon.svg'
import location_icon from'../../assets/location_icon.svg'
import call_icon from'../../assets/call_icon.svg'
import axios from 'axios'
import { toast } from 'react-toastify'


const Contact = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://yuvaraj-portfolio.onrender.com/contact', formData);
      if (response.status === 200) {
        toast.success('Thank for contacting, Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (

    <div>
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern}alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm Currently available to take on New Projects</p>

                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>darshanasm57@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+7338303995</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Bangalore</p>
                    </div>

                </div>
                </div>
                <form  onSubmit={handleSubmit} className=" contact-right">
                    <label htmlFor="">Your Name</label>
                    <input onChange={handleChange} type="text" placeholder= 'Enter your name' name='name' />


                    <label htmlFor="">Your Email</label>
                    <input  onChange={handleChange} type="text" placeholder= 'Enter your email' name='name'/>

                    <label htmlFor="">Write Your Message Here </label>
                    <textarea onChange={handleChange}  name="message" rows="8" placeholder= 'Enter your message'></textarea>
                    <button  type='submit'className="contact-submit">Submit Now</button> 
                </form>
            </div>
        </div>

    </div>
  )
}

export default Contact