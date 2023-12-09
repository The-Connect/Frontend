import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

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