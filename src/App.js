import React, { useState } from "react";
import "normalize.css";
import "./styles.scss";
import questions from "./const";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const App = () => {
  // const [result, setResult] = useState([]);
  // let currInd = 0;
  // const number = 2;
  // const [questions] = useState(questions);
  const [questionBank, setQuestionBank] = useState([]);

  // let questionBank = questions.splice(0, 2);
  // useEffect(() => {
  //   // let questionBank = questions.splice(0, 2);
  //   // handleNext();
  //   console.log(questionBank);
  // })
  // questions.splice(0, 1);
  // let result = 0;

  // const [value, setValue] = useState("");
  // const handleChange = e => {
  //   setValue(e.target.value);
  //   console.log(e.target.value);
  // };

  // useEffect(() => {
  //   setQuestionBank(questionBank);
  // }, questionBank);

  const handleNext = () => {
    // currInd = currInd + number;
    setQuestionBank(questions.splice(0, 2));
    console.log(questionBank);
    // questionBank.splice(0, 2);
    // console.log(questionBank);
    // renderData();
    // console.log('1');
    // console.log(currInd, currInd + number);
    // alert('hello');
  };

  const handleAnswer = (val, answer) => {
    if (answer === val) {
      // alert("True answer");
      // result = result + 1;
      console.log("true");
      handleNext();
    } else {
      console.log("false");
      // alert("Wrong answer");
    }
  };

  // const renderData = () => {
  //   return (
  //     questionBank.map((value, index) => {
  //       return (
  //         <div key={index}>
  //           <div className="question-title">{questionBank[index].title}</div>
  //           <div className="answer-area row col-lg-6">
  //             {questionBank[index].options.map((val, ind) => {
  //               return (
  //                 <div className="col-6 pt-4" key={ind}>
  //                   <div className="answer" onClick={() => handleAnswer(val, questionBank[index].answer)}>
  //                     {val}
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
  //       );
  //     })
  //   )
  // }
  return (
    <Router>
      <div className="App">
        <header className="app-header">QuizBuilder</header>
        <Link to="/home">Home</Link>
        {/* { renderData() } */}
        {questionBank.map((value, index) => {
          return (
            <div key={index}>
              <div className="question-title">{value.title}</div>
              <div className="answer-area row col-lg-6">
                {questionBank[index].options.map((val, ind) => {
                  return (
                    <div className="col-6 pt-4" key={ind}>
                      <div
                        className="answer"
                        onClick={() =>
                          handleAnswer(val, questionBank[index].answer)
                        }
                      >
                        {val}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button onClick={() => handleNext()}>Next</button>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
