import React from 'react'
import {Link, useParams, redirect} from "react-router-dom"

import QuizScreenTopBar from "./quizScreenTopBar"
import QuizOptions from "./quizOptions"
import YesNoImg from './YesNoImg'
import getQuestion from "../service/questionProcessor";

import backArrow from "../assets/images/arrow_back.svg"
import bubble1 from "../assets/images/bubble1.png"
import bubble2 from "../assets/images/bubble2.png"
import bubble3 from "../assets/images/bubble3.png"
import bubble4 from "../assets/images/bubble4.png"
import bubble5 from "../assets/images/bubble5.png"

import bubble1W from "../assets/images/bubble1_wrong.png"
import bubble2W from "../assets/images/bubble2_wrong.png"
import bubble3W from "../assets/images/bubble3_wrong.png"
import bubble4W from "../assets/images/bubble4_wrong.png"

import bubble1R from "../assets/images/bubble1_right.png"
import bubble2R from "../assets/images/bubble2_right.png"
import bubble3R from "../assets/images/bubble3_right.png"
import bubble4R from "../assets/images/bubble4_right.png"

export default function QuizScreen({isAnswered, setIsAnswered}) {
    const initOptionBg = [bubble3, bubble1, bubble2, bubble4];
    const [optionBg, setOptionBg] = React.useState(initOptionBg);
    const wrongOptionBg = [bubble3W, bubble1W, bubble2W, bubble4W] 
    const rightOptionBg = [bubble3R, bubble1R, bubble2R, bubble4R] 
    const yesTimeout = [3000, 2000, 6500, 3000 ];
    const noTimeout = [5000, 4000, 6000, 3000];

    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false);
    const [score, setScore] = React.useState(0);
    const [randomNumber, setRandomNumber] = React.useState(0);
    const [quizData, setQuizData] = React.useState([
      {
        "index": 0,
        "question": "Loading data....",
        "options": [
          "------------------------",
          "------------------------",
          "------------------------",
          "------------------------",
        ],
        "answer": 0,
        "category": "--"
      }
    ]);

   let params = useParams();
   React.useEffect( () => {
       setQuizData(getQuestion(params.c));
    }, []);

    let currentQuestion = quizData[score];

    const selectAnswer = (answer) => {
        if (isAnswered) return;
        setIsAnswered(true);
        setRandomNumber(Math.floor((Math.random() * 4)));
        if (answer === currentQuestion.answer) {
          setOptionBg((prevState) => {
                const prevState_ = [...prevState]
                prevState_[answer] = rightOptionBg[answer];
                return prevState_;
            });
            
            setIsAnswerCorrect(true);
             setTimeout( () => {
                if (score < quizData.length - 1) {
                    setScore(score + 1);
                    setOptionBg(initOptionBg);
                    setIsAnswered(false);
                } else {
                    window.location = '/quiz-reactjs';
                }
            }, yesTimeout[randomNumber]);
        } else {
            setOptionBg((prevState) => {
                const prevState_ = [...prevState]
                prevState_[answer] = wrongOptionBg[answer];
                return prevState_;
            });
            setIsAnswerCorrect(false);

           setTimeout( () => {
                setOptionBg(initOptionBg);
                setIsAnswered(false);
            }, noTimeout[randomNumber]);
        }  
    }
        
    const font_size = 1.5 - (currentQuestion.question.length/9);
    const text_style = {fontSize: `${font_size}em`}

    return (
        <>
            <QuizScreenTopBar score={score+1} category={params.c} totalQuestion={quizData.length}/>
            <div className="quiz-screen--question-area">
                <div className="quiz-screen--question">
                    <h1 style={text_style} >{currentQuestion.question}</h1>
                </div>
                <div className="quiz-screen--option-area">
                    <QuizOptions optionArray={currentQuestion.options}  optionBg={optionBg} handleClick={selectAnswer}/>
                </div>
                <YesNoImg isAnswered={isAnswered} isAnswerCorrect={isAnswerCorrect} 
                        randomNumber={randomNumber} />
            </div>
        </>
    )
}
