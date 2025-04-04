import React from 'react';
import styled from 'styled-components';
import theme from '../styles/Theme';

const StyledButton = styled.a`
  display: inline-block;
  padding: ${props => (props.big ? '1.25rem 1.75rem' : '0.75rem 1rem')};
  background-color: ${props => (props.primary ? theme.colors.primary : 'transparent')};
  color: ${props => (props.primary ? theme.colors.background : theme.colors.primary)};
  border: 1px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius};
  font-size: ${props => (props.big ? theme.fontSizes.md : theme.fontSizes.sm)};
  font-family: ${theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transitions.standard};
  
  &:hover,
  &:focus {
    background-color: ${props => (props.primary ? theme.colors.primary : theme.colors.primaryTint)};
    outline: none;
  }
  
  &:after {
    display: none !important;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;