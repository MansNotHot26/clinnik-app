import React  from 'react'
import './Course.css'
import Watch from 'D:/assignment-clinikk/src/images/Watch.svg'
import Flame from 'D:/assignment-clinikk/src/images/Flame_img.svg'
import {useHistory} from 'react-router-dom'
import {showCourseNotification} from '../Navigation/Notification'

function Course(props) {
    
   
   const history = useHistory()
    const handleClick = () => {
       
         history.push(`/playCourse/${props.courseObj.id}`)
    }

    const handleClickView = () => {
        showCourseNotification()
    }
    return (
        <div className="Course" >
          
                <div className="Course-image">
              <img src={props.img} alt="Courseimage"/>
              </div>
              <div className="Course-texts" onClick={handleClick}>
                  <h1 className="Course-text1">{props.title}</h1>
                  <p className="Course-text2">{props.creater}</p>
              </div>
              <div className="Course-duration">
                   <img src={Watch} alt="courseDuration"/>
                   <span>{props.duration}</span>
              </div>
              <div className="Course-rating">
                   <img src={Flame} alt="courseRating" />
                    <span>{props.rating}</span>
              </div>
              <button className="Course-view-button" onClick={handleClickView}>View Course</button>
         
        </div>
    )
}

export default Course
