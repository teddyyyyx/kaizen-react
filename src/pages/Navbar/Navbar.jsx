import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Kaizen</li>            
            <li>Explore</li>            
            <li>About</li>            
            <li>Contact</li>            
        </ul>
    </nav>
  )
}
