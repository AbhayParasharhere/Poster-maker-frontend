import React from "react"
import "./SideBar.css"
export default function SideBar(){
    const previewPosterData = [{
        img: "",
        pageLink: ""
    }]
    previewPosterData.map((preview) => {

        <div class="poster-container">
            <img className="poster-preview" src = {preview.img}/>
        </div>
    })
    return(
        <div className = "main-sidebar-container">
            
            <div class="poster-container">Content 2</div>
            <div class="poster-container">Content 3</div>
            <div class="poster-container">Content 4</div>
            <div class="poster-container">Content 5</div>       
        </div>
    )
}