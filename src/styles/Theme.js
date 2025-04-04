const theme = {
  // Common values
  fonts: {
    main: 'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif',
    mono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
    h2: '24px',
    h1: '40px',
  },
  borderRadius: '4px',
  transitions: {
    standard: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
  
  // Breakpoints
  mobileS: '330px',
  mobileM: '400px',
  mobileL: '480px',
  tabletS: '600px',
  tabletL: '768px',
  desktopXS: '900px',
  desktopS: '1080px',
  desktopM: '1200px',
  desktopL: '1400px',
  
  // Dark theme colors
  dark: {
    background: '#0a192f',
    lightBackground: '#112240',
    primary: '#64ffda',
    primaryTint: 'rgba(100, 255, 218, 0.1)',
    text: '#8892b0',
    lightText: '#ccd6f6',
    white: '#e6f1ff',
    navy: '#0a192f',
    lightNavy: '#112240',
    darkNavy: '#020c1b',
    navShadow: 'rgba(2, 12, 27, 0.7)',
  },
  
  // Light theme colors
  light: {
    background: '#f5f5f5',
    lightBackground: '#e0e0e0',
    primary: '#007acc',
    primaryTint: 'rgba(0, 122, 204, 0.1)',
    text: '#555555',
    lightText: '#333333',
    white: '#ffffff',
    navy: '#f5f5f5',
    lightNavy: '#e0e0e0',
    darkNavy: '#cccccc',
    navShadow: 'rgba(0, 0, 0, 0.1)',
  }
};

// Add default colors for backward compatibility
theme.colors = theme.dark;

export default theme;