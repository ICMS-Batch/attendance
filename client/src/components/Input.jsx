import { useState } from "react";
import * as css from "./component.css";

const Input = (props) => {
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="inputs-div">
      <label className="label">{props.label}</label>
      <input
        type={props?.type || "text"}
        placeholder={props.placeholder}
        className="form-inputs"
        name={props.name}
        required
        onBlur={handleFocus}
        focused={isFocused.toString()}
        onChange={props.onChange}
      />
      <span className="required-field">{props.errorMessage}</span>
    </div>
  );
};

export default Input;
