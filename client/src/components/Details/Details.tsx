import React, { useState } from "react";
import "./Details.css";
import { SwitchLang } from '../SwitchLang/SwitchLang';
import { GoBack } from "../GoBack/GoBack";

const Topic = (props: any) => {
  return (
    <div className={`topic topic--theme-${props.theme}`}>
      <h1 className="topic__h">{props.topic}</h1>
      {props.content.map((i: any) => <p className="topic__p">{i}</p>)}
    </div>
  );
};

const Details = () => {
  const [lang, setLang] = useState("ENG");

  type obj = {
    topic: String;
    content: Array<String>;
  };


  let topicsRu: obj[] = [
    {
      topic: "Общая информация",
      content: ["Опытный преподаватель и переводчик английского языка. Стаж как преподавателя - более 15 лет, из них 10 лет - в университете на факультете международных отношений. Стаж работы переводчиком - более 17 лет.", "За время учебы в аспирантуре опубликовано около 30 научных работ на тему лингвистической интеграции иммигрантов в принимающее общество.", "Сотрудничала как переводчик и преподаватель с российскими и иностранными компаниями. Ездила в командировки в такие страны как Австрия, Соединённое Королевство, Чехия, Венгрия, Италия, Ливан и США.", "Отзывы и рекомендации по запросу."]
    },

    {
      topic: "Уроки",
      content: ["Индивидуальный подход ко всем студентам, удобное расписание, современные методы обучения и оборудование для развития всех лингвистических компетенций таких как чтение, говорение, аудирование, письмо и грамматика. Особое внимание уделяется произношению.", "Подготовка к любым экзаменам таким как ЕГЭ, ОГЭ, IELTS, TOEFL, CAE, CEF.", "Онлайн / оффлайн групповые и индивидуальные занятия."]
    },

    {
      topic: "Перевод",
      content: ["Гарантирую быстрый и качественный перевод текстов любой сложности. Возможен синхронный перевод.", "Имею опыт устного и письменного перевода в следующих сферах: авиация (авиастроение, покраска и ремонт), бизнес, экономика, торговля, металлургия, неврология, социология, политика, программирование, онлайн азартные игры, вентиляция и кондиционирование."]
    },
  ];

  let topicsEng: obj[] = [
    {
      topic: "General info",
      content: ["An experienced English teacher / translator with over 15 years’ experience in teaching, including 10 years’ experience working as a university professor at the international relation department, and over 17 years’ experience in translating and interpreting.", "Published about 30 scientific works on linguistic integration of immigrants into a host society while doing a PhD.", "Work for Russian and Foreign companies. A great number of business trips to different countries e.g. Austria, the UK, the Czech Republic, Hungary, Italy, Lebanon and the USA.", "References and recommendation available on request"]
    },

    {
      topic: "Lessons",
      content: ["Individual approach to all students, comfortable timetable, state-of-the-art methods and facilities, to develop all linguistic competences such as reading, speaking, listening, writing and grammar. A special attention is devoted to pronunciation.", "The aim is to provide a fun and relaxed learning environment for all students.", "Preparation for any exams e.g. Russian state exams, IELTS, TOEFL, CAE, CEF etc.", "Online / offline group and individual lessons."]
    },

    {
      topic: "Translation",
      content: ["Quality and fast translation is guaranteed. Instant interpretation is available.", "Experience in the following spheres of translation / interpretation: aviation (plane construction, painting and repair), business, economics, trade, metallurgy, neurology, sociology, politics, programming, online gambling, ventilation and conditioning."]
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
      <GoBack classVal="detailsBack">{"<"}</GoBack>
    </div>
  );
};

export { Details };
