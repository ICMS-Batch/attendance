import React from "react";
import { Link, NavLink } from "react-router-dom";

import * as sidebarcss from "./css/sidebar.css";
import { useState } from "react";
const SideBar = () => {
  const [isVisible, setVisibility] = useState(true);

  const toggleSideBar =()=>{
setVisibility(!isVisible);
  }

const links = [
  {
    path:'/dashboard',
    className:'list',
    linkName:'Dashboard',
    iconName:'ri-dashboard-line list-icon'
  },
  {
    path:'/managestudent',
    className:'list',
    linkName:'Attendance',
    iconName:'ri-survey-line list-icon'
  },
  {
    path:'/history',
    className:'list',
    linkName:'History',
    iconName:'ri-history-line list-icon'
  },
  {
    path:'/settings',
    className:'list',
    linkName:'Settings',
    iconName:'ri-settings-3-line list-icon'
  }
]

  return (<>
    <div className={isVisible ? "sidebar" : "sidebar-none"}>
      <div className='sidebar-content-wrapper'>
        <div className="logo-user-container">
          <img src="/assets/icmslogo.png" className="app-logo" />
          <p className="admin-email">sanjay khadka</p>
        </div>
        {links.map((lists, index )=> (<NavLink key={index} to={lists.path} className={lists.className} >
        <i className={lists.iconName}></i><span>{lists.linkName}</span>
        </NavLink>))}
        <button className="btn-logout" onClick={toggleSideBar}>
        <i className="ri-logout-box-line"></i>  Logout
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            border: "none",
            background: "none",
            position: "absolute",
            bottom: "300px",
          }}
          onClick={toggleSideBar}
        >
          <i className="ri-close-line list-icon"></i>
          <span style={{ fontSize: "1.2rem" }}>close</span>
        </button>
      </div>
     
    </div>
    {/* <div
        className={isVisible? 'backdrop-blur': 'backdrop-none'}
        onClick={toggleSideBar}
      ></div> */}
    </>
  );
};

export default SideBar;
