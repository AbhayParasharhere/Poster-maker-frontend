/* eslint-disable react-refresh/only-export-components */
import "./Poster3.css"
import getData from "../../src/apis/getData"
import  { useLoaderData, redirect } from "react-router-dom"
import Cookies from "js-cookie"
import PIILogo from "../../src/assets/images/Poster/PIILogo.png"
export async function loader(){
  const token = Cookies.get("token")
  if(token){
    return getData(token)
  }else{
    throw redirect("/login")
  }
}
export default function Poster3() {
    const loaderData = useLoaderData()
  return (
      <div className="container-1--3">
        <div className="main-container--3">
          <div className="left-container--3">
            <img src={PIILogo}className="logo--3" />
            <img src={loaderData.personImage.background_image} className="emp-img--3" />
          </div>
          <div className="right-container--3">
            <p className="main-title--3">BEST RATES GUARANTEED!</p>
            <p className="text-1--3">INTERNATIONAL <br /> STUDENTS</p>
            <p className="text-2--3"><i>$100000</i> </p>
            <p className="text-7--3">INSURANCE</p>
            <p className="text-3--3"> <span className="text-arrow--3"></span> Get <i><b>LIFE INSURANCE</b></i> </p>
            <p className="text-8--3">of $100000 in $11 only!</p>
            <p className="text-4--3"><i>www.punjabinsurance.ca</i></p>
            <div className="contact-container--3">
              <p className="text-5--3">Call for All Your Insurance Needs</p>
              <p className="phone--3">{loaderData.textData.contact_number}</p>
            </div>
            <p className="text-6--3"><i>*Some Conditions Apply!</i></p>
          </div>
        </div>
        <div className="footer--3">
          <p className="footer-name--3">{loaderData.textData.name}</p>
          <p className="designation--3">{loaderData.textData.designation}</p>
        </div>
      </div>
  );
}
