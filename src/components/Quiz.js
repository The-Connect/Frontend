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
        { answerText: "Introvert", answerValue: "introverted" },
        { answerText: "Extrovert", answerValue: "extroverted" },
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

  //when a user clicks an answer
  const handleButtonClicked = () => {
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
      setQuestionNumber(questionNumber + 1)
    } else {
      alert('You have reached the end of this quiz.')
    }
    
  }

  //when a user decides to reset the quiz
  const resetButtonClicked = () => {
    setCurrentQuestion(0);
    setQuestionNumber(0);
    alert('Quiz reset!');
  }

  //writing out the logic for when a user wants to go back a question
  const goBackButtonClicked = () => {
    setCurrentQuestion(currentQuestion - 1);
    setQuestionNumber(questionNumber - 1);
  }

  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className="quiz-container">
      <h1>Take the quiz to find your connections</h1>
      <>
      <fieldset>
        <div className="question-container">
          <div className="question-counter">
            <span>Question {questionNumber + 1}/</span>{questions.length}
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answers">
            {questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={handleButtonClicked}>{answerOption.answerText}</button> )}
          </div>
          <button onClick={resetButtonClicked}>Reset Quiz</button>
        </div>
        {
          currentQuestion !== 0 ? <div>
            <button onClick={goBackButtonClicked}>Go back</button>
          </div>: null
        }
      </fieldset>
      </>
    </div>
  );
}
