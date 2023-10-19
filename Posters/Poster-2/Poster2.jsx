import React from "react"
import calendar from "../../src/assets/images/Poster/calendar.png"
import apple from "../../src/assets/images/Poster/apple.png"
import businessman from "../../src/assets/images/Poster/businessman.png"

import "./Poster2.css"
export default function Poster2(){
        return(
        <div className="poster2-main-container">
            <div className="poster-main-body-container">
              <div className="poster-person-image-container">
                <img className="poster-person-image" src={businessman} />
              </div>
              <div className="poster-main-text-container">
                <p className="poster-title-text">MDRT 2023 NASHVILLE</p>
                <div className="poster-description-container">
                  <p className="poster-description-text-1">Potty pooper</p>
                  <p className="poster-description-text-2">Test Poster 123</p>
               </div>
                <p className="poster-cursive-text">Strong Community Strong Company</p>
                <div className="poster-event-details-container">
                  <div className="poster-date">
                    <img className="poster-calender-image" src={calendar} />
                    <p>June 26,27 & 28</p>
                  </div>
                  <div className="poster-number">
                    <img className="poster-telephone-image" src={apple} />
                    <p>12839475403</p>
                  </div>
                </div>
                <p className="poster-name">Abhi Parashar</p>
              </div>
            </div>
      
        </div>
      
        )
    }