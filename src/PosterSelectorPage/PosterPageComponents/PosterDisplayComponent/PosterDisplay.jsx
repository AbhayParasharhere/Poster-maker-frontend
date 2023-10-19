import React from "react"
import "./PosterDisplay.css"
export default function PosterDisplay(){
    return(
        <div className = "main-poster-container">
            <div className = "poster--download-button-container">
                <div className = "poster--size">
                    <span className = "black-color">Size-Linkedin:</span> 1128 px x 191 px
                </div>
                <div className = "main-button-container">
                    <button className = "download-button">Preview</button>
                    <button className = "download-button">Download</button>
                </div>
            </div>
            <div className = "poster--display">
                <div className = "poster">.</div>
            </div>

            <div className = "poster--size-select-container">
                <div className="size-select-sub-container">
                    <div className = "specific-size-select-container">
                        <div className = "instagram-select">.</div>
                        <span>Instagram</span>
                    </div>
                    <div className = "specific-size-select-container">
                        <div className = "facebook-select">.</div>
                        <span>Facebook</span>
                    </div>
                    <div className = "specific-size-select-container">
                        <div className = "linkedIn-select">.</div>
                        <span>LinkedIn</span>
                    </div>
                    <div className = "specific-size-select-container">
                        <div className = "twitter-select">.</div>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
        </div>
    )
}