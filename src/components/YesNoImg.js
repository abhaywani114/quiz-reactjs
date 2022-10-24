import React from "react"

import ImgNo1 from "../assets/images/no1.png"
import ImgNo2 from "../assets/images/no2.png"
import ImgNo3 from "../assets/images/no3.png"
import ImgNo4 from "../assets/images/no4.png"

import ImgYes1 from "../assets/images/yes1.png"
import ImgYes2 from "../assets/images/yes4.png"
import ImgYes3 from "../assets/images/yes3.png"
import ImgYes4 from "../assets/images/yes4.png"



export default function YesNoImg({ isAnswered, isAnswerCorrect }) {
    const ImgYes = [ImgYes1, ImgYes2, ImgYes3, ImgYes4];
    const ImgNo = [ImgNo1, ImgNo2, ImgNo3, ImgNo4];
    const [divStyle, setDivStyle] = React.useState({});

    
    let [displayImg, setDisplayImg] = React.useState('');
    React.useEffect( () => {
        let randomNo = Math.floor((Math.random() * 4))
        setDisplayImg(isAnswerCorrect ? ImgYes[ randomNo]:ImgNo[randomNo]);
        setDivStyle({display: isAnswered ? 'block':'none'});
    }, [isAnswerCorrect, isAnswered]);


    return (
            <div style={divStyle} className="quiz-screen--yes-no-img-wrapper">
                <img src={displayImg} className="quiz-screen--yes-no-img" />
            </div>
    );
}
