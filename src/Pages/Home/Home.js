import React  from 'react';
import './Home.css';
import Header from '../../Components/Header/Header'
import MyCourse from '../../Components/MyCourse/MyCourse'
import Menu from '../../Components/Menu/Menu'
import Navigation from '../../Components/Navigation/Navigation'
import Stats from '../../Components/Stats/Stats'
import YourStats from '../../Components/YourStats/YourStats'
import Courses from '../../Components/Courses/Courses'
import GopremiumBanner from '../../Components/GopremiumBanner/GopremiumBanner'
// import {ContextController} from 'd:/assignment-clinikk/src/Context';

// import { Home } from '@material-ui/icons';

function Home() {
 
  return (
 
    <div className="Dashboard">
    <div className="Dashboard-left">
       <Menu/>
    </div>
    <div className="Dashboard-center">
    <Header/>
      <MyCourse/>
      <Courses/>
    </div>
    <div className="Dashboard-right">
      
     
      <Navigation/>
      <Stats/>
      
      <YourStats/>
      <GopremiumBanner/>
      </div>
   
    </div>
    
 
  );
}

export default Home;
