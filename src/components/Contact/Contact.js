import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import './Contact.css'
import 'aos/dist/aos.css'
// import pVideo from '../../images/44.mp4'
import Insta from '../../images/images.jpeg'
import tsParticles from '../tsParticles'
import { BsInstagram } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';


const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [values, setValues] = useState({

        name: "",
        email: "",
        message: "",
    })
    console.log('values: ', values);
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }
    const [errors, setErrors] = useState([])
    const handleSubmit = () => {
        const emailFormat = /\S+@\S+\.\S+/;
        let name, email, message;
        if (values.name == '') {
            name = "Enter your name"
        }
        if (values.email === "") {
            email = "Enter your Email"
        }

        if (values.email && !emailFormat.test(values.email)) {
            email = 'Invalid email'
        }
        if (values.message == '') {
            message = 'Type your message'
        }
        setErrors({
            name,
            email,
            message,
        })
    }
    
    return (
        <div id="contact" className='cmain-div' data-aos="zoom-in">

            <div className='contact-div'>
                <div className='contact-c'>
                    <h2>Contact Us</h2>
                </div>
                <div className='proj'>
                    <p>Let's talk<br /> about your project.</p>
                    <label>
                        Feel free to ask me any question or let's do to talk about our future collaboration.
                    </label>
                </div>
                <div className='message-div'>
                    <MDBInput label='Name' id='form1' type='text' name="name" value={values.name} onChange={(e) => { handleChange(e) }} style={{ borderColor: "red" }} />
                    <MDBInput label='Email' id='form1' type='text' name="email" value={values.email} onChange={(e) => { handleChange(e) }} style={{ borderColor: errors.email ? "red" : "black" }} />
                    <MDBTextArea label='Message' id='textAreaExample' name="message" rows={4} value={values.message} onChange={(e) => { handleChange(e) }} style={{ borderColor: errors.message ? "red" : "black" }} />
                    <div className='btn-div'>
                        <button className='send-btn' onClick={() => handleSubmit()}>Send</button>
                    </div>
                </div>
                <div className='break-d'></div>
                <div className='media-d'>
                    <div className='social-media-links'>


                        <a className='instalogo' href='https://www.instagram.com/photoman_official/'><BsInstagram size={20} /></a>
                    </div>
                    <div className='social-media-links1'>
                        <a className='instalogo' href=''><AiFillFacebook size={20} /></a>

                    </div>
                    <div className='social-media-links3'>
                        <a className='instalogo' href='https://wa.me/+919526029554'><BsWhatsapp size={20} /></a>

                    </div>
                    <div className='social-media-links4'>
                        <a className='instalogo' href='https://www.youtube.com/channel/UCiHCfUWT4bnOWVaZ62fRSEg'><AiFillYoutube size={20} /></a>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact