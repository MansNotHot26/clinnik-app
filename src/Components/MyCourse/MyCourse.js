/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useContext,useState} from 'react'
// import Spanish from 'd:/assignment-clinikk/src/images/Spanish.svg'
import Left from 'd:/assignment-clinikk/src/images/Left.svg'
import Right from 'd:/assignment-clinikk/src/images/Right.svg'
import ProgressBar from '../ProgressBar'
import './MyCourse.css'
import {data} from 'd:/assignment-clinikk/src/Data'
import {useHistory} from 'react-router-dom'
import {userContext} from '../../Context'

function MyCourse() {

    const currentCourse = data.filter(data => data.enrolled && data  )
    console.log(currentCourse)
    const history = useHistory()
    console.log(history)
    const [state,setState] = useContext(userContext)
    const [index,setIndex] = useState(0)
    let enrolledCourses = currentCourse[index]
    

    
    const handleClick = () => {
      history.push(`/playcourse/${enrolledCourses.id}`)
    }
    const handleLeftClick = () => {
      if(index > 0) {
      setIndex(index-1)
      enrolledCourses= currentCourse[index]
      }
    }
    const handleRightClick = () => {
       if(index < currentCourse.length-1) {
      setIndex(index+1)
      enrolledCourses = currentCourse[index]
       }
    }
    const currentPlayCourse = state?.playCourse?.filter(course => course.id === enrolledCourses.id && course)
    const progressPercentage = currentPlayCourse[0].progress * 100
  
    return (
        <div className="Mycourse">
            <div className="Mycourse-left">
                <div className="Mycourse-image">
              <img src={enrolledCourses.img} alt="mycourse-image"/>
              </div>
              <div className="Mycourse-texts" onClick={handleClick}>
                <h1 className="Mycourse-text1">{enrolledCourses.title}</h1>
                <p className="Mycourse-text2">{enrolledCourses.creater}</p>
              </div>
              <div className="Mycourse-progress">
                   <ProgressBar value={ progressPercentage} /> 
              </div>
              <button className="Mycourse-continue-button" onClick={handleClick}>Continue</button>
            </div >
            <div className="Mycourse-right">
           <button onClick={handleLeftClick}>
            <img className="left-arrow" src={Left} alt="go-backward"/>
            </button>
            <button onClick={handleRightClick}>
             <img className="right-arrow" src={Right} alt="go-forward" />
             </button>
            </div>
        </div>
        )
}

export default MyCourse
