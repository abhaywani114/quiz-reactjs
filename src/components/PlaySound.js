import React from "react"
import useSound from 'use-sound'

import wrongAudio from "../assets/audio/wrong.mp3"
import rightAudio from "../assets/audio/right.mp3"

export default function PlaySound({ playAudio, isAnswerCorrect }) {

    const [playSoundWrong] = useSound(wrongAudio)
    const [playSoundRight] = useSound(rightAudio)

    React.useEffect( () => {
/*        
        if (isAnswerCorrect) {
            playSoundRight();
        } else {
            playSoundWrong();
        }
*/
    }, [playAudio]);

    return (
        <>

        </>
    );
}
