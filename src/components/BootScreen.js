
import logoBubble from "../assets/images/logo_bubbles.svg"
import welcomeSplash from "../assets/images/welcome_splash.png"

export default function BootScreen() {
	
	return (
        <>
            <div className="bootscreen--top-text">
                <span>Dammarks bedste sladderquiz</span>
                <img src={logoBubble} className="bootscreen--top-bubble-logo" />
                <h1 className="bootscreen--top-bubble-hero-text">DET, VI TALER OM</h1>
            </div>
            <div className="bootscreen--bottom">
                <div className="bootscreen--bottom-inner">
                    <img className="bootscreen--bottom-img" src={welcomeSplash} />
                    <p className="bootscreen--bottom-inner-text">DET, VI TALER OM</p>
                </div>
            </div>
        </>
    )
}
