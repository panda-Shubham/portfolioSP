import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #0a192f;
  text-align: center;
`;

const FooterText = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  
  a {
    color: #64ffda;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Designed & Built by Shubham Panda © {new Date().getFullYear()}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;