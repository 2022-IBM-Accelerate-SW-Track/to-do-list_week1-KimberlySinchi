import React, { Component } from 'react';
import "./About.css";
import image from "../assets/picklee.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={image}
              alt="Profile Pic">
            </img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kimberly Sinchi</div>
            <div className="brief_description">
              Computer Science major at New York University Tandon School of Engineering 💻. Some of my hobbies include robotics 🤖, dancing 💃, hooping, and gaming 🎮. My favorite music genres are rock, electronic, darkwave, 90s pop, and disco 🎵. A fun fact about me: DDR is my favorite arcade game.
            </div>
          </div>
        </div>
      </div>
    )
  }
}