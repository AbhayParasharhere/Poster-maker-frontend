  import React from "react";
  import Vector from "../assets/images/Vector.png";
  import uploadIcon from "../assets/images/uploadicon.png";
  import blueFill from "../assets/images/blue_fill.png";
  import blueOutline from "../assets/images/blue_outline.png";
  import orangeFill from "../assets/images/orange_fill.png";
  import orangeOutline from "../assets/images/orange_outline.png";
  import purpleFill from "../assets/images/purple_fill.png";
  import purpleOutline from "../assets/images/purple_outline.png";

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
    }));
    const [emailBorderToggle, setEmailBorderToggle] = React.useState(false);
    const [confirmEmailBorderToggle, setConfirmEmailBorderToggle] =
      React.useState(false);
    const [passwordInputColorToggle, setPasswordInputColorToggle] =
      React.useState(false);

      React.useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch the token
            const tokenResponse = await fetchToken();
            console.log(tokenResponse)
            // Once you have the token, use it to make authenticated API requests
            if (tokenResponse) {
              await postBackgroundImage(tokenResponse.token);
            }
          } catch (error) {
            console.error("Error:", error);
          }
        };
      
        const fetchToken = async () => {
          const requestData = {
            email: "admin@example.com",
            password: "admin123",
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
          uploadData.append("background_image", formValues.SignaturePhoto);
      
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
      
        fetchData(); // Call the fetchData function
      }, [formValues]);
      

    const formData = [
      {
        name: "email",
        topText: "Email",
        placeholder: "Enter Email",
        value: formValues.email,
        changeColor: emailBorderToggle,
      },
      {
        name: "confirmEmail",
        topText: "Confirm Email",
        placeholder: "!",
        value: formValues.confirmEmail,
        changeColor: confirmEmailBorderToggle,
      },
      {
        name: "password",
        topText: "Password",
        placeholder: "Enter Password",
        value: formValues.password,
        changeColor: passwordInputColorToggle,
      },
      {
        name: "confirmPassword",
        topText: "Confirm Password",
        placeholder: "!",
        value: formValues.confirmPassword,
        changeColor: passwordInputColorToggle,
      },
      {
        name: "employeeID",
        topText: "Employee ID",
        placeholder: "Enter ID",
        value: formValues.employeeID,
      },
      {
        name: "SignaturePhoto",
        topText: "Signature Photo",
        placeholder: "Upload Signature Photo",
        image: true,
        value: formValues.SignaturePhoto,
      },
    ];
    function handleChange(event) {
      setFormValues((prevValues) => {
        return { ...prevValues, [event.target.name]: event.target.type === "file" ? event.target.files[0]:event.target.value };
      });
      changeInputBorder(event);
      console.log(formValues.SignaturePhoto)
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
          ? setPasswordInputColorToggle(true)
          : setPasswordInputColorToggle(false);
      }
    }
    function submitForm() {
      if (formValues.confirmEmail !== formValues.email) {
        console.log("Your confirm email  is incorrect");
      } else if (formValues.password !== formValues.confirmPassword) {
        console.log("Your confirm password is incorrect");
      }
    }
    const renderForm = formData.map((item, index) => {
      return (
        <div className="info-input-container" key={item.name}>
          <p className="top-text">{item.topText}</p>
          {item.image ? (
            <div className="siganture-container">
              <label htmlFor="signature" className="signature-label">
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
              type="text"
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
            <p className="top-text">Name</p>
            <input
              className="name-input"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
              value={formValues.name}
            />
          </div>
          <div className="same-input-grid">{renderForm}</div>
          <div className="bar">
            <div className="siganture-container">
              <label htmlFor="signature" className="face-image-label">
                <img className="signature-image-icon" src={uploadIcon} />
                Upload Photo
              </label>
              <input type="file" className="info-input-image" id="signature" />
            </div>
            <button className="get-started-button" onClick={submitForm}>
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
