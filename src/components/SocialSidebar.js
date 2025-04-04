import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/images/github.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import gmailIcon from '../assets/images/gmail.svg';
import { motion } from 'framer-motion';

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  
  @media (max-width: 1080px) {
    left: 20px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #8892b0;
  }
`;

const SocialItem = styled(motion.li)`
  margin-bottom: 20px;
  
  a {
    padding: 10px;
    display: inline-block;
    color: #8892b0;
    transition: all 0.25s ease-in-out;
    
    &:hover {
      color: #64ffda;
      transform: translateY(-3px);
    }
  }
`;

const IconImg = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(88%) sepia(23%) saturate(1188%) hue-rotate(116deg) brightness(97%) contrast(98%);
  transition: all 0.25s ease-in-out;
  object-fit: contain;
  vertical-align: middle;
`;

const IconSVG = styled.svg`
  width: 20px;
  height: 20px;
  fill: #64ffda;
  transition: all 0.25s ease-in-out;
`;

// Add a new component for the contact section social icons
const ContactSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
`;

// Create ContactSocialLink component
const ContactSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: #8892b0;
  font-size: 16px;
  margin: 0 15px;
  transition: all 0.25s ease-in-out;
  
  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const SocialSidebar = () => {
  return (
    <SocialContainer>
      <SocialList>
        <SocialItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconImg src={githubIcon} alt="GitHub" />
          </a>
        </SocialItem>
        <SocialItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconImg src={linkedinIcon} alt="LinkedIn" />
          </a>
        </SocialItem>
        <SocialItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="X">
            <IconSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </IconSVG>
          </a>
        </SocialItem>
        <SocialItem
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IconSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </IconSVG>
          </a>
        </SocialItem>
      </SocialList>
    </SocialContainer>
  );
};

// Export the components for use in other files
export { ContactSocialContainer, ContactSocialLink, IconSVG };

export default SocialSidebar;