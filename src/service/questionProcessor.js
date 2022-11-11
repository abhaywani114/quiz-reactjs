
import quizData from "../data/quizData";

export default function  getQuestion(category = 'blandet') {
    let processedData = quizData.filter(e => {
       return category != 'blandet' ? e.category === category:true
    }).sort(() => Math.random() - Math.random());//.slice(0, 10)
    return processedData;
}
