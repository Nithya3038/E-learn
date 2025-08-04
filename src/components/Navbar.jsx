import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    }, [darkMode]);

    return(
        <nav className= "bg-teal-600 text-white px-6 py-4 shadow-md dark:bg-gray-700 flex justify-between items-center transition duration-300">
            <h1 className="text-2xl font-semibold tracking-wide">E-Learn</h1>
            <div className="space-x-8 text-md">
                <Link to='/' className="hover:underline hover:text-white">Home</Link>
                <Link to='/courses' className="hover:underline hover:text-white">Courses</Link>
                <Link to='/my-learning' className="hover:underline hover:text-white">My Learning</Link>
                <button onClick={()=>setDarkMode(!darkMode)}
                className="ml-4 bg-white dark:bg-white-700 text-black dark:text-black px-3 py-1 rounded transition">{darkMode ? "Light" : "Dark"}</button>
            </div>
        </nav>
    )
}
export default Navbar;