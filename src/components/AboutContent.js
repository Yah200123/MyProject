import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import conatct from "../assets/contact.jpg"
import contact2 from "../assets/contact2.jpg"


import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>I am react developer</h1>
            <p>I like learning coding especially in ract js, I hope you will like my projects</p>
            <Link to="/contact"><button className="btn">CONTACT</button></Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={conatct} className="img" alt="contact"/>
                </div>

                <div className="img-stack bottom">
                    <img src={contact2} className="img" alt="contact"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent