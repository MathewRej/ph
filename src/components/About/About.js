import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect (() => {
        Aos.init({duration: 1000})
    },[])
  return (
    <div id ="about" className='amain-div' data-aos = "fade-up">
      <div className='about-c'>
        <h2>About</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut fringilla quam. 
        Aliquam blandit felis ac urna varius dapibus. Quisque tristique nulla risus, accumsan aliquam ligula
         vehicula in. Aliquam et sollicitudin augue, sed vestibulum augue.
          Praesent volutpat ipsum in cursus luctus. Fusce id vulputate risus. Proin justo
           sapien, iaculis pellentesque nisi ac, pellentesque gravida leo. Sed vestibulum eros
            nulla, ut porta dui volutpat sed. Nunc ut sagittis nunc. Vivamus congue lacus ut mauris finibus
             elementum ac at ante. Proin finibus a lorem ut bibendum. Aenean tempor quam nulla, in
              fringilla tellus hendrerit eget.
        </p>
      </div>

    </div>
  )
}

export default About