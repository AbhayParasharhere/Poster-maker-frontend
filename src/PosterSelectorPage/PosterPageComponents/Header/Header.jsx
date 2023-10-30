import React from "react"
import HelpIcon from "../../../assets/images/PosterPageImages/HelpIcon.png"
import ProfileIcon from "../../../assets/images/PosterPageImages/profileImage.png"
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"
import logo from "../../../assets/images/PosterPageImages/logo.png"
export default function Header(){
    const [loggedIn,setLoggedIn] = React.useState(Cookies.get("token")?true:false)
    if(!loggedIn){
        return <Navigate to = "/login"/>
    }
    function logout(){
        Cookies.remove("token")
        setLoggedIn(false)
    }
    return(
        <div className = "header">
            <div>
                <img className = "header--logo-image" src = {logo}/>
            </div>
            <div className = "header--icon-container">
                <button onClick={logout} className = "log-out-button">Log out </button>
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