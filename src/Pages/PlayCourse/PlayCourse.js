import React,{useContext} from 'react'
import ReactPlayer  from 'react-player'
import {userContext} from '../../Context'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './PlayCourse.css'

function PlayCourse(props) {
    
    
    const [state,setState] = useContext(userContext)
    
    const handleProgress = (e) => {
      const updatedCourse =   state.playCourse.map(course=> course.id === Number(props.match.params.id) ? {...course,progress : e.played} : course) 
       
        setState({...state,playCourse: updatedCourse})
    }
    
    
    const playingCourse = state?.playCourse?.filter(course => course.id === Number(props.match.params.id) && course)
    
    return (
        <div className="PlayCourse">
            <div className="PlayCourse-top">
            <Link to="/" className="Dashboard-link"> Go back to Dashboard</Link>
            </div>
          <div className="PlayCourse-video">
          <h1 className="PlayCourse-heading">Welcome to {playingCourse[0].title} course  {playingCourse[0].creater}</h1>

            <ReactPlayer url={playingCourse[0].url} controls = {true} onProgress={e => { handleProgress(e)}}   />
           
         
            </div>

        </div>
    )
}

export default withRouter(PlayCourse)
