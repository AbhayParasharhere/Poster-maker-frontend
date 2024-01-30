import React, { useState } from "react";
import Header from "./PosterPageComponents/Header/Header";
import SideBar from "./PosterPageComponents/SideBar/SideBar";
import "./PosterDisplay.css";
import { Outlet, redirect } from "react-router-dom";
import Cookies from "js-cookie";
import domtoimage from "dom-to-image-more";
import instagramIcon from "./selectorPageImages/instagramIcon.png";
import facebookIcon from "./selectorPageImages/facebookIcon.png";
import linkedinIcon from "./selectorPageImages/linkedinIcon.png";
import twitterIcon from "./selectorPageImages/twitterIcon.png";
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


export function loader() {
  const token = Cookies.get("token");
  if (!token) {
    throw redirect("/login");
  } else {
    return null;
  }
}
export default function PosterPage() {
  console.log("RENDERED");
  const [posterSize, setPosterSize] = React.useState({
    Instagram: true,
    LinkedIn: false,
    Facebook: false,
    Twitter: false,
  });
  let selectSize = "Instagram";
  const [download, setDownload] = useState(false);
  for (const [key, value] of Object.entries(posterSize)) {
    if (value) {
      selectSize = key;
    }
  }
  const downloadSize = {
    Instagram: { width: 1080, height: 1080 },
    Twitter: { width: 1600, height: 900 },
    LinkedIn: { width: 1200, height: 1200 },
    Facebook: { width: 1080, height: 1080 },
  };
  const sizeStyles = {
    Twitter: {
      width: "550px",
      height: "290px",
      containerType: "inline-size",
      containerName: "changeRes",
    },

    Instagram: {
      width: "300px",
      height: "300px",
      containerType: "inline-size",
      containerName: "changeRes",
    },
    Facebook: {
      width: "300px",
      height: "300px",
      containerType: "inline-size",
      containerName: "changeRes",
    },
    LinkedIn: {
      width: "350px",
      height: "350px",
      containerType: "inline-size",
      containerName: "changeRes",
    },
  };
  const sizePixles = {
    Instagram: "1080px x 1080px",
    Facebook: "1080px x 1080px",
    LinkedIn: "1200px x 1200px",
    Twitter: "1600px x 900px",
  };
  function handleSizeChange(platform) {
    setPosterSize((prevState) => {
      const obj = { ...prevState };
      for (const key in obj) {
        if (key !== platform) {
          obj[key] = false;
        }
      }
      obj[platform] = true;
      return obj;
    });
  }

  let cloneId = 0; // Initialize a unique identifier for each clone

  const elementRef = useRef(null);

  const downloadImage = () => {
    const target = document.getElementById("poster-download");
    const downloadWidth = `${downloadSize[selectSize]["width"]}px`;
    const downloadHeight = `${downloadSize[selectSize]["height"]}px`;

    // Create an invisible clone of the target element
    const clone = target.cloneNode(true);
    clone.style.width = downloadWidth;
    clone.style.height = downloadHeight;
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "-9999px";

    document.body.appendChild(clone); // Add the clone to the document temporarily

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        document.body.removeChild(clone); // Remove the clone from the document
        setDownload(false);
      });
  };

 
  

  return (
    <div className="poster-display--main-container">
      <Header />
      <div className="poster-display--main-body-container">
        <SideBar />
        <div className="main-poster-container">
          <div className="poster--download-button-container">
            <div className="poster--size">
              <span className="black-color">Size-{selectSize}:</span>{" "}
              {sizePixles[selectSize]}
            </div>
            <div className="main-button-container">
              <button className="download-button" onClick={downloadImage}>
                Download
              </button>
            </div>
          </div>
          <div className="poster--display">
            <div
              className="poster"
              style={sizeStyles[selectSize]}
              id="poster-download"
            >
              <Outlet />
            </div>
          </div>

          <div className="poster--size-select-container">
            <div className="size-select-sub-container">
              <div
                className={
                  posterSize["Instagram"]
                    ? "specific-size-select-container-selected"
                    : "specific-size-select-container"
                }
                onClick={() => {
                  handleSizeChange("Instagram");
                }}
              >
                <div className="icon-container">
                  <img src={instagramIcon} />
                </div>
                <span>Instagram</span>
              </div>

              <div
                className={
                  posterSize["Facebook"]
                    ? "specific-size-select-container-selected"
                    : "specific-size-select-container"
                }
                onClick={() => {
                  handleSizeChange("Facebook");
                }}
              >
                <div className="icon-container">
                  <img src={facebookIcon} />
                </div>
                <span>Facebook</span>
              </div>

              <div
                className={
                  posterSize["LinkedIn"]
                    ? "specific-size-select-container-selected"
                    : "specific-size-select-container"
                }
                onClick={() => {
                  handleSizeChange("LinkedIn");
                }}
              >
                <div className="icon-container">
                  <img src={linkedinIcon} />
                </div>
                <span>LinkedIn</span>
              </div>

              {/* <div
                className={
                  posterSize["Twitter"]
                    ? "specific-size-select-container-selected"
                    : "specific-size-select-container"
                }
                onClick={() => {
                  handleSizeChange("Twitter");
                }}
              >
                <div className="icon-container">
                  <img src={twitterIcon} />
                </div>
                <span>Twitter</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
