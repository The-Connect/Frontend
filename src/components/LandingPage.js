import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import goalx from "../assets/goalx.png"

const LandingPage = () => {
  // URL for the background image
  const studentImageUrl = 'https://img.freepik.com/free-photo/young-student-working-on-assignment_23-2149257182.jpg';

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="header-logo">
          <img src={goalx} alt="GoalX-logo" className='goalxlogo' /> {/* Logo is now imported from assets */}
        </div>
        <nav className="header-nav">
          <Link to="/login" className="login-button">Log in</Link>
          <Link to="/register" className="signup-button">Sign up</Link>
        </nav>
      </header>
      <main className="landing-main" style={{ backgroundImage: `url(${studentImageUrl})` }}>
        <section className="main-content">
          <h1>Advance Your Career with GoalX</h1>
          <p>Where Next is a Click Away</p>
          <Link to="/quiz" className="get-started-button">Get started</Link>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
