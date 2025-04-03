import React, { useEffect } from 'react';
import './Skill.css';
// Development icons
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
// AI/ML icons
import { SiTensorflow, SiPytorch, SiPython, SiKeras, SiJupyter } from 'react-icons/si';
// Other icons
import { BsCodeSlash, BsGraphUp } from 'react-icons/bs';
import { MdDeveloperMode } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';

const Skill = () => {
  // Animation for skill circles when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1
    });

    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
      observer.observe(circle);
    });

    return () => {
      skillCircles.forEach(circle => {
        observer.unobserve(circle);
      });
    };
  }, []);

  return (
    <div className="skill-container">
      <div className="skill-header">
        <h1>My Skills <BsCodeSlash className="header-icon" /></h1>
        <p>A showcase of my technical expertise and competencies</p>
      </div>
      
      <div className="skill-grid">
        {/* Web Development Section */}
        <div className="skill-category">
          <div className="category-header">
            <MdDeveloperMode className="category-icon" />
            <h2>Web Development</h2>
          </div>
          
          <div className="skill-list">
            <div className="skill-circle">
              <div className="circle-content">
                <FaReact className="skill-icon react-icon" />
                <h3>React</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <FaJs className="skill-icon js-icon" />
                <h3>JavaScript</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <FaHtml5 className="skill-icon html-icon" />
                <h3>HTML5</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <FaCss3Alt className="skill-icon css-icon" />
                <h3>CSS3</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <FaNodeJs className="skill-icon node-icon" />
                <h3>Node.js</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <FaGitAlt className="skill-icon git-icon" />
                <h3>Git</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI & Machine Learning Section */}
        <div className="skill-category">
          <div className="category-header">
            <GiArtificialIntelligence className="category-icon" />
            <h2>AI & Machine Learning</h2>
          </div>
          
          <div className="skill-list">
            <div className="skill-circle">
              <div className="circle-content">
                <SiPython className="skill-icon python-icon" />
                <h3>Python</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <SiTensorflow className="skill-icon tf-icon" />
                <h3>TensorFlow</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <SiPytorch className="skill-icon pytorch-icon" />
                <h3>PyTorch</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <BsGraphUp className="skill-icon ml-icon" />
                <h3>Data Analysis</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <SiJupyter className="skill-icon jupyter-icon" />
                <h3>Jupyter</h3>
              </div>
            </div>
            
            <div className="skill-circle">
              <div className="circle-content">
                <SiKeras className="skill-icon keras-icon" />
                <h3>Keras</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
