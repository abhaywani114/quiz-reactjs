import {Link} from "react-router-dom"
import backArrow from "../assets/images/arrow_back.svg"

export default function quizScreen({score}) {
    return (
        <>
            <div className="quiz-screen--top-bar">
                <div>
                    <Link to="/">
                        <img src={backArrow} className="quiz-screen--back-arrow" alt="back arrow"/>
                    </Link>
                </div>
                <div>
                    <span className="quiz-screen--top-bar-title">kongehuset</span>
                </div>
                <div>
                    <strong>{score}/10</strong>
                </div>
            </div>
        </>
    )
}
