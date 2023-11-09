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
      categoryQuestion: "Core Desires:",
      questionText:
        "I'm drawn to roles where I can take charge or lead initiatives.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        {
          answerText: "2 - Slightly Agree",
          answerValue: 2,
          answerPicked: false,
        },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
    {
      categoryQuestion: "Core Desires:",
      questionText:
        "Meeting goals and targets at work gives me a feeling of accomplishment.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        { answerText: "2 - Slightly Agree", answerValue: 2 },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
    {
      categoryQuestion: "Core Desires:",
      questionText:
        "Building professional relationships is vital for my career growth.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        {
          answerText: "2 - Slightly Agree",
          answerValue: 2,
          answerPicked: false,
        },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
    {
      categoryQuestion: "Core Desires:",
      questionText:
        "Recognition for my work, whether through feedback or rewards, matters a lot to me.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        {
          answerText: "2 - Slightly Agree",
          answerValue: 2,
          answerPicked: false,
        },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
    {
      categoryQuestion: "Core Desires:",
      questionText:
        "A clear job role with set responsibilities is something I prefer.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        {
          answerText: "2 - Slightly Agree",
          answerValue: 2,
          answerPicked: false,
        },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
    {
      categoryQuestion: "Lifestyle Habits:",
      questionText:
        "I'm open to roles that might involve unconventional hours or remote work.",
      answerOptions: [
        {
          answerText: "4 - Strongly Agree",
          answerValue: 4,
          answerPicked: false,
        },
        { answerText: "3 - Agree", answerValue: 3, answerPicked: false },
        {
          answerText: "2 - Slightly Agree",
          answerValue: 2,
          answerPicked: false,
        },
        { answerText: "1 - Disagree", answerValue: 1, answerPicked: false },
        {
          answerText: "0 - Strongly Disagree",
          answerValue: 0,
          answerPicked: false,
        },
      ],
    },
  ];

  //when a user clicks an answer. This should also trigger one answerPicked to become true
  const handleButtonClicked = (answerValue) => {
    const nextQuestion = currentQuestion + 1;
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answerOptions.forEach((option) => {
      option.answerPicked = option.answerValue === answerValue;
    });
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setQuestionNumber(questionNumber + 1);
      setAnswerPicked(true)
    } else {
      alert("You have reached the end of this quiz.");
    }
  };

  //when a user decides to reset the quiz
  const resetButtonClicked = () => {
    setCurrentQuestion(0);
    setQuestionNumber(0);
    alert("Quiz reset!");
  };

  //writing out the logic for when a user wants to go back a question
  const goBackButtonClicked = () => {
    setCurrentQuestion(currentQuestion - 1);
    setQuestionNumber(questionNumber - 1);
  };

  const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className="quiz-container">
      <h1>Take the quiz to find your connections</h1>
      <h4>Quiz for jobseekers(Ages 16-45) Discovering Your Ideal Career Fit</h4>
      <div className="instructions">
        <p>
          <b>
            In order to better identify your primary objectives and interests,
            we've compiled a brief assessment to connect you with the options
            that best suit your desired results.
          </b>
        </p>
        <ul>Answer Key:</ul>
        <div className="key">
          <li>4 = Strongly Agree</li>
          <li>3 = Agree</li>
          <li>2 = Slightly Agree</li>
          <li>1 = Disagree</li>
          <li>0 = Strongly Disagree</li>
        </div>
      </div>
      <>
        <fieldset>
          <div className="question-container">
            <div className="question-counter">
              <span>Question {questionNumber + 1}/</span>
              {questions.length}

              <br />
              <div className="question-text">
                <div className="category-question-container">
                  {questions[currentQuestion].categoryQuestion}
                </div>

                <br />
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answers">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="button-answers"
                  onClick={handleButtonClicked}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
            <div className="options-container">
              <button className="reset-button" onClick={resetButtonClicked}>
                Reset Quiz
              </button>
            </div>
            {currentQuestion !== 0 ? (
              <div className="goback-container">
                <button className="goback-button" onClick={goBackButtonClicked}>
                  Go back
                </button>
              </div>
            ) : null}
          </div>
        </fieldset>
      </>
    </div>
  );
}
