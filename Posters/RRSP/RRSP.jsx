import "./RRSP.css";
import getData from "../../src/apis/getData";
import logo from "../../src/assets/images/Poster/logo.jpg";
import tick from "../../src/assets/images/Poster/tick.png";
import { useLoaderData, redirect } from "react-router-dom";
import Cookies from "js-cookie";
export async function loader() {
  const token = Cookies.get("token");
  if (token) {
    return getData(token);
  } else {
    throw redirect("/login");
  }
}

export default function RRSP() {
  const loaderData = useLoaderData();
  let contactNumber = loaderData.textData.contact_number;
  let formattedContactNumber = "";

for (let i = 0; i < contactNumber.length; i++) {
    
    if (i === 3 || i === 6) {
        formattedContactNumber += "-";
    }
    formattedContactNumber += contactNumber[i];
}
  
  return (
    <div class="mainP11">
                <div class="leftcircle">
                    <div class="leftimage"> <img src={logo} class="logo" /> <div class="innercircle"></div><img src={loaderData.personImage.background_image} class="emp" /></div>
               
                <div class="content">
                    <div class="text1P11">
                        <p class="ptext1P11">Affordable plans available!</p>
                    </div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11">   Life</span> Insurance</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Critical Illness</span><br /> <p class="ptext2P11">Insurance</p></div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Disability </span> Insurance</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Super Visa </span> Insurance</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Visitor's </span> Insurance</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Travel </span> Insurance</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> RESP, RRSP </span> & TFSA</div>
                    <div class="text2P11"><img class="tick "src={tick} /><span class="stext2P11"> Health</span> & Dental Plans</div>
                    <div class="name">{loaderData.textData.name}</div>
                    <div class="designation">{loaderData.textData.designation}</div>
                    <div class="number"><p class="pnumber">{formattedContactNumber}</p>
                    </div>
                    <div class="website">www.punjabinsurance.ca</div>
                </div>
                </div>
            </div>
  )
}