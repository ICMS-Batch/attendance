import * as classcss from "./css/classdetail.css";
const ClassDetails = ({ classname, classtime, classInitials, background }) => {
  return (
    <div className="class-container">
      <div  className= "c-initials"style={{backgroundColor:background}}>{classInitials}</div>
      <div className="c-name">{classname}</div>
      <div className="c-time">{classtime}</div>
    </div>
  );
};

export default ClassDetails;
