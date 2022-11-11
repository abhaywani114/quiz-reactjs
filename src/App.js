import React from "react"
import {HashRouter, BrowserRouter, Routes , Route}  from "react-router-dom"

import BootScreen from './components/BootScreen'
import CategorySelect from './components/categorySelect';
import QuizScreen from './components/quizScreen';

import background from "./assets/images/background.svg"
import backgroundBW from "./assets/images/backgroundBW.svg"
import './assets/fonts/Peace Sans Webfont.ttf'
import './assets/fonts/PilkiusRomeus-YwDL.ttf'
import "./style.css"

import audioIntro from "./assets/audio/intro.wav"


export default function App() {
	const [bootscreenActive, setBootscreenActive] = React.useState(true);
    const categories = ["kongehus", "politik", "dvto", "kendis", "tv", "blandet"];
    const [isAnswered, setIsAnswered] = React.useState(false);

    const wrapper_style = {
        backgroundImage: `url(${ isAnswered ? backgroundBW:background})`
    };

    const main_style = {}
    if (isAnswered) {main_style.background = "#666666";}
/*
    setTimeout( () => {
        setBootscreenActive(false);
    }, 5500);
*/
    const activate = () => {
        const audio = new Audio(audioIntro);
        audio.play();
        setBootscreenActive(false);
    }
    let firstScreen =  bootscreenActive ? <BootScreen activate={activate} />:<CategorySelect categories={categories} 
                    setIsAnswered={setIsAnswered} />;

	return  (
        <main style={main_style}>
            <div className="main-background-wrapper" style={wrapper_style}>
                <HashRouter className="App">
                    <Routes>
                        <Route path="/"  element={firstScreen} exact  />
                        <Route path="/play/:c" element={<QuizScreen setIsAnswered={setIsAnswered} 
                            isAnswered={isAnswered} />} />
                    </Routes>
                </HashRouter>
                    <p className="bootscreen--bottom-inner-text" style={{position:'fixed'}}>DET, VI TALER OM</p>
            </div>
        </main>
    )
}
