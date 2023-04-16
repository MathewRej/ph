import Aos from 'aos'
import React, { useEffect } from 'react'
import './Works.css'
import 'aos/dist/aos.css'
import Card from 'react-card-component';
import cFrames from '../../images/55.jpeg'
import weddng from '../../images/66.webp'
import modelng from '../../images/88.webp'
import Banner from '../../images/99.mp4'



const NewCard1 = () => <Card hoverType={"zoom"}><div className='cframes'><img src = {cFrames} style = {{objectFit: "contain", width: "400px"}}/></div></Card>;
const NewCard2 = () => <Card hoverType={"zoom"}><div className='cframes'><img src = {weddng} style = {{objectFit: "contain", width: "400px"}}/></div></Card>;
const NewCard3 = () => <Card hoverType={"zoom"}><div className='cframes'><img src = {modelng} style = {{objectFit: "contain", width: "400px"}}/></div></Card>;
const NewCard4 = () => <Card hoverType={"zoom"}><div className='cframes'><video  autoplay="true" muted="true" style = {{objectFit: "contain", width: "440px"}}>
<source src={Banner} type="video/mp4"/>
</video></div></Card>;

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div id="works" className='wmain-div' data-aos="fade-up" style={{height: "800px"}}>
      <div className='work-div'>
      <div className='works-c'>
        <h2>Works</h2>
      </div>
        <div className='cards'>
          <div className='work-card'>
            <NewCard1 />
            <p>Cupid Frames</p>
          </div>
          <div className='work-card'>
            <NewCard2 />
            <p>Wedding</p>

          </div>
          <div className='work-card'>
            <NewCard3 />
            <p>Modeling</p>

          </div>
          <div className='work-card'>
            <NewCard4 />
            <p>Videography</p>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Works