import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const useBg = (counters: number) => { 
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if(ref.current) {
    switch(counters) {
      case 0: ref.current.style.background = `rgb(219,219,219)`;
      break;
      case 10: ref.current.style.background = `#26bcf1`;
      break;
      case 20: ref.current.style.background = `#bfe990`;
      break;
      case 30: ref.current.style.background = `#fe8c0e`;
      break;
      case 40: ref.current.style.background = `#8b26ff`;
      break;
      case 50: ref.current.style.background = `#f9e82c`;
      break;
      case 100: ref.current.style.background = `#ec4235`;
      break;
    }
  }
  }, [ref,counters]);

  return ref;
}

const Home = (props: any) => {
  const [content, setContent] = useState<string>("OZ");
  const [zoom, setZoom] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const ref = useBg(counter);

  const delayRedirectToChat = (event: any) => {
    const {
      history: { push },
    } = props;
    event.preventDefault();
    setTimeout(() => push("/chat"), 2000);
  };

  const delayRedirectToDetails = (event: any) => {
    const {
      history: { push },
    } = props;
    event.preventDefault();
    setTimeout(() => push("/details"), 2000);
  };

  const delayRedirectToFeedback = (event: any) => {
    const {
      history: { push },
    } = props;
    event.preventDefault();
    setTimeout(() => push("/feedback"), 2000);
  };

  return (
    <div ref={ref} className="home">
      <div
        className="controller"
        onMouseLeave={() => {
          setContent("OZ");
          setCounter(0);
        }}
      >
        <Link to="/details" onClick={delayRedirectToDetails}>
          <div
            className="controller__triangle details"
            onMouseEnter={() => setContent("Details")}
            onClick={() => setZoom(true)}
          >
            <div className="selector">{!zoom ? "D" : ""}</div>
          </div>
        </Link>
        <Link to="/clients" onClick={delayRedirectToChat}>
          <div
            className="controller__triangle chat"
            onMouseEnter={() => setContent("Extra")}
            onClick={() => setZoom(true)}
          >
            <div className="selector">{!zoom ? "E" : ""}</div>
          </div>
        </Link>
        <div
          className={
            !zoom
              ? "controller__triangle middle unzoom"
              : "controller__triangle middle zoom"
          }
          onMouseEnter={() => setContent("OZ")}
          onClick={() => setCounter(counter + 1)}
        >
          <div className="selector"></div>
        </div>
        <Link to="/feedback" onClick={delayRedirectToFeedback}>
          <div
            className="controller__triangle feedback"
            onMouseEnter={() => setContent("Feedback")}
            onClick={() => setZoom(true)}
          >
            <div className="selector">{!zoom ? "F" : ""}</div>
          </div>
        </Link>
      </div>
      <div className="levitate">
        <h1
          className={content === "Details" ? "detailsH show" : "detailsH hide"}
        >
          {!zoom ? "Details" : ""}
        </h1>
        <h1 className={content === "Extra" ? "extraH show" : "extraH hide"}>
          {!zoom ? "Extra" : ""}
        </h1>
        <h1
          className={
            content === "Feedback" ? "feedbackH show" : "feedbackH hide"
          }
        >
          {!zoom ? "Feedback" : ""}
        </h1>
        <h1 className={content === "OZ" ? (counter<10 ? "OZ show" : (counter>=20 ? (counter>=30 ? (counter>=50 ? (counter>=70 ? "OZ x70" : "OVZ x50") : "OZ x30") : "OZ x20" ): "OZ x10")) : "OZ hide"}>
        {!zoom ? (counter === 0 ? "OVZ" : (counter<100 ? `${counter}VZ` : `${counter}VZ!!!!!!!!!!`)) : ""}
        </h1>
      </div>
      <div className="mobile-footer">
        <h2 className="ovzh2">{!zoom ? (counter === 0 ? "OVZ" : (counter<100 ? `${counter}VZ` : `${counter}VZ!!!!!!!!!!`)) : ""}</h2>
      </div>
    </div>
  );
};

export { Home };
