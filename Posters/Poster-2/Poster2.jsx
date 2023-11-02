import React from "react";
import posterBackground from "../../src/assets/images/Poster/poster2-picture.png"
import { useLoaderData } from "react-router-dom";
import Cookies from "js-cookie";
import getData from "../../src/apis/getData"

import "./Poster2.css";

export async function loader(){
  const token = Cookies.get("token")
  if(token){
    return getData(token)
  }else{
    throw redirect("/login")
  }
}
export default function Poster2() {
  const loaderData = useLoaderData()
  return (
    <div className="main-poster-container--2">
      <div className="poster-image-container--2">
        <img className="poster-image--2" src={posterBackground} alt="Poster" />
        <div className="insurance-container--2">Life Insurance</div>
      </div>
      <div className="text-info-container--2">
        <p className="main-poster-tagline--2">Secure your future with life insurance!</p>
        <p className="poster-tagline-1--2">Life is unpredictable, but your financial security doesn't have to be</p>
        <p className="poster-tagline-2--2">Protect your loved ones and invest in their future with life insurance today</p>
        <div className="main-info-container--2">
          <div className="contact-info-container--2">
            <p className="contact-tagline--2">CONTACT INSURANCE ADVISOR</p>
            <p className="contact-info--2" id="name">{loaderData.textData.name}</p>
            <p className="contact-info--2">{loaderData.textData.contact_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
