import React from "react";
import "./detail.css";
import uploadIcon from "../assets/images/uploadicon.png";
import { Link } from "react-router-dom";
import vector from "../assets/images/Vector.png";
import patchData from "../apis/patchData";
import Cookies from "js-cookie";
import postBackgroundImage from "../apis/postBackgroundImage";

export default function DetailPage() {
  const [detailFormValues, setDetailFormValues] = React.useState(() => ({
    name: "",
    newPassword: "",
    designation: "",
    employeeID: "",
    contactNumber: "",
    backgroundImage: "",
  }));
  const formInputData = [
    {
      name: "name",
      placeholder: "Enter new Name",
      type: "text",
      labelText: "Name",
    },
    {
      name: "newPassword",
      placeholder: "Enter new password",
      type: "text",
      labelText: "New Password",
    },
    {
      name: "designation",
      placeholder: "Confirm new designation",
      type: "text",
      labelText: "Designation",
    },
    {
      name: "contactNumber",
      placeholder: "Enter contact number",
      type: "text",
      labelText: "Contact",
    },
  ];

  function handleChange(event) {
    console.log(
      "name:",
      event.target.value,
      "previous",
      detailFormValues.backgroundImage
    );
    setDetailFormValues((prevValues) => {
      return {
        ...prevValues,
        [event.target.name]:
          event.target.type === "file"
            ? event.target.files[0]
            : event.target.value,
      };
    });
  }

  async function submitForm() {
    try {
      const token = Cookies.get("token");
      await patchData(detailFormValues, token);
      if (detailFormValues.backgroundImage !== "") {
        await postBackgroundImage(token, detailFormValues.backgroundImage);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formInput = formInputData.map((item, index) => {
    return (
      <div className="detail--label-input-container">
        <p className="detail--input-label">{item.labelText}</p>
        <input
          className="detail--text-input"
          name={item.name}
          onChange={handleChange}
          type={item.type}
          placeholder={item.placeholder}
        />
      </div>
    );
  });
  return (
    <div className="detail--main-container">
      <div className="detail--black-header">
        <Link className="no-text-decoration" to="/">
          <p className="detail--go-back">Go Back</p>
        </Link>
      </div>
      <div className="detail--form-heading-container">
        <h1 className="detail--heading">Change Details</h1>
        <div className="detail--form-overlay-container">
          {/*This is here for alignment*/}
          <div className="detail--form-container">
            {formInput}
            <div className="detail--label-input-container">
              <p className="detail--input-label">Photo</p>
              <label
                htmlFor="detail--person-photo"
                className="detail--image-input-label"
              >
                <img src={uploadIcon} className="detail--upload-icon" /> Upload
                new photo
              </label>
              <input
                id="detail--person-photo"
                type="file"
                className="detail--image-input"
                onChange={handleChange}
              />
            </div>
            <button className="detail--submit-button" onClick={submitForm}>
              Save details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
