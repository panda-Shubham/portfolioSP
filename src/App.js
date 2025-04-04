import React, { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeContext } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Head from './components/Head';
import { createGlobalStyle } from 'styled-components';
import heroBg from './assets/images/hero-bg.jpg';

// Rename this to BackgroundStyle to avoid the conflict
// Update the BackgroundStyle component to ensure the image is properly applied
const BackgroundStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-image: url(${heroBg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    position: relative;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 25, 47, 0.9);
      z-index: -1;
    }
  }
`;

function App() {
  return (
    <>
      <BackgroundStyle />
      <ThemeProvider>
        <AppWithTheme />
      </ThemeProvider>
    </>
  );
}

const AppWithTheme = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentTheme = {
    ...theme,
    colors: isDarkMode ? theme.dark : theme.light
  };

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </StyledThemeProvider>
  );
};

export default App;
