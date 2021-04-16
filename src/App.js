import React from 'react';
import Lands from './Components/Landing/land';
import Crs from './Components/Courses/course';
import Foot from './Components/Footer/footerpath';
import Headers from './Components/Headerf/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <HeaderPage></HeaderPage>
      <Router>
        <LandingPage path='/'></LandingPage>
        <FooterPage path='/footer'></FooterPage>
        <CoursePage path="/course"></CoursePage>
        <HeaderPage path='/header'></HeaderPage>
      </Router>
      <FooterPage></FooterPage>
    </div>
  );
}
function LandingPage(){
  return <Lands></Lands>
}
function CoursePage(){
  return <Crs></Crs>
}
function FooterPage(){
  return <Foot></Foot>
}
function HeaderPage(){
  return <Headers></Headers>
}
export default App;
