import React from "react";
import "./detail.css";
import uploadIcon from "../assets/images/uploadicon.png";
import { Link } from "react-router-dom";

export default function DetailPage() {
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
      name: "confirmPassword",
      placeholder: "Confirm new password",
      type: "text",
      labelText: "Confirm Password",
    },
    {
      name: "employeeID",
      placeholder: "Enter Employee ID",
      type: "text",
      labelText: "Employee ID",
    },
  ];
  const formInput = formInputData.map((item, index) => {
    return (
      <div className="detail--label-input-container">
        <p className="detail--input-label">{item.labelText}</p>
        <input
          className="detail--text-input"
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
                className="detail--image-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
