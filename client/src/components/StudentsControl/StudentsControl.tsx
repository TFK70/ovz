import React, { useEffect } from "react";
import queryString from "query-string";
import { setCookie } from '../../cookieAPI';
import { STUDENTS_KEYWORD } from "../../config/config";
import "./StudentsControl.css";

const Rejected = () => (
  <div className="control-wrapper">
    <h2>Sorry, this feature is for students only</h2>
  </div>
);

const Success = () => {
    useEffect(() => {
        setCookie('pw', STUDENTS_KEYWORD);
    }, []);

  return (
    <div className="control-wrapper">
      <h1>Welcome!</h1>
    </div>
  );
};

const StudentsControl = () => {
  const { pw } = queryString.parse(document.location.search);

  if (pw !== STUDENTS_KEYWORD) return <Rejected />;
  else return <Success />;
};

export { StudentsControl };
