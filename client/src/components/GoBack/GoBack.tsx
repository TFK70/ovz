import React from "react";
import "./GoBack.css";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <>
      <Link to="/">
        <button className="goback">{"<"}</button>
      </Link>
    </>
  );
};

export { GoBack };
