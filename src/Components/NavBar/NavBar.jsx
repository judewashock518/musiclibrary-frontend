import React from 'react';
import './NavBar.css';



const NavBar = () => (
  <nav className = 'nav_flex_box1'>
    <div className='social_header'style={{'margin-right' : '10rem'}}> 
        <h3 style={{margin: '1rem'}}>music Library</h3>
    </div>
    <div style={{'display' : 'flex', 'justify-content' : 'flex-end'}}>
      <li className='nav_items'>Home</li>
      <li className='nav_items'>Account</li>
      <li className='nav_items'>Contact</li>
      <li className='nav_items'>Log Out</li>
    </div>
  </nav>
);

export default NavBar;