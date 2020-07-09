import React from "react";
import "./GoBack.css";
import { Link } from "react-router-dom";

const GoBack = (props: any) => {
  return (
    <>
      <Link to="/">
        <button className={props.class || "goback "}>{"<"}</button>
      </Link>
    </>
  );
};

export { GoBack };
