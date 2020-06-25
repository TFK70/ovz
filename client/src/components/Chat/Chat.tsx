import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import queryString from "query-string";
import "./Chat.css";
import {ENDPOINT} from '../../config/config';
import { GoBack } from "../GoBack/GoBack";

const socket = socketIOClient(ENDPOINT);

const Chat = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [linkValue, setLinkValue] = useState<string>('');
  const [linkClass, setLinkClass] = useState<boolean>(false);

  useEffect(() => {
    const { room } = queryString.parse(window.location.search);

    socket.emit("join", room);

    socket.on("updateVal", (val: string) => {
      setInputValue(val);
    });

    socket.on("updateLink", (link: string) => {
      setLinkValue(link);
      if (!linkClass) {
        setLinkClass(!linkClass);
      }
    });

    return () => {
      socket.emit("disconnect");
    }; // eslint-disable-next-line
  }, [/*Should be empty to avoid phantom reconnections (socket on join)*/]);

  return (
    <>
    <GoBack />
    <div className="wrapper-chat">
      <textarea className="chat-area" readOnly={true} value={inputValue} />
      <input
        type="text"
        className="forText"
        placeholder="Your text"
        onChange={(e) => socket.emit("newVal", e.target.value)}
      />
      <input
        type="url"
        className="forLink"
        placeholder="Your link"
        onChange={(e) => socket.emit("newLink", e.target.value)}
      />
      <a
        className={
          linkClass &&
          (linkValue.search("http://") !== -1 ||
            linkValue.search("https://") !== -1)
            ? "dynamicLink-active" 
            : "dynamicLink"
        }
        href={linkValue}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setLinkClass(!linkClass)}
      >Link
      </a>
    </div>
    </>
  );
};

export { Chat };
