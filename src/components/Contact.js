import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../styles/Theme';

// Import social media icons
import githubIcon from '../assets/images/github.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';

const ContactSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: #0a192f;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: 70vh;
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 2rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    font-size: 1.75rem;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactText = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const ContactButton = styled.a`
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.mono};
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transitions.standard};
  
  &:hover {
    background-color: ${theme.colors.primaryTint};
  }
  
  @media (max-width: 768px) {
    padding: 0.85rem 1.75rem;
    font-size: ${theme.fontSizes.sm};
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 0.75rem 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem; /* Increased from 2rem to 4rem for more space */
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 3rem; /* Increased from 1.5rem to 3rem for more space on mobile */
    gap: 1.25rem;
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  
  img {
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease;
    filter: brightness(0) saturate(100%) invert(80%) sepia(5%) saturate(1000%) hue-rotate(170deg) brightness(100%) contrast(97%);
    
    &:hover {
      transform: translateY(-3px);
      filter: brightness(0) saturate(100%) invert(95%) sepia(12%) saturate(1000%) hue-rotate(140deg) brightness(92%) contrast(98%);
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>Let's build something together</SectionSubtitle>
          <ContactText>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </ContactText>
          <ContactButton href="mailto:connect.spanda@gmail.com">
            Say Hello
          </ContactButton>
          
          <SocialIcons>
            <SocialIcon href="https://github.com/panda-Shubham" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/shubham-panda-0823b0279/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="https://x.com/Shubham_4577?t=oxNieJ6QEPBYtrDZ6lXnSA&s=09" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_shubham.p278?igsh=dGd6b3NxdGNiMWNk" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </SocialIcon>
          </SocialIcons>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;