import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.3;
  }
  
  ::selection {
    background-color: ${theme.colors.primaryTint};
    color: ${theme.colors.primary};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: ${theme.colors.lightText};
    margin: 0 0 10px 0;
  }
  
  h1 {
    font-size: clamp(40px, 8vw, ${theme.fontSizes.h1});
  }
  
  h2 {
    font-size: clamp(32px, 7vw, ${theme.fontSizes.h2});
  }
  
  h3 {
    font-size: clamp(24px, 5vw, ${theme.fontSizes.h3});
  }
  
  p {
    line-height: 1.5;
    margin: 0 0 15px 0;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
    transition: ${theme.transitions.standard};
    
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  
  ul {
    list-style: none;
  }
  
  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 0 150px;
    
    @media (max-width: ${theme.tabletL}) {
      padding: 0 100px;
    }
    
    @media (max-width: ${theme.tablet}) {
      padding: 0 50px;
    }
    
    @media (max-width: ${theme.mobileL}) {
      padding: 0 25px;
    }
  }
  
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    
    @media (max-width: ${theme.tablet}) {
      padding: 80px 0;
    }
    
    @media (max-width: ${theme.mobileL}) {
      padding: 60px 0;
    }
  }
`;

export default GlobalStyles;