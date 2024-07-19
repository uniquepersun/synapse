import React from 'react';

const courses = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    title: 'Course Title 1',
    description: 'This is a description of Course 1.',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    title: 'Course Title 2',
    description: 'This is a description of Course 2.',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    title: 'Course Title 3',
    description: 'This is a description of Course 3.',
  },
];

const Courses = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="p-10 bg-white shadow rounded border-solid border-2 border-indigo-600 hover:shadow-xl duration-150">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-indigo-600">Enroll now!</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
