import React from 'react'
import "./HeroImgStyles.css";
import IntroImg from "../assets/Intro.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Welcome to the website</p>
            <h1>React Developer</h1>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default HeroImg