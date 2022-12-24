import React from "react";
import { Link } from "react-router-dom";

import * as sidebarcss from "./css/sidebar.css";
import { useState } from "react";
const SideBar = () => {
  const [isVisible, setVisibility] = useState(true);

  const toggleSideBar =()=>{
setVisibility(!isVisible);
  }

  return (<>
    <div className={isVisible ? "sidebar" : "sidebar-none"}>
      <div className='sidebar-content-wrapper'>
        <div className="logo-user-container">
          <img src="/assets/icmslogo.png" className="app-logo" />
          <p className="admin-email">sanjay khadka</p>
        </div>
        <Link className="list" id="dashboard" to={'/dashboard'}>
        <i className="ri-dashboard-line list-icon"></i><span>Dashboard</span>
        </Link>
        <Link className="list">
        <i className="ri-survey-line list-icon"></i>  <span>Attendance</span>
        </Link>
        <Link className="list">
        <i className="ri-history-line list-icon"></i>  <span>History</span>
        </Link>
        <Link className="list">
        <i className="ri-settings-3-line list-icon"></i>  <span>Settings</span>
        </Link>
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
    <div
        className={isVisible? 'backdrop-blur': 'backdrop-none'}
        onClick={toggleSideBar}
      ></div>
    </>
  );
};

export default SideBar;
