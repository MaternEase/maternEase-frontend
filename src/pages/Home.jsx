import React from 'react';
import './CSS/Home.css';
import logo from '../assets/images/logo4.png';  // Add your logo image here
import home1 from '../assets/images/home/home1.png';
import test from '../assets/images/home/test.webp';
const Home = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Maternease Logo" className="logo"/>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <button className="login-button">Log in</button>
        </nav>
      </header>
      <section className="hero">
        <img src={home1} alt="Mother and baby" className="hero-image"/>
        <div className="hero-text">
          <h1>Creating a health start for you and your baby</h1>
          <button className="sign-up-button">Sign up</button>
        </div>
      </section>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <img src={test} alt="Updating the clinic dates"/>
            <p>Updating the clinic dates</p>
          </div>
          <div className="service-item">
            <img src={test} alt="Maintaining records"/>
            <p>Maintaining records</p>
          </div>
          <div className="service-item">
            <img src={test} alt="Awareness on maternity & child care"/>
            <p>Awareness on maternity & child care</p>
          </div>
        </div>
      </section>
      <section className="statistics">
        <div className="stat-item">
          <h3>5.146</h3>
          <p>Infant deaths for every 1,000 live births</p>
          <p>Maternal Mortality Rate (MMR)</p>
        </div>
        <div className="stat-item">
          <h3>29</h3>
          <p>Maternal deaths for every 100,000 live births</p>
          <p>Infant Mortality Rate (IMR)</p>
        </div>
      </section>
      <section className="about-us" id="about">
        <h2>About Us</h2>
        <div className="about-content">
          <img src="about-us-image-path.jpg" alt="About Us"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>
      <section className="contact-us" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Email: materneasy@gmail.com</p>
            <p>Phone: 071 1234567</p>
            <div className="social-media">
              <a href="twitter-url"><i className="fab fa-twitter"></i></a>
              <a href="facebook-url"><i className="fab fa-facebook"></i></a>
              <a href="youtube-url"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
      <footer>
        <p>All Rights Reserved 2024</p>
      </footer>
    </div>
  );
}

export default Home;

