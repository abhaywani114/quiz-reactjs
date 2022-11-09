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


export default function App() {
	const [bootscreenActive, setBootscreenActive] = React.useState(true);
    const categories = ["kongehus", "politik", "dvdto", "kendis", "TV", "blandet"];
    const [isAnswered, setIsAnswered] = React.useState(false);

    const wrapper_style = {
        backgroundImage: `url(${ isAnswered ? backgroundBW:background})`
    };

    const main_style = {}
    if (isAnswered) {main_style.background = "#666666";}

    setTimeout( () => {
        setBootscreenActive(false);
    }, 5500);

    let firstScreen =  bootscreenActive ? <BootScreen />:<CategorySelect categories={categories} 
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
