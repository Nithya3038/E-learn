import React,{useContext} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import mockCourse from "../data/mockCourse";
import { EnrollContext } from "../context/EnrollContext";

const CourseDetail = () => {
  const {id}= useParams();
  const navigate=useNavigate();
  const course = mockCourse.find(course=> course.id === id);
  const { enrolledCourses, courseEnroll } = useContext(EnrollContext);

  const isEnrolled = enrolledCourses.some(course=> String(course.id) === String(id));

  const handleEnroll = () => {
    if (!isEnrolled) {
      courseEnroll(course);
    }
  };

  const handleBack=() =>{
    navigate(-1);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-6">
      {
        course?(
          <>
            <h2 className="text-3xl font-bold mb-4 text-sky-700">{course.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{course.details}</p>
            <p className="text-gray-700 mb-2 text-md"><span className="font-semibold">Instructor:</span> {course.instructor}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-slate-700">Course video</h2>
              
              <div className="relative w-full h-96 rounded-lg shadow-md border overflow-hidden">
              {isEnrolled?(
                <iframe
                className="w-full h-96 rounded-lg shadow-md border"
                src={course.videoURL}
                title={course.title}
                allowFullScreen
                />
              ):(
              <div>
                <img
                  src={course.thumbnail}
                  alt="Course Preview"
                  className="w-full h-96 rounded-lg shadow-md border"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white rounded-lg">
                <span className="text-4xl mb-2">🔒</span>
                <p className="text-lg font-semibold">Please Enroll the Course</p>
              </div>
            </div>
            )}
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <div>
              <button onClick={handleEnroll}
              disabled={isEnrolled}
              className={`px-6 py-2 rounded-lg text-lg font-semibold ${
                  isEnrolled ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700 text-white'
                }`}> 
                {isEnrolled? 'Enrolled':'Enroll Now'}</button>
                
                {isEnrolled && (
                <p className="text-green-600 mt-2 font-medium">You are enrolled in this course!</p>
              )}
              </div>

              <div>
              <button onClick={handleBack}
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-lg font-semibold">Back</button>
              </div>
            </div>
                
          </>
        ) : (
          <p className="text-teal-500 text-lg font-semibold">No Courses Found</p>
        )
      }
    </div>
  );
};
export default CourseDetail;
