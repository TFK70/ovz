import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ChatLogin.css";

const ChatLogin = () => {
  let [room, setRoom] = useState<string>("");

  return (
    <div className="wrapper-join">
      <input type="text" className="roomInp" placeholder="Room name" onChange={(e) => setRoom(e.target.value)}/>
      <Link onClick={(e) => !room ? e.preventDefault() : null} to={`/hGdjjrHskrWx?room=${room}`}>
        <button className="joinBut">Join</button>
      </Link>
    </div>
  );
};

export { ChatLogin };
