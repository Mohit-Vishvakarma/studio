import React from 'react'
import "./style.scss"
import { SlMenu } from "react-icons/sl";
import logo from "../../assets/logo.png"


function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src= {logo} alt="" />
        </div>
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div className="menu-bar">
            <SlMenu />
        </div>
    </div>
  )
}

export default Header
