import React from 'react'
import "./style.scss"
import { FaCamera } from "react-icons/fa";
import { BsCamera2 } from "react-icons/bs";
import { GiPhotoCamera } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import wedding from "../../assets/wedding.jpg"
import preWedding from "../../assets/prewedding2.jpg"
import cinematography from "../../assets/cinematography2.jpg"
import drone from "../../assets/drone.webp"
import videography from "../../assets/videography.jpg"
import webcast from "../../assets/webcast2.jpg"



function Services() {
  return (
    <div className='services'>
      <h1>What We Do </h1>

      <div className='service'>
        <div className="box">
          <div className='title'>
            <span> <FaCamera /> </span>
            <a href="#"> Wedding Photography </a>
          </div>
          <img src={wedding} alt="" />
          <p>We are the team of creative wedding photographers with a passion for candid wedding photography making us more popular as one of the best wedding photographers in Ratlam, india. We are specialised to capture artistically different unique moments that the couple wish to be present in the memories. Hello i am a akshay sen and you.</p>
        </div>

        <div className="box">
          <div className='title'>
            <span> <BsCamera2 /></span>
            <a href="#"> Pre Wedding Photography </a>
          </div>
          <img src={preWedding} alt="" />
          <p>We are highly recommended to our client for pre wedding photography. It's a best way to create chemistry between the wedding couple and also to allow a photographer to know about likes and dislikes, best postures, comfort zones, creative angles and best poses of couples. We have unique ideas to make your pre wedding photo shoot fun and loving.</p>
        </div>

        <div className="box">
          <div className='title'>
            <span> <GiPhotoCamera /></span>
            <a href="#"> Cinematography </a>
          </div>
          <img src={cinematography} alt="" />
          <p>Wedding cinematography is the art of documenting a wedding by cinematic style. Our team is creative and expert in the proper use of lighting, various camera angles with different lenses, equipment for smooth shooting and solid editing. With our cinematic techniques, we are going top on best wedding cinematographers in delhi, india.</p>
        </div>

       

        

      </div>

      <div className='service'>
        <div className="box">
          <div className='title'>
            <span > <RiLiveLine /></span>
            <a href="#"> Event Videography </a>
          </div>
          <img src={videography} alt="" />
          <p>We are the team of creative wedding photographers with a passion for candid wedding photography making us more popular as one of the best wedding photographers in Ratlam, india. We are specialised to capture artistically different unique moments that the couple wish to be present in the memories. Hello i am a akshay sen and you.</p>
        </div>

        <div className="box">
          <div className='title'>
            <span> <GiDeliveryDrone /> </span>
            <a href="#"> Drone shooting </a>
          </div>
          <img src={drone} alt="" />
          <p>We are highly recommended to our client for pre wedding photography. It's a best way to create chemistry between the wedding couple and also to allow a photographer to know about likes and dislikes, best postures, comfort zones, creative angles and best poses of couples. We have unique ideas to make your pre wedding photo shoot fun and loving.</p>
        </div>

        <div className="box">
          <div className='title'>
            <span> <MdLiveTv /> </span>
            <a href="#"> Live webcast </a>
          </div>
          <img src={webcast} alt="" />
          <p>Wedding cinematography is the art of documenting a wedding by cinematic style. Our team is creative and expert in the proper use of lighting, various camera angles with different lenses, equipment for smooth shooting and solid editing. With our cinematic techniques, we are going top on best wedding cinematographers in delhi, india.</p>
        </div>

       

        

      </div>

      

      
    </div>
  )
}

export default Services
