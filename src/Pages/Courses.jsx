import React from 'react';

const courses = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/838869/pexels-photo-838869.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'The fundamental concept of light!',
    description: 'Always wanted to learn about light? This course is for you!',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6256066/pexels-photo-6256066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fear of Trigonometry',
    description: 'We have seen many students who are afraid of trigonometry. This course is for you!',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Concept of chemicals',
    description: 'Always hated Chemistry until this course came out!',
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
