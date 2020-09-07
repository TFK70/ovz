import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from "../../config/config";
import "./Feedback.css";
import { GoBack } from "../GoBack/GoBack";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

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
      <div className="form-wrap" translate="no">
          <Input
            type="text"
            placeholder="Your name"
            changeEvent={(e: Event | any) => setName(e.target.value)}
            value={name}
          />
          <div className="optionPick" translate="no">
            <Button
              class={option === "Translation" ? "button-active" : ""}
              val="Translation"
              clickEvent={(e: Event | any) => {
                option === "Translation"
                  ? setOption("")
                  : setOption("Translation");
                e.preventDefault();
              }}
            />
            <Button
              class={option === "Training" ? "button-active" : ""}
              val="Training"
              clickEvent={(e: Event | any) => {
                option === "Training" ? setOption("") : setOption("Training");
                e.preventDefault();
              }}
            />
          </div>
          <textarea
            className="orderDetails"
            placeholder="Order details"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
          <Input
            type="text"
            placeholder="Your contacts"
            changeEvent={(e: Event | any) => setContacts(e.target.value)}
            value={contacts}
          />
          <Link to="/">
            <Button
              type="submit"
              val="Send"
              class={
                formValidator() ? "formSubmit success" : "formSubmit wrong"
              }
              clickEvent={(e: Event | any) => {
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
            />
          </Link>
      </div>
    </>
  );
};

export { Feedback };
