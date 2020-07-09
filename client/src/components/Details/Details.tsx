import React, { useState } from "react";
import "./Details.css";
import { SwitchLang } from '../SwitchLang/SwitchLang';
import { GoBack } from "../GoBack/GoBack";

const Topic = (props: any) => {
  return (
    <div className={`topic topic--theme-${props.theme}`}>
      <h1 className="topic__h">{props.topic}</h1>
      <p className="topic__p">{props.content}</p>
    </div>
  );
};

const Details = () => {
  const [lang, setLang] = useState("ENG");

  type obj = {
    topic: String;
    content: String;
  };


  let topicsRu: obj[] = [
    {
      topic: "Тема 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Тема 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Тема 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Тема 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita optio eius sit, unde iure illo harum minima doloribus similique! Nisi consectetur nam ad officiis, voluptates suscipit nobis amet fuga.",
    },
  ];

  let topicsEng: obj[] = [
    {
      topic: "Topic 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Topic 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Topic 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia!",
    },

    {
      topic: "Topic 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita optio eius sit, unde iure illo harum minima doloribus similique! Nisi consectetur nam ad officiis, voluptates suscipit nobis amet fuga.",
    },
  ];

  let topics: obj[] = [];

  lang==="ENG" ? topics=topicsEng : topics=topicsRu;

  return (
    <div className="wrapper-details">
      <SwitchLang lang={lang} eventSwitch={() => lang==="RU" ? setLang("ENG") : setLang("RU")} />
      {topics.map((i: obj, idx: number) =>
        idx % 2 === 0 ? (
          <Topic key={idx} theme="white" topic={i.topic} content={i.content} />
        ) : (
          <Topic key={idx} theme="black" topic={i.topic} content={i.content} />
        )
      )}
      <GoBack class="detailsBack">{"<"}</GoBack>
    </div>
  );
};

export { Details };
