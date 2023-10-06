import React from "react"
import Vector from "../assets/images/Vector.png"
import uploadIcon from "../assets/images/uploadicon.png"
export default function SignUp(){
    const formData = [
        {topText: "Email",
        placeholder: "Enter Email"},
        {topText: "Confirm Email",
        placeholder: "!"},
        {topText: "Password",
        placeholder: "Enter Password"},
        {topText: "Confirm Password",
        placeholder: "!"},
        {topText: "Employee ID",
        placeholder: "Enter ID"},
        {topText: "Signature Photo",
        placeholder: "Upload Signature Photo"}
    ]
    const renderForm = formData.map((item)=>{
        return(

            <div className="info-input-container">
              <p className="top-text">{item.topText}</p>
              <input className="info-input" placeholder={item.placeholder} />
            </div>
        ) 
    })
    return(
    <div className="main-container">
        <div className="sign-up-container">
          <p className="header"> SIGN UP </p>
          <div className="name-container">
            <p className="top-text">Name</p>
            <input className="name-input" placeholder="Enter Name" />
          </div>
          <div className = "same-input-grid">
            {renderForm}
          </div>
          <div className="bar">
            <div className="upload-icon">
                    <img className="upload" src={uploadIcon} />
            </div>
            <div className="upload-photo">
                <input className="info-input-2" placeholder="Upload Photo" />
            </div>
            <div className="button-info">
                <button className="get-started-button"> <div className="button-inside-div"> Get Started <div className="arrow"> <img className="arrow-image" src={Vector} /></div> </div></button>      
            </div>  
          </div>

              
        </div>
        <div className="other-container">
        </div>
    </div>
    )
}