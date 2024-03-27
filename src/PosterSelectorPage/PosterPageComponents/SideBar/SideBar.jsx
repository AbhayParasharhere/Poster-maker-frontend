import React from "react";
import "./SideBar.css";
import templateIcon from "./images/templatesIcon.png";
import { NavLink, useSearchParams, Link } from "react-router-dom";
export default function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const previewPosterData = [
    // {
    //   img: "/sidebarPoster10.png",
    //   pageLink: `/?${searchParams}`,
    //   festival: "lohri",
    // },
    {
      img: "/sidebarP11.png",
      pageLink: `/?${searchParams}`,
      festival: "holi",
    },
    {
      img: "/sidebarPoster5.png",
      pageLink: `poster5?${searchParams}`,
      festival: "holi",
    },
    // {
    //   img: "/SidebarP9.png",
    //   pageLink: `poster9?${searchParams}`,
    //   festival: "diwali",
    // },

    {
      img: "/sidebarPoster2.png",
      pageLink: `poster2?${searchParams}`,
      festival: "diwali",
    },
    
    
    {
      img: "/sidebarPoster3.png",
      pageLink: `poster3?${searchParams}`,
      festival: "holi",
    },
    // {
    //   img: "/sidebarPoster4.png",
    //   pageLink: `poster4?${searchParams}`,
    //   festival: "holi",
    // },
  
    // {
    //     img: "/sidebarPoster6.png",
    //     pageLink: `poster6?${searchParams}`,
    //     festival: "holi",
    // },
    // {
    //     img: "/sidebarPoster7.png",
    //     pageLink: "poster7",
    //     festival: "holi",
    // },
    {
        img: "/sidebarPoster8.png",
        pageLink: `poster8?${searchParams}`,
        festival: "holi",
    },
    // {
    //     img: "/sidebarPoster1.png",
    //     pageLink: "",
    // }
  ];

  const filterParams = searchParams.get("filter");

  const displayFilteredPoster = filterParams
    ? previewPosterData.filter(
        (poster) => poster.festival.toLowerCase() === filterParams
      )
    : previewPosterData;

  const displayPreviewPoster = displayFilteredPoster.map((preview, index) => {
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

  function changeParam(value) {
    if (value === "none") {
      setSearchParams((prevParams) => {
        prevParams.delete("filter");
        return prevParams;
      });
    } else {
      setSearchParams({ filter: value });
    }
  }
  return (
    <div className="sidebar--scroll-container">
      <div className="main-sidebar-container">
        <div className="sidebar--template-container">
          <img className="sidebar--template-icon" src={templateIcon} />
          <p className="sidebar--template-text"> Templates</p>
        </div>
        <hr className="sidebar--line-break" />
        <select
          name="filter--dropdown"
          id="filter--dropdown"
          className="sidebar--dropdown"
          onChange={(e) => changeParam(e.target.value)}
        >
          {" "}
          <option selected="selected" value="none">
            All
          </option>
          <option value="lohri">Lohri</option>{" "}
          <option value="diwali">Diwali</option>
          <option value="holi">Holi</option>
        </select>
        <div className="sidebar--display-preview-container">
          {displayPreviewPoster}
        </div>
      </div>
    </div>
  );
}
