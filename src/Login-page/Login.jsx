import React from "react"
import blueFill from "../assets/images/Login-page-images/BlueFill.png" 
import blueOutline from "../assets/images/Login-page-images/BlueOutline.png" 
import purpleFill from "../assets/images/Login-page-images/PurpleFill.png"
import purpleOutline from "../assets/images/Login-page-images/PurpleOutline.png"
import orangeOutline from "../assets/images/Login-page-images/orange-outline.png"
import orangeFill from "../assets/images/Login-page-images/orange-fill.png"
import orangeFill2 from "../assets/images/Login-page-images/orangeFill-2.png"
import orangeOutline2 from "../assets/images/Login-page-images/orangeOutline-2.png"
import purpleFill2 from "../assets/images/Login-page-images/purpleFill-2.png"
import purpleOutline2 from "../assets/images/Login-page-images/purpleOutline-2.png"
import arrowIcon from "../assets/images/Login-page-images/arrowIcon.png"
import Cookies from 'js-cookie';
import fetchToken from "../apis/fetchToken"
import {Navigate,Link, useNavigate} from "react-router-dom"
//Ask where to add the link for signup page
//In selector page download button placement is not good
//for help and profile, do we need other pages and if yes give design for each
//For change profile there would be a dropdown or simply  a click on the profile image
//Clarity on the resposive nature of the selector page(Prefer with mobile view also)
//mobile view for all pages

export default function Login(){
  const [loginData, setLoginData] = React.useState({
    loginEmail: "",
    loginPassword: ""
  })
  const navigate = useNavigate()
  const [error,setError] = React.useState(null)
  function handleChange(event){
    setLoginData((prevLoginData) => {return {...prevLoginData, [event.target.name] : event.target.value}})
  }

  function handleClick(){
    const fetchData = async() => {
      try {
        const tokenProvided = await fetchToken({email:loginData.loginEmail,password:loginData.loginPassword});
        Cookies.set('token', tokenProvided.token, { expires: 7, secure: true });
        navigate("/",{replace:true})
      } catch(err){
          setError(err.message)
          console.log('inside function: ', err)
      }   
    }
    fetchData()
  }
    console.log('outside function: ', error)

    return(
    <div className="main-container">
        <div className="left-container">
          <img className="blue-fill" src={blueFill} />
          <img className="blue-outline" src={blueOutline}/>
              <div className="welcome-container">
                <p className="welcome-back-text">Welcome Back !</p>
                <p className="tagline-text"> Let's create your ideas to life and create stunning <br />
                posters together.</p>
            </div>
          <img className="purple-fill" src={purpleFill}/>
          <img className="purple-outline" src={purpleOutline} />
          <img className="orange-fill" src={orangeFill} />
          <img className="orange-outline" src={orangeOutline} />

        </div>
        <div className="right-container">
          <div className="log-in-container">
            <div className="main-header-container">
              <div className="header-container">
                <p className="header-paragraph">Log In</p>
              </div>
            </div>
            <div className="input-container">
                <div>
                    <p className="label-text">Email</p>
                    <input className="main-inputs" placeholder="Enter email" name = "loginEmail" value = {loginData.loginEmail} onChange = {handleChange} />
                </div>
                <div>
                    <p className="label-text">Password</p>
                    <input className="main-inputs" placeholder="Enter password" name = "loginPassword" value = {loginData.loginPassword} onChange = {handleChange}/>
                </div>

            </div>
                <button className="get-started-button" onClick = {handleClick}>
                    <div className="button-text">Get Started 
                        <div className="arrow-image-container">
                            <img className="arrow-image" src={arrowIcon} />
                        </div>
                    </div>
                </button> 
                {error && <p className = "red">{error}</p>}
                <p className = "sign-log-text">Don't have an account?
                  <Link to = "/signup" className = "sign-log-link"> Sign up</Link>
                </p> 
          </div>
            <img className="orange-fill-2" src={orangeFill2}/>
            <img className="orange-outline-2" src={orangeOutline2} />
            <img className="purple-fill-2" src={purpleFill2} />
            <img className="purple-outline-2" src={purpleOutline2} />
        </div>
    </div>
    )
}