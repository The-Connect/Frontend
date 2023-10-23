import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import connectLogo from "../assets/logo.png"

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link className='orange-link' to="/"/> Home</li>
                <li><Link className='orange-link' to="/login"/>Login</li>
                <li><Link className='orange-link' to="/register"/>Register</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar