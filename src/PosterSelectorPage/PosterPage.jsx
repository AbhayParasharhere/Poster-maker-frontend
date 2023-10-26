import React from "react"
import Header from "./PosterPageComponents/Header/Header"
import SideBar from "./PosterPageComponents/SideBar/SideBar"
import "./PosterPageComponents/PosterDisplayComponent/PosterDisplay.css"
import { Outlet } from "react-router-dom"

export default function PosterPage(){
    const [posterSize,setPosterSize] = React.useState({
        "Instagram": true,
        "LinkedIn": false,
        "Facebook":false,
        "Twitter":false
    })  
    let selectSize = "Instagram"
     for (const [key,value] of Object.entries(posterSize)) {
        if(value){
            selectSize = key
        }
    }
    
    const sizeStyles = {"Twitter": {"width":"550px",
                        "height":"290px",
                        "containerType": "inline-size",
                        "containerName": "changeRes"}, 

                        "Instagram": {
                            "width":"300px",
                            "height":"300px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"},
                        "Facebook": {
                            "width":"300px",
                            "height":"300px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"},
                        "LinkedIn": {
                            "width":"350px",
                            "height":"350px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"}

    }
    const sizePixles = {"Instagram":"1080px x 1080px",
                        "Facebook":"1080px x 1080px",
                        "LinkedIn":"1200px x 1200px",
                        "Twitter" : "1600px x 900px"}
    function handleSizeChange(platform)
    {
        setPosterSize((prevState) => { 
            const obj = {...prevState}
                for (const key in obj) {
                    if (key !== platform) {
                      obj[key] = false;
                    }
                  }
                obj[platform] = true; 
                return obj
    })}
    return(
        <div>
            <Header />
            <div className = "main-body-container">
                <SideBar />
                <div className = "main-poster-container">
                    <div className = "poster--download-button-container">
                        <div className = "poster--size">
                            <span className = "black-color">Size-{selectSize}:</span> {sizePixles[selectSize]}
                        </div>
                        <div className = "main-button-container">
                            <button className = "download-button">Preview</button>
                            <button className = "download-button">Download</button>
                        </div>
                    </div>
                    <div className = "poster--display">
                        <div className = "poster" style = {sizeStyles[selectSize]}><Outlet 
                            text = "123456"
                        /></div>
                    </div>

                    <div className = "poster--size-select-container">
                        <div className="size-select-sub-container">

                            <div 
                            className = {posterSize["Instagram"] ?"specific-size-select-container-selected" :"specific-size-select-container"} 
                            onClick = {()=> {handleSizeChange("Instagram")}}>

                                <div className = "instagram-select" >.</div>
                                <span>Instagram</span>
                            </div>

                            <div className =  {posterSize["Facebook"]? "specific-size-select-container-selected" :"specific-size-select-container"} 
                            onClick = {()=> {handleSizeChange("Facebook")}}
                            >
                                <div className = "facebook-select">.</div>
                                <span>Facebook</span>
                            </div>

                            <div className =  {posterSize["LinkedIn"] ? "specific-size-select-container-selected" :"specific-size-select-container"} 
                            
                            onClick = {()=> {handleSizeChange("LinkedIn")}}>
                                <div className = "linkedIn-select">.</div>
                                <span>LinkedIn</span>
                            </div>

                            <div className =  {posterSize["Twitter"] ? "specific-size-select-container-selected" :"specific-size-select-container"} 

                             onClick = {()=> {handleSizeChange("Twitter")}}>
                                <div className = "twitter-select">.</div>
                                <span>Twitter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}