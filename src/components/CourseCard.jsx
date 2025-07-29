import React from 'react';
import {Link} from 'react-router-dom';

const CourseCard=({course, handleEnroll})=>{

    return(
        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105">
            <h2 className="text-xl font-bold text-teal-700 mb-2">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
                <Link to={`/course/${course.id}`} className="text-sky-600 font-semibold hover:underline">Go to Course</Link>
            
            <button onClick={()=>handleEnroll(course)}
            className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md text-sm">Enroll</button>
            </div>
        </div>
    )
}
export default CourseCard;