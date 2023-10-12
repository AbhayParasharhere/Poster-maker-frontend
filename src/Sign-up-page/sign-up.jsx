  import React from "react";
  import Vector from "../assets/images/Vector.png";
  import uploadIcon from "../assets/images/uploadicon.png";
  import blueFill from "../assets/images/blue_fill.png";
  import blueOutline from "../assets/images/blue_outline.png";
  import orangeFill from "../assets/images/orange_fill.png";
  import orangeOutline from "../assets/images/orange_outline.png";
  import purpleFill from "../assets/images/purple_fill.png";
  import purpleOutline from "../assets/images/purple_outline.png";
  //Things to Add:
  //Display Error message, ask designer where to display it
  //When submitted redriect to next page
  export default function SignUp() {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g;

    const [formValues, setFormValues] = React.useState(() => ({
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      employeeID: "",
      SignaturePhoto: "",
      backgroundImage: "",
      designation: "",
      contactNumber: ""
    }));
    const [emailBorderToggle, setEmailBorderToggle] = React.useState(false);
    const [confirmEmailBorderToggle, setConfirmEmailBorderToggle] =
      React.useState(false);
      const [passwordInputColorToggle, setPasswordInputColorToggle] =
      React.useState(false);
    const [passwordConfirmInputColorToggle, setPasswordConfirmInputColorToggle] =
      React.useState(false);
    
    const [changeSignatureInputColor, setChangeSignatureInputColor] = React.useState(false)
    const [changePhotoInputColor, setChangePhotoInputColor] = React.useState(false)

    const staticFormData = [
      {
        mandatory: true,
        type: "text",
        name: "email",
        topText: "Email",
        placeholder: "Enter Email",
        value: formValues.email,
        changeColor: emailBorderToggle,
      },
      {
        mandatory: true,
        type: "text",
        name: "confirmEmail",
        topText: "Confirm Email",
        placeholder: "!",
        value: formValues.confirmEmail,
        changeColor: confirmEmailBorderToggle,
      },
      {
        mandatory: true,
        type: "password",
        name: "password",
        topText: "Password",
        placeholder: "Pasword",
        value: formValues.password,
        changeColor: passwordInputColorToggle,
      },
      {
        mandatory: true,
        type: "password",
        name: "confirmPassword",
        topText: "Confirm Password",
        placeholder: "!",
        value: formValues.confirmPassword,
        changeColor: passwordConfirmInputColorToggle,
      }
      ,
            {mandatory: true,
        type: "text",
        name: "contactNumber",
        topText: "Contact Number",
        placeholder: "Enter Contact No.",
        value: formValues.contactNumber,
      },
      {mandatory: false,
        type: "text",
        name: "designation",
        topText: "Designation",
        placeholder: "Enter Designation",
        value: formValues.designation,
      },

      {
        mandatory: false,
        type: "text",
        name: "employeeID",
        topText: "Employee ID",
        placeholder: "Enter ID",
        value: formValues.employeeID,
      },
      {mandatory: false,
        name: "SignaturePhoto",
        topText: "Signature Photo",
        placeholder: "Upload Signature Photo",
        image: true,
        value: formValues.SignaturePhoto,
      }
      
    ];
    function handleChange(event) {
      console.log('name:',event.target.name,'prevoius',formValues.backgroundImage)
      setFormValues((prevValues) => {
        return { ...prevValues, [event.target.name]: event.target.type === "file" ? event.target.files[0]:event.target.value };
      });
      changeInputBorder(event);
      console.log(console.log('after',formValues.backgroundImage))
    }
    function changeInputBorder(event) {
      const value = event.target.value;
      if (value == "") {
        return;
      }
      if (event.target.name === "email") {
        value.match(regex)
          ? setEmailBorderToggle(true)
          : setEmailBorderToggle(false);
      } else if (event.target.name === "confirmEmail") {
        value === formValues.email
          ? setConfirmEmailBorderToggle(true)
          : setConfirmEmailBorderToggle(false);
        console.log("ran");
      } else if (event.target.name === "confirmPassword") {
        value === formValues.password
          ? setPasswordConfirmInputColorToggle(true)
          : setPasswordConfirmInputColorToggle(false);
      } else if(event.target.name === "password"){
        (value.length) > 8 ? setPasswordInputColorToggle(true): setPasswordInputColorToggle(false)
      } else if (event.target.name === "SignaturePhoto"){
        value !== '' ? setChangeSignatureInputColor(true) : setChangeSignatureInputColor(false)
      }
      else if (event.target.name === "backgroundImage"){
        value !== '' ? setChangePhotoInputColor(true) : setChangePhotoInputColor(false)
      }
    }

    function submitForm(formValues) {
      if(formValues.name === ''||formValues.email === '' || formValues.confirmEmail === '' || formValues.password === '' || formValues.confirmPassword === '' || formValues.contactNumber === ''){
        console.log('Fill the Requirements')
        return
      } else if((formValues.password.length) < 9 ){
        console.log('password length is less than 9')
        return
      } else if(!formValues.email.match(regex)){
        console.log('email not valid')
        return
      } else if ((formValues.email !== formValues.confirmEmail) || (formValues.password !== formValues.confirmPassword)){
        console.log('your email or password are not same')
        return
      }
      const fetchData = async () => {
        try {
          //Create a User
  
          const createUserStatus = await postData(formValues);
          let tokenResponse;
          if(createUserStatus === 201){
             // Fetch the token
             tokenResponse = await fetchToken();
            console.log('response:',tokenResponse)
          } else{
            console.log('user not created')
          }
          console.log(tokenResponse)
          // Once you have the token, use it to make authenticated API requests
          if (tokenResponse) {
            await postBackgroundImage(tokenResponse.token);
            await postSignatureImage(tokenResponse.token);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
      const fetchToken = async () => {
        const requestData = {
          email: formValues.email,
          password: formValues.password,
        };
    
        try {
          let url = "http://localhost:8000/api/user/token/";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
          });
    
          if (!response.ok) {
            throw new Error("Authentication failed");
          }
    
          const data = await response.json();
          return data; // Return the token response
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      };
    
      const postBackgroundImage = async (token) => {
        const uploadData = new FormData();
        uploadData.append("background_image", formValues.backgroundImage);
        console.log(formValues.backgroundImage)
    
        try {
          let url = "http://localhost:8000/api/user/background-image/";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Authorization": `Token ${token}`,
            },
            body: uploadData,
          });
    
          if (!response.ok) {
            throw new Error("Background image upload failed");
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error uploading background image:", error);
        }
      };
      const postSignatureImage = async (token) => {
        const uploadData = new FormData();
        uploadData.append("signature_image", formValues.SignaturePhoto);
    
        try {
          let url = "http://localhost:8000/api/user/signature-image/";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Authorization": `Token ${token}`,
            },
            body: uploadData,
          });
    
          if (!response.ok) {
            throw new Error("Background image upload failed");
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error uploading background image:", error);
        }
      };
      
      const postData = async (formValues) => {
        const userData = {
          name: formValues.name,
          password: formValues.password,
          email: formValues.email,
          designation: formValues.designation,
          contact_number: formValues.contactNumber,
          employee_id: formValues.employeeID,
        };
        console.log('data:',userData)
        try {
          let url = "http://localhost:8000/api/user/sign-up/";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
          });
    
          if (!response.ok) {
            throw new Error("Could not make the user");
          }
    
          const data = await response.json();
          const status = response.status
          console.log(status)
          return status;
        } catch (error) {
          console.error("Error making the user", error);
        }
      }
      fetchData(); // Call the fetchData function
    }
    const renderForm = staticFormData.map((item, index) => {
      return (
        <div className="info-input-container" key={item.name}>
          <p className="top-text">
            {item.topText}
            <span className={item.mandatory? "mandatory-feild-true":"mandatory-feild-false"}> *</span>
          </p>
          {item.image ? (
            <div className="siganture-container">
              <label htmlFor="signature" className={changeSignatureInputColor ? "signature-label-green" : "signature-label"}>
                <img className="signature-image-icon" src={uploadIcon} />
                <span className="label-text">{item.placeholder}</span>
                <span className="label-text-2">Upload</span>
              </label>
              <input
                key={index}
                type="file"
                className="info-input-image"
                id="signature"
                name={item.name}
                onChange={handleChange}
              />
            </div>
          ) : (
            <input
              key={index}
              type={item.type}
              className={item.changeColor ? "info-input-green" : "info-input"}
              placeholder={item.placeholder}
              name={item.name}
              onChange={handleChange}
              value={item.value}
            />
          )}
        </div>
      );
    });
    return (
      <div className="main-container">
        <div className="sign-up-container">
          <p className="header"> SIGN UP </p>
          <div className="name-container">
            <p className="top-text">Full Name
            <span className = "mandatory-feild-true"> *</span>
            </p>
            <input
              className="name-input"
              placeholder="Enter Full Name"
              name="name"
              onChange={handleChange}
              value={formValues.name}
            />
          </div>
          <div className="same-input-grid">
              {renderForm}
            <div>
              
            </div>
            <div>

            </div>
          </div>
          <div className="bar">
            <div>
                  <label htmlFor="photo" className={changePhotoInputColor ? "face-image-label-green" : "face-image-label"}>
                    <img className="signature-image-icon" src={uploadIcon} />
                    Upload Photo
                  </label>
                  <input 
                  name = "backgroundImage" 
                  type="file" 
                  className="info-input-image" 
                  id="photo" 
                  onChange = {handleChange}/>
              </div>
              <button className="get-started-button" onClick={() => {submitForm(formValues)}}>
                <div className="button-inside-div">
                  Get Started
                  <div className="arrow">
                    <img className="arrow-image" src={Vector} />
                  </div>
                </div>
              </button>
          </div>
        </div>
        <div className="other-container">
          <img className="blue-fill" src={blueFill} />
          <img className="blue-outline" src={blueOutline} />
          <img className="orange-fill" src={orangeFill} />
          <img className="orange-outline" src={orangeOutline} />
          <img className="purple-fill" src={purpleFill} />
          <img className="purple-outline" src={purpleOutline} />
        </div>
      </div>
    );
  }
