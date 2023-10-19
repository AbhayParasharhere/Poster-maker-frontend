import React from "react"
import HelpIcon from "../../../assets/images/PosterPageImages/HelpIcon.png"
import ProfileIcon from "../../../assets/images/PosterPageImages/profileImage.png"
export default function Header(){
    return(
        <div className = "header">
            <div>
                Logo
            </div>
            <div className = "header--icon-container">
                <button className = "help-icon-button">
                    <img src = {HelpIcon} className = "help-icon-image"/>
                </button>
                <button className = "profile-icon-button">
                    <img src = {ProfileIcon} className="profile-icon"/>
                </button>
            </div>
        </div>
    )
}