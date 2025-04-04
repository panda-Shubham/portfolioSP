import { createGlobalStyle } from 'styled-components';
import theme from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fonts.main};
    background-color: ${props => props.isDarkMode ? theme.dark.background : theme.light.background};
    color: ${props => props.isDarkMode ? theme.dark.text : theme.light.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Add other global styles here */
`;

export default GlobalStyle;