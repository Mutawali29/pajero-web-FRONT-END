import React from 'react';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Navbar from './Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Home2 />
      <Home3 />
      <Home4 />
    </div>
  );
};

export default MainLayout;
