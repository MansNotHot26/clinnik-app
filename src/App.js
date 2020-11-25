import React  from 'react';
import './App.css';
import Home from './Pages/Home/Home'
import {Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextController} from './Context'
import PlayCourse from './Pages/PlayCourse/PlayCourse'

function App() {
 
  return (
    <ContextController>
    <Router>
    <Route path="/" exact>
      <Home/>
    </Route>
    <Route  exact path="/playcourse/:id">
    <PlayCourse/>
    </Route>
    </Router>
  </ContextController>
  );
}

export default App;
