import React, { useState, useRef, useCallback } from "react";
import { saveAs } from 'file-saver';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
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

  const ref = useRef(null);
  const [pngDataUrl, setPngDataUrl] = useState(null);
 

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toSvg(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        // Create a new Image object
        const img = new Image();

        img.onload = () => {
          // Once the Image is loaded, draw it onto a canvas
          const canvas = document.createElement('canvas');
          const scaleFactor = 1; // Scale factor for higher resolution
          const width = img.width * scaleFactor;
          const height = img.height * scaleFactor;
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.scale(scaleFactor, scaleFactor);
          ctx.drawImage(img, 0, 0);

          // Convert canvas to PNG data URL
          const pngUrl = canvas.toDataURL('image/png');
          setPngDataUrl(pngUrl); // Set PNG data URL state
          
          // Optionally, you can save the PNG file
          setTimeout(() => {
            // Save the PNG file
            saveAs(pngUrl, 'my-image-name.png');
          }, 4000);
        };

        // Set the Image source to the SVG data URL
        img.src = dataUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  

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
              <button className="download-button" onClick={onButtonClick}>
                Download
              </button>
            </div>
          </div>
          <div className="poster--display">
            <div
        
              className="poster"
              style={sizeStyles[selectSize]}
              id="poster-download"
              ref={ref}
            >
              <Outlet />
            </div>
            {pngDataUrl && (
        <div>
          <img src={pngDataUrl} alt="Converted PNG" />
          {/* Optionally, display the PNG image */}
        </div>
        )}
        {console.log("image - ", pngDataUrl)}
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

