import React from "react";
import Vector from "../assets/images/Vector.png";
import uploadIcon from "../assets/images/uploadicon.png";
import blueFill from "../assets/images/blue_fill.png";
import blueOutline from "../assets/images/blue_outline.png";
import orangeFill from "../assets/images/orange_fill.png";
import orangeOutline from "../assets/images/orange_outline.png";
import purpleFill from "../assets/images/purple_fill.png";
import purpleOutline from "../assets/images/purple_outline.png";
import fetchToken from "../apis/fetchToken";
import postBackgroundImage from "../apis/postBackgroundImage";
import postSignatureImage from "../apis/postSignatureImage";
import postData from "../apis/postData";
import "./signup.css";
import { Navigate, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function loader() {
  const token = Cookies.get("token");
  if (!token) {
    throw redirect("/login");
  } else {
    throw redirect("/");
  }
}
export default function SignUp() {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/g;
  const testImage = new File(
    ["/src/assets/images/blue_fill.png"],
    "testing.png",
    { type: "image/png" }
  );

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
    contactNumber: "",
  }));
  const [emailBorderToggle, setEmailBorderToggle] = React.useState(false);
  const [confirmEmailBorderToggle, setConfirmEmailBorderToggle] =
    React.useState(false);
  const [passwordInputColorToggle, setPasswordInputColorToggle] =
    React.useState(false);
  const [passwordConfirmInputColorToggle, setPasswordConfirmInputColorToggle] =
    React.useState(false);

  const [changeSignatureInputColor, setChangeSignatureInputColor] =
    React.useState(false);
  const [changePhotoInputColor, setChangePhotoInputColor] =
    React.useState(false);
  const navigate = useNavigate();

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
    },
    {
      mandatory: true,
      type: "text",
      name: "contactNumber",
      topText: "Contact Number",
      placeholder: "Enter Contact No.",
      value: formValues.contactNumber,
    },
    {
      mandatory: false,
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
    {
      mandatory: false,
      name: "SignaturePhoto",
      topText: "Signature Photo",
      placeholder: "Upload Signature Photo",
      image: true,
      value: formValues.SignaturePhoto,
    },
  ];
  const [errorMessage, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  function handleChange(event) {
    console.log(
      "name:",
      event.target.name,
      "previous",
      formValues.backgroundImage
    );
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]:
          event.target.type === "file"
            ? event.target.files[0]
            : event.target.value,
      };
    });
    changeInputBorder(event);
  }

  function changeInputBorder(event) {
    const value = event.target.value;
    if (value === "") {
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
    } else if (event.target.name === "password") {
      value.length > 8
        ? setPasswordInputColorToggle(true)
        : setPasswordInputColorToggle(false);
    } else if (event.target.name === "SignaturePhoto") {
      value !== ""
        ? setChangeSignatureInputColor(true)
        : setChangeSignatureInputColor(false);
    } else if (event.target.name === "backgroundImage") {
      value !== ""
        ? setChangePhotoInputColor(true)
        : setChangePhotoInputColor(false);
    }
  }

  const fetchData = async () => {
    try {
      let backgroundSuccess = false;
      let signatureSuccess = false;
      setLoading(true);
      setError(false);
      let tokenResponse;
      const createUserStatus = await postData(formValues);

      if (createUserStatus === 201) {
        // Fetch the token
        console.log("data is submitted and fetch token commences");
        tokenResponse = await fetchToken({
          email: formValues.email,
          password: formValues.password,
        });
        console.log("response:", tokenResponse);
      } else {
        console.log("user not created");
      }
      console.log(tokenResponse);
      // Once you have the token, use it to make authenticated API requests
      if (tokenResponse) {
        console.log("Got token");
        backgroundSuccess = await postBackgroundImage(
          tokenResponse.token,
          formValues.backgroundImage
        );
        signatureSuccess = await postSignatureImage(
          tokenResponse.token,
          formValues.SignaturePhoto
        );
        if (backgroundSuccess === 200 && signatureSuccess === 200) {
          console.log("navigating");
          Cookies.set("token", tokenResponse.token, {
            expires: 7,
            secure: true,
          });
          navigate("/", { replace: true });
          setLoading(false);
        }
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  function submitForm(formValues) {
    const validExtensions = ["png", "jpg", "jpeg"];

    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.confirmEmail === "" ||
      formValues.password === "" ||
      formValues.confirmPassword === "" ||
      formValues.contactNumber === ""
    ) {
      setError("Fill the requirements");
      return;
    } else if (formValues.password.length < 9) {
      setError("Password must be more than 9 characters");
      return;
    } else if (!formValues.email.match(regex)) {
      setError("Invalid Email");
      return;
    } else if (
      formValues.email !== formValues.confirmEmail ||
      formValues.password !== formValues.confirmPassword
    ) {
      setError("Your email or password are not the same");
      return;
    }

    if (formValues.SignaturePhoto) {
      const signatureExtentionArray = formValues.SignaturePhoto.name.split(".");

      const signatureExtention =
        signatureExtentionArray[signatureExtentionArray.length - 1];

      const signatureImageSize = formValues.SignaturePhoto.size;

      console.log("This is the signature extentiton", signatureExtention);
      if (!validExtensions.includes(signatureExtention)) {
        setError("The Signature image is not valid");
        return;
      }
      if (signatureImageSize > 5000000) {
        setError("Signature Image size too large");
        return;
      }
    }

    if (formValues.backgroundImage) {
      const backgroundExtentionArray =
        formValues.backgroundImage.name.split(".");

      const backgroundExtention =
        backgroundExtentionArray[backgroundExtentionArray.length - 1];

      const backgroundImageSize = formValues.backgroundImage.size;

      console.log("This is the background extentiton", backgroundExtention);
      if (
        !validExtensions.includes(backgroundExtention) &&
        formValues.backgroundImage
      ) {
        setError("The profile image is not valid");
        return;
      }
      if (backgroundImageSize > 5000000 && formValues.backgroundImage) {
        setError("Profile Image size too large");
        return;
      }
    }
    // if (!formValues.backgroundImage) {
    //   formValues.backgroundImage = blueFill;
    // }
    // if (!formValues.SignaturePhoto) {
    //   formValues.SignaturePhoto = blueFill;
    // }
    fetchData(); // Call the fetchData function
  }
  const renderForm = staticFormData.map((item, index) => {
    return (
      <div className="info-input-container-s" key={item.name}>
        <p className="top-text-s">
          {item.topText}
          <span
            className={
              item.mandatory
                ? "mandatory-feild-true-s"
                : "mandatory-feild-false-s"
            }
          >
            {" "}
            *
          </span>
        </p>
        {item.image ? (
          <div className="siganture-container-s">
            <label
              htmlFor="signature"
              className={
                changeSignatureInputColor
                  ? "signature-label-green-s"
                  : "signature-label-s"
              }
            >
              <img className="signature-image-icon-s" src={uploadIcon} />
              <span className="label-text-s">{item.placeholder}</span>
              <span className="label-text-2-s">Upload</span>
            </label>
            <input
              key={index}
              type="file"
              className="info-input-image-s"
              id="signature"
              name={item.name}
              onChange={handleChange}
            />
          </div>
        ) : (
          <input
            key={index}
            type={item.type}
            className={item.changeColor ? "info-input-green-s" : "info-input-s"}
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
    <div className="main-container-s">
      <div className="sign-up-container-s">
        <p className="header-s"> SIGN UP </p>
        <div className="name-container-s">
          <p className="top-text-s">
            Full Name
            <span className="mandatory-feild-true-s"> *</span>
          </p>
          <input
            className="name-input-s"
            placeholder="Enter Full Name"
            name="name"
            onChange={handleChange}
            value={formValues.name}
          />
        </div>
        <div className="same-input-grid-s">
          {renderForm}
          <div></div>
          <div></div>
        </div>
        <div className="bar-s">
          <div>
            <label
              htmlFor="photo"
              className={
                changePhotoInputColor
                  ? "face-image-label-green-s"
                  : "face-image-label-s"
              }
            >
              <img className="signature-image-icon-s" src={uploadIcon} />
              Upload Photo
            </label>
            <input
              name="backgroundImage"
              type="file"
              className="info-input-image-s"
              id="photo"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className="get-started-button-s"
              onClick={() => {
                submitForm(formValues);
              }}
            >
              <div className="button-inside-div-s">
                Get Started
                <div className="arrow-s">
                  <img className="arrow-image-s" src={Vector} />
                </div>
              </div>
            </button>
          </div>
        </div>
        {loading && <p className="signup--loading-text"> Loading...</p>}
        {errorMessage && <p className="signup--error-text">{errorMessage}</p>}

        <p className="sign-log-text">
          Already have an account?
          <Link to="/login" className="sign-link">
            {" "}
            Log in
          </Link>
        </p>
      </div>

      <div className="other-container-s">
        <img className="blue-fill-s" src={blueFill} />
        <img className="blue-outline-s" src={blueOutline} />
        <img className="orange-fill-s" src={orangeFill} />
        <img className="orange-outline-s" src={orangeOutline} />
        <img className="purple-fill-s" src={purpleFill} />
        <img className="purple-outline-s" src={purpleOutline} />
      </div>
    </div>
  );
}
