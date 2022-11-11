import {Link} from "react-router-dom"
import backArrow from "../assets/images/arrow_back.svg"

export default function quizScreen({score, category, totalQuestion}) {
    return (
        <>
            <div className="quiz-screen--top-bar">
                <div>
                    <Link to="/">
                        <img src={backArrow} className="quiz-screen--back-arrow" alt="back arrow"/>
                    </Link>
                </div>
                <div>
                    <span className="quiz-screen--top-bar-title">{category}</span>
                </div>
                <div>
                    <strong>{score}/{totalQuestion}</strong>
                </div>
            </div>
        </>
    )
}
