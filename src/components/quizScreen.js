import React from 'react'
import {Link, useParams} from "react-router-dom"

import QuizScreenTopBar from "./quizScreenTopBar"
import QuizOptions from "./quizOptions"
import YesNoImg from './YesNoImg'
import PlaySound from "./PlaySound"
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

    const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false);
    const [playAudio, setPlayAudio] = React.useState(false);
    const [score, setScore] = React.useState(0);
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
        if (answer === currentQuestion.answer) {
          setOptionBg((prevState) => {
                const prevState_ = [...prevState]
                prevState_[answer] = rightOptionBg[answer];
                return prevState_;
            });
            
            setIsAnswerCorrect(true);
            setPlayAudio(t => !t);
             setTimeout( () => {
                if (score < quizData.length - 1) {
                    setScore(score + 1);
                    setOptionBg(initOptionBg);
                    setIsAnswered(false);
                }
            }, 2500);
        } else {
            setOptionBg((prevState) => {
                const prevState_ = [...prevState]
                prevState_[answer] = wrongOptionBg[answer];
                return prevState_;
            });
            setIsAnswerCorrect(false);
            setPlayAudio(t => !t);

           setTimeout( () => {
                setOptionBg(initOptionBg);
                setIsAnswered(false);
            }, 2500);
        }  
    }

    return (
        <>
            <QuizScreenTopBar score={score+1} />
            <div className="quiz-screen--question-area">
                <div className="quiz-screen--question">
                    <h1>{currentQuestion.question}</h1>
                </div>
                <div className="quiz-screen--option-area">
                    <QuizOptions optionArray={currentQuestion.options}  optionBg={optionBg} handleClick={selectAnswer}/>
                </div>
                <YesNoImg isAnswered={isAnswered} isAnswerCorrect={isAnswerCorrect} />
                <PlaySound isAnswerCorrect={isAnswerCorrect} playAudio={playAudio}/>
            </div>
        </>
    )
}
