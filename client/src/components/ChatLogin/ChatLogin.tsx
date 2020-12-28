import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCookie } from '../../cookieAPI';
import { STUDENTS_KEYWORD } from '../../config/config';
import "./ChatLogin.css";
import { StudentsControl } from "../StudentsControl/StudentsControl";
import { GoBack } from "../GoBack/GoBack";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { MouseEvent } from "react";
import { ChangeEvent } from "react";

const ChatLogin = () => {
  let [room, setRoom] = useState<string>("");

  if (getCookie("pw")!==STUDENTS_KEYWORD) return <StudentsControl />
  else return (
    <>
    <GoBack />
    <div className="wrapper-join">
      <Input type="text" placeholder="Room name" changeEvent={(e: ChangeEvent<HTMLInputElement>) => setRoom(e.target.value)} />
      <Link onClick={(e: MouseEvent) => !room ? e.preventDefault() : null} to={`/hGdjjrHskrWx?room=${room}`}>
        <Button val="Join" />
        {/* <button className="joinBut">Join</button> */}
      </Link>
    </div>
    </>
  );
};

export { ChatLogin };
