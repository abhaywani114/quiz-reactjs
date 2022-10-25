import React from "react"

export default function QuizOptions({optionArray, optionBg, handleClick}) {

    const optionHTML = optionArray.map( (o, index) => {
        const img = optionBg[index % 5];
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

       const firstLetter = ["A", "B", "C", "D"]; 

        return (
            <div key={index} className="quiz-screen--wrapper " style={style} onClick={() => handleClick(index)}>
                <img src={img} className="quiz-screen--option-image" />
                <span className="quiz-screen--option-text" style={text_style}>{firstLetter[index]}.<br/>{o}</span>
            </div>
        )
    });


    return ( 
            <>
                {optionHTML}
            </>
    )
        
}
