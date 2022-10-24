import React from "react"
import {BrowserRouter, Routes , Route}  from "react-router-dom"

import BootScreen from './components/BootScreen'
import CategorySelect from './components/categorySelect';
import QuizScreen from './components/quizScreen';

import background from "./assets/images/background.svg"
import './assets/fonts/Peace Sans Webfont.ttf'
import './assets/fonts/PilkiusRomeus-YwDL.ttf'
import "./style.css"


export default function App() {
	const [bootscreenActive, setBootscreenActive] = React.useState(true);
    const categories = ["kongehus", "politik", "dvdto", "kendis", "TV", "blandet"];

    const main_style = {
//        backgroundImage: `url(${background})`
    };

    setTimeout( () => {
        setBootscreenActive(false);
    }, 3500);

    let firstScreen =  bootscreenActive ? <BootScreen />:<CategorySelect categories={categories} />;

	return  (
        <main style={main_style}>
            <div className="main-background-wrapper">
                <BrowserRouter className="App">
                    <Routes>
                        <Route path="/"  element={firstScreen} exact  />
                        <Route path="/play/:c" element={<QuizScreen />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </main>
    )
}
