import "./WorkCardStyles.css"

import pro1 from "../assets/Pro1.jpg"

import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="Project-Card">
    <img src={props.imgsrc} alt="Project#1"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-detail">
        <p>T{props.text}</p>
        <div className="pro-btn">
            <NavLink to={props.View} className="btn">View</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard