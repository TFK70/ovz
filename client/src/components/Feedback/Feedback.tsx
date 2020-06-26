import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../../config/config";
import "./Feedback.css";
import { GoBack } from "../GoBack/GoBack";

const Feedback = () => {
  const [name, setName] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [contacts, setContacts] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const formValidator = () => {
    if (name && option && contacts && details) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <GoBack />
      <div className="form-wrap">
        <form className="feedbackForm">
          <input
            type="text"
            className="inpName"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div className="optionPick">
            <button
              className={option === "Translation" ? "button-active" : ""}
              onClick={(e) => {
                option === "Translation"
                  ? setOption("")
                  : setOption("Translation");
                e.preventDefault();
              }}
            >
              Translation
            </button>
            <button
              className={option === "Training" ? "button-active" : ""}
              onClick={(e) => {
                option === "Training" ? setOption("") : setOption("Training");
                e.preventDefault();
              }}
            >
              Training
            </button>
          </div>
          <input
            type="text"
            className="inpContacts"
            placeholder="Your contacts"
            onChange={(e) => setContacts(e.target.value)}
            value={contacts}
          />
          <textarea
            className="inpOrderDetails"
            placeholder="Order details"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
          <Link to="/">
            <button
              type="submit"
              className={
                formValidator() ? "formSubmit success" : "formSubmit wrong"
              }
              onClick={(e) => {
                e.preventDefault();

                if (formValidator()) {
                  const newFeedback = {
                    name,
                    option,
                    contacts,
                    details,
                  };

                  axios
                    .post(ENDPOINT + "/sendfeedback", newFeedback)
                    .catch((err) => console.error(err));

                  setName("");
                  setOption("");
                  setContacts("");
                  setDetails("");
                }
              }}
            >
              Send
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export { Feedback };
