import React, { useState } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';

// Styling for link
const linkStyle = {
  margin: '2rem',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
};



function App() {
  const [active, setActive] = useState(false);

  function togglePopup() {
    setActive(!active);
  }
  return (
    <div className="App">
      <main>
      <div className="navbox">
        {/* <Navbar/> */}
        <NavLink style={linkStyle} to="/" element={LandingPage}>
          Home
        </NavLink>
        <NavLink style={linkStyle} to="/quiz" element={Quiz}>Take the Quiz</NavLink>
        <NavLink style={linkStyle} to="register">
          Register
        </NavLink>
        <Link style={linkStyle} to="Login">
          {/* checks the state of the active variable. if active is true, the Login component will render, otherwise nothing will render.  */}
          {active ? <Login toggle={togglePopup}/>: null}
          Login
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      </main>
      
      <div className='footer-container'>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
