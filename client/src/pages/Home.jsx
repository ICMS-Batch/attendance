import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as homeCss from "../css/Home.css";
import NavBar from "../components/NavBar";
import ClassDetails from "../components/ClassDetails";
import MantineCalendar from "../components/MantineCalendar";

const Home = () => {
  const classes = [
    {
     
      cName: "Mathematics",
      cTime: "6:30 AM",
    },
    {
      
      cName: "Societ & Tech",
      cTime: "7:30 AM",
    },
    {
      
      cName: "CFA",
      cTime: "8:30 AM",
    },
    {
      
      cName: "English",
      cTime: "9:30 AM",
    },
  ];


  const iterateColor = (index)=>{
    if(index%2==0 || index%2==undefined){
      
      return "#97BCE8";
    }
    else{
      return "#1C2D40";
    }
  }

  classes.forEach((obj, index)=>{obj.initials = function(){ let a = [...this.cName]; return a[0] }; obj.backgroundColor = iterateColor(index)})
  return (
    <div className="body">
      <NavBar />
      <div className="class-main-div">
      <Link className="class-heading">Today's Classes</Link>
      <div className="class-wrapper">
        {classes.map((element, index) => (
          <ClassDetails
            key={index}
            background={element.backgroundColor}
            classInitials={element.initials()}
            classname={element.cName}
            classtime={element.cTime}
          />
        ))}
      </div>
      </div>
      <div className="class-main-history">

      <div className="class-history">
        <h1 className="class-heading">History</h1>
        <MantineCalendar/>
        <div className="status-wrapper">
          <div className="status">
            <div className="status-red"></div>
            <span className="status-txt">Absent</span>
          </div>
          <div className="status">
            <div className="status-yellow"></div>
            <span className="status-txt">Half Present</span>
          </div>
          <div className="status">
            <div className="status-green"></div>
            <span className="status-txt">Present</span>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
