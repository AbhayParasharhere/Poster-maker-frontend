import React from "react"
import blueFill from "../assets/images/Login-page-images/BlueFill.png" 
import blueOutline from "../assets/images/Login-page-images/BlueOutline.png" 
import purpleFill from "../assets/images/Login-page-images/PurpleFill.png"
import purpleOutline from "../assets/images/Login-page-images/PurpleOutline.png"
export default function Login(){
    return(

    <div className="main-container">
        <div className="left-container">
          {/* <img className="blue-fill" src={blueFill} />
          <img className="blue-outline" src={blueOutline}/> */}
              <div className="welcome-container">
                <p className="welcome-back-text">Welcome Back !</p>
                <p className="tagline-text"> let's create your ideas to life and create stunning <br />
                posters together.</p>
            </div>
          {/* <img className="purple-fill" src={purpleFill}/>
          <img className="purple-outline" src={purpleOutline} /> */}
        </div>
        <div className="right-container">
          <div className="log-in-container">
            <div className="main-header-container">
              <div className="header-container">
                <p className="header-paragraph">Log In</p>
              </div>
            </div>
            <div className="input-container">
                <div>
                    <p className="email-label-text">Email</p>
                    <input className="input-container" placeholder="Enter email" />
                </div>
                <div>
                    <p className="password-label-text">Password</p>
                    <input className="input-container" placeholder="Enter password" />
                </div>
            </div>
          </div>
        </div>
    </div>
    )
}