import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  left: auto;
  z-index: 10;
  
  @media (max-width: 1080px) {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const EmailLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  a {
    margin: 20px auto;
    padding: 10px;
    font-family: monospace;
    font-size: 12px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: #8892b0;
    transition: all 0.25s ease-in-out;
    
    &:hover {
      color: #64ffda;
      transform: translateY(-3px);
    }
  }
  
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #8892b0;
  }
`;

const EmailSidebar = () => {
  return (
    <EmailContainer>
      <EmailLink>
        <motion.a
          href="mailto:your.email@example.com"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          your.email@example.com
        </motion.a>
      </EmailLink>
    </EmailContainer>
  );
};

export default EmailSidebar;