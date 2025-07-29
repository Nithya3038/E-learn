import React,{useState} from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import mockCourse from "../data/mockCourse";

const CourseDetail = () => {
  const {id}= useParams();
  const navigate=useNavigate();
  const course = mockCourse.find(course=> course.id === id);
  const [enrolled,setEnrolled]=useState(false);

  const handleEnroll=()=>{
    setEnrolled(true);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-6">
      {
        course?(
          <>
            <h2 className="text-3xl font-bold mb-4 text-sky-700">{course.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{course.details}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3 text-slate-700">Course video</h2>
              
              <div className="aspect-w-16 aspect-h-9">
                
                <iframe
                className="w-full h-96 rounded-lg shadow-md border"
                src={course.videoURL}
                title={course.title}
                allowFullScreen
                />

              </div>
            </div>
          </>
        ) : (
          <p className="text-teal-500 text-lg font-semibold">Course not found.</p>
        )
      }

      {!enrolled ?(
        <div className="flex justify-between gap-4 mt-6">
        <button
          onClick={handleEnroll}
          className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-lg font-semibold"
        >Enroll Now</button>

        <button
            onClick={handleBack}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg text-lg font-semibold"
          >Back</button>
          </div>
        
      ):(
        <p className="text-emerald-600 text-xl font-medium mt-4">You are enrolled in this course!</p>
      )}

    </div>
  );
};
export default CourseDetail;
