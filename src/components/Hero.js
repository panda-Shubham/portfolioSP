import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero-bg.jpg';
import Button from './Button';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-image: url('../assets/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 25, 47, 0.85); /* Dark overlay to ensure text readability */
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 0 1rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2; /* Place content above the overlay */
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #8892b0;
  width: 100%;
`;

const HeroIntro = styled(motion.h1)`
  margin: 0 0 20px 4px;
  color: #64ffda;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
`;

const HeroTitle = styled(motion.h2)`
  margin: 0;
  font-size: clamp(32px, 6vw, 60px); // Reduced from clamp(40px, 8vw, 80px)
  color: #ccd6f6;
  line-height: 1.1;
`;

const HeroSubtitle = styled(motion.h3)`
  margin-top: 10px;
  font-size: clamp(28px, 5vw, 50px); // Reduced from clamp(40px, 8vw, 80px)
  color: #8892b0;
  line-height: 1.1;
`;

const HeroDescription = styled(motion.p)`
  margin: 20px 0 0;
  max-width: 540px;
  color: #8892b0;
  font-size: clamp(16px, 5vw, 20px);
  line-height: 1.5;
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled(motion.div)`
  margin-top: 50px;
  
  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroSection id="home">
        <HeroContainer>
          <HeroContent>
            <HeroIntro
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hi, my name is
            </HeroIntro>
            
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Shubham Panda.
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I build things for the web.
            </HeroSubtitle>
            
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a software developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building accessible, 
              human-centered products.
            </HeroDescription>
            
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button href="#projects" big>Check out my work!</Button>
            </ButtonContainer>
          </HeroContent>
        </HeroContainer>
      </HeroSection>
    </>
  );
};

export default Hero;