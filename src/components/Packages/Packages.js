import React, { useEffect, useState } from 'react'
import './Packages.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { UserCard } from 'react-ui-cards';
import phLogo from '../../images/22.jpeg'
import p1 from '../../images/p1.jpeg'
import p2 from '../../images/p2.jpeg'
import p3 from '../../images/p3.jpeg'
import p4 from '../../images/p4.jpeg'
import p5 from '../../images/p5.jpeg'
import p6 from '../../images/p6.jpeg'
import Plogo from '../../images/LOGO.png'


// const hoverComponent = () => {
//   const data = [ 
//     { title1: "Wedding Eve & Wedding Day",
//       title2: "Photographer & 1Videographer",
//       title3: "Wedding Highlight & Reel",
//       title4: "30 Leaf Album",
//       title5: null,
//       title6: null,
//       title7: "[Mini album , pendrive]"
//     },
//     { title1: "(Save The Date Photo Free)",
//       title2: "Engagement Day, Wedding Eve & Wedding Day",
//       title3: "Photographer & 1Videographer",
//       title4: "Wedding Highlight & Reel",
//       title5: "30 Leaf Album",
//       title6: null,
//       title7: "Minialbum Calendar, endrive"
//     },
//     { title1: "(Save The Date Photo & video Free)",
//       title2: "Wedding Eve & Wedding Day",
//       title3: "2Photographer & 2Videographer",
//       title4: "Wedding Highlight & Reel",
//       title5: "50 Leaf Album",
//       title6: null,
//       title7: "[Mini album ,Calendar, pendrive]"
//     },
//     { title1: "(Save The Date Photo & video Free)",
//     title2: "Engagement Day, Wedding Eve & Wedding Day",
//     title3: "2Photographer & 2Videographer",
//     title4: "Wedding Highlight & Reel",
//     title5: "55 Leaf Album",
//     title6: null,
//     title7: "[Mini album Calendar. pendrive, 4 Frames"
//   },
//   { title1: "(Save The Date Photo & video Free)",
//       title2: "Engagement Day, Wedding Eve & Wedding Day",
//       title3: "Photographer & 2V ideographer, Drone shoot",
//       title4: "(Candid & Traditional)",
//       title5: "Wedding Highlight & Reel",
//       title6: "40 Leaf Album* 2",
//       title7: "[Mini album ,Calendar, pendrive, 5 Frames]"
//     },
//   ]
//   return(

//   )
// }


