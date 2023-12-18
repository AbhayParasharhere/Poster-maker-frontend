import React from "react"
import "./SideBar.css"
import {NavLink} from "react-router-dom"
export default function SideBar(){
    const previewPosterData = [{
        img: "/InsaurancePoster-1.png",
        pageLink: ""
    }
    ,
    {
        img: "/Life-Insurance-poster-2.png",
        pageLink: "poster-2"
    },
    {
        img: "/Poster-3-Preview.png",
        pageLink: "poster-3"
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