import {Link} from "react-router-dom"

import QuizScreenTopBar from "./quizScreenTopBar"

import backArrow from "../assets/images/arrow_back.svg"
import bubble1 from "../assets/images/bubble1.png"
import bubble2 from "../assets/images/bubble2.png"
import bubble3 from "../assets/images/bubble3.png"
import bubble4 from "../assets/images/bubble4.png"
import bubble5 from "../assets/images/bubble5.png"


export default function quizScreenTop() {
    const questionBg = [bubble3, bubble1, bubble2, bubble4];
    const optionArray = [
        "A. Han havde masseret en mallemleder i nkken vden samtykke",
        "B. Han havde masseret eb mellemleder i nakken uden samtykke",
        "C. Han havde kaldt en kvimdelig kollega for nenstruatiomssaek",
        "D. Han havde masseret en mallemleder i nakken uden samtykke"
    ];

    const optionHTML = optionArray.map( (o, index) => {
        const img = questionBg[index % 5];
        let style = {};
        let text_style = {}
        switch(index) {
            case 1:
                style = {...style, 'transform':'translate(59%, -27%)'};
            break;
            case 2:
                style = {...style, 'transform':'translate(-10%, -55%)'};
            break;
            case 3:
                style = {...style, 'transform':'translate(50%, -100%)'};
                text_style = {'top':'45%'}
            break;
        }

        return (
            <div key={index} className="quiz-screen--wrapper" style={style}>
                <img src={img} className="quiz-screen--option-image" />
                <span className="quiz-screen--option-text" style={text_style}>{o}</span>
            </div>
        )
    });

    return (
        <>
            <QuizScreenTopBar />
            <div className="quiz-screen--question-area">
                <div className="quiz-screen--question">
                    <h1>Jes dorph degyndte I ar at lave podcast, men biev hjemsendt fra arbejdspladsen, hvorfor?</h1>
                </div>
                <div className="quiz-screen--option-area">
                    {optionHTML}
                </div>
            </div>
        </>
    )
}
