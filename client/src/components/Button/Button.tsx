import React, { MouseEvent } from "react";
import "./Button.css";

const Button = ({ type, clickEvent, classVal, val }: { type?: "button" | "submit" | "reset", clickEvent?: (event: MouseEvent<HTMLButtonElement>) => void, classVal?: string, val: string }) => {
  return (
    <button
      type={type}
      onClick={clickEvent}
      className={"initialBut " + classVal}
    >
      {val}
    </button>
  );
};

export { Button };
