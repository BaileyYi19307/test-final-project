import React from 'react';
import { NavBar } from './components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        {children} 
      </main>
    </div>
  );
};

export default MainLayout;
