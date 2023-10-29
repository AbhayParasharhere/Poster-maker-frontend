import React from "react";
import "./Poster1.css";
// import OneGoalLogo from "../../src/assets/images/Poster/"
import YellowFill from "../../src/assets/images/Poster/yellow-fill.png"
import EmployeeImage from "../../src/assets/images/Poster/employee-img.png"
import DottedShit from "../../src/assets/images/Poster/dotted-shit.png"
import DottedShit2 from "../../src/assets/images/Poster/dotted-shit-2.png"
import OneGoalLogo from "../../src/assets/images/Poster/oneGoalLogoW.png"
import getData from "../../src/apis/getData"
import Cookies from "js-cookie";
import { useLoaderData } from "react-router-dom";

export async function loader(){
  const token = Cookies.get("token")
  if(token){
    return getData(token)
  }else{
    throw redirect("/login")
  }

}

export default function Poster1(props) {
  const loaderData = useLoaderData()
  return (
      <div className="main-container--1">
        <div className="left-container--1">
          <img className="company-logo--1" src={OneGoalLogo} alt="Company Logo" />
          <img className="yellow-fill--1" src={YellowFill} alt="Yellow Fill" />
          <img className="employee-img--1" src={loaderData.personImage.background_image} alt="Employee Image" id="employee-img" />
          <img className="dotted-shit--1" src={DottedShit} alt="Dotted Shit" />
        </div>
        <div className="right-container--1">
          <div className="text-container--1">
            <img className="dotted-shit-2--1" src={DottedShit2} alt="Dotted Shit 2" />
            <p className="tagline--1">
              4 Months Free <br />
              Life Insurance <br />
              Premium
            </p>
            <p className="text-1--1" id="text-1">
              Offer Extended Till November 31, 2023
            </p>
            <p className="text-2--1">3 Months Premium Free</p>
            <div className="contact-info-container--1">
              <p className="contact-info--1">Contact</p>
              <p className="contact-details--1">{loaderData.textData.name}</p>
              <p className="contact-details--1">{loaderData.textData.contact_number}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
