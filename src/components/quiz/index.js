import React from "react";
import data from "../questions.json";
import Compo from "./main";
import "./../../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      question: 0,
      questionNumber: 0,
      valuefromoption: "",
      numberOfQuestion: 0,
    };
  }
  getSelectedvalue = (e) => {
    // let c=e.target.value
    this.setState({
      valuefromoption: e.target.value,
    });

    // if(data[this.state.question][e.target.value]=== data[this.state.question].answer){
    //    alert("correct answer")
    // }else{
    //   alert("wrong answer")
    // }
  };
  submit = () => {
    if (
      data[this.state.question][this.state.valuefromoption] ===
      data[this.state.question].answer
    ) {
      alert("correct answer");
    } else {
      alert("wrong answer");
    }
  };
  next = () => {
    console.log(data[this.state.questionNumber].length);
    if (this.state.questionNumber < 3) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
        question: this.state.question + 1,
        numberOfQuestion: data[this.state.question].length,
      });
    }
  };
  prev = () => {
    if (this.state.questionNumber > 0) {
      this.setState({
        questionNumber: this.state.questionNumber - 1,
        question: this.state.question - 1,
      });
    }
  };
  showanswer = () => {
    alert("Answer is " + data[this.state.questionNumber].answer);
  };
  render() {
    console.log(this.state.question.length);
    return (
      <div className="wrapper">
        <Compo
          data={data[this.state.questionNumber]}
          getSelectedvalue={this.getSelectedvalue}
          prev={this.prev}
          next={this.next}
          showanswer={this.showanswer}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default Home;
