import {useState, useEffect} from 'react';
import CourseCard from '../components/CourseCard';
import mockCourse from '../data/mockCourse';

const Course=()=>{
    const[courses,setCourses]=useState([]);
    const [search,setSearch]=useState('');

    useEffect(()=>{
        setCourses(mockCourse);
    },[]);

    const handleClear=()=>{
      setSearch('');
    }

    const filteredCourses= courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="p-6 min-h-screen bg-slate-50">

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search Courses..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"/>

              <button onClick={handleClear}
              className="absolute right-3 top-2 text-gray-500 hover:text-gray-700 text-xl font-bold">x</button>
          </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredCourses.length > 0 ? (
            filteredCourses.map((props)=>(
            <CourseCard key={props.id} course={props}/>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">No courses found</p>
        )}
      </div>
        </div>
    )
}
export default Course;