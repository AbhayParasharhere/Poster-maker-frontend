import "./Poster5.css"
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
export default function Poster5() {
    const loaderData = useLoaderData()
  return ( 
  <div className="Poster-5-container--7">
    <div className="Poster5--main-container">
        <div className="lleft-container">
            <p className="text-1--7">DID YOU KNOW</p>
            <p className="text-2--7">WHY YOU BUY</p>
            <p className="text-3--7">LIFE</p>
            <p className="text-4--7">INSURANCE <span className="text-q--7">?</span></p>
            <p className="text-5--7"><span className="text-q">REMEMBER </span>BANK LOANS</p>
            <p className="text-6--7">Must be paid, even if something<br />happens to you get critically<br />ill or become disabled</p>
            <div className="text-7--7"><p className="p-text--7">TIP:</p></div>
            <p className="text-8--7">GET LIFE INSURANCE<br />IF YOU HAVE LOANS</p>
            <p className="more-info--7">More information call us</p>
            <p className="phone">{loaderData.textData.contact_number}</p>
        </div>
        <div className="right-container--Poster-5">
            <img src={loaderData.personImage.background_image}  className="img--7" />
            <p className="name--7">{loaderData.textData.name}</p>
            <p className="des--7">{loaderData.textData.designation}</p>
        </div>
    </div>
 </div>
); 
}