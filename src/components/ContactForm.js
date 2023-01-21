import React, { useState } from "react";
import minusPng from "../Assets/minus.png";
import plusPng from "../Assets/plus.png";
import calendarPng from "../Assets/calendar.png";
const ContactForm = () => {
  let [person, setPerson] = useState(4);
  return (
    <div className="contactForm">
      <form>
        <input
          type="text"
          className="formInputField"
          placeholder="Starting From*"
        />
        <input type="text" className="formInputField" placeholder="End Date*" />
        <div className="formPersonInput">
          <p>Persons*</p>
          <div>
            <img
              src={minusPng}
              className="formRoundButton"
              onClick={(e) => {
                person > 1 && setPerson(--person);
              }}
            />
            <span>{person}</span>
            <img
              src={plusPng}
              className="formRoundButton"
              onClick={(e) => {
                setPerson(++person);
              }}
            />
          </div>
        </div>
        <button type="submit" className="formSubmitButton">
          SUBMIT
        </button>
        <div className="formBottomLine"></div>
      </form>
    </div>
  );
};

export default ContactForm;
