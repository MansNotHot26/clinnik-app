import React,{useState} from 'react'
import './YourStats.css'

import LineChart from './LineChart'

function YourStats() {

    const [activeTab,setActiveTab] = useState('tab1');
    const handleClick = (tabName,e) => {
        setActiveTab(tabName)

    }

    return (
        <div className="YourStats">
            <div className="YourStats-top">
                <h1 className="YourStats-top-heading">Your statistics</h1>
            </div>
            <div className="YourStats-center">
                <div className="YourStats-center-tabs">
                    <button onClick={(e)=>handleClick('tab1',e)} className={activeTab === 'tab1' ? 'active' : ''}>Learning Hours</button>
                    <button onClick={(e)=>handleClick('tab2',e)} className={activeTab === 'tab2' ? 'active' : ''}>My Courses</button>
                </div>
                <div className="YourStats-Calender">
                    <button className="dropdown">Weekly <i className="arrow-down"></i></button>
                    
                </div>
            </div>
            <div className="YourStats-bottom">
                <LineChart/>
            </div>

        </div>
    )
}

export default YourStats
