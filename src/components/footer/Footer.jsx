import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import KcLogo from './KcLogo.png';
import "./style.scss";



function Footer() {
  return (
    <>
     
<footer className="footer-distributed">

<div className="footer-left">

    <p className="footer-links">
    <Link to="">Home</Link>
        |
        <Link to="about">About</Link>
        |
        <Link to="Services">Services</Link>
        |
        <Link to="Gallery">Gallery</Link>
        |
        <Link to="Contact">Contact</Link>
    </p>

</div>


 {/* ____________________ Center________________ */}


<div className="footer-center">
    <div>
        <p><span><MdLocationPin className='locationIcon'/> Jaoura</span>
            Madhy Pradesh</p>
    </div>
<br />
    <div>
    <FaPhoneAlt className='phoneIcon' />
        <p>+91 9009965441</p>
    </div>
    <br />
    <div>
        <IoIosMail className='mailIcon' />
        <Link className='mail_link' to="mohitvishvakram9@gmail.com">kelwastudio@gmail.com</Link>
    </div>
</div>


<div classNameName="footer-right">
<div className="footer_logo">
    <img src={KcLogo} alt="Loading" />

    </div>
</div>

<div className="footer-icons">
        <Link to="https://www.facebook.com/mohit.vishvakarma.9256?mibextid=ZbWKwL"><FaFacebook/></Link>
        <Link to="https://www.instagram.com/mohitvishvakarma_?utm_source=qr&igsh=YWh1aWJqZzBmMHhn"> <FaInstagram /></Link>
        <Link to ="#"><FaWhatsappSquare/></Link>
    </div>
<div className="copyRight">
    <br />
<p className="footer-company-name">Copyright © 2021 <strong>Kelwa Studio</strong> All rights reserved</p>
</div>
</footer>

    </>
  )
}

export default Footer
