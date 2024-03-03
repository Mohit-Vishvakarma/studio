import React from 'react'
import "./style.scss"
import corousel1 from "../../assets/c1.jpg"
import corousel2 from "../../assets/c2.jpg"
import corousel3 from "../../assets/c3.webp"


function Home() {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" >
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src={corousel1} className="d-block w-100  " alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={corousel2} className="d-block w-100  " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={corousel3} className="d-block w-100  " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home
