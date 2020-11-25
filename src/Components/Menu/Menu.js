import React from 'react'
import Menu_7 from 'D:/assignment-clinikk/src/images/Menu_7.svg'
import Menu_2 from 'D:/assignment-clinikk/src/images/Menu_2.svg'
import Menu_3 from 'D:/assignment-clinikk/src/images/Menu_3.svg'
import Menu_4 from 'D:/assignment-clinikk/src/images/Menu_4.svg'
import Menu_5 from 'D:/assignment-clinikk/src/images/Menu_5.svg'
import Menu_6 from 'D:/assignment-clinikk/src/images/Menu_6.svg'
import Menu_F from 'D:/assignment-clinikk/src/images/Menu_F.svg'
import './Menu.css'
import {Link} from 'react-router-dom'
import {showCourseNotification} from '../Navigation/Notification'

function Menu() {

    const hanDleClick = () => {
        showCourseNotification()
    }
    return (
        <div className="Menu">
            <div className="Menu-top">
            <Link onClick={hanDleClick}><img className="Menu_F" src={Menu_F} alt="Menu_F"/></Link>
            </div>
            <div className="Menu-center">
            <Link onClick={hanDleClick}> <img className="Menu_2" src={Menu_2} alt="Menu_2"/></Link>
            <Link onClick={hanDleClick}> <img className="Menu_3" src={Menu_3} alt="Menu_3"/></Link>
            <Link onClick={hanDleClick}> <img className="Menu_4" src={Menu_4} alt="Menu_4"/></Link>
            <Link onClick={hanDleClick}> <img className="Menu_5" src={Menu_5} alt="Menu_5"/></Link>
            <Link onClick={hanDleClick}> <img className="Menu_6" src={Menu_6} alt="Menu_6"/></Link>
            </div>
            <div className="Menu-bottom">
            <Link onClick={hanDleClick}> <img className="Menu_7" src={Menu_7} alt="Menu_7"/></Link>
            </div>
        </div>
    )
}

export default Menu
