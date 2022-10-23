
import {Link}  from "react-router-dom"

import bubble1 from "../assets/images/bubble1.png"
import bubble2 from "../assets/images/bubble2.png"
import bubble3 from "../assets/images/bubble3.png"
import bubble4 from "../assets/images/bubble4.png"
import bubble5 from "../assets/images/bubble5.png"

export default function ({categories, setCatagory}) {
    const bubbleArray = [bubble1, bubble2, bubble3, bubble3, bubble4, bubble5];
    const categoryHTML = categories.map( (category, index) => {
        const img = bubbleArray[index % 5];
        const style = {
            backgroundImage: `url(${img})`
        };
        return (
            <Link to={`/play/${category}`}>
                <div className="category--options" >
                    <img src={img} /> 
                    <div className="centered_text">{category}</div>
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
