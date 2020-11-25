import React from 'react'
import Illustration from 'd:/assignment-clinikk/src/images/Illustration.svg'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header-texts">
            <div className="header-text1">
                <h1>Hello Josh!</h1>
            </div>
            <div className="header-text2">
                <p>It’s good to see you again.</p>
            </div>
            </div>
            <div className="header-illustration">
            <img src={Illustration} alt="header-illustration"/>
            </div>
            
        </div>
    )
}

export default Header
