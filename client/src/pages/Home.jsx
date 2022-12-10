import React, { useState } from "react";
import { Calendar } from "react-calendar";

import * as calendarCss from "../css/Calendar.css";
import * as homeCss from "../css/Home.css";
import NavBar from "../components/NavBar";
import ClassDetails from "../components/ClassDetails";

const Home = () => {
  const [value, onChange] = useState(new Date(Date.now()));
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
  classes.forEach((obj)=>{obj.initials = function(){ let a = [...this.cName]; return a[0] }})
  return (
    <div className="mainconatiner">
      <NavBar />
      <div className="class-wrapper">
        {classes.map((element, index) => (
          <ClassDetails
            key={index}
            classInitials={element.initials()}
            classname={element.cName}
            classtime={element.cTime}
          />
        ))}
      </div>
      <div className="class_history">
        <h1 className="title">History</h1>
        <Calendar onChange={onChange} value={value} />
        <div className="status-wrapper">
          <div className="status">
            <div className="status-red"></div>
            <span className="status-txt">Absent</span>
          </div>
          <div className="status">
            <div className="status-green"></div>
            <span className="status-txt">Present</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
