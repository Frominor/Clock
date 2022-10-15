import React from "react";
import "./App.css";
import Answer from "./Answer";
import Header from "./Header";
export default function App() {
  let number = 0;
  const [Number, SetNumber] = React.useState(0);
  const [FinalAnswers, SetFinalAnswer] = React.useState([
    "1991",
    "610",
    "Майкл Джексон",
    "1939",
    "Нил Армстронг",
    "Физиком",
    "Белград",
    "Россия!!!",
    "Один",
    "Байкал",
  ]);
  const [Count, SetCount] = React.useState(0);
  const [counter, SetCounter] = React.useState(1);
  const [UserAnswer, SetUserAnswer] = React.useState([]);

  function AddToAnswer(e) {
    SetCounter(counter + 1);
    let str = e.target.textContent;
    if (counter == 10) {
      SetCounter(10);
    }
    SetCount(Count + 1);
    UserAnswer.push(...[str]);
    SetUserAnswer(UserAnswer)
  }
  React.useEffect(() => {
    if (Count == 10) {
      for (let k of FinalAnswers) {
        for (let z of UserAnswer) {
          if (k == z) {
            number++;
            let cout = 0;
            while (cout < 10) {
              let user = document.getElementsByClassName("UserAnswer");
              let final = document.getElementsByClassName("FinalAnswers");
              if (user[cout].innerHTML == final[cout].innerHTML) {
                user[cout].style.backgroundColor = "#00D600";
                ++cout;
              } else {
                user[cout].style.backgroundColor = "red";
                ++cout;
              }
            }
          }
        }
      }
    }

    SetNumber(number);
  }, [Count]);

  return (
    <div className="main">
      {Count == 10 ? (
        <div className="FinalWindow">
          <span>Вы ответили на </span>
          {Number} из {FinalAnswers.length} Вопросов
          {Number < 3 ? <h1>Мда...</h1> : <span></span>}
          {Number == 3 || Number == 4 ? (
            <h1>Вы чуть умнее камня</h1>
          ) : (
            <span></span>
          )}
          {Number >= 8 ? <h1>Вы умный человек!</h1> : <span></span>}
          <div className="AnswerWindow">
            <div>
              {UserAnswer.map((item) => {
                return <div className="UserAnswer">{item}</div>;
              })}
            </div>

            <div>
              {FinalAnswers.map((item) => {
                return <div className="FinalAnswers">{item}</div>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="appmaincontainer">
          <Header counter={counter} Count={Count}></Header>
          <Answer Count={Count} AddToAnswer={AddToAnswer}></Answer>
        </div>
      )}
    </div>
  );
}
