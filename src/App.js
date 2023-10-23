
import './App.css';
import { BrowserRouter, Routes, Route, Router, Link, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
import logo from "./assets/logo.png"
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';


//styling for link
const linkStyle = {
  margin: '2rem',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
}



function App() {
  //this controls whether the popup screen will appear
  const [active, setActive] = useState(false);

  // a function that will toggle the popup based on if setActive is NOT active
  function togglePopup() {
    setActive(!active);
  }
  return (
    <div className="App">
      {/* <Navbar/> */}
      <div className="navbox">
        <img src={logo} alt="connect-logo" className='logo'/>
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
        <Route path='quiz' element={<Quiz/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
      
      
      <div className='footer-container'>
        <Footer/>
      </div>
      
      
    </div>
    
  );
}

export default App;
