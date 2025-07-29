import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav className= "bg-teal-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-semibold tracking-wide">E-Learn</h1>
            <div className="space-x-8 text-md">
                <Link to='/' className="hover:underline hover:text-white">Home</Link>
                <Link to='/courses' className="hover:underline hover:text-white">Courses</Link>
                <Link to='/my Course' className="hover:underline hover:text-white">My Learning</Link>
            </div>
        </nav>
    )
}
export default Navbar;