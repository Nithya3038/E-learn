import React, {useState, createContext, useEffect} from 'react';

export const EnrollContext= createContext();
export const EnrollProvider= ({children})=>{
    const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const storedCourses = localStorage.getItem('enrolledCourses');
    return storedCourses ? JSON.parse(storedCourses) : [];
  });

  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

    const courseEnroll= (course)=>{
    if (!enrolledCourses.find(c=>String(c.id) === String(course.id))) {
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