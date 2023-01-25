import React from 'react';
import './Notifications.css'
import closeBtn from './close-icon.svg'
import { getLatestNotification } from './utils'

function handleClick() {
    console.log("Close button has been clicked")
}

let latestNotification = getLatestNotification()
let defaultPriority = {
    color: "rgb(9, 9, 150)",
    fontWeight: "bold"
}
let urgentPriority = {
    color: "rgb(255, 0, 0)",
    fontWeight: "bold"
}

function Notification() {
    return (
        <div className='Notifications'>
            <button style={{display: "inline", float: "right"}} aria-label="close" onClick={ handleClick }>
                <img src={ closeBtn } style={{color: "black", width: "10px", height: "10px", margin: "auto 0"}} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li style={defaultPriority}>New course available</li>
                <li style={urgentPriority}>New resume available</li>
                <li style={urgentPriority}>{ latestNotification }</li>
            </ul>
        </div>
    )
}

export default Notification;