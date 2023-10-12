import React from "react"
import blueFill from "../assets/images/Login-page-images/BlueFill.png" 
import blueOutline from "../assets/images/Login-page-images/BlueOutline.png" 
import purpleFill from "../assets/images/Login-page-images/PurpleFill.png"
import purpleOutline from "../assets/images/Login-page-images/PurpleOutline.png"
import orangeOutline from "../assets/images/Login-page-images/orange-outline.png"
import orangeFill from "../assets/images/Login-page-images/orange-fill.png"
import orangeFill2 from "../assets/images/Login-page-images/orangeFill-2.png"
import orangeOutline2 from "../assets/images/Login-page-images/orangeOutline-2.png"
import purpleFill2 from "../assets/images/Login-page-images/purpleFill-2.png"
import purpleOutline2 from "../assets/images/Login-page-images/purpleOutline-2.png"
import arrowIcon from "../assets/images/Login-page-images/arrowIcon.png"
export default function Login(){
    return(

    <div className="main-container">
        <div className="left-container">
          <img className="blue-fill" src={blueFill} />
          <img className="blue-outline" src={blueOutline}/>
              <div className="welcome-container">
                <p className="welcome-back-text">Welcome Back !</p>
                <p className="tagline-text"> let's create your ideas to life and create stunning <br />
                posters together.</p>
            </div>
          <img className="purple-fill" src={purpleFill}/>
          <img className="purple-outline" src={purpleOutline} />
          <img class="orange-fill" src={orangeFill} />
          <img class="orange-outline" src={orangeOutline} />

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
                    <p className="label-text">Email</p>
                    <input className="main-inputs" placeholder="Enter email" />
                </div>
                <div>
                    <p className="label-text">Password</p>
                    <input className="main-inputs" placeholder="Enter password" />
                </div>
            </div>
                <button className="get-started-button">
                    <div className="button-text">Get Started 
                        <div className="arrow-image-container">
                            <img className="arrow-image" src={arrowIcon} />
                        </div>
                    </div>
                </button>     
          </div>


            <img className="orange-fill-2" src={orangeFill2}/>
            <img className="orange-outline-2" src={orangeOutline2} />
            <img className="purple-fill-2" src={purpleFill2} />
            <img className="purple-outline-2" src={purpleOutline2} />
        </div>
    </div>
    )
}