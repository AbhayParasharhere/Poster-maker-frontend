import "./Poster7.css"
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
export default function Poster7() {
    const loaderData = useLoaderData()
  return ( 
     <div class="container-1--Poster-7">
        <div class="container--Poster-7">
       <div class="right-text--5"><p class="text--5">WWW.PUNJABINSURANCE.CA</p></div>
       
        <img src={loaderData.personImage.background_image} class="img--5" />
        <div class="main-container--5">
             <p class="text-1--5">HAPPY</p>
             <p class="text-2--5--Poster-7">Raksha</p>
             <p class="text-3--5">Bandhan</p>
             <p class="text-4--5">2024</p>
        </div>
        <p class="bottom-text--5">FOR INSURANCE CALL US TODAY: {loaderData.textData.contact_number}</p>
        <p class="bottom-text-1--5">{loaderData.textData.name}</p>
        <p class="bottom-text-2--5">{loaderData.textData.designation}, PUNJAB INSURANCE AGENCY INC.</p>
       
   
    </div>
</div>

); 
}