import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthPage from './Components/Auth/AuthPage';
import HomePage from './Components/Home/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Message from './Pages/Message';
import Books from './Pages/Books';
import Community from './Pages/Community';
import Courses from './Pages/Courses';
import Nts from './Components/Home/Nts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div className="flex">
              <Sidebar className="fixed top-0 left-0 h-full w-64" />
                <HomePage />
            </div>
          </>
        }
      >
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Nts />} />
        <Route path="messages" element={<Message />} />
        <Route path="books" element={<Books />} />
        <Route path="community" element={<Community />} />
        <Route path="courses" element={<Courses />} />
        <Route path="todo" element={<div>To Do List Page</div>} />
        <Route path="quizzes" element={<div>Quizzes Page</div>} />
        <Route path="pomodoro" element={<div>Pomodoro Page</div>} />
        <Route path="tips" element={<div>Tips and Tricks Page</div>} />
        <Route path="profile" element={<div>Profile Page</div>} />
        <Route path="settings" element={<div>Settings Page</div>} />
      </Route>

      
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default AppRouter;
