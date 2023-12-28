import "./Poster8.css"
import getData from "../../src/apis/getData"
import Logo from "../../src/assets/images/Poster/Logo.png"
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
export default function Poster8() {
    const loaderData = useLoaderData()
  return (
<div class="container-1--8-Poster--8">
        <div class="main-container--Poster--8">
          <div class="left-container--8">
            <img src={Logo} class="logo--8" />
            <img src={loaderData.personImage.background_image} class="emp-img--8" />
          </div>
          <div class="right-container--8">
            <p class="main-title--8">International Student's</p>
            <p class="text-9--8-Poster-8">Insurance</p>
            <div class="contact-container--8">
                <p class="text-5--8-Poster-8"> BENEFITS - $2 MILLION | ANNUAL PREMIUM - $784</p>
              </div>
            <p class="text-1--8--Poster-8">PLEASE PROVIDE THE FOLLOWING DETAILS</p>
            <p class="text-2--8">YOUR FULL NAME</p>
            <p class="text-2--8">DATE OF BIRTH</p>
            <p class="text-2--8">YOUR CELL NUMBER</p>
            <p class="text-2--8">YOUR EMAIL</p>
            <p class="text-2--8">DATE OF LANDING</p>
            <p class="text-2--8">NAME OF CANADIAN COLLEGE</p>
            <p class="text-2--8">STUDY END DATE</p>
            <p class="text-2--8">PARENTS FULL NAME</p>
            <p class="text-2--8">CANADIAN HOME ADDRESS WITH POSTAL CODE</p>
            <p class="text-2--8">MODE OF PAYMENT: CREDIT CARD OR CHEQUE</p>
            <p class="text-8--8-Poster-8">{loaderData.textData.name}</p>
            <p class="text-4--8-Poster-8">{loaderData.textData.designation}</p>
            <p class="text-6--8-Poster-8">{loaderData.textData.contact_number}</p>
            <p class="text-10--8-Poster-8">www.punjabinsurance.ca</p>
            
            
          </div>
        </div>
      </div>
  );
}