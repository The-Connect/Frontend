import React from 'react'
import { useState } from 'react';
import"./Quiz.css"

export default function Quiz() {

    const Qs = [{
        qText: '',
        id: 0,
        answersA:"",
        answersB:"",
        AnswersC:"",
        AnswersD:"", 
    }]

    const [currentQ, setCurrentQ] = useState(0);
  return (
    <div className='quiz-container'>
        <h1>Take the quiz to find your connections</h1>
        <fieldset></fieldset>
    </div>
  )
}
