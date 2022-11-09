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


export default function YesNoImg({ isAnswered, isAnswerCorrect, playAudio, randomNumber }) {
    const ImgYes = [ImgYes1, ImgYes2, ImgYes3, ImgYes4];
    const ImgNo = [ImgNo1, ImgNo2, ImgNo3, ImgNo4];

    const audioYes = [audioYes1, audioYes2, audioYes3, audioYes4];
    const audioNo = [audioNo1, audioNo2, audioNo3, audioNo4];

    const [divStyle, setDivStyle] = React.useState({});

    
    let [displayImg, setDisplayImg] = React.useState('');
    const [playSound] = useSound(isAnswerCorrect ? audioYes[ randomNumber]:audioNo[randomNumber])

    React.useEffect( () => {
        setDisplayImg(isAnswerCorrect ? ImgYes[ randomNumber]:ImgNo[randomNumber]);
        setDivStyle({display: isAnswered ? 'block':'none'});
    }, [isAnswerCorrect, isAnswered]);
   
    React.useEffect( () => {
        playSound();    
    }, [playAudio]);



    return (
            <div style={divStyle} className="quiz-screen--yes-no-img-wrapper">
                <img src={displayImg} className="quiz-screen--yes-no-img" />
            </div>
    );
}
