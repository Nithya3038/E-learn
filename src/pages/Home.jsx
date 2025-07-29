import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-teal-600 mb-4 drop-shadow">Welcome to E-Learn</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">Empower your future with expert-led online courses. Learn anytime, anywhere, and at your own pace.</p>
      
      <Link to="/courses"
        className="bg-teal-500 hover:bg-teal-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300"
      >Browse Courses</Link>

    </div>
  );
};
export default Home;
