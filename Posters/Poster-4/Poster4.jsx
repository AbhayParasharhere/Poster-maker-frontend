/* eslint-disable react-refresh/only-export-components */
import "./Poster4.css"
import getData from "../../src/apis/getData"
import  { useLoaderData, redirect } from "react-router-dom"
import Cookies from "js-cookie"
import PIILogo from "../../src/assets/images/Poster/PII-Logo.png"
export async function loader(){
  const token = Cookies.get("token")
  if(token){
    return getData(token)
  }else{
    throw redirect("/login")
  }
}
export default function Poster4() {
    const loaderData = useLoaderData()
  return (
    <div className="container--Poster-4">
    <div className="main-container--Poster-4">
        <div className="left-container--Poster-4">
        <p className="text-1--Poster-4">HAPPY</p>
        <p className="text-2--Poster-4">Canada</p>
        <p className="text-3--Poster-4">DAY</p>
        <p className="text-4--Poster-4">1<span className="st--Poster-4">ST</span>JULY</p>
        <p className="text-5--Poster-4-4">{loaderData.textData.name}</p>
        <p className="text-6--Poster-4-4">{loaderData.textData.designation}</p>
        <p className="text-7--Poster-4">More information call us</p>
        <p className="text-8--Poster-4">{loaderData.textData.contact_number}</p>
        <p className="text-9--Poster-4">www.punjabinsurance.ca</p>
        </div>
        <img src={loaderData.personImage.background_image} className="img--Poster-4" />
    </div>
</div>
    );
}