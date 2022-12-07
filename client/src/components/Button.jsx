import React from "react";

const Button = (props) => {
  return (
    <button class="btn" onclick="userLogin()">
      {props.title}
    </button>
  );
};

export default Button;
