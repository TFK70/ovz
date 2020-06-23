import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { ENDPOINT, KEYWORD } from '../../config/config';
import "./ShowFeedback.css";
import { Handler404 } from "../Handler404/Handler404";

const NoFeedbacks = () => {
  return (
    <div className="feedbackCard">
      <textarea readOnly={true}>No feedbacks yet :c</textarea>
    </div>
  );
};

const FeedbackCard = (props: any) => {
  return (
    <div className="feedbackCard">
      <h1>{props.fb.option}</h1>
      <h2>Name: {props.fb.name}</h2>
      <textarea readOnly={true} value={props.fb.details}></textarea>
      <h2>Contacts: {props.fb.contacts}</h2>
      <button onClick={() => {
        axios.post(ENDPOINT + '/deletefeedback/' + props.fb._id)
        .then(() => console.log(props.fb._id, 'deleted'))
        .catch(e => console.error(e));
        window.location.reload();
      }}>X</button>
    </div>
  );
};

const ShowFeedbacks = () => {
  const { pw } = queryString.parse(window.location.search);
  const [feedbacks = { fbs: [] }, setFeedbacks] = useState<{ fbs: object[] }>({ fbs: [] });
  const [currentCard, setCurrentCard] = useState<number>(0);

  useEffect(() => {
    axios
    .get(ENDPOINT + "/getcards")
    .then((response) => {
      setFeedbacks({ fbs: response.data });
    });
  }, []);
    
  if (pw!==KEYWORD) {
    return <Handler404 />
  } else {
  return (
    <div className="wrapper">
      <div className="swipeBut swipeLeft" onClick={() => currentCard===0 ? setCurrentCard(feedbacks.fbs.length-1) : setCurrentCard(currentCard-1)}>
        <span>{"<"}</span>
      </div>
      {feedbacks.fbs.length!==0 ? <FeedbackCard fb={feedbacks.fbs[currentCard]} /> : <NoFeedbacks /> }
      <div className="swipeBut swipeRight" onClick={() => currentCard===feedbacks.fbs.length-1 ?  setCurrentCard(0) : setCurrentCard(currentCard+1)}>
        <span>{">"}</span>
      </div>
    </div>
  );
  }
};

export { ShowFeedbacks };
