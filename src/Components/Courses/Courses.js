import React, {useState} from 'react'
import Course from '../Course/Course'
import './Courses.css'

import {data} from 'd:/assignment-clinikk/src/Data'

function Courses() {
    const [activeTab,setActiveTab] = useState('tab1');
    const handleClick = (tabName,e) => {
        data.sort((a,b)=> a.rating - b.rating)
        setActiveTab(tabName)
        if(tabName === 'tab3') {
        data.sort((a,b)=> b.rating - a.rating)
        }
        if(tabName === 'tab4') {
            data.sort((a,b)=>b.totalEnrolled - a.totalEnrolled)
        }
        if(tabName === 'tab2') {
            data.sort((a,b)=>b.createdOn - a.createdOn)
        }
    }
    return (
        <div className="Courses">
            <div className="Courses-heading"><h2>Courses</h2></div>
            <div className="Courses-tabs">
                <button onClick={(e)=>handleClick('tab1',e)} className={activeTab === 'tab1' ? 'active' : ''}>All Courses</button>
                <button onClick={(e)=>handleClick('tab2',e)} className={activeTab === 'tab2' ? 'active' : ''}>The Newest</button>
                <button onClick={(e)=>handleClick('tab3',e)} className={activeTab === 'tab3' ? 'active' : ''}>Top Rated</button>
                <button onClick={(e)=>handleClick('tab4',e)} className={activeTab === 'tab4' ? 'active' : ''}>Most Popular</button>
            </div>
            <div className="Courses-course">
                {data.map(data1 =>  <Course courseObj={data1} img={data1.img} title={data1.title} creater={data1.creater} duration={data1.duration} rating={data1.rating} url={data1} /> )}
               
            </div>

        </div>
    )
}

export default Courses
