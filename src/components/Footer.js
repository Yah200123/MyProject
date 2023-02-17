import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-Container">
            <div className="left">
                <div className="address">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                    <p>1111 West 5th Street</p>
                    <p>Hamilton</p>
                    <p>Ontario</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    +1 (289) 941-0710 
                    </h4>

                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    yahya.ac@hotmail.com
                    </h4>

                </div>
            </div>
            <div className="right">
                <h4>About the Website</h4>
                <p>
                    My name is Yahya Achak I am a developer, I know multiple things, I enjoy learning new things
                    especially in the computer science because this domain is really good I personnaly liked it,
                    react is really fun I am obssessed with it, and anything that relates to it I try to learn it 
                    as much as I can.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer