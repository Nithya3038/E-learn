import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
// import Enrolled from './pages/Enrolled';


const App=()=>{

    return(
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/courses' element={<Course />}/>
                    <Route path='/Course/:id' element={<CourseDetail/>}/>
                    {/* <Route path='/enrolled' element={<Enrolled enrolledCourses={enrolledCourses}/>}/> */}
                </Routes>
            </Router>
        
    )
   
}
export default App;
