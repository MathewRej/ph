import React, { useState } from 'react'
import './Header.css'
import { AiFillCamera } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Plogo from '../../images/LOGO.png'



const Header = () => {
    return (
        <div className='hmain-div' id="home">
            {/* <h1>Home</h1> */}
            
            <div className='ph-div'>
                <div>
                    <img src={Plogo} alt='logo' />
                    <div className='photoman-div'>
                        <div className='photoman-ph'>
                            <p>Photography</p>
                        </div>
                        <div className='photoman-space'></div>
                        <div className='photoman-vi'>
                            <p>Videography</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header