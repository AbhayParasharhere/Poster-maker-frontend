import React from "react"
import "./SideBar.css"
import {NavLink} from "react-router-dom"
export default function SideBar(){
    const previewPosterData = [{
        img: "/sidebar-Poster-1.png",
        pageLink: ""
    }
    ,
    {
        img: "/sidebar-Poster-2.png",
        pageLink: "poster-2"
    },
    {
        img: "/sidebar-Poster-3.png",
        pageLink: "poster-3"
    },
    {
        img: "/sidebar-Poster-4.png",
        pageLink: "poster-4"
    },
    {
        img: "/sidebar-Poster-5.png",
        pageLink: "poster-5"
    }, 
    {
        img: "/sidebar-Poster-6.png",
        pageLink: "poster-6"
    }, 
    {
        img: "/sidebar-Poster-7.png",
        pageLink: "poster-7"
    },
    {
        img: "/sidebar-Poster-8.png",
        pageLink: "poster-8"
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