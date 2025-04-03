import React from 'react';
import './Home.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';

// Import your image - place it in the src/assets folder
// import profileImage from '../assets/karan-profile.jpg';
// import { FaFileAlt } from 'react-icons/fa';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-section">
          <h1 className="name">Karan</h1>
          <div className="tagline-container">
            <p className="tagline">I'm a <span className="highlight">Developer</span> passionate about</p>
            <div className="rotating-text">
              <span>Web Development</span>
              <span>AI & Machine Learning</span>
              <span>Problem Solving</span>
            </div>
          </div>
          
          <p className="bio">
          Blending the art of web development with the intelligence of AI/ML, I craft seamless digital experiences powered by smart algorithms—where creativity meets code, and innovation drives impact. Passionate about building the future, one line of code at a time!
          </p>
        </div>
        
        
        <div className="image-section">
          {/* Replace with your actual image */}
          <div className="image-container">
            {/* If you have an actual image file: */}
            <img src='profile1.jpg' alt="Karan" />
            {/* Placeholder until you add your image: */}
            <div className="placeholder-image">K</div>
          </div>
          
          {/* <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">Python</div>
            <div className="tech-item">TensorFlow</div>
          </div> */}
           <div className="social-buttons">
            <a 
              href="https://www.linkedin.com/in/karan-chaudhary-976b92309/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin-btn"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            
            <a 
              href="https://github.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github-btn"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            
            <a 
              href="mailto:karan@me.iitr.ac.in" 
              className="social-btn email-btn"
              aria-label="Email Me"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="cta-buttons">
            {/* This is the new resume button */}
            <a 
              href="https://drive.google.com/file/d/1PRRjImmKKOLpU8KSXpwSPZYd0BzidFb8/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-button"
            >
              <FaFileAlt className="resume-icon" /> Resume
            </a>
        </div>
      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll to explore</div>
      </div> */}
    </div>
  );
};

export default Home;
