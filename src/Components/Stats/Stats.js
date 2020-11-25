import React from 'react'
import './Stats.css'
function Stats() {
    return (
        <div className="Stats">
            <div className="Stats-completed">
                <h1>11</h1>
                <p>Courses completed</p>
            </div>
            <div className="Stats-inprogress">
                <h1>4</h1>
                <p>Courses in progress</p>
            </div>
        </div>
    )
}

export default Stats
