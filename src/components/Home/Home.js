import React, { useState } from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
import Packages from '../Packages/Packages'
import Works from '../Works/Works'
import '../Header/Header.css'
import { AiFillCamera } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import phLogo from '../../images/22.jpeg'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [item, setItem] = useState(false)

  return (
    <div className='home-div'>
      <div className='hnav-div'>
                <div className='nav-items' >
                    <div className='hnav-div1'>
                        {/* <span><AiFillCamera size={30} /></span> */}
                        <img src={phLogo} alt="plogo" />
                        <p>Photoman</p>

                    </div>
                    <div className='hnav-div2'>
                        <a href='#home' className='aa'>Home</a>
                        <a href='#about'> About</a>
                        <a href='#works'>Works</a>
                        <a href='#packages' onClick={() => setItem(true)} >Packages</a>
                        <a href='#contact'>Contact</a>

                    </div>
                    <div className='menu-icon'>
                        <span onClick={() => setIsOpen(true)}><HiOutlineMenu size={30} /></span>
                    </div>
                </div>
                <div className='nav-drawer'>

                    <div className={`${isOpen ? "drawer-active" : "drawer-notactive"} ` + 'drawer'}>
                        <span onClick={() => setIsOpen(false)}><IoClose size={20} /></span>
                        <a href='#home' onClick={() => setIsOpen(false)}>Home</a>
                        <a href='#about' onClick={() => setIsOpen(false)}>About</a>
                        <a href='#works' onClick={() => setIsOpen(false)}>Works</a>
                        <a href='#packages' onClick={() => setIsOpen(false)}>Packages</a>
                        <a href='#contact' onClick={() => setIsOpen(false)}>Contact</a>

                    </div>
                </div>

            </div>
        <Header/>
        <About/>
        <Works/>
        <Packages item = {item}/>
        <Contact/>  
    </div>
  )
}

export default Home