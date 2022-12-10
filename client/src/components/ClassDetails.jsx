import * as classcss from "./css/classdetail.css";
const ClassDetails = ({ classname, classtime, classInitials }) => {
  return (
    <div className="class-container">
      <div className="c-initials">{classInitials}</div>
      <div className="c-name">{classname}</div>
      <div className="c-time">{classtime}</div>
    </div>
  );
};

export default ClassDetails;
