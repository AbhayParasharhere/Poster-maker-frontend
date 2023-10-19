import React from "react"
import Header from "./PosterPageComponents/Header/Header"
import SideBar from "./PosterPageComponents/SideBar/SideBar"
import PosterDisplay from "./PosterPageComponents/PosterDisplayComponent/PosterDisplay"
export default function PosterPage(){
    return(
        <div>
            <Header />
            <div className = "main-body-container">
                <SideBar />
                <PosterDisplay />
            </div>  
        </div>
    )
}