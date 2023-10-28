import React from "react";
import { useState } from "react";
import "./Quiz.css";

export default function Quiz() {
  //answerPicked will be set to false initially so that users cannot move on to the next question without selecting an answer. Once they have selected answer, answerPicked will be set to true
  const [answerPicked, setAnswerPicked] = useState(false);

  //will check where the user is in terms of questions
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //holds arrays of questions 
  const questions = [
    {
      questionText: "Are you an introvert or an extrovert?",
      answerOptions: [
        { answerText: "Introvert", answerValue: "Personality: introverted" },
        { answerText: "Extrovert", answerValue: "Personality: extroverted" },
      ],
    },
    {
      questionText: "Do you like going out in nature or sticking to the city?",
      answerOptions: [
        {answerText: "Nature", answerValue: "nature"},
        {answerText: "City", answerValue: "city"}
      ]
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  return (
    <div className="quiz-container">
      <h1>Take the quiz to find your connections</h1>
      <fieldset>
        <div className="question-container">
          <div className="question-counter"></div>
        </div>
      </fieldset>
    </div>
  );
}
