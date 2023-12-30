import React from "react";
import "./SideBar.css";
import templateIcon from "./images/templatesIcon.png";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const previewPosterData = [
    {
      img: "src/assets/images/PosterPageImages/InsaurancePoster-1.png",
      pageLink: "",
    },
    {
      img: "src/assets/images/PosterPageImages/Life-Insurance-poster-2.png",
      pageLink: "poster-2",
    },
    {
      img: "src/assets/images/PosterPageImages/Poster-3-Preview.png",
      pageLink: "poster-3",
    },
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
