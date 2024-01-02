import "./Poster6.css"
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
export default function Poster6() {
    const loaderData = useLoaderData()
  return ( <div class="container-1--6--Poster--6">
        <div class="final-container--6--Poster--6">
            <p class="text-1--6--Poster--6">Merry Christmas</p>
            <p class="text-3--6--Poster--6">&</p>
            <p class="text-2--6--Poster--6">HAPPY HOLIDAY</p>
            <div class="footer--Poster--6">
                <div class="div-1--6--Poster--6">
                    <p class="div-1-text-1--6--Poster--6">{loaderData.textData.contact_number}</p>
                    <p class="div-1-text-2--6--Poster--6">www.punjabinsurance.ca</p>
                </div>
                <div class="div-2--6--Poster--6">
                    <p class="div-2-text-1--6--Poster--6">{loaderData.textData.name}</p>
                    <p class="div-2-text-2--6--Poster--6">{loaderData.textData.designation}, Punjab Insurance</p>
                </div>
                <img src={loaderData.personImage.background_image} class="img-1--6--Poster--6" />
            </div>
       
   
    </div>
</div>
);
}