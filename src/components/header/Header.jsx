import React from 'react'
import "./style.scss"
import { SlMenu } from "react-icons/sl";
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src= {logo} alt="" />
        </div>
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="about">about</Link></li>
                    <li><Link to="services">Services</Link></li>
                    <li><Link to="gallery">Gallery</Link></li>
                    <li><Link to="contact">Contact</Link></li>
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
