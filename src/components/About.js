import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';
import profileImage from '../assets/images/profile.jpg'; // Update with your actual image path

const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #0a192f;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 2rem 1rem;
  }
`;

const AboutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #ccd6f6;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 2px;
    background-color: #64ffda;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutText = styled.div`
  color: #8892b0;
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0;
    overflow: hidden;
    list-style: none;
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #64ffda;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 300px;
  
  @media (max-width: 768px) {
    margin: 0 auto 50px;
    width: 70%;
  }
  
  @media (max-width: 480px) {
    width: 80%;
  }
  
  &:hover .img-wrapper:after {
    background-color: transparent;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 4px;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 4px;
    background-color: transparent; /* Changed from rgba(100, 255, 218, 0.3) */
    transition: ${theme.transitions.standard};
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    mix-blend-mode: normal; /* Changed from multiply */
    transition: ${theme.transitions.standard};
  }
  
  &:hover img {
    filter: none;
    mix-blend-mode: normal;
  }
`;

const ImageBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #64ffda;
  border-radius: 4px;
  top: 20px;
  left: 20px;
  z-index: -1;
  transition: ${theme.transitions.standard};
  
  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
  }
  
  ${ImageContainer}:hover & {
    top: 10px;
    left: 10px;
  }
`;

const About = () => {
  const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'MongoDB', 'AWS'];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          
          <AboutContent>
            <AboutText>
              <p>
                Hello! I'm Shubham, a software developer passionate about creating things that live on the internet. 
                My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul>
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </AboutText>
            
            <ImageContainer>
              <ImageWrapper className="img-wrapper">
                <img src={profileImage} alt="Shubham Panda" />
              </ImageWrapper>
              <ImageBorder />
            </ImageContainer>
          </AboutContent>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;