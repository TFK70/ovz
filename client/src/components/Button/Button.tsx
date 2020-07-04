import React from "react";
import "./Button.css";

const Button = (props: any) => {
  return (
    <button
      type={props.type}
      onClick={props.clickEvent}
      className={"initialBut " + props.class}
    >
      {props.val}
    </button>
  );
};

export { Button };
