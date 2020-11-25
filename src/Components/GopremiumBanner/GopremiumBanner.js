import React from 'react'
import Gopremium_banner from 'D:/assignment-clinikk/src/images/Gopremium_banner.svg'
import './GopremiumBanner.css'
import {showCourseNotification} from '../Navigation/Notification'
function GopremiumBanner() {

    
    const handleClick = () => {
        showCourseNotification()
    }

    return (
        <div className="Gopremiumbanner">
            <div className="Gopremiumbanner-left">
                <h1 className="Gopremiumbanner-heading">Lern even more!</h1>
                <p className="Gopremiumbanner-text">Unlock premium features
only for $9.99 per month.</p>
                <button className="Gopremiumbanner-button" onClick={handleClick}>Go Premium</button>
            </div>
            <div className="Gopremiumbanner-right">
                <img className="Gopremiumbanner-image" src={Gopremium_banner} alt="premium-banner"/>
            </div>
        </div>
    )
}

export default GopremiumBanner
