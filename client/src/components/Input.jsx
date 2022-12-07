import React from "react";

import * as css from "./component.css";

const Input = (props) => {
  return (
    <div class="inputs-div">
      <label class="input-labels">{props.label}</label>
      <input type="email" placeholder={props.placeholder} class="form-inputs" />
      <span id="required-email" class="required-field"></span>
    </div>
  );
};

export default Input;