const Packages = () => {

  const data = [
    {
      title1: "Wedding Eve & Wedding Day",
      title2: "Photographer & 1Videographer",
      title3: "Wedding Highlight & Reel",
      title4: "30 Leaf Album",
      title5: null,
      title6: null,
      title7: "[Mini album , pendrive]",
      id: 1,
    },
    {
      title1: "(Save The Date Photo Free)",
      title2: "Engagement Day, Wedding Eve & Wedding Day",
      title3: "Photographer & 1Videographer",
      title4: "Wedding Highlight & Reel",
      title5: "30 Leaf Album",
      title6: null,
      title7: "Minialbum Calendar, endrive",
      id: 2
    },
    {
      title1: "(Save The Date Photo & video Free)",
      title2: "Wedding Eve & Wedding Day",
      title3: "2Photographer & 2Videographer",
      title4: "Wedding Highlight & Reel",
      title5: "50 Leaf Album",
      title6: null,
      title7: "[Mini album ,Calendar, pendrive]",
      id: 3
    },
    {
      title1: "(Save The Date Photo & video Free)",
      title2: "Engagement Day, Wedding Eve & Wedding Day",
      title3: "2Photographer & 2Videographer",
      title4: "Wedding Highlight & Reel",
      title5: "55 Leaf Album",
      title6: null,
      title7: "[Mini album Calendar. pendrive, 4 Frames",
      id: 4
    },
    {
      title1: "(Save The Date Photo & video Free)",
      title2: "Engagement Day, Wedding Eve & Wedding Day",
      title3: "Photographer & 2V ideographer, Drone shoot",
      title4: "(Candid & Traditional)",
      title5: "Wedding Highlight & Reel",
      title6: "40 Leaf Album* 2",
      title7: "[Mini album ,Calendar, pendrive, 5 Frames]",
      id: 5
    },
  ]


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [selected, setSelected] = useState("")
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);

  };

  const onLeave = () => {
    setHover(false);
  };


  const [hover1, setHover1] = useState(false);
  const onHover1 = () => {
    setHover1(true);

  };

  const onLeave1 = () => {
    setHover1(false);
  };


  const [hover2, setHover2] = useState(false);
  const onHover2 = () => {
    setHover2(true);

  };

  const onLeave2 = () => {
    setHover2(false);
  };


  const [hover3, setHover3] = useState(false);
  const onHover3 = () => {
    setHover3(true);

  };

  const onLeave3 = () => {
    setHover3(false);
  };

  const [hover4, setHover4] = useState(false);
  const onHover4 = () => {
    setHover4(true);

  };

  const onLeave4 = () => {
    setHover4(false);
  };

  const [hover5, setHover5] = useState(false);
  const onHover5 = () => {
    setHover5(true);

  };

  const onLeave5 = () => {
    setHover5(false);
  };

  return (
    <div id="packages" className='packagesmain-div' data-aos="fade-up">
      <div className='packages-c'>
        <h2>Packages</h2>
        <div className='p-card'>
          <div className='p-150000'
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            role="button"
            tabIndex="-3">
            <UserCard
              float
              header={p1}
              avatar={p6}
              name='Photoman'
              positionName='Package of ₹ 150000'
            />
            {hover ? <div className='hover-c'>
              {data.filter(item => item.id == 5).map(i => {

                return (
                  <div key={i.id}>
                    <p>{i.title1}</p>
                    <p>{i.title2}</p>
                    <p>{i.title3}</p>
                    <p>{i.title4}</p>
                    <p>{i.title5}</p>
                    <p>{i.title6}</p>
                    <p>{i.title7}</p>
                  </div>
                )
              })}

            </div> : null}
          </div>
          <div className='p-125000' onMouseEnter={onHover1}
            onMouseLeave={onLeave1}
            role="button"
            tabIndex="-3">
            <UserCard
              float
              header={p2}
              avatar={p6}
              name='Photoman'
              positionName='Package of ₹ 125000'
            />
            {hover1 ? <div className='hover-c1'>
              {data.filter(item => item.id == 4).map(i => {

                return (
                  <div key={i.id}>
                    <p>{i.title1}</p>
                    <p>{i.title2}</p>
                    <p>{i.title3}</p>
                    <p>{i.title4}</p>
                    <p>{i.title5}</p>
                    <p>{i.title6}</p>
                    <p>{i.title7}</p>
                  </div>
                )
              })}

            </div> : null}
          </div>
          <div className='p-85000' onMouseEnter={onHover2}
            onMouseLeave={onLeave2}
            role="button"
            tabIndex="-3">
            <UserCard
              float
              header={p3}
              avatar={p6}
              name='Photoman'
              positionName='Package of ₹ 85000'
            />
            {hover2 ? <div className='hover-c2'>
              {data.filter(item => item.id == 3).map(i => {

                return (
                  <div key={i.id}>
                    <p>{i.title1}</p>
                    <p>{i.title2}</p>
                    <p>{i.title3}</p>
                    <p>{i.title4}</p>
                    <p>{i.title5}</p>
                    <p>{i.title6}</p>
                    <p>{i.title7}</p>
                  </div>
                )
              })}

            </div> : null}
          </div>
          <div className='p-75000' 
          onMouseEnter={onHover3}
            onMouseLeave={onLeave3}
            role="button"
            tabIndex="-3">
            <UserCard
              float
              header={p5}
              avatar={p6}
              name='Photoman'
              positionName='Package of ₹ 75000'
            />
            {hover3 ? <div className='hover-c3'>
              {data.filter(item => item.id == 2).map(i => {

                return (
                  <div key={i.id}>
                    <p>{i.title1}</p>
                    <p>{i.title2}</p>
                    <p>{i.title3}</p>
                    <p>{i.title4}</p>
                    <p>{i.title5}</p>
                    <p>{i.title6}</p>
                    <p>{i.title7}</p>
                  </div>
                )
              })}

            </div> : null}
          </div>
          <div className='p-55000' 
          onMouseEnter={onHover4}
            onMouseLeave={onLeave4}
            role="button"
            tabIndex="-3">
            <UserCard
              float
              header={p4}
              avatar={p6}
              name='Photoman'
              positionName='Package of ₹ 55000'
            />
            {hover4 ? <div className='hover-c4'>
              {data.filter(item => item.id == 1).map(i => {

                return (
                  <div key={i.id}>
                    <p>{i.title1}</p>
                    <p>{i.title2}</p>
                    <p>{i.title3}</p>
                    <p>{i.title4}</p>
                    <p>{i.title5}</p>
                    <p>{i.title6}</p>
                    <p>{i.title7}</p>
                  </div>
                )
              })}

            </div> : null}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Packages