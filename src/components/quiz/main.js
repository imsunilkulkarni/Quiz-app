import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import data from "../questions.json";

const Compo = (props) => {
  return (
    <div className="form-wrapper">
      <div>
        <span>1 of 4</span>
      </div>
      <h3>{props.data.question} </h3>
      <label className="radio-inline">
        <input
          type="radio"
          id="firstA"
          value="optionA"
          name="answer"
          onClick={props.getSelectedvalue}
        />
        <label className="option-container">{props.data.optionA}</label>
      </label>
      <label className="radio-inline">
        <input
          type="radio"
          id="firstB"
          value="optionB"
          name="answer"
          onClick={props.getSelectedvalue}
        />
        <label className="option-container">{props.data.optionB}</label>
      </label>
      <label className="radio-inline">
        <input
          type="radio"
          id="firstC"
          value="optionC"
          name="answer"
          onClick={props.getSelectedvalue}
        />
        <label className="option-container">{props.data.optionC}</label>
      </label>
      <label className="radio-inline">
        <input
          type="radio"
          id="firstD"
          value="optionD"
          name="answer"
          onClick={props.getSelectedvalue}
        />
        <label className="option-container">{props.data.optionD}</label>
      </label>
      <div>
        <br />
        <Button variant="secondary" onClick={props.prev}>
          Prev
        </Button>{" "}
        <Button variant="primary" onClick={props.submit}>
          SUBMIT
        </Button>{" "}
        <Button variant="dark" onClick={props.next}>
          Next
        </Button>{" "}
        <Button variant="success" onClick={props.showanswer}>
          Show Answer
        </Button>
      </div>
    </div>
  );
};

export default Compo;
