import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';
import heroBg from '../assets/images/hero-bg.jpg';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background-image: url(${heroBg});
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
    background-color: rgba(10, 25, 47, 0.85);
    z-index: 1;
  }
  
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 0 1rem;
  }
`;

const HomeContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2; /* Place content above the overlay */
`;

const Greeting = styled.h1`
  color: ${theme.colors.primary};
  margin: 0 0 20px 4px;
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  font-weight: 400;
`;

const Name = styled.h2`
  font-size: clamp(40px, 8vw, 80px);
  margin: 0;
  color: ${theme.colors.lightText};
`;

const Subtitle = styled.h3`
  font-size: clamp(40px, 8vw, 80px);
  margin: 0 0 30px 0;
  color: ${theme.colors.text};
  line-height: 0.9;
`;

const Description = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.xl};
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSizes.lg};
  }
`;

const CTAButton = styled.a`
  padding: 1.25rem 1.75rem;
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transitions.standard};
  
  &:hover {
    background-color: ${theme.colors.primaryTint};
  }
`;

const Home = () => {
  return (
    <HomeSection id="home">
      <HomeContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Greeting>Hi, my name is</Greeting>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Name>Shubham Panda.</Name>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Subtitle>I build things for the web.</Subtitle>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Description>
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </Description>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CTAButton href="#projects">Check out my work!</CTAButton>
        </motion.div>
      </HomeContainer>
    </HomeSection>
  );
};

export default Home;