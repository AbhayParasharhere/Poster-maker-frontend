import React from "react"
import "./SideBar.css"
import {NavLink} from "react-router-dom"
export default function SideBar(){
    const previewPosterData = [{
        img: "/sidebarPoster1.png",
        pageLink: ""
    }
    ,
    {
        img: "/sidebarPoster2.png",
        pageLink: "poster2"
    },
    {
        img: "/sidebarPoster3.png",
        pageLink: "poster3"
    },
    {
        img: "/sidebarPoster4.png",
        pageLink: "poster4"
    },
    {
        img: "/sidebarPoster5.png",
        pageLink: "poster5"
    }, 
    {
        img: "/sidebarPoster6.png",
        pageLink: "poster6"
    }, 
    {
        img: "/sidebarPoster7.png",
        pageLink: "poster-7"
    },
    {
        img: "/sidebarPoster8.png",
        pageLink: "poster8"
    },
    {
        img: "/sidebarPoster8.png",
        pageLink: "poster9"
    }
    

]
    const displayPreviewPoster = previewPosterData.map((preview,index) => {
        return(
            <NavLink to = {`${preview.pageLink}`} className = {({isActive}) => isActive ? "poster-selected" : "not-selected"} end >
                <div className="poster-container" key = {index}>
                    <img className="poster-preview" src = {preview.img}/>
                </div>
            </NavLink>
        )
    })
    return(
        <div className = "main-sidebar-container">
            {displayPreviewPoster}
        </div>
    )
}