import React from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex-1 p-6">
      <Outlet />
    </div>
  );
};

export default HomePage;

