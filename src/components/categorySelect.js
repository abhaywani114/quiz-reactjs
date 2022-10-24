
import {Link}  from "react-router-dom"

import bubble1 from "../assets/images/bubble1.png"
import bubble2 from "../assets/images/bubble2.png"
import bubble3 from "../assets/images/bubble3.png"
import bubble4 from "../assets/images/bubble4.png"
import bubble5 from "../assets/images/bubble5.png"

export default function ({categories, setCatagory}) {
    const bubbleArray = [bubble1, bubble2, bubble3, bubble4, bubble3, bubble5];
    const categoryHTML = categories.map( (category, index) => {
        const img = bubbleArray[index % 5];

        let style = {
            "transform": `scale(${1.3 - index/7}) translate(${-1^(index%2)*(100*(index%2))}%, -${7*(index/0.5)*index}%)`
        }; 
        let text_style = {};

        if (index === 0) { style.transform = `scale(${1.3 - index/7}) translate(-1%, 20%)`}
        if (img === bubble4) {text_style.top = "50%"}
        
        
        return (
            <Link to={`/play/${category}`}>
                <div className="category--options" style={style} key={index}>
                    <img src={img} /> 
                    <div className="centered_text" style={text_style}>{category}</div>
                </div>
            </Link>
        )
    });

    return (
        <>
           <div className="bootscreen--top-text">
                <h1 className="category--top-text">DET, VI TALER OM</h1>
                <div className="category-screen">
                    {categoryHTML}
                </div>
            </div>

        </>
    )
}
