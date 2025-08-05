import {useState, useContext} from 'react';
import { EnrollContext } from '../context/EnrollContext';
import {Link} from 'react-router-dom'

const MyLearning=()=>{
    const {enrolledCourses} = useContext(EnrollContext);
    
    return(
        <div className="p-4 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h2 className="text-xl font-bold text-teal-700 dark:text-teal-300 mb-4">Your Enrolled Courses</h2>

            {enrolledCourses.length>0 ?(
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {enrolledCourses.map(course=>(
                        <div key={course.id} className="bg-white dark:bg-gray-700 p-3 rounded shadow">
                            <img 
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-36 object-cover rounded mb-2"/>

                            <h3 className="dark:text-gray-100 font-semibold">{course.title}</h3>
                             <p className="text-sm text-gray-600 dark:text-gray-200 mb-2">By {course.instructor}</p>

                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            
                        <div className="bg-teal-500 h-2 rounded-full"
                         style={{ width:`${course.progress}%`}}></div>

                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-200">{course.progress}% completed</p>

                            <Link to={`/course/${course.id}`}
                             className="text-xs text-teal-600 dark:text-teal-300 underline">Continue</Link>
                        </div>
                    ))}
                </div>
            ):(
                <p className="text-center text-gray-500 mt-10">No courses enrolled.</p>
            )}
        </div>
    )
}
export default MyLearning;