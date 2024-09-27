
import React, { useState } from 'react';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
import './SideMenu.css';
import './Navbar.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggleMenu={toggleMenu} />
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="content">
        
        
      </div>
    </div>
  );
};

export default App;
