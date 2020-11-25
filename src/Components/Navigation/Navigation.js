import React from 'react'
import Pp from 'D:/assignment-clinikk/src/images/Pp.svg'
import SearchBar from './SearchIcon'
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import './Navigation.css'
import {showNotification} from './Notification'
function Navigation() {
    const handleNotifications = () => {
        showNotification()
    }
    
    return (
        <div className="Navigation">
            <div className="Navigation-searchbar">
                <SearchBar/>
            </div>
            <div className="Navigation-notification">
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon onClick={handleNotifications} />
              </Badge>
            </IconButton>
            </div>
            <div className="Navigation-pp">
                <img src={Pp} alt="Profilepicture" />
            </div>
        </div>
    )
}

export default Navigation
