import React, {useState, createContext} from 'react';

export const EnrollContext= createContext();
export const EnrollProvider= ({children})=>{
    const [enrolledCourses, setEnrolledCourses]=useState([]);

    const courseEnroll= (course)=>{
    if (!enrolledCourses.find((c)=>c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

    return(
        <EnrollContext.Provider value={{ enrolledCourses, courseEnroll}}>
         {children}
        </EnrollContext.Provider>
    )
}
export default EnrollProvider;