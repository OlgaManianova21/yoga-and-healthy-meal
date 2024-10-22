import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";


function Header() {

  return ( 
    
   <nav>
   <Link to="/" className='link'>Home page</Link>
   <Link to="/food" className='link'>Food</Link>
   <Link to="/recipies" className='link'>Recipies</Link>
   <Link to="/exercises" className='link'>Exercises</Link>
   <Link to="/whattobuy" className='link'>What to buy</Link>
   
   </nav>
  
  );
}

export default Header;
