import React from "react"
import useSound from 'use-sound'

import ImgNo1 from "../assets/images/no1.png"
import ImgNo2 from "../assets/images/no2.png"
import ImgNo3 from "../assets/images/no3.png"
import ImgNo4 from "../assets/images/no4.png"

import ImgYes1 from "../assets/images/yes1.png"
import ImgYes2 from "../assets/images/yes4.png"
import ImgYes3 from "../assets/images/yes3.png"
import ImgYes4 from "../assets/images/yes4.png"

import audioNo1 from "../assets/audio/no1.wav"
import audioNo2 from "../assets/audio/no2.wav"
import audioNo3 from "../assets/audio/no3.wav"
import audioNo4 from "../assets/audio/no4.wav"


import audioYes1 from "../assets/audio/yes1.wav"
import audioYes2 from "../assets/audio/yes2.wav"
import audioYes3 from "../assets/audio/yes3.wav"
import audioYes4 from "../assets/audio/yes4.wav"


export default function YesNoImg({ isAnswered, isAnswerCorrect, randomNumber}) {
    const ImgYes = [[ImgYes1, audioYes1] , [ImgYes2, audioYes2], [ImgYes3, audioYes3], [ImgYes4, audioYes4]];
    const ImgNo = [[ImgNo1, audioNo1], [ImgNo2, audioNo2], [ImgNo3, audioNo3], [ImgNo4, audioNo4]];

    const [divStyle, setDivStyle] = React.useState({});
    let [displayImg, setDisplayImg] = React.useState('');
    React.useEffect( () => {
        setDisplayImg(isAnswerCorrect ? ImgYes[ randomNumber][0]:ImgNo[randomNumber][0]);
        let audio =   isAnswerCorrect ? ImgYes[randomNumber][1]:ImgNo[randomNumber][1];
        setDivStyle({display: isAnswered ? 'block':'none'});
        let playA = new Audio(audio);
        if (isAnswered) { playA.play()};
    }, [isAnswerCorrect, isAnswered]);
   
    return (
            <div style={divStyle} className="quiz-screen--yes-no-img-wrapper">
                <img src={displayImg} className="quiz-screen--yes-no-img" />
            </div>
    );
}
