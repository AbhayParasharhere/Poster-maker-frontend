import React from "react"
import Vector from "../assets/images/Vector.png"
import uploadIcon from "../assets/images/uploadicon.png"
import blueFill from "../assets/images/blue_fill.png"
import blueOutline from "../assets/images/blue_outline.png"
import orangeFill from "../assets/images/orange_fill.png"
import orangeOutline from "../assets/images/orange_outline.png"
import purpleFill from "../assets/images/purple_fill.png"
import purpleOutline from "../assets/images/purple_outline.png"
// Use Regex to check the password and confirm password and email. Learn about type file input, turn input green when valid and red when invalid
//CONFIRM WITH DESIGNER
//IMP- CHANGE TYPE TO PASSWORD AND STYLE PASSWORD ACCORDINGLY
//LEARN HOW TO CONNECT API END POINTS
export default function SignUp(){
  const [formValues,setFormValues] = React.useState({
    name: "",
    email: "",
    confirmEmail: "",
    password:"",
    confirmPassword:"",
    employeeID:""
  })  
    const formData = [
        { name: "email",
          topText: "Email",
        placeholder: "Enter Email"},
        {name: "confirmEmail",
          topText: "Confirm Email",
        placeholder: "!"},
        {name: "password",
          topText: "Password",
        placeholder: "Enter Password"},
        {name: "confirmPassword",
          topText: "Confirm Password",
        placeholder: "!"},
        { name: "employeeID",
          topText: "Employee ID",
        placeholder: "Enter ID"},
        {name: 'noname',
          topText: "Signature Photo",
        placeholder: "Upload Signature Photo",
        image:true
      }
    ]
    function handleChange(event){
      console.log('name:',formValues.name,'email:',formValues.email,'confirm email: ', formValues.confirmEmail, 'password: ',formValues.password,'confirm password', formValues.confirmPassword, 'employeeID: ',formValues.employeeID)
      setFormValues((prevValues) => {
       return {...prevValues, [event.target.name]:event.target.value}
      })
      
    }
    function submitForm(){
      if(formValues.confirmEmail !== formValues.email ){
        console.log('Your confirm email  is incorrect')
      } else if(formValues.password !== formValues.confirmPassword)
      {
        console.log('Your confirm password is incorrect')
      }
    }
    const renderForm = formData.map((item)=>{
        return(
            <div className="info-input-container">
              <p className="top-text">{item.topText}</p>
              {
                item.image ?
                <div className = "siganture-container"> 
                  <label htmlFor = "signature" className = "signature-label">
                    <img className = "signature-image-icon"src = {uploadIcon}/>
                    <span className = "label-text">{item.placeholder}</span>
                    <span className = "label-text-2">Upload</span>
                  </label>
                  <input type = "file"className="info-input-image" id = "signature" name = {item.name}  /> 
                </div>
                :
                <input className="info-input" placeholder={item.placeholder} name = {item.name} onChange = {handleChange}/>
              }   

            </div>
        ) 
    })
    return(
    <div className="main-container">
        <div className="sign-up-container">
          <p className="header"> SIGN UP </p>
          <div className="name-container">
            <p className="top-text">Name</p>
            <input className="name-input" placeholder="Enter Name" name = "name" onChange = {handleChange} />
          </div>
          <div className = "same-input-grid">
            {renderForm}
          </div>
          <div className="bar">
              <div className = "siganture-container"> 
                  <label htmlFor = "signature" className = "face-image-label">
                    <img className = "signature-image-icon"src = {uploadIcon}/>Upload Photo
                  </label>
                  <input type = "file" className="info-input-image" id = "signature" /> 
              </div>
              <button className="get-started-button"  onClick = {submitForm}> <div className="button-inside-div"> Get Started <div className="arrow"> <img className="arrow-image" src={Vector}/></div> </div></button>      
          </div>       
        </div>
        <div className="other-container">
            <img className="blue-fill" src={blueFill} />
            <img className="blue-outline" src={blueOutline}  />
            <img className="orange-fill" src={orangeFill}  />
            <img className="orange-outline" src={orangeOutline}  />
            <img className="purple-fill" src={purpleFill} />
            <img className="purple-outline" src={purpleOutline}  />
        </div>
    </div>
    )
}