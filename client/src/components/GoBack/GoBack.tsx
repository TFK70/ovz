import React from "react";
import "./GoBack.css";
import { Link } from "react-router-dom";

const GoBack = ({ classVal, children }: { classVal?: string, children?: string }) => {
  return (
    <>
      <Link to="/">
        <button className={classVal || "goback "}>{"<"}</button>
      </Link>
    </>
  );
};

export { GoBack };
