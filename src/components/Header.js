import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useScrollDirection from '../hooks/useScrollDirection';
import theme from '../styles/Theme';
import logo from '../assets/images/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 50px;
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: ${theme.transitions.standard};
  z-index: 11;
  box-sizing: border-box;
  
  transform: translateY(${props => (props.scrollDirection === 'down' ? `-60px` : '0px')});
  box-shadow: ${props => (props.scrolledToTop ? 'none' : '0 10px 30px -10px rgba(2, 12, 27, 0.7)')};
  
  @media (max-width: ${theme.tablet}) {
    padding: 0 40px;
  }
  
  @media (max-width: ${theme.mobileL}) {
    padding: 0 25px;
    height: 50px;
    transform: translateY(${props => (props.scrollDirection === 'down' ? `-50px` : '0px')});
  }
  
  @media (max-width: ${theme.mobileS}) {
    padding: 0 15px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: normal;
  color: ${theme.colors.primary};
  font-family: 'Playfair Display', serif;
  display: flex;
  align-items: center;
  
  @media (max-width: ${theme.mobileL}) {
    font-size: 1.2rem;
  }
  
  @media (max-width: ${theme.mobileS}) {
    font-size: 1rem;
  }
`;

const LogoImage = styled.img`
  height: 35px;
  margin-right: 10px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 75vw;
    max-width: 350px;
    height: 100vh;
    padding: 60px 20px 50px; /* Reduced from 80px to 60px for better spacing */
    background-color: ${theme.colors.lightBackground};
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 9;
    transform: translateX(${props => (props.isOpen ? '0' : '100%')});
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 8px;
  position: relative;
  
  @media (max-width: 768px) {
    margin: 0 0 15px 0; /* Reduced from 20px to 15px for better spacing */
    width: 100%;
    text-align: center; /* Added to ensure text is centered */
    
    &:nth-child(1) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.1s' : 'none'}; }
    &:nth-child(2) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.2s' : 'none'}; }
    &:nth-child(3) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.3s' : 'none'}; }
    &:nth-child(4) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.4s' : 'none'}; }
    &:nth-child(5) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.5s' : 'none'}; }
    &:nth-child(6) { animation: ${props => props.isOpen ? 'slideIn 0.3s forwards 0.6s' : 'none'}; }
    
    opacity: 0;
    transform: translateY(20px);
    
    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    a {
      display: block;
      padding: 12px 10px; /* Reduced from 15px to 12px for better spacing */
      width: 100%;
      font-size: 18px;
      
      &:hover {
        background-color: rgba(100, 255, 218, 0.1);
        border-radius: 4px;
      }
    }
  }
  
  a {
    padding: 8px;
    color: ${theme.colors.lightText};
    text-decoration: none;
    transition: ${theme.transitions.standard};
    
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const ResumeButton = styled.a`
  padding: 0.6rem 0.8rem;
  margin-left: 15px;
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transitions.standard};
  white-space: nowrap;
  
  &:hover {
    background-color: ${theme.colors.primaryTint};
  }
  
  @media (max-width: 768px) {
    margin: 20px auto 0;
    padding: 0.75rem 1.5rem;
  }
  
  @media (max-width: ${theme.mobileL}) {
    font-size: ${theme.fontSizes.xs};
    padding: 0.5rem 0.7rem;
  }
`;

const Hamburger = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    right: 25px;
    top: 0px; /* Changed from 5px to 0px to position it higher */
    z-index: 1000;
    margin-right: 0;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: ${props => (props.isOpen ? theme.colors.primary : theme.colors.lightText)};
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    cursor: pointer;
  }
  
  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }
  
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: ${props => (props.isOpen ? theme.colors.primary : theme.colors.lightText)};
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transform: ${props => (props.isOpen ? 'rotate(225deg)' : 'rotate(0)')};
    
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: ${props => (props.isOpen ? theme.colors.primary : theme.colors.lightText)};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    
    &:before {
      width: ${props => (props.isOpen ? '100%' : '120%')};
      top: ${props => (props.isOpen ? '0' : '-10px')};
      opacity: ${props => (props.isOpen ? 0 : 1)};
      transition: ${props => (props.isOpen ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in')};
    }
    
    &:after {
      width: ${props => (props.isOpen ? '100%' : '80%')};
      bottom: ${props => (props.isOpen ? '0' : '-10px')};
      transform: ${props => (props.isOpen ? 'rotate(-90deg)' : 'rotate(0)')};
      transition: ${props => (props.isOpen ? 'bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s' : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)')};
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 8;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: ${theme.transitions.standard};
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ thresholdPixels: 50 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleClickOutside = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };
  
  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.pageYOffset < 50);
    };

    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        Shubham Panda
      </Logo>
      
      <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} aria-label="Menu">
        <div className="ham-box">
          <div className="ham-box-inner" />
        </div>
      </Hamburger>
      
      <NavLinks isOpen={isMenuOpen}>
        <NavList>
          <NavItem isOpen={isMenuOpen}><a href="#home" onClick={handleNavItemClick}>Home</a></NavItem>
          <NavItem isOpen={isMenuOpen}><a href="#about" onClick={handleNavItemClick}>About</a></NavItem>
          <NavItem isOpen={isMenuOpen}><a href="#skills" onClick={handleNavItemClick}>Skills</a></NavItem>
          <NavItem isOpen={isMenuOpen}><a href="#projects" onClick={handleNavItemClick}>Projects</a></NavItem>
          <NavItem isOpen={isMenuOpen}><a href="#contact" onClick={handleNavItemClick}>Contact</a></NavItem>
          <NavItem isOpen={isMenuOpen}>
            <ResumeButton href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavItemClick}>
              Resume
            </ResumeButton>
          </NavItem>
        </NavList>
      </NavLinks>
      
      <Overlay isOpen={isMenuOpen} onClick={handleClickOutside} />
    </HeaderContainer>
  );
};

export default Header;