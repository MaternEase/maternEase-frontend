import React from 'react';
import './CSS/Home.css';
import logo from '../assets/images/logo4.png';
import hero from '../assets/images/home/baby.jpg';
import service1 from '../assets/images/home/baby.jpg';
import service2 from '../assets/images/home/baby.jpg';
import service3 from '../assets/images/home/baby.jpg';

const Home = () => {
  return (
      <div>
        {/*Navbar Section*/}

        <header className="header">
          <img src={logo} alt="Maternease Logo" className="logo"/>
          <span className="name" style={{color: '#967AA1', fontSize: '25px'}}>MaternEase</span>

          <nav className="navbar">
            <a href="#about">About Us</a>
            <a href="#services">Our Services</a>
            <a href="#mission">Our Mission</a>
            <a href="#contact">Contact Us</a>
            <button className="login-button">Log in</button>
          </nav>
        </header>


        {/*Hero Section*/}
        <section className="hero">
          <img src={hero} alt="Mother and baby" className="hero-image"/>
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1 className="heading">Welcome to <span className="large-text">MaternEase</span></h1>
            <h1 className="heading">Comprehensive Maternity and Child Care</h1>
            <h2 className="sub-heading">Providing compassionate care for mothers and children.</h2>
            <button className="sign-up-button">Get Started</button>
          </div>
        </section>


        {/*About Section*/}
        <section className="about-us" id="about">
          <h2 className="heading">About Us</h2>
          <div className="about-content">
            <p>At MaternEase, we are dedicated to providing exceptional care for mothers and children. Our team of experienced healthcare professionals is committed to ensuring the health and well-being of every family we serve.</p>
          </div>
        </section>


        {/*Service Section*/}
        <section className="services" id="services">
          <h2 className="heading">Our Services</h2>
          <div className="service-list">
            <div className="service-item">
              <img src={service1} alt="Service 1"/>
              <p>Access medical reports anywhere anytime</p>
            </div>
            <div className="service-item">
              <img src={service2} alt="Service 2"/>
              <p>Scheduling and appointment management</p>
            </div>
            <div className="service-item">
              <img src={service3} alt="Service 3"/>
              <p>Comprehensive health tracking</p>
            </div>
            {/*<div className="service-item">*/}
            {/*  <img src={service1} alt="Service 4"/>*/}
            {/*  <p>Other health services</p>*/}
            {/*</div>*/}
          </div>
        </section>

        {/*Mission Section*/}
        <section className="statistics">
          <div className="stat-item">
            <h3>5.146</h3>
            <p>Infant deaths for every 1,000 live births</p>
          </div>
          <div className="stat-item">
            <h3>29</h3>
            <p>Maternal deaths for every 100,000 live births</p>
          </div>
        </section>

        {/*Contact Section*/}
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

        {/*Footer Section*/}
        <footer>
          <p>All Rights Reserved 2024</p>
        </footer>
      </div>
  );
}

export default Home;
