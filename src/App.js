import React from "react"

import background from "./assets/images/background.svg"

import './assets/fonts/Peace Sans Webfont.ttf'
import './assets/fonts/PilkiusRomeus-YwDL.ttf'
import "./style.css"

import BootScreen from './components/BootScreen'

export default function App() {
	const [startQuiz, setStartQuiz] = React.useState(false);

    const main_style = {
        backgroundImage: `url(${background})`
    };

	return  (
        <main style={main_style}>
            {!startQuiz ? <BootScreen/>:<h1>Hi</h1>}
        </main>
    )
}
