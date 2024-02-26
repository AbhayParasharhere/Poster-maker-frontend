
import React from "react";
import "./SideBar.css";
import templateIcon from "./images/templatesIcon.png";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const previewPosterData = [
    {
      img: "/sidebarPoster5.png",
      pageLink: "/",
    } 
    // {
    //     img: "/SidebarP9.png",
    //     pageLink: "poster9",
    // }, 

    // {
    //   img: "/sidebarPoster2.png",
    //   pageLink: "poster2",
    // },
    // {
    //   img: "/sidebarPoster3.png",
    //   pageLink: "poster3",
    // },
    // {
    //   img: "/sidebarPoster4.png",
    //   pageLink: "poster4",
    // },
    // {
    //     img: "/sidebarPoster5.png",
    //     pageLink: "poster5",
    // },
    // {
    //     img: "/sidebarPoster6.png",
    //     pageLink: "poster6",
    // },
    // {
    //     img: "/sidebarPoster7.png",
    //     pageLink: "poster7",
    // },
    // {
    //     img: "/sidebarPoster8.png",
    //     pageLink: "poster8",
    // },
    // {
    //     img: "/sidebarPoster1.png",
    //     pageLink: "",
    // }

  ];
  const displayPreviewPoster = previewPosterData.map((preview, index) => {
    return (
      <NavLink
        to={`${preview.pageLink}`}
        className={({ isActive }) =>
          isActive ? "poster-selected" : "not-selected"
        }
        end
      >
        <div className="poster-container" key={index}>
          <img className="poster-preview" src={preview.img} />
        </div>
      </NavLink>
    );
  });
  return (
    <div className="sidebar--scroll-container">
      <div className="main-sidebar-container">
        <div className="sidebar--template-container">
          <img className="sidebar--template-icon" src={templateIcon} />
          <p className="sidebar--template-text"> Templates</p>
        </div>
        <hr className="sidebar--line-break" />
        <select name="filter--dropdown" className="sidebar--dropdown">
          <option value="new-year">New Year</option>
        </select>
        <div className="sidebar--display-preview-container">
          {displayPreviewPoster}

        </div>
      </div>
    </div>
  );
}
