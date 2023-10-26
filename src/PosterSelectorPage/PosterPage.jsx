import React from "react"
import Header from "./PosterPageComponents/Header/Header"
import SideBar from "./PosterPageComponents/SideBar/SideBar"
import "./PosterPageComponents/PosterDisplayComponent/PosterDisplay.css"
import { Outlet } from "react-router-dom"

export default function PosterPage(){
    const [posterSize,setPosterSize] = React.useState({
        "instagram": true,
        "linkedIn": false,
        "facebook":false,
        "twitter":false
    })  
    let selectSize = "instagram"
     for (const [key,value] of Object.entries(posterSize)) {
        if(value){
            selectSize = key
        }
    }
    
    const sizeStyles = {"twitter": {"width":"550px",
                        "height":"290px",
                        "containerType": "inline-size",
                        "containerName": "changeRes"}, 

                        "instagram": {
                            "width":"300px",
                            "height":"300px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"},
                        "facebook": {
                            "width":"300px",
                            "height":"300px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"},
                        "linkedIn": {
                            "width":"350px",
                            "height":"350px",
                            "containerType": "inline-size",
                            "containerName": "changeRes"}

    }
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
                            <span className = "black-color">Size-Linkedin:</span> 1128 px x 191 px
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
                            className = {posterSize["instagram"] ?"specific-size-select-container-selected" :"specific-size-select-container"} 
                            onClick = {()=> {handleSizeChange("instagram")}}>

                                <div className = "instagram-select" >.</div>
                                <span>Instagram</span>
                            </div>

                            <div className =  {posterSize["facebook"]? "specific-size-select-container-selected" :"specific-size-select-container"} 
                            onClick = {()=> {handleSizeChange("facebook")}}
                            >
                                <div className = "facebook-select">.</div>
                                <span>Facebook</span>
                            </div>

                            <div className =  {posterSize["linkedIn"] ? "specific-size-select-container-selected" :"specific-size-select-container"} 
                            
                            onClick = {()=> {handleSizeChange("linkedIn")}}>
                                <div className = "linkedIn-select">.</div>
                                <span>LinkedIn</span>
                            </div>

                            <div className =  {posterSize["twitter"] ? "specific-size-select-container-selected" :"specific-size-select-container"} 

                             onClick = {()=> {handleSizeChange("twitter")}}>
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