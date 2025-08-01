import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
import MyLearning from './pages/MyLearning';
import {EnrollProvider} from './context/EnrollContext';


const App=()=>{

    return(
        <EnrollProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/courses' element={<Course />}/>
                    <Route path='/Course/:id' element={<CourseDetail/>}/>
                    <Route path='/my-learning' element={<MyLearning/>}/>
                </Routes>
            </Router>
            </EnrollProvider>
    )
}
export default App;
