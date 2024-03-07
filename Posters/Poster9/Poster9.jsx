import "./Poster9.css";
import getData from "../../src/apis/getData";
import imgP9 from "../../src/assets/images/Poster/img9Poster9.png";
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
export default function Poster9() {
  const loaderData = useLoaderData();
  return (
    /* <div class="containerPoster9"> */

    <div class="maincontainerPoster9">
      <div class="text1Poster9">
        <p class="text1P9">2</p>
        <img src={imgP9} class="imgP9" />
        <p class="text2P9">2</p>
        <p class="text1P9">4</p>
      </div>
      <div class="text2Poster9">HAPPY NEW YEAR</div>
      <div class="text3Poster9">
        <p class="text3P9">{loaderData?.textData?.name}</p>
        <div class="text4P9">
          <p class="text5P9">{loaderData?.textData?.contact_number}</p>
        </div>
      </div>
      <div class="text4Poster9">
        <p class="text6P99">{loaderData?.textData?.designation}</p>
        <p class="text7P9">WWW.PUNJABINSURANCE.CA</p>
      </div>
      <img
        src={loaderData?.personImage?.background_image || imgP9}
        class="empP9"
      />
    </div>
  );
}
