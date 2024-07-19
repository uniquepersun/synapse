import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md border-2">
      <ul className="flex flex-col space-y-4 p-4 text-purple-500">
        <li className="flex items-center space-x-2">
          <i className="fas fa-comments"></i>
          <span>Messages</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-book"></i>
          <span>Books</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-users"></i>
          <span>Community</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-video"></i>
          <span>Courses</span>
        </li>
        <li className="h-px bg-gray-300"></li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-list"></i>
          <span>To do list</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-question-circle"></i>
          <span>Quizzes</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-clock"></i>
          <span>Pomodoro</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-lightbulb"></i>
          <span>Tips and Tricks</span>
        </li>
        <li className="h-px bg-gray-300"></li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-cog"></i>
          <span>Setting</span>
        </li>
        <li className="flex items-center space-x-2">
          <i className="fas fa-info-circle text-red-500"></i>
          <span className="text-red-500">Version 1.0</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
